//①ElectronモジュールのappとBrowserWindowを読み込み
const {app, BrowserWindow} = require('electron')
//パスの読み込み
const path = require('path')
//開発用かどうか調査
const isDev = require("electron-is-dev");

//メインウィンドウ作成関数
function createWindow() {
//②メインウィンドウの作成
  const mainWindow = new BrowserWindow({
//メインウィンドウの幅
    width: 800,
//メインウィンドウの高さ
    height: 600,
//Webページの機能の設定
    webPreferences: {
//他のJavaScriptのスクリプトが実行される前に、事前に読み込み
      preload: path.join(__dirname, 'preload.js')
    }
  })
//③メインウィンドウにWebページの読み込み
  mainWindow.loadURL(
//開発中の場合のhtmlファイルの読み込み
    isDev ? "http://localhost:3000"
//本番ビルドの場合のhtmlファイルの読み込み
    : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

//④Electronアプリが準備できた場合
app.whenReady().then(() => {
//メインウィンドウ作成関数の呼び出し
  createWindow()
//Electronアプリがアクティブになった場合
  app.on('activate', function () {
//ウィンドウが1つもない場合メインウィンドウ作成関数の呼び出し
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

//⑤全てのElectronアプリのウィンドウが閉じた場合
app.on('window-all-closed', function () {
//プラットフォームがmacOSではない場合、Electronアプリを終了
  if (process.platform !== 'darwin') app.quit()
})
