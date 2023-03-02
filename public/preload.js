const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', process.argv);

contextBridge.exposeInMainWorld('electronAPI', {
    sendUpdateMenu: (type="default") => ipcRenderer.invoke('sendUpdateMenu', type), 
    initStore:  () => ipcRenderer.invoke('initStore'), 
    opneDownloadFolder: () => ipcRenderer.invoke('OpenDownloadFolder'),
    getCsvList:  () => ipcRenderer.invoke('getCsvList'),
    getPreviewData: () => ipcRenderer.invoke('getPreviewData'),
    openPreviewWindow: (selectCsv) => ipcRenderer.send('openPreviewWindow', { data: selectCsv }),
    sendRequestPrint: () => ipcRenderer.invoke('sendRequestPrint')
});




console.log('preload');
