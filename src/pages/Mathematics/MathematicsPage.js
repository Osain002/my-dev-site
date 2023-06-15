import '../../App.scss'
import { useEffect } from 'react'
import { color_nav } from '../../Navbar/NavbarManager'
import ProjectComponent from './ProjectComponent'
import PageNames_ from '../../Navbar/pageNames'
import Projects from './Projects'


const MathematicsPage = () => {
  
  // Colour correct navbar section
  useEffect(() => {
    color_nav(PageNames_.MATH)
  })

  return (
    <div className='main'>


      <div className='page_content'>
        <div className='white-text margin-l20pt page-title'>
          <h1>Mathematics</h1>
        </div>

        <div className='small-text white-text margin-l20pt page-description'>

      </div>
        {Projects.map(pr => <ProjectComponent title={pr.Title} id={pr.id} abstract={pr.abstract} pdf={pr.pdf}/>)}
      </div>
    </div>
  )
}

export default MathematicsPage