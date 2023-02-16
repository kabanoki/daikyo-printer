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
    setCsvList([
      {id:1, name:'バス一覧表', fileName:'', filePath:'', type:1},
      {id:2, name:'B second item', fileName:'', filePath:'', type:2},
      {id:3, name:'C second item', fileName:'', filePath:'', type:3},
      {id:4, name:'D second item', fileName:'', filePath:'', type:4},
      {id:5, name:'E second item', fileName:'', filePath:'', type:5},
      {id:6, name:'F second item', fileName:'', filePath:'', type:6},
      {id:7, name:'G second item', fileName:'', filePath:'', type:7},
    ]);
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
                      className="list-group-item list-group-item-action">{item.name}</button>
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