import React from 'react'
import { useEffect, useState } from 'react';

const Ststem = ({selectFolder, setSelectFolder}) => {
  
  const[printerList, setPrinterList] = useState([]);
  const[selectPrinter, setSelectPrinter] = useState({displayName:''});

  document.title = `環境設定｜E-Printsys`;

  useEffect(() => {

    const getPrinterList = async () => {
      const printerList = await window.electronAPI.getPrinterList();
      setPrinterList(printerList);
    } 
    getPrinterList();

  }, []);

  useEffect(() => {
    const printer = printerList.filter((item)=>item.isDefault);
    
    if(printer.length===0)
      return;

    setSelectPrinter(printer[0]);
  }, [printerList]);

  const changeFolder = async () => {
    const newFolder = await window.electronAPI.opneDownloadFolder();
    setSelectFolder(newFolder);
  }

  const setPrinter = async (e) => {
    const printer = printerList.filter((item)=>item.displayName===e.target.value);
    setSelectPrinter(printer[0]);
    //プリンターの選択を保存
    await window.electronAPI.setPrinter(printer[0]);
  }

  

  return (
    <div id="system">
      <div className="w-100 my-2">
        <p className='ms-3 pt-4 mb-2 title fw-bold'>CSV読み取りフォルダ</p>
        <div className='p-3 bg-white'>
          <input type="text" className="form-control" value={selectFolder} disabled />
          <button type="button" className="btn btn-outline-secondary mt-2" onClick={changeFolder}>フォルダの変更</button>
        </div>
        <p className='ms-3 pt-4 mb-2 title fw-bold'>プリンターの設定</p>
        <div className='p-3 bg-white'>
          {
            selectPrinter.displayName 
            ? <select className='form-select' onChange={(e)=>{setPrinter(e)}} defaultValue={selectPrinter.displayName}>
                {printerList.map((printer, i)=>(<option value={printer.displayName} key={i} >{printer.displayName}</option>))}
              </select>
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default Ststem