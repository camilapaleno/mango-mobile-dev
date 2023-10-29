import Spline from '@splinetool/react-spline';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    
    <div>
      <div className='nav'>
        <ul>
          <li> <span><b>mango</b> mobile</span> development</li>
          <li>about</li>
          <li>services</li>
          <li>contact</li>
          <li><FontAwesomeIcon icon={faBolt} /></li>
        </ul>
      </div>
      <div className='hero'>
      <div className='text'>
        <h1>We're obsessed with creating mobile applications.</h1>
        <p>At Mango Mobile Development, our expert developers and designers tirelessly pushes boundaries to make your app vision a reality.</p>
        <a href='#'>Reach Out to Us</a> <a href='#'>Learn More</a>
        <br/>
        <div>
          <span>300+</span>
          <p>Applications Made</p>
        </div>
        <div>
          <span>20+</span>
          <p>Years Experience</p>
        </div>
        <div>
          <span>50+</span>
          <p>Partners</p>
        </div>
      </div>
      <div className='spline'>
        <Spline scene="https://prod.spline.design/JWU50dUni3tB9Aq5/scene.splinecode" />
      </div>
      
      </div>
    </div>

  );
}