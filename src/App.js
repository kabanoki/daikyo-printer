import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/page/Home/Home';
import System from './components/page/System/System';
import Preview from './components/page/Preview/Preview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/system" element={<System />}>System</Route>
        <Route path="/preview" element={<Preview />}>Preview</Route>
      </Routes>
    </Router>
  )
}

export default App;
