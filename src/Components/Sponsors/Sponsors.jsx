import React from 'react'
import './Sponsors.css';

//images
import logo1 from '../../Assets/logo1.png';
import logo2 from '../../Assets/logo2.png';
import logo3 from '../../Assets/logo3.png';
import logo4 from '../../Assets/logo4.png';

const Sponsors = () => {
  return (
    <div className='sponsors container'>
        <div className="logos flex">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3}alt="" />
            <img src={logo4} alt="" />
        </div>
      
    </div>
  )
}

export default Sponsors
