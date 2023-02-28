import React, { useEffect, useState } from 'react'
import "./style.css";

import Sougeibus from "./Template/Sougeibus";

const Preview = () => {

  const [csvData, setCsvData] = useState([]); 

  useEffect(() => {

    const initPreviewData = async () => {
      const newCscData = await window.electronAPI.getPreviewData();
      console.log(newCscData);
      setCsvData(newCscData);
    };
    initPreviewData();

  }, []);

  return (
    <div id="preview">
      <Sougeibus csvData={csvData}  /> 
    </div>
  )
}

export default Preview