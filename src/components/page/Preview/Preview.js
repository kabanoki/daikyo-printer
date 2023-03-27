import React, { useEffect, useState } from 'react'
import "./style.css";

import Sougeibus from "./Template/Sougeibus";
import Ninteisho from "./Template/Ninteisho";
import Goukakusho from "./Template/Goukakusho";
import Goukakulist from "./Template/Goukakulist";
import Syuseki from "./Template/Syuseki";
import Navbar from './components/Navbar/Navbar';

const Preview = () => {

  const [csvData, setCsvData] = useState([]); 
  const [previewData, setPreviewData] = useState({type: null}); 

  useEffect(() => {

    const initPreviewData = async () => {
      const data = await window.electronAPI.getPreviewData();
      setPreviewData(data.previewData);
      setCsvData(data.csv);
    };
    initPreviewData();

  }, []);


  if(previewData){
    switch(previewData.type){
      case 'sougeibus' : //送迎バス
        return (<div id="sougeibus"> 
        <Navbar pageSize={'A4'} landscape={false}  />
        <Sougeibus csvData={csvData} previewData={previewData} />
        </div>);
      case 'P7' : //認定書
        return (<div id="ninteisho">
          <Navbar pageSize={'A5'} landscape={false} />
          <Ninteisho csvData={csvData} />
          </div>);  
      case 'P3' : //合格証
        return (<div id="goukakusho">
            <Navbar pageSize={'A5'} landscape={false} />
            <Goukakusho csvData={csvData} />
        </div>);
      case 'goukakulist' : //合格者一覧表
        return (<div id="goukakulist"> 
          <Navbar pageSize={'A4'} landscape={false} />
          <Goukakulist csvData={csvData} previewData={previewData} />
          </div>);
      case 'syuseki' : //出欠記入表
        const obj = {height: '516mm', width: '753mm'};
        return (<div id="syuseki"> 
          <Navbar pageSize={'A4'} landscape={true} />
          <Syuseki csvData={csvData} previewData={previewData} />
          </div>);
      case 'P2' : //カルテ
      case 'P5' : //連絡カード
      case 'P1' : //チャレンジクラス連絡カード(旧用紙)
      case 'P8' : //チャレンジクラス連絡カード(A5用紙)
      default :
        return (<></>);  
    }
  } 
}

export default Preview