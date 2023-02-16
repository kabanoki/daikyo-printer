import React, { useState } from 'react'
import "./style.css";

import Sougeibus from "./Template/Sougeibus";

const Preview = () => {

  const [csvData, setCsvData] = useState([]); 

  return (
    <div id="preview">
      <Sougeibus csvData={csvData}  /> 
    </div>
  )
}

export default Preview