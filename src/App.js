import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Home/Home'
import Reflection from './Reflection/Reflection'
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="Snowlingo-Web/home" element={<Home />} />
            <Route path="Snowlingo-Web/reflection" element={<Reflection />} />
            <Route path="Snowlingo-Web/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
