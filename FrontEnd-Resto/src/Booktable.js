import React, { useEffect,useState } from 'react';
import './Booktable.css';

import booktableimg from './booktableimg.mp4'
import {Link,useNavigate,useParams } from 'react-router-dom';
import { FaCalendar, FaClock } from 'react-icons/fa';

const Booktable = () => {

  const nav=useNavigate();
  const[name,setname]=useState('');
  const[date,setdate]=useState('');
  const[time,settime]=useState('');
  const[phone,setphone]=useState('');
  const[people,setpeople]=useState('');
 
  const {id} = useParams();
  const senddb=(e)=>{
    e.preventDefault()
    const details={name,phone,date,time,people}
    if(date.length===0||people.length===0||name.length===0||phone.length===0||time.length===0){
      alert("Enter All fields")
    }
    else{
      fetch("http://localhost:8080/reservetable/post",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(details)
      }
      ).then(()=>{
        console.log("New Detail Added");   
        console.log(JSON.stringify(details));
        console.log(e);
        nav("/home")
      })
    }
  }
    

  
  return (
    <div id='booktable'>
    <video autoPlay loop muted> 
      <source src={booktableimg} type="video/mp4"/>
    </video>
    <div className="book-container">
    
    <form className="book-form" >
    <h2 className="book-heading">Book Your Table</h2>
    <h3 className='book-qoute'>"Join us for a feast of words and flavors"</h3>
        <div className="form-book">
          <label htmlFor="username" className="label">
            Name
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={(e)=>setname(e.target.value)}
            
            required
          />
        </div>
        <div className="form-book">
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
        <div className="form-book">
          
          <FaCalendar />
            Date
          <input
            type='date'
            id="password"
            className="input"
            onChange={(e)=>setdate(e.target.value)}
            required
          />
          </div>
        <div className="form-book">
          
          <FaClock />
           Time
          <input
            type="time"
            id="password"
            className="input"
            onChange={(e)=>settime(e.target.value)}
            required
          />
          </div>
        <div className="form-book">
          <label className="label">
            How many people?
          </label>
          <input
            type="number"
            id="password"
            className="input"
            onChange={(e)=>setpeople(e.target.value)}
            required
          />
          </div>
          <div id='buttons'>
        <div id='book-btn'>
        <Link to="/home"><button  className="book-button2">
          Cancel
          </button></Link>
          </div>
          <div id='book-btn1'>
        <button  className="book-button1" onClick={senddb}>
          Book
        </button>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Booktable;