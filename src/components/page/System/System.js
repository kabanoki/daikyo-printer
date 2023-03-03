import React from 'react'

const Ststem = ({selectFolder, setSelectFolder}) => {
  
  const changeFolder = async () => {
    const newFolder = await window.electronAPI.opneDownloadFolder();
    setSelectFolder(newFolder);
  }

  return (
    <div id="system">
      <div className="w-100 my-2">
        <p className='ms-3 pt-4 mb-2 title fw-bold'>ダウンロードフォルダ</p>
        <div className='p-3 bg-white'>
          <input type="text" className="form-control" value={selectFolder} disabled />
          <button type="button" className="btn btn-outline-secondary mt-2" onClick={changeFolder}>フォルダの変更</button>
        </div>
      </div>
    </div>
  )
}

export default Ststem