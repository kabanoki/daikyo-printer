const {app, BrowserWindow} = require('electron')
const path = require('path')
const isDev = require("electron-is-dev");
const Store = require('electron-store');

const store = new Store();
store.set('downloadPath', 'C:\\daiky\\Downloads');

console.log(store.get('downloadPath'));

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadURL(
    isDev ? "http://localhost:4000"
    : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
