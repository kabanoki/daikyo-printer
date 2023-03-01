const {app, dialog, ipcMain, BrowserWindow, Menu} = require('electron')
const path = require('path')
const fs = require('fs');
const parse = require('csv-parse');
const iconv = require('iconv-lite');
const isDev = require("electron-is-dev");
const prompt = require('electron-prompt');
const Store = require('electron-store');


const isMac = (process.platform === 'darwin');

const store = new Store();

const url = isDev ? "http://localhost:4000"
                  : `file://${path.join(__dirname, "../build/index.html")}`;

const menuTemplate = Menu.buildFromTemplate([
  ...(
    isMac ? [{
      label: app.name,
      submenu: [
        {role: 'quit', label: `${app.name}を終了`}
      ]
    }] 
    : []),
  {
    label: '設定',
    submenu: [
      {
        label:'ホーム',
        click (menuItem, browserWindow, event)
        {
            browserWindow.loadURL(url);
        }
      },
      {
        label:'環境設定',
        click (menuItem, browserWindow, event)
        {
            browserWindow.loadURL(`${url}/system`);
        }
      },
    ]
  },
  {
    label: '表示',
    submenu: [
      {role: 'reload', label:'再読み込み'},
      {role: 'forceReload', label:'強制再読み込み'},
      {role: 'toggleDevTools', label:'開発者ツールを表示'},
    ]
  }
]);
Menu.setApplicationMenu(menuTemplate);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadURL(url);
}

app.whenReady().then(() => {
  ipcMain.handle('initStore', handleInitStore);
  ipcMain.handle('OpenDownloadFolder', handleOpenDownloadFolder);
  ipcMain.handle('getCsvList', handleGetCsvList);
  ipcMain.handle('getPreviewData', handleGetPreviewData);

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})




//---------------------------------------------------------------------

async function handleInitStore() {
  return {
    downloadPath: store.has('downloadPath') ? store.get('downloadPath') : app.getPath('downloads')
  };
}

async function handleOpenDownloadFolder() {
  let result = "";
  await dialog.showOpenDialog({
    properties: ['openDirectory']
  }).then(r => {
    result = r.filePaths[0];
    store.set('downloadPath', result);
  }).catch(err => {
    console.log(err)
  })
  return result;
}

async function handleGetCsvList() {
  const downloadFolderPath = store.has('downloadPath') ? store.get('downloadPath') : app.getPath('downloads'); // ダウンロードフォルダのパスを取得

  const csvFiles = await fs.readdirSync(downloadFolderPath).filter((filename) => {
    return filename.startsWith('___PRINT_DATA_print') && path.extname(filename) === '.csv';
  });

  return csvFiles;
}

async function handleGetPreviewData(event){

  const previewData = store.get('previewData');
  const filePath = previewData.filePath;
  const csvString = iconv.decode(fs.readFileSync(filePath), 'Shift_JIS');

  return await new Promise((resolve, reject) => {
    parse.parse(csvString, { relax_column_count: true },(err, output) => {
      if (err) {
        console.error(err);
        return;
      }

      resolve({
        csv: output,
        previewData: previewData
      });
    });
  });
}


//---------------------------------------------------------------------

ipcMain.on('openPreviewWindow', (event, arg) => {
  store.set('previewData', arg.data);

  let childWindow = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  childWindow.loadURL(`${url}/preview`);
});