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

        <div className='flex-2-row'>
          <div className='uni-logo'>
            <img src={unilogo} alt="Error loading"/>
          </div>
          <div className='margin-l20pt'>
          <p>I hold a first-class BSc (Hons) degree in Mathematics and Theoretical Physics from the University of Plymouth, with expertise in calculus, differential geometry, differential equations, mechanics, programming, electrodynamics, relativity, and probability theory. My academic background has equipped me with strong analytical and problem-solving skills. I am committed to excellence and keen to apply my knowledge and skills to a professional setting.</p>

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