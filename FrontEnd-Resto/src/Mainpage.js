import './Mainpage.css'
import React, { useState, useEffect } from "react";
import {Link } from 'react-router-dom';
import {IoFastFoodOutline } from "react-icons/io5";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import restoimg from './restoimg.png'; 
import plate from './plate.png';
import menu1 from './menu1.png';
import menu2 from './menu2.png';
import menu3 from './menu3.png';
import menu4 from './menu4.png';
import menu10 from './menu10.webp';
import menu6 from './menu6.jpg';
import menu7 from './menu7.jpg';
import chef1 from './chef1.jpg'
import chef2 from './chef2.webp'
import chef3 from './chef3.jpg'
import chef4 from './chef4.webp'
import chef5 from './chef5.avif'
import chef6 from './chef6.avif'
import chef7 from './chef7.webp'
import faceimg from './faceimg.jpg'
import testimg1 from './testimg1.jpg'
import testimg2 from './testimg2.jpg'




export default function Home() {

    const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  
  

    return (
        <>
        <div className='navfix'>
        <nav className="nav">
      <a href="#" className="nav__brand">
      <h3 className='h'> 
        <span className='spa'>R</span>
        <span className='spa'>E</span>
        <span className='spa'>s</span>
        <span className='spa'>T</span>
        <span className='spa'>O</span>
        <span className='spa'>.</span>
        <span className="ser">CAFE</span>
        </h3>
        </a>
        
        
        <img className='resimg' src={restoimg} alt="react logo" height="100px" />
        
      <ul className={active}>
        <li className="nav__item">
          <a href="#homie" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#menu" className="nav__link">
            Our Menu
          </a>
        </li>
        <li className="nav__item">
          <a href="#chef" className="nav__link">
            Our Chef
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#footer" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
            
            <Link to="/userpage"><AccountCircleIcon id="acount" ></AccountCircleIcon></Link>
              
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    </div>
    <div>
    <section className='home' id='homie'>
    <h1> Your Most Trusted</h1>
    <h1>Restaurant</h1><br></br>
    <h6>
    “A good restaurant is like a vacation; it transports you, and it</h6>
    <h6> becomes a lot more than just about the food.”</h6>
    <br></br>
    <Link to="/book"> <button className='btn'>Make A Reservation Now</button></Link>
    
    </section>
    </div>
    <div>
        
        <section className='sect' id='menu'>
        <div>
            <h1 className='service'>OUR SPECIAL</h1>
        </div>

        <div className='integration-list'>
        <ul>
            <li>
            <div>
            <img src={menu1} alt="react logo" className='serv-box1'></img>
            <div id='book2'>
            <Link to="/book"><h4 className='btn2' >BOOK NOW</h4></Link>
            </div>
            </div>
            </li>
            <li>
            <div>
            
            <img src={menu2} alt="react logo" className='serv-box2'></img>
            <div id='book2'>
            <Link to="/book"><h4 className='btn2' >BOOK NOW</h4></Link>
            </div>
            </div>
            </li>
            <li>
            <div>
               
            <img src={menu3} alt="react logo" className='serv-box3'></img>
            <div id='book2'>
            <Link to="/book"><h4 className='btn2' >BOOK NOW</h4></Link>
            </div>
            </div>
            </li>
            <li>
            <div>
                
            <img src={menu4} alt="react logo" className='serv-box3'></img>
            <div id='book2'>
            <Link to="/book"><h4 className='btn2' >BOOK NOW</h4></Link>
            </div>
            </div>
            </li>
            </ul>
            </div>
            
            <div className='integration-lists'>
            <ul>
            <li>
            <div>
                
            <img src={menu10} alt="react logo" className='serv-box4'></img>
            <div id='book2'>
            <Link to="/book"><h4 className='btn2' >BOOK NOW</h4></Link>
            </div>
            </div>
            </li>
            <li>
            <div>
               
            <img src={menu6} alt="react logo" className='serv-box4'></img>
            <div id='book2'>
            <Link to="/book"><h4 className='btn2' >BOOK NOW</h4></Link>
            </div>
            </div>
            </li>
            <li>
            <div>
            <img src={menu7} alt="react logo" className='serv-box4'></img>
            <div id='book2'>
            <Link to="/book"><h4 className='btn2' >BOOK NOW</h4></Link>
            </div>
            </div>
            </li>
            <li>
            
            </li>
        </ul>
        </div>
        
        </section>
        </div>
    
<h2 className="doctor" id='chef'>OUR TOP CHEFS</h2>

<section>
<div className="container">
<div className="box">
<img src={chef1} alt="doctor image" height="300px" width="300px"/>
</div>
        <div className="box">
            <img src={chef2} alt="doctor image" height="300px"/>
            
            </div>
        <div className="box">
            <img src={chef3} alt="doctor image" height="300px"/>

        </div>
        <div className="box">
            <img src={chef4} alt="doctor image" height="300px"/>
            
        </div>
        <div className="box">
        <img src={chef5} alt="doctor image" height="300px" />
        
        </div>
        <div className="box">
        <img src={chef6} alt="doctor image" height="300px"/>

        </div>
        <div className="box">
        <img src={chef7} alt="doctor image" height="300px"/>
        
        </div>
        </div>
        </section>
        
        <section id='testimonials' className='dark-gray'> 
        <div className='wrapper'>
          <h2 id='testid'>What Our Customer Says?</h2>
          <div className='content-container'>
          <div className='testimonial'>
          <img src={testimg1}></img>
          <div className='reviewer-details'>
          <div className='name'>Peter Adams</div>
          <div className='company-name'>Coimbatore</div>
          <div className='review'>
          "I love the avocado toast and the California focaccia."
          </div>
          </div>
          </div>
          
          </div>
          <div className='content-container'>
          <div className='testimonial'>
          <img src={testimg2}></img>
          <div className='reviewer-details'>
          <div className='name'>Julia Merlin</div>
          <div className='company-name'>Chennai</div>
          <div className='review'>
          "I will definitely be back!"
          </div>
          </div>
          </div>
          
          </div>
          <div className='content-container'>
          <div className='testimonial'>
          <img src={testimg1}></img>
          <div className='reviewer-details'>
          <div className='name'>Jhon Alison</div>
          <div className='company-name'>Namakkal</div>
          <div className='review'>
          "Great food, great coffee, great service."
          </div>
          </div>
          </div>
          
          </div>
        </div>
        </section>
        <div>
        <section className='section' id='about'>
        <div>
        <img src={plate} className='plate'></img>
        <div id='about-content'>
          <h1 id='h1-about'>&emsp;&emsp;ABOUT RESTO.</h1><br></br>
          <h3>&emsp;&emsp;&emsp;&emsp;At Resto, we are passionate about delivering a remarkable dining experience that tantalizes your taste buds and leaves you craving for more. 
          Our talented team of chefs meticulously crafts each dish with love and creativity.
          Step into our elegant dining space, where the warm and inviting atmosphere sets the stage for a delightful dining experience. 
          Whether you're planning a romantic date night, a family celebration, our restaurant provides the perfect setting for any occasion. 
          Our friendly and attentive staff is dedicated to ensuring your comfort and satisfaction throughout your visit.</h3><br></br>
          <h2>&emsp;&emsp;Reserve your table today and embark on a gastronomic journey like no other.</h2>
          </div>
          <div id='about-id'>
          <Link to="/book"><h4 id='about-btn' >Reserve Your Table</h4></Link>
          </div>
        </div>
        </section>
        </div>
        <div>
        <footer className='foot' id='footer'>
        
        <div className='foot-flex'>
        <ul>
        <li>
        <div className='foot-appointment'>
        <h1>RESTO.</h1>
        <h3>CAFE</h3><br></br>
        <h3 className='heal'>Food Especially</h3>
        <h3 className='heal'> For You.</h3><br></br>
        <IoFastFoodOutline className='stet2' />
        
       
        </div>
        </li>
        <li>
        <div className='vertical'></div>
        </li>
        <li>
        <div className='foot1'>
          <h3>CONTACT US</h3><br></br>
          <h5>Resto. Cafe</h5>
          <h5>A 1/37 Sector-G, Ghandhipuram</h5>
          <h5>COIMBATORE, 641012</h5><br></br>
          <h3>+91 9597712723</h3>
          <h5>contact@resto.com</h5><br></br><br></br>
          
          </div>
          </li>
        <li>
        <div className='foot2'>
          <h3>LEGAL</h3><br></br>
          <h5>Privacy Policy</h5>
          <h5>Terms of Use</h5>
          <h5>Legal Notice</h5>
        </div>
        </li>
        <li>
        <div className='foot3'>
          <h3>SOCIAL</h3><br></br>
          <h5><InstagramIcon className='insta'></InstagramIcon>  Instagram</h5>
          <h5><LinkedInIcon className='lin'></LinkedInIcon>  LinkedIn</h5>
          <h5><YouTubeIcon className='insta'></YouTubeIcon>  YouTube</h5>
        </div>
        </li>
        <li>
          <div className='foot4'>
            <h3>TAGS</h3><br></br>
            <h5>resto.cafe</h5>
            <h5>restaurant</h5>
            <h5>food</h5>
            <h5>cafe</h5>
            <h5>dessert</h5>
          </div>
        </li>
        </ul>
        </div>
        <h6 className='cpyri'><CopyrightIcon></CopyrightIcon> Resto. Cafe 2023. All rights reserved</h6>
        </footer>
        </div>
        
        </>
        )
}
//  className='section1'