import React from 'react';
import {Router, Route, useNavigate, Routes} from "react-router-dom";
import Form1 from './form1.jsx';
import Form2 from './form2.jsx';
import Form3 from './form3.jsx';


export default function Home(props) {
  const navigate = useNavigate();
  const navigateToForm1 = () => {
    navigate('/form1');
  }
  return (
    <div>
    <h1>Magic Shopping Experience:</h1>
    <h2>Nothing In Here</h2>
    <h2>But You Will Get Everything You Wish</h2>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <button onClick={navigateToForm1}>Check Out</button>

  </div>
  )
}

  
  
  
