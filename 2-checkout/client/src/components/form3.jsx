import React, {useState} from 'react';
import {Router, Route, useNavigate, useLocation} from "react-router-dom";

// class Form3 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state ={
//       creditCardNum: "",
//       expireDate: "",
//       cvv: "",
//       billingZipCode: ""
//     }
//   }

  export default function Form3 () {
    const navigate = useNavigate();
    const location = useLocation();
    const navigateToConfirmation = () => {
      navigate('/confirmation',{state: {name, email, password, line1, line2, city, localState, zipCode, phoneNumber, creditCardNum, cvv, expireDate, billingZipCode}});
    }
    const [name, setName] = useState(location.state.name);
    const [password, setPassword] = useState(location.state.password);
    const [email, setEmail] = useState(location.state.email);
    const [line1, setLine1] = useState(location.state.line1);
    const [line2, setLine2] = useState(location.state.line2);
    const [city, setCity] = useState(location.state.city);
    const [localState, setLocalState] = useState(location.state.localState);
    const [zipCode, setZipCode] = useState(location.state.zipCode);
    const [phoneNumber, setPhoneNumber] = useState(location.state.phoneNumber);
    const [creditCardNum, setCreditCardNum] = useState("");
    const [cvv, setCvv] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [billingZipCode, setBillingZipCode] = useState("");
    console.log(location.state.name)
    
    console.log("name1", location.state);
    return (
      <div>
        <form>
          <label>
            Credit Card Number:
            <input onChange={e=>{setCreditCardNum(e.target.value)}} type="text" className="CCNum"/>
          </label>
          <label>
            Expire Date:
            <input onChange={e=>{setExpireDate(e.target.value)}}type="text" className='expireDate'/>
          </label>
          <label>
            CVV:
            <input onChange={e=>{setCvv(e.target.value)}}type="text" className='cvv'/>
          </label>
          <label>
            Billing Zip Code:
            <input onChange={e=>{setBillingZipCode(e.target.value)}} type="text" className='BZC'/>
          </label>
          <button onClick={navigateToConfirmation}>Confirm</button>
        </form>
      </div>
    )
  }
