import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'


const Home = ({ selectCsv, setSelectCsv }) => {

  const[csvList, setCsvList] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const initCsvList = async () => {
      const list = await window.electronAPI.getCsvList() || [];
      console.log(list);

      const newCsvList = list.map((item, index)=>{
        return {
          id: index+1,
          name: item,
          fileName: item,
          filePath: item,
          type: index+1
        }
      });
      setCsvList(newCsvList);
    }
    initCsvList();
  }, []);

  function clickBtn(item, index) {
    if(window.confirm(item.name + "を起動します。\n起動するとCSVは削除されます。")){
      setSelectCsv(item);
      csvList.splice(index, 1);
      setCsvList(csvList);
      navigate("/preview");
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
          <button type="button" className="btn btn-outline-secondary"><FontAwesomeIcon icon={faRotateRight} /> CSV再取り込み</button>
        </div>
      </div>
    </div>
  )
}

export default Home