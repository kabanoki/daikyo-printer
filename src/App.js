import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/page/Home/Home';
import System from './components/page/System/System';
import Preview from './components/page/Preview/Preview';

function App() {

  const [selectCsv, setSelectCsv] = useState({id:null, name:'', fileName:'', filePath:''});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home selectCsv={selectCsv} setSelectCsv={setSelectCsv} />}>Home</Route>
        <Route path="/system" element={<System />}>System</Route>
        <Route path="/preview" element={<Preview />}>Preview</Route>
      </Routes>
    </Router>
  )
}

export default App;
