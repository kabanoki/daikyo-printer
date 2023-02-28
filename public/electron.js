const {app, dialog, ipcMain, BrowserWindow, Menu} = require('electron')
const path = require('path')
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

  createWindow();

  console.log(store.get('downloadPath'));


  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

async function handleInitStore() {
  return {
    downloadPath: store.has('downloadPath') ? store.get('downloadPath') : 'C:\\daiky\\Downloads'
  };
}

async function handleOpenDownloadFolder() {
  let result = "";
  await dialog.showOpenDialog({
    properties: ['openDirectory']
  }).then(r => {
    result = r.filePaths;
    store.set('downloadPath', result);
  }).catch(err => {
    console.log(err)
  })
  return result;
}


