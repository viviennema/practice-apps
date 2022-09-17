
import React , {useState} from 'react';
import {Router, Route, useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';

export default function Confirmation () {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const navigateToHome = () => {
    console.log(location.state);
    axios.post('/data', data)
    .then((response)=> {
      console.log(response);
      alert("Your info is saved!");
      navigate('/');
    })
  }


  return(
    <div>
      <h1>Please confirm all the information:</h1>
      <p>Name: {location.state.name}</p>
      <p>Email: {location.state.email}</p>
      <p>Password: {location.state.password}</p>
      <p>Adress line1: {location.state.line1}</p>
      <p>Adress line2: {location.state.line2}</p>
      <p>City: {location.state.city}</p>
      <p>State: {location.state.localState}</p>
      <p>Zip Code: {location.state.zipCode}</p>
      <p>Phone Number: {location.state.phoneNumber}</p>
      <p>Credit Card Number: {location.state.creditCardNum}</p>
      <p>Expire Date: {location.state.expireDate}</p>
      <p>Cvv: {location.state.cvv}</p>
      <p>Billing Zip Code: {location.state.billingZipCode}</p>
      
      <button onClick={navigateToHome}>Confirm</button>
    </div>
  )
}