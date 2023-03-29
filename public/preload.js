const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', process.argv);

contextBridge.exposeInMainWorld('electronAPI', {
    sendUpdateMenu: (type="default") => ipcRenderer.invoke('sendUpdateMenu', type), 
    initStore:  () => ipcRenderer.invoke('initStore'), 
    opneDownloadFolder: () => ipcRenderer.invoke('OpenDownloadFolder'),
    getCsvList:  () => ipcRenderer.invoke('getCsvList'),
    setDeleteCsvFlg: (flg) => ipcRenderer.invoke('setDeleteCsvFlg', {data: flg}),
    getDeleteCsvFlg: () => ipcRenderer.invoke('getDeleteCsvFlg'),
    deleteCsv: (csv) => ipcRenderer.invoke('deleteCsv', csv),
    getPreviewData: () => ipcRenderer.invoke('getPreviewData'),
    openPreviewWindow: (selectCsv) => ipcRenderer.send('openPreviewWindow', { data: selectCsv }),
    sendRequestPrint: (pageSize, landscape) => ipcRenderer.invoke('sendRequestPrint', {pageSize:pageSize, landscape:landscape}),
    getPrinterList: () => ipcRenderer.invoke('getPrinterList'),
    setPrinter: (printer) => ipcRenderer.invoke('setPrinter', printer),
    getPrinter: () => ipcRenderer.invoke('getPrinter'),
});




console.log('preload');
