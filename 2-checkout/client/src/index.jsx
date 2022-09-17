import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./components/home.jsx";
import Form1 from './components/form1.jsx';
import Form2 from './components/form2.jsx';
import Form3 from './components/form3.jsx';
import Confirmation from "./components/.confirmation.jsx";
import {BrowserRouter as Router, Route, useNavigate, Routes} from "react-router-dom";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/form1"  element={<Form1 />} />
        <Route path="/form2"  element={<Form2 />} />
        <Route path="/form3"  element={<Form3 />} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>


</Router>
    
  
)


