import '../../App.scss'
import { details } from './details';
import { color_nav } from '../../Navbar/NavbarManager';
import {useEffect} from 'react'
import PageNames_ from '../../Navbar/pageNames';



function DetailElement() {
  useEffect(() => {
    color_nav(PageNames_.CONTACT)
  })
  return (
    <div className='text-container70'>
      <div className='large-text white-text thin-text'>
        <p>
          If you have any questions, or would just like to get in touch, 
          please feel free to contact me on the following:
        </p>
      </div>
      {details.map(dt => 
          <div key={dt.key} className='x-large-text thin-text center-horizontal white-text'>
            {
              `${dt.detail} : ${dt.value}`
            }
          </div>
        )}
      
    </div>
  )
}

function ContactPage() {

  return (
    <div className='main'>
      <div className='white-text margin-l20pt'>
        <h1>Contact me</h1>
      </div>
      <div className='medium-container'>
        <DetailElement/>
      </div>
    </div>
  );
}

export default ContactPage;