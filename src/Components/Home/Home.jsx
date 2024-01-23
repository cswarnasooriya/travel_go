import './Home.css';


//importing Icons
import { FaCirclePlay } from "react-icons/fa6";

//import images
import mainImage from '../../Assets/mainImage.png';
import aeroplane from '../../Assets/aeroplane.png';


const Home = () => {
  return (
    <div className='home container section'>
        <div className="textDiv grid">
            <span className="redText">
                Best Destinations Around The World!
            </span>
            <h2>Travel, Enjoy and Live A New And Full Life...</h2>

            <p>
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listining. Park gate ssell they went hard for the season.
            </p>

            <div className="button flex">
                <button className='btn'>Find More</button>
                <div className="playBtn flex">
                    <FaCirclePlay className='icon'/>
                    <span>Play Demo</span>
                </div>
            </div>
        </div>

        <div className="imgDiv flex">
            <img src={mainImage} alt="MainImage" />      
        </div>

        <img src={aeroplane} alt="aeroplane image" className='aeroplane'/>

     
    </div>
  );
};

export default Home;
