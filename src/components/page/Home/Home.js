import React from 'react'
import { useEffect, useState } from 'react';
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const Home = ({ selectCsv, setSelectCsv, selectFolder }) => {

  const[csvList, setCsvList] = useState([]);
  const[deleteCsvFlg, setDeleteCsvFlg] = useState(true);
  
  // selectFolderが更新されたらリストを更新する
  useEffect(()=>{
    const initCsvList = async () => {
      const list = await window.electronAPI.getCsvList() || [];

      const newCsvList = await list.map((item, index)=>{
        return {
          id: index+1,
          name: item.name,
          fileName: item.fileName,
          filePath: [selectFolder, item.fileName].join("\\"),
          type: item.type
        }
      });

      setCsvList(newCsvList.filter((item)=>!item.fileName.startsWith('___PRINT_DATA_print1')));
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
            {/* ダイレクトメールは除外 */}
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