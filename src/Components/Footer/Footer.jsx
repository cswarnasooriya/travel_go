import React from 'react'
import './Footer.css';

//importing icons
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { SiHearth } from "react-icons/si";

//importing images
import img1 from '../../Assets/footer1.png';
import img2 from '../../Assets/footer3.png';



const Footer = () => {
  return (
    <div className='footer container'>
        <div className="secContainer grid">
            <div className="singleSection">
                <SiHearth className='icon'/>
                <h2>TravelGo.Com</h2>
                <p>
                    Book your trip in minute, get full cotrol for much longer..
                </p>
            </div>

            <div className="singleSection">
                <h3>Company</h3>
                <li>Company</li>
                <li>Careers</li>
                <li>Support</li>
            </div>

            <div className="singleSection">
                <h3>Contact</h3>
                <li>Help</li>
                <li>Press</li>
                <li>Affliates</li>
            </div>

            <div className="singleSection">
                <h3>More</h3>
                <li>Guidelines</li>
                <li>Insurance</li>
                <li>Hotels</li>
            </div>

            <div className="singleSection">
                <div className="socials flex">
                    <FaInstagram className='icon'/>
                    <CiYoutube className='icon'/>
                    <FaTiktok className='icon'/>
                    <FaXTwitter className='icon'/>
                    <CiFacebook className='icon'/>


                </div>

                <span className='text'>
                    Discover Our App
                </span>
                <span className='flex'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </span>
            </div>

            
        </div>

      
    </div>
  )
}

export default Footer
