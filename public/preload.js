const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    initStore:  () => ipcRenderer.invoke('initStore'), 
    opneDownloadFolder: () => ipcRenderer.invoke('OpenDownloadFolder'),
    getCsvList:  () => ipcRenderer.invoke('getCsvList'),
});


console.log('preload');
