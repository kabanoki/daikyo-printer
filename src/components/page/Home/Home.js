import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const Home = ({ selectCsv, setSelectCsv, selectFolder }) => {

  const[csvList, setCsvList] = useState([]);
  const navigate = useNavigate();
  const previewMaster = [
    {
      SearchPrefix: '___PRINT_DATA_print1',
      fileName: 'ダイレクトメール',
      type: 1
    },{
      SearchPrefix: '___PRINT_DATA_print2',
      fileName: '___PRINT_DATA_print2',
      type: 2
    },{
      SearchPrefix: '___PRINT_DATA_print3',
      fileName: '___PRINT_DATA_print3',
      type: 3
    },{
      SearchPrefix: '___PRINT_DATA_print4',
      fileName: '___PRINT_DATA_print4',
      type: 4
    },{
      SearchPrefix: '___PRINT_DATA_print5',
      fileName: '送迎バス一覧',
      type: 5
    },{
      SearchPrefix: '___PRINT_DATA_print6',
      fileName: '___PRINT_DATA_print6',
      type: 6
    },{
      SearchPrefix: '___PRINT_DATA_print7',
      fileName: '___PRINT_DATA_print7',
      type: 7
    },
  ];

  useEffect(()=>{
    const initCsvList = async () => {
      const list = await window.electronAPI.getCsvList() || [];
      
      const setPreviewTypes = (item) => {
        return previewMaster.find(preview => item.startsWith(preview.SearchPrefix));
      }

      const newCsvList = await list.map((item, index)=>{
        let previewType = setPreviewTypes(item);
        return {
          id: index+1,
          name: previewType.fileName,
          fileName: previewType.fileName,
          filePath: [selectFolder, item].join("\\"),
          type: previewType.type
        }
      });
      setCsvList(newCsvList);
    }
    initCsvList();
  }, [selectFolder]);

  function clickBtn(item, index) {
    if(window.confirm(item.name + "を起動します。\n起動するとCSVは削除されます。")){
      setSelectCsv(item);
      csvList.splice(index, 1);
      setCsvList(csvList);
      // navigate("/preview");
    }
  }

  return (
    <div id="home" className="container">
      <div className="card">
        <h5 className="card-header">印刷を選択</h5>
        <div className="card-body overflow-auto print-list">
          <div className="list-group">
            {csvList.map((item, i) => 
              <button type="button" 
                      onClick={() => clickBtn(item, i)}
                      className="list-group-item list-group-item-action" key={item.id}>{item.name}</button>
            )}
          </div>
        </div>
        <div className="card-footer text-muted">
          <button type="button" className="btn btn-outline-secondary" onClick={ () => window.location.reload() }><FontAwesomeIcon icon={faRotateRight} /> CSV再取り込み</button>
        </div>
      </div>
    </div>
  )
}

export default Home