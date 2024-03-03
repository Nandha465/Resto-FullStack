import React, { useEffect,useState } from 'react';
import './Formsignup.css';
import loginimage from './loginimage.jpg';
import bgsign1 from './bgsign1.mp4'
import {Link,useNavigate } from 'react-router-dom';
import validator from 'validator'

function Formsignup ()  {
  
const nav=useNavigate();
const[username,setusername]=useState('');
const[email,setemail]=useState('');
  const[phone,setphone]=useState('');
  const[password,setpassword]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={email,phone,password,username}
    if(email.length===0||password.length===0||username.length===0||phone.length===0){
      alert("Enter All fields")
    }
    else if (!validator.isEmail(email)) {
        alert('Enter Valid Email!')
      } 
      
      else{
      fetch("http://localhost:8080/usersignup/post",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(details)
      }
      ).then(()=>{
        console.log("New Detail Added");   
        console.log(JSON.stringify(details));
        console.log(e);
        nav("/")
      })
    }
  }
 


  return (
    <div id='App2'>
    <video autoPlay loop muted > 
      <source src={bgsign1} type="video/mp4"/>
    </video>
    <div className="signup-container">
    
    <img src={loginimage} id='signimg'></img>
    <form className="signup-form" >
    <h2 className="login-heading">Sign Up</h2>
    <h3 className='login-qoute'>Yes, sign me up! ...</h3>
        <div id="form-group1">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>setusername(e.target.value)}
            
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="username" className="label">
            Email
          </label>
          <input
            type="email"
            id="username"
            className="input"
            onChange={(e)=>setemail(e.target.value)}
            
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="username" className="label">
            Phone Number
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>setphone(e.target.value)}
            
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input"
            onChange={(e)=>setpassword(e.target.value)}
            required
          />
          </div>
          
        <div id='log-btn'>
        <button type="submit" className="login-button" onClick={senddb}>
          Signup
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default  Formsignup;