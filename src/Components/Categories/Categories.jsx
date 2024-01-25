import './Categories.css';


import img1 from '../../Assets/img1.png';
import img2 from '../../Assets/plane.png';
import img3 from '../../Assets/micro.png';
import img4 from '../../Assets/settings.png';
import rec from '../../Assets/img2.png';

const Header = () => {
  return (
    <div className='categories container section'>
      <div className="secHeader">
        <span>Category</span>
        <h2>We offer best services...</h2>
      </div>

      <div className="secContainer grid">

        <div className="singleCard grid">
        
          <div className="imgDiv">
            <img src={img1} alt="" className='mainImage' style={{width:75}} />
            <img src={rec} alt="" className='design' />
          </div>

          <span>Calculated Weather</span>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>

        <div className="singleCard grid">
          
          <div className="imgDiv">
            <img src={img2} alt="" className='mainImage' style={{width:90}} />
            <img src={rec} alt="" className='design' />
          </div>

          <span>Best Flights</span>
          <p>Engrossed listening. Park gate sell they weny hard for the great.</p>
        </div>

        <div className="singleCard grid">
          
          <div className="imgDiv">
            <img src={img3} alt="" className='mainImage' style={{width:75}} />
            <img src={rec} alt="" className='design' />
          </div>

          <span>Fast Communication</span>
          <p>Provide Flexible and Fast Contacts with each other in real time.</p>
        
        </div>

        <div className="singleCard grid">
          
          <div className="imgDiv">
            <img src={img4} alt="" className='mainImage' style={{width:50}} />
            <img src={rec} alt="" className='design' />
          </div>

          <span>Self Services</span>
          <p>Maintain and build easy ways and setttings itself, no need help each other.</p>
        </div>
      </div>

    
      
    </div>
  )
}

export default Header