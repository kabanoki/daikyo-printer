import React from 'react'
import "./Ninteisho.css";

const Ninteisho = ({ csvData }) => {

  return (<div className="container">
    {csvData.filter((csv, i) => i !== 0 ).map((csv, i)=>{
     return (
        <div className='print_pages' title={`${i+1}ページ`} key={i}>
          <div id="rank">{csv[0]}</div>
          <div id="name">{csv[1]}</div>
          <div id="date">{csv[5]}</div>
        </div>
      )
    })}
  </div>)
  
}

export default Ninteisho