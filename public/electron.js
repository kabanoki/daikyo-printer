const {app, dialog, ipcMain, BrowserWindow, Menu} = require('electron')
const path = require('path')
const fs = require('fs');
const parse = require('csv-parse');
const iconv = require('iconv-lite');
const isDev = require("electron-is-dev");
const Store = require('electron-store');


let MainWindowId = 0;
let deleteCsvFlg = true;
let previewData = '';
const store = new Store();
const url = isDev ? "http://localhost:4000/"
                  : `file://${path.join(__dirname, "../build/index.html")}`;     
const isMac = (process.platform === 'darwin');             
const defaultMenuTemplate = Menu.buildFromTemplate([
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
          browserWindow.loadURL(`${url}#/system`);
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

function createWindow() {
  Menu.setApplicationMenu(defaultMenuTemplate);

  const mainWindow = new BrowserWindow({
    width: 670,
    height: 500,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  MainWindowId = mainWindow.id;
  mainWindow.loadURL(url);
}

app.whenReady().then(() => {
  ipcMain.handle('initStore', handleInitStore);
  ipcMain.handle('OpenDownloadFolder', handleOpenDownloadFolder);
  ipcMain.handle('getCsvList', handleGetCsvList);
  ipcMain.handle('getPreviewData', handleGetPreviewData);
  ipcMain.handle('sendRequestPrint', handleRequestPrint);
  ipcMain.handle('setDeleteCsvFlg', handleSetDeleteCsvFlg);
  ipcMain.handle('getDeleteCsvFlg', handleGetDeleteCsvFlg);
  
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

  const previewDataes =  await fs.readdirSync(downloadFolderPath)
                                .filter((filename) => {
                                  return filename.startsWith('___PRINT_DATA_print') && path.extname(filename) === '.csv';
                                }).map((fileName)=>{

                                  const csvString = iconv.decode(fs.readFileSync([downloadFolderPath, fileName].join("\\")), 'Shift_JIS');
                                  const lines = csvString.split('\n');
                                  // console.log('lines'. lines);
                                  const line = lines.filter((line, i) => {return i === 0});                                  
                                  const header = line[0].split(',')

                                  return {
                                    fileName: fileName,
                                    type:  header[0],
                                    name: header[1]
                                  }
                              });

  // console.log('previewDataes', previewDataes);

  return previewDataes;
}

async function handleGetPreviewData(event){
  const csvString = iconv.decode(fs.readFileSync(previewData.filePath), 'Shift_JIS');

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

async function handleRequestPrint(event){
  console.log('event.id', event.id);
}

/* CSVの選択時に削除するかの設定 */
async function handleSetDeleteCsvFlg(event, flg){
  deleteCsvFlg = flg.data;
}
async function handleGetDeleteCsvFlg(){
  return deleteCsvFlg;
}


//---------------------------------------------------------------------

/* プレビューウィンドウの立ち上げ */
ipcMain.on('openPreviewWindow', (event, arg) => {
  previewData = arg.data;

  let childWindow = new BrowserWindow({
    width: 900,
    height: 900,
    parent:BrowserWindow.fromId(MainWindowId),
    modal: true,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  childWindow.loadURL(`${url}#/preview`);
});