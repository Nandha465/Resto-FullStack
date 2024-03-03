import React, { useEffect,useState } from 'react';
import './Formlogin.css';
import loginimage from './loginimage.jpg';
import bgvid from './bgvid.mp4'
import {Link,useNavigate } from 'react-router-dom';


  function Formlogin ()  {
  
  const nav=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/userlogin/get")
    .then((response) => response.json())
    .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  const authenticate=(e)=>{
    e.preventDefault();
  const usercheck = user.find(user => (user.username === username && user.password === password));
 if(username.length===0){
  alert("Enter Username")
 }
 else if(password.length===0){
  alert("Enter password")
 }
  else if(!usercheck){
    alert("Wrong Username or Password!")
  }
  else {
    nav("/home")
  }
}



  return (
    <div id='App1'>
    <video autoPlay loop muted> 
      <source src={bgvid} type="video/mp4"/>
    </video>
    <div className="login-container">
    
    <img src={loginimage} id='loginimg'></img>
    <form className="login-form" >
    <h2 className="login-heading">Login</h2>
    <h3 className='login-qoute'>"Welcome back, let's get started!"</h3>
        <div className="form-group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>setUsername(e.target.value)}
            
            required
          />
        </div>
        <div className="form-group">
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
          <div>
          <p>Create New Account <Link to="/signup" id='sign-to'>Signup Now!</Link></p>
          </div>
        <div id='log-btn'>
        <button type="submit" className="login-button" onClick={authenticate}>
          Login
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Formlogin;