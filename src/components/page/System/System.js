import React, { useState } from 'react'

const Ststem = ({selectFolder, setSelectFolder}) => {
  
  const changeFolder = async () => {
    const newFolder = await window.electronAPI.opneDownloadFolder();
    setSelectFolder(newFolder);
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