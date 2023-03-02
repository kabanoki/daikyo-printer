import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faXmark  } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

const Navbar = () => {
  return (
    <nav id="previewbar">
      <button onClick={()=>{window.print()}}><FontAwesomeIcon icon={faPrint} /> 印刷する</button>
      <button onClick={()=>{window.close()}}><FontAwesomeIcon icon={faXmark} /> 閉じる</button>
    </nav>
  )
}

export default Navbar