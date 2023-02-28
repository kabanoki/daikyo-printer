const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    initStore:  () => ipcRenderer.invoke('initStore'), 
    opneDownloadFolder: () => ipcRenderer.invoke('OpenDownloadFolder')
});


console.log('preload');
