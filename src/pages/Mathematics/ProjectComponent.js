import '../../App.scss'
import $ from 'jquery'

const ProjectComponent = ({id, title, abstract, pdf}) => {

  return (
    <div>
      <div className='white-text'>
        <h2>{title}</h2>
      </div>
      <div className='white-text small-text padding-l20 margin_b20pt' id={`content_${id}`}>
        <div dangerouslySetInnerHTML={{__html:abstract}}></div>
        <a href={pdf} className="show_button">Get PDF</a>
      </div>
    </div>
  )
}

export default ProjectComponent