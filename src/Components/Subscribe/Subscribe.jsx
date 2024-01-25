import React from 'react';
import './Subscribe.css';

import { IoMailOpen } from "react-icons/io5";


const Subscribe = () => {
  return (
    <div className='subscribe container section'>
        <div className="secContent grid">
            <h1>Subscribe for latest news and intersting offers!</h1>
            <div className="inputDiv flex">
                <div className="input flex">
                    <IoMailOpen className='icon'/>
                    <input type="text" placeholder='Your Email' />
                </div>
                <button className='btn'>Subscribe</button>
            </div>
        </div>
      
    </div>
  )
}

export default Subscribe
