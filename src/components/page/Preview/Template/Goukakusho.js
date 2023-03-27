import React from 'react'
import "./Goukakusho.css";

const Goukakusho = ({ csvData }) => {

  return (<div className="container">
    {csvData.filter((csv, i) => i !== 0 ).map((csv, i)=>{
     return (
        <div className='print_pages' title={`${i+1}ページ`} key={i}>
          <div id="rank">{csv[0]}</div>
          <div id="number">{csv[1]}</div>
          <div id="weekName">{csv[2]}</div>
          <div id="name">{csv[3]}</div>
          <div id="date">{csv[4]}</div>
        </div>
      )
    })}
  </div>)
  
}

export default Goukakusho