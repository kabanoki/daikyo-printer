const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    initStore:  () => ipcRenderer.invoke('initStore'), 
    opneDownloadFolder: () => ipcRenderer.invoke('OpenDownloadFolder'),
    getCsvList:  () => ipcRenderer.invoke('getCsvList'),
    getPreviewData: () => ipcRenderer.invoke('getPreviewData'),
    openPreviewWindow: (selectCsv) => ipcRenderer.send('openPreviewWindow', { data: selectCsv })
});


console.log('preload');
