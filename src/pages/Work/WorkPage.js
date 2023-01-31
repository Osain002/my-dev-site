import '../../App.scss'
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
      <div className='page-title'>
        <h1>
          My Work
        </h1>
      </div>
    </div>
  );
}

export default WorkPage;