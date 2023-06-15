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

      <div className='page_content thin-text small-text white-text scroll-vertical'>
        <div className='white-text page-title'>
          <h1>
            Education
          </h1>
        </div>

        <h2>
          Mathematics with Theoretical Physics, University of Plymouth
        </h2>

        <div>
          <div className='uni-logo float-left'>
            <img src={unilogo} alt="Error loading"/>
          </div>
          <div>
            <p>
              hold a first-class BSc (Hons) degree in Mathematics and Theoretical Physics 
              from the University of Plymouth. My academic journey has provided 
              me with comprehensive expertise in various areas, including calculus, differential geometry, 
              differential equations, mechanics, programming, electrodynamics, relativity, 
              and probability theory. With a solid foundation in these subjects, I possess a 
              deep understanding of their underlying principles and practical applications.
              Throughout my education, I have honed my analytical and problem-solving abilities, 
              which I consider to be my greatest strengths. I have successfully tackled complex 
              mathematical and theoretical challenges, consistently demonstrating a
              high level of proficiency in finding innovative solutions. 
              I am adept at breaking down intricate problems into manageable 
              components and utilizing my mathematical and analytical skills to 
              provide accurate and efficient solutions.
            </p>
            
            <p>
            In addition to my mathematical skills, I have a keen interest in programming. 
            I have acquired hands-on experience in various programming languages, 
            which has enabled me to develop efficient algorithms and implement
            computational solutions to real-world problems. This programming 
            expertise enhances my ability to approach challenges from a multidimensional
            perspective, combining mathematical concepts with practical implementations.
            </p>

            <p>
              My commitment to excellence drives me to continuously seek opportunities 
              to apply my knowledge and skills to real-world scenarios. I am eager to 
              contribute to a professional setting where I can utilize my expertise in 
              mathematics and theoretical physics to tackle complex problems and drive innovation. 
              I thrive in dynamic and intellectually stimulating environments, where I can collaborate 
              with like-minded individuals and make meaningful contributions.
            </p>

            <p>
              Overall, my academic background, coupled with my strong analytical and problem-solving skills, 
              makes me well-equipped to excel in a professional setting. I am enthusiastic about utilizing 
              my knowledge and expertise to make a significant impact and contribute to the success of any 
              organization or team I join.
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default EducationPage;