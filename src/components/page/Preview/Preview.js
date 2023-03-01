import React, { useEffect, useState } from 'react'
import "./style.css";

import Sougeibus from "./Template/Sougeibus";

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
      case 5 : 
        return (<div id="preview"><Sougeibus csvData={csvData} previewData={previewData} /></div>);
      default :
        return (<></>);  
    }
  } 
}

export default Preview