import React , {useState} from 'react';
import {Router, Route, useNavigate, Routes} from "react-router-dom";

// class Form1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       password: ""
//     }
//   }

  export default function Form1(props){
    const navigate = useNavigate();
    const navigateToForm2 = () => {
      navigate('/form2', {state: {name, email, password}});
     

    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div>
        <form>
          <label>Name:
          <input onChange={(e)=>{setName(e.target.value)}} type="text" className="name"/>
          </label>
          <label>Email:
          <input onChange={(e)=>{setEmail(e.target.value)}}type="text" className="name"/>
          </label>
          <label>
            Password:
            <input onChange={(e)=>{setPassword(e.target.value)}}type="text" className="password" />
          </label>
          <button onClick={navigateToForm2}>Submit</button>
        </form>
      </div>
    );
  }

