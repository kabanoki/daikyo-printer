import React, { useState } from 'react'

function Ststem() {
  const [selectFolder, setSelectFolder] = useState('C:\\daiky\\Downloads');

  function changeFolder() {
    if(window.confirm("検索フォルダを確定させます")){
      console.log(selectFolder);
    }
  }

  return (
    <div id="system" className="container">
      <div className="card">
        <h5 className="card-header">システム設定</h5>
        <div className="card-body overflow-auto print-list">
          <div className="mb-3">
            <label className="form-label">検索フォルダパス</label>
            <input type="text" className="form-control" value={selectFolder} disabled />
            <button type="button" className="btn btn-outline-secondary mt-2" onClick={changeFolder}>フォルダの変更</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ststem