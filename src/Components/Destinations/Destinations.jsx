import './Destinations.css';
import img1 from '../../Assets/rome.jpg'
import img2 from '../../Assets/paris.jpg'
import img3 from '../../Assets/canada.jpg'
import img4 from '../../Assets/peru.jpg'
import img5 from '../../Assets/fujji.jpg'
import img6 from '../../Assets/harwad.jpg'



//import icons
import { FaLocationArrow } from "react-icons/fa";




const Destinations = () => {
  return (
    <div className='destinations container section'>
        <div className="secHeader">
            <span>Top Selling</span>
            <h2>Top Destinations</h2>
        </div>


        <div className="secContainer grid">
            <div className="singleCard grid">
                <div className="imgDiv">
                    <img src={img1} alt="Rome" />
                </div>

                <div className="infoDiv">
                    <div className="upperSpan flex">
                        <span className="location">Rome, Italy</span>
                        <span className="amount">LKR 58,000</span>
                    </div>

                    <div className="lowerSpan flex">
                        <FaLocationArrow className='icon'/>
                        <span className="distance">10 Days Trip</span>
                    </div>
                </div>
            </div>

            <div className="singleCard grid">
                <div className="imgDiv">
                    <img src={img2} alt="Rome" />
                </div>

                <div className="infoDiv">
                    <div className="upperSpan flex">
                        <span className="location">Paris, France</span>
                        <span className="amount">LKR 65,000</span>
                    </div>

                    <div className="lowerSpan flex">
                        <FaLocationArrow className='icon'/>
                        <span className="distance">12 Days Trip</span>
                    </div>
                </div>
            </div>

            <div className="singleCard grid">
                <div className="imgDiv">
                    <img src={img3} alt="Rome" />
                </div>

                <div className="infoDiv">
                    <div className="upperSpan flex">
                        <span className="location">Torent, Canada</span>
                        <span className="amount">LKR 45,000</span>
                    </div>

                    <div className="lowerSpan flex">
                        <FaLocationArrow className='icon'/>
                        <span className="distance">8 Days Trip</span>
                    </div>
                </div>
            </div>


            <div className="singleCard grid">
                <div className="imgDiv">
                    <img src={img4} alt="Rome" />
                </div>

                <div className="infoDiv">
                    <div className="upperSpan flex">
                        <span className="location">Goodlay, Peru</span>
                        <span className="amount">LKR 78,000</span>
                    </div>

                    <div className="lowerSpan flex">
                        <FaLocationArrow className='icon'/>
                        <span className="distance">14 Days Trip</span>
                    </div>
                </div>
            </div>



            <div className="singleCard grid">
                <div className="imgDiv">
                    <img src={img5} alt="Rome" />
                </div>

                <div className="infoDiv">
                    <div className="upperSpan flex">
                        <span className="location">Kotley, Fuji</span>
                        <span className="amount">LKR 38,000</span>
                    </div>

                    <div className="lowerSpan flex">
                        <FaLocationArrow className='icon'/>
                        <span className="distance">10 Days Trip</span>
                    </div>
                </div>
            </div>



            <div className="singleCard grid">
                <div className="imgDiv">
                    <img src={img6} alt="Rome" />
                </div>

                <div className="infoDiv">
                    <div className="upperSpan flex">
                        <span className="location">Curfar, Harward</span>
                        <span className="amount">LKR 52,000</span>
                    </div>

                    <div className="lowerSpan flex">
                        <FaLocationArrow className='icon'/>
                        <span className="distance">12 Days Trip</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Destinations
