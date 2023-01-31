import '../../App.scss'
import './Education.scss'
import unilogo from '../../Images/unilogo.png'
import PageNames_ from '../../Navbar/pageNames';
import { color_nav } from '../../Navbar/NavbarManager';
import { useEffect } from 'react'

function EducationPage() {
  // Color correct nav bar section
  useEffect(() => {
    color_nav(PageNames_.EDUCATION)
  })

  return (
    <div className='main'>
      <div className='medium-container white-text padding_b10 padding_l20 padding_r20'>
        <h1>
          University
        </h1>
        <p>I hold a first-class Bsc (hons) degree in Mathematics and Theoretical Physics From The University Of Plymouth, and have expertise in the following areas:</p>

        <div className='flex-2-row'>
          <div className='uni-logo'>
            <img src={unilogo} />
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
          <p>My award winning dissertation on the theory of general relativity can be found  <span><a href="https://www.researchgate.net/publication/355381246_From_Geometry_To_Black_Holes"> here</a></span> </p>
        </div>

      </div>
    </div >
  );
}

export default EducationPage;