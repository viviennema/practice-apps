import React, {useState} from 'react';
import {Router, Route, useNavigate, Routes, useLocation} from "react-router-dom";

// class Form2 extends React.Component {
//   constructor(prop) {
//     super(props);
//     this.state = {
//       line1: "",
//       line2: "",}
//       city: "",
//       state:"",
//       zipCode: "",
//       phoneNumber: ""
//     }
//   }

  export default function Form2() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const navigateToForm3 = () =>{
      navigate('/form3', {state: {name,email, password, line1, line2, city, localState, zipCode, phoneNumber}});
    }
    const [name, setName] = useState(location.state.name);
    const [password, setPassword] = useState(location.state.password);
    const [email, setEmail] = useState(location.state.email);
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const [city, setCity] = useState("");
    const [localState, setLocalState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    console.log(location.state);
    return (
      <div>
        <form>
          <label>
            line1:
            <input onChange={(e)=>{setLine1(e.target.value)}} type="text" className='line1' />
          </label>
          <label>
            line2:
            <input onChange={(e)=>{setLine2(e.target.value)}}type="text" className='line2' />
          </label>
          <label>
            city:
            <input onChange={(e)=>{setCity(e.target.value)}}type="text" className='city' />
          </label>
          <label>
            state:
            <input onChange={(e)=>{setLocalState(e.target.value)}}type="text" className='state' />
          </label>
          <label>
            zipCode:
            <input onChange={(e)=>{setZipCode(e.target.value)}} type="text" className='zipCode' />
          </label>
          <label>
            phoneNumber:
            <input onChange={(e)=>{setPhoneNumber(e.target.value)}}type="text" className='phoneNumber' />
          </label>
          <button onClick={navigateToForm3}>Submit</button>
        </form>
      </div>
    )
  }


