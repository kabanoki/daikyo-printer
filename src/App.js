import './App.css';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/page/Home/Home';
import System from './components/page/System/System';
import Preview from './components/page/Preview/Preview';

function App() {

  const [selectCsv, setSelectCsv] = useState({id:null, name:'', fileName:'', filePath:''});
  const [selectFolder, setSelectFolder] = useState('C:\\Users\\daikyo\\Downloads');

  useEffect(()=>{
    const init = async () => {
      const Store = await window.electronAPI.initStore();
      setSelectFolder(Store.downloadPath);
    }
    init();
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home selectFolder={selectFolder} selectCsv={selectCsv} setSelectCsv={setSelectCsv}  />}>Home</Route>
        <Route path="/system" element={<System selectFolder={selectFolder} setSelectFolder={setSelectFolder} />}>System</Route>
        <Route path="/preview" element={<Preview />}>Preview</Route>
      </Routes>
    </Router>
  )
}

export default App;
