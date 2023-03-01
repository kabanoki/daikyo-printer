import React, { useEffect } from 'react'
import "./Ninteisho.css";

const Ninteisho = ({ csvData }) => {

  useEffect(() => {
    console.log('csvData', csvData);
  }, [csvData]);

  return (<div className="container">
    {csvData.map((csv, i)=>{
      if(i===0) return (<></>);

      return (
        <div className='print_pages' key={i}>
          <div id="rank">{csv[0]}</div>
          <div id="name">{csv[1]}</div>
          <div id="date">{csv[5]}</div>
        </div>
      )
    })}
  </div>)
}

export default Ninteisho