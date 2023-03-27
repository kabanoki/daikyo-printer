import React from 'react'
import { useEffect, useState } from 'react';
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const Home = ({ selectCsv, setSelectCsv, selectFolder }) => {

  document.title = `ホーム｜E-Printsys`;

  const[csvList, setCsvList] = useState([]);
  const[deleteCsvFlg, setDeleteCsvFlg] = useState(true);
  
  // selectFolderが更新されたらリストを更新する
  useEffect(()=>{
    const initCsvList = async () => {
      const list = await window.electronAPI.getCsvList() || [];
      console.log(list);
      setCsvList(list.filter((item)=>{
        return (
          !item.fileName.startsWith('___PRINT_DATA_print1')
          && item.type !== 'P2' 
          && item.type !== 'P5' 
          && item.type !== 'P1' 
          && item.type !== 'P8' 
        )
      }));
    }
    initCsvList();
  }, [selectFolder]);

  //selectCsvを更新する
  function clickBtn(item, index) {
    setSelectCsv(item);
    window.electronAPI.openPreviewWindow(item);

    if(deleteCsvFlg){
      csvList.splice(index, 1);
      setCsvList(csvList);
    }
  }

  function cahangeDeleteFlg(event){
    setDeleteCsvFlg(event.target.checked);
    window.electronAPI.setDeleteCsvFlg(event.target.checked);
  }

  return (
    <div id="home">
      <p className='ms-3 pt-4 mb-2 title fw-bold'>印刷選択</p>
      <div className="print-list mb-2 overflow-scroll bg-white">
          <div className="list-group">
            {csvList.map((item, i) => 
              <button type="button" 
                      onClick={() => clickBtn(item, i)}
                      className="list-group-item list-group-item-action"
                      title={item.fileName}
                      key={item.id}>{item.name}</button>
            )}
        </div>
      </div>
      <footer className='mt-3 row'>
        <div className='col-6'>
          <button type="button" className="btn btn-secondary btn-sm ms-3" onClick={ () => window.location.reload() }><FontAwesomeIcon icon={faRotateRight} /> CSV再取り込み</button>
        </div>
        <div className='col-6 text-end'>
          <div className='form-check'>
            <label htmlFor="delete-flg" className='form-check-label'>            
              <input type="checkbox" 
                    id="delete-flg" 
                    className='form-check-input' 
                    checked={deleteCsvFlg}
                    onChange={(event)=>{cahangeDeleteFlg(event)}} /> 
              印刷データを自動削除
            </label>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home