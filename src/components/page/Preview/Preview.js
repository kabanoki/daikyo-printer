import React, { useEffect, useState } from 'react'
import "./style.css";

import Sougeibus from "./Template/Sougeibus";
import Ninteisho from "./Template/Ninteisho";
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
        <Navbar />
        <Sougeibus csvData={csvData} previewData={previewData} />
        </div>);
      case 'P7' : //認定書
        return (<div id="ninteisho">
          <Navbar />
          <Ninteisho csvData={csvData} />
          </div>);  
      case 'goukakulist' : //合格者一覧表
      case 'syuseki' : //出欠記入表
      case 'P3' : //合格証
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