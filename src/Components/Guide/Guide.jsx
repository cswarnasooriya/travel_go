import React from 'react'
import './Guide.css'

//importing images
import tour from '../../Assets/tour.png';
import icon2 from '../../Assets/icon2.png';
import icon3 from '../../Assets/icon3.png';
import image1 from '../../Assets/image1.png';

const Guide = () => {
  return (
    <div className='guide container section'>
        <div className="secContainer flex">
            <div className="textDiv grid">
                <div className="secHeader">
                    <span>Easy and Fast</span>
                    <h2>Book Your Next Trip</h2>
                </div>
            

                <div className="secContent grid">
                
                    <div className="singleSection flex">
                        <img src={tour} alt="Tour" />
                        <div className="text">
                            <span>Make a choice</span>
                            <p>
                                You can easily select your favourite choices from our catelogs in flexible manner.
                            </p>
                        </div>
                    </div>


                    <div className="singleSection flex">
                        <img src={icon2} alt="Tour" />
                        <div className="text">
                            <span>Make Payments</span>
                            <p>
                                You can easily pay your payments and hospitalities in few minutes with us.
                            </p>
                        </div>
                    </div>

                    <div className="singleSection flex">
                        <img src={icon3} alt="Tour" />
                        <div className="text">
                            <span>Reach Airport Easily</span>
                            <p>
                                You can reach your carrer airport within few hour and comfortable manner with us.
                            </p>
                        </div>
                    </div>

                </div>
            </div>    

            <div className="imgDiv">
                <img src={image1} alt="" />
            </div>
            

            
        </div>
      
    </div>
  )
}

export default Guide
