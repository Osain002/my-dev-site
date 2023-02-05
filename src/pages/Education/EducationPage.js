import '../../App.scss'
import './Education.scss'
import unilogo from '../../Images/unilogo.png'
import PageNames_ from '../../Navbar/pageNames';
import { color_nav } from '../../Navbar/NavbarManager';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';




function EducationPage() {
  // Color correct nav bar section
  useEffect(() => {
    color_nav(PageNames_.EDUCATION)
  })

  return (
    <div className='main'>
      <div className='white-text margin-l20pt page-title'>
        <h1>
          Education
        </h1>
      </div>
      <div className='medium-container thin-text small-text white-text padding_b10 padding_l20 padding_r20 scroll-vertical'>
        <h1>
          University
        </h1>
        <p>I hold a first-class Bsc (hons) degree in Mathematics and Theoretical Physics From The University Of Plymouth, from which I have gained expertise in the following areas:</p>

        <div className='flex-2-row'>
          <div className='uni-logo'>
            <img src={unilogo} alt="Error loading"/>
          </div>
          <div className='subjects'>
            <ul>
              <li>
                Calculus and Analysis
              </li>
              <li>
                Differential Geometry
              </li>
              <li>
                Ordinary and Partial Differential Equations
              </li>
              <li>
                Classical and Quantum Mechanics
              </li>
              <li>
                Mathematical Programming
              </li>
              <li>
                Electrodynamics and Special Relativity
              </li>
              <li>
                Probability Theory
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>My award winning dissertation on the theory of general relativity can be found  <span><Link to='/maths'>Here</Link></span> </p>
        </div>
      </div>
    </div >
  );
}

export default EducationPage;