import React from 'react'
import { useEffect, useState } from 'react';
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const Home = ({ selectCsv, setSelectCsv, selectFolder }) => {

  const[csvList, setCsvList] = useState([]);
  const[deleteCsvFlg, setDeleteCsvFlg] = useState(false);
  
  // selectFolderが更新されたらリストを更新する
  useEffect(()=>{
    const previewMaster = [
      {
        SearchPrefix: '___PRINT_DATA_print1',
        name: '短期ダイレクトメール',
        type: 1
      },
      {
        SearchPrefix: '___PRINT_DATA_print2',
        name: '会員泳力記録簿',
        type: 2
      },
      {
        SearchPrefix: '___PRINT_DATA_print3',
        name: '___PRINT_DATA_print3',
        type: 3
      },
      {
        SearchPrefix: '___PRINT_DATA_print4',
        name: '___PRINT_DATA_print4',
        type: 4
      },
      {
        SearchPrefix: '___PRINT_DATA_print5',
        name: '送迎バス一覧',
        type: 5
      },
      {
        SearchPrefix: '___PRINT_DATA_print6',
        name: '___PRINT_DATA_print6',
        type: 6
      },
      {
        SearchPrefix: '___PRINT_DATA_print7',
        name: '認定証',
        type: 7
      },
    ];
    const initCsvList = async () => {
      const list = await window.electronAPI.getCsvList() || [];
      
      const setPreviewTypes = (item) => {
        return previewMaster.find(preview => item.startsWith(preview.SearchPrefix));
      }

      const newCsvList = await list.map((item, index)=>{
        let previewType = setPreviewTypes(item);
        return {
          id: index+1,
          name: previewType.name,
          fileName: item,
          filePath: [selectFolder, item].join("\\"),
          type: previewType.type
        }
      });
      setCsvList(newCsvList.filter((item)=>!item.fileName.startsWith('___PRINT_DATA_print1')));
    }
    initCsvList();
  }, [selectFolder]);

  //selectCsvが更新されたらPreview Windowを開く
  useEffect(() => {
    if(selectCsv.id != null)
      window.electronAPI.openPreviewWindow(selectCsv);
  }, [selectCsv])

  //selectCsvを更新する
  function clickBtn(item, index) {
    setSelectCsv(item);
    csvList.splice(index, 1);
    setCsvList(csvList);
  }

  function cahangeDeleteFlg(event){
    console.log(event.target.checked);
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