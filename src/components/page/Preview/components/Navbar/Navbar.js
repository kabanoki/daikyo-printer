import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faXmark  } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

const Navbar = ({pageSize, landscape}) => {
  const sendRequestPrint = async () => {
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById('overlay').style.display = 'block';
    await new Promise((resolve, reject) => {
      const res =   window.electronAPI.sendRequestPrint(pageSize, landscape);
      resolve(res);
    }).then((res)=>{
      console.log(res);
      setTimeout(()=>{
        document.querySelector('body').style.overflow = 'auto';
        document.getElementById('overlay').style.display = 'none';
      }, 2000);  
    });
  }

  return (
    <nav id="previewbar">
      <div id="overlay"></div>
      <button onClick={()=>{sendRequestPrint()}}><FontAwesomeIcon icon={faPrint} /> 印刷する</button>
      <button onClick={()=>{window.close()}}><FontAwesomeIcon icon={faXmark} /> 閉じる</button>
    </nav>
  )
}

export default Navbar