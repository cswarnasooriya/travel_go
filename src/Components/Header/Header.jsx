import React, { useState } from 'react'
import './Header.css'

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { SiHearth } from "react-icons/si";




const Header = () => {

    //code statement to toggle the navbar in and out
    const [active, setActive] = useState('menu');

    const showNavbar =()=>{
        setActive("menu showMenu");
    };

    const removeShowNavbar =()=>{
        setActive("menu");
    };


    //code statement to add background to the menu at a certain heigh scrolling down

    const [transparent, setTransparent] = useState('navbar');
    const addBg = ()=>{
        if(window.scrollY >= 10){
            setTransparent("navbar activeHeader");
        }else{
            setTransparent("navbar");
        }
    };
    window.addEventListener("scroll",addBg);


  return (
   <div className={transparent}>
    <div className="logoDiv">
        <span className='logobar flex'>
            <SiHearth className='icon'/>
            <h2 className='logo'>TravelGo.Com</h2>

        </span>
        
    </div>

    <div className={active}>
        <div className="lists flex">

            <li>
                <a href="#">Destination</a>
            </li>
            <li>
                <a href="#">Hotels</a>
            </li>
            <li>
                <a href="#">Flights</a>
            </li>
            <li>
                <a href="#">Booking</a>
            </li>
        </div>

        <div className="btns flex">
            <button className='btn'>Login</button>
            <button className='btn'>SignUp</button>

            <select className='lang'>
                <option value="">EN</option>
                <option value="">FR</option>
                <option value="">SP</option>
            </select>
        </div>

        <div className="closeIcon" onClick={removeShowNavbar}>
            <IoIosCloseCircle className='icon'/>
        </div>


    </div>
    <div className="toggleIcon" onClick={showNavbar}>
        <TbGridDots className='icon'/>

    </div>
   </div>
  );
};

export default Header
