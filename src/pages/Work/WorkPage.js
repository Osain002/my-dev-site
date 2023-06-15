import '../../App.scss'
import madesnappy_logo from '../../Images/madesnappy.svg';
import PageNames_ from '../../Navbar/pageNames';
import { color_nav } from '../../Navbar/NavbarManager';
import {useEffect} from 'react'

function WorkPage() {
  // Color correct nav bar section
  useEffect(() => {
    color_nav(PageNames_.WORK)
  })

  return (
    <div className='main'>
      <div className='page_content white-text'>
        <div className='page-title'>
          <h1>
            My Work Experience
          </h1>
        </div>

        <div className='margin_b20pt'>
          <h2>Junior Software Engineer, MadeSnappy 360</h2>
          <div className='float-left margin_r20pt '>
            <img src={madesnappy_logo}/>
          </div>
          <p> In my role, I am responsible for building and maintaining various systems, 
            with a recent focus on the upkeep of our production systems. This involves 
            creating captivating virtual tours by incorporating wireframes into 360 photos 
            and translating them into detailed floor plans. Additionally, I have developed 
            a comprehensive campaign system that streamlines the enhancement of property images 
            and generates personalized webpages, which are then distributed to potential clients via 
            email. With six months of experience at MadeSnappy 360, I am adept at delivering
            high-quality results and consistently meeting client expectations.
          </p>
        </div>

        <div>
          <h2>Broadband customer advisor, EE</h2>
          <div className='float-left margin_r20pt '>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/EE_logo.svg" width="50"/>
          </div>
          <p> 
          During my tenure at EE as a Broadband Technical Advisor, I played a pivotal role in providing exceptional 
          customer support and resolving issues related to broadband and landline services. 
          As the first point of contact for customers, my responsibilities included answering 
          phone calls and addressing a wide range of technical inquiries and concerns. 
          I demonstrated strong problem-solving skills and a deep understanding of broadband and landline
           technologies to diagnose and resolve issues efficiently. With a customer-centric approach, 
           I consistently delivered timely and effective solutions, ensuring customer satisfaction 
           and maintaining strong client relationships. My experience at EE as a Broadband Technical 
           Advisor equipped me with excellent communication skills and the ability to thrive in a fast-paced, 
           customer-focused environment.
          </p>
        </div>
      </div>  
    </div>
  );
}

export default WorkPage;