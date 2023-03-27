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

  /**
   * 印刷のサイズを設定する
   * CSSは効果が無いのでJSで設定する
   */
  const setpageSize = (pageSize) => {
    const obj = document.styleSheets;
    Object.keys(obj).forEach(function (styleSheetKey) {
      const stylesheet = obj[styleSheetKey];
      stylesheet.insertRule(`@page { size: ${pageSize} !important; }`);
    });
  }


  if(previewData){
    switch(previewData.type){
      case 'sougeibus' : //送迎バス
        setpageSize('A4');
        return (<div id="sougeibus"> 
        <Navbar pageSize={'A4'} landscape={false}  />
        <Sougeibus csvData={csvData} previewData={previewData} />
        </div>);
      case 'P7' : //認定書
        setpageSize('A5');
        return (<div id="ninteisho">
          <Navbar pageSize={'A5'} landscape={false} />
          <Ninteisho csvData={csvData} />
          </div>);  
      case 'P3' : //合格証
        setpageSize('A5');
        return (<div id="goukakusho">
            <Navbar pageSize={'A5'} landscape={false} />
            <Goukakusho csvData={csvData} />
        </div>);
      case 'goukakulist' : //合格者一覧表
        setpageSize('A4');
        return (<div id="goukakulist"> 
          <Navbar pageSize={'A4'} landscape={false} />
          <Goukakulist csvData={csvData} previewData={previewData} />
          </div>);
      case 'syuseki' : //出欠記入表
        setpageSize('A4 landscape');
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