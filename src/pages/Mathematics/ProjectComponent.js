import '../../App.scss'
import $ from 'jquery'

const ProjectComponent = ({id, title, abstract, pdf}) => {

  // Handle showing project description when title is clicked
  $(document).ready(() => {
    $('.list-item').unbind().click((e) => {
      console.log("gg")
      var content = `#content_${e.target.id}`
      $(content).slideToggle("slow")
    })
  })

  return (
    <div>
      <div className="list-item white-text small-text" id={id}>{title}</div>
      <div className='drop-down white-text small-text scroll-vertical hide padding-l20' id={`content_${id}`}>
        <div dangerouslySetInnerHTML={{__html:abstract}}></div>
        <a href={pdf} className="show_button">Get PDF</a>
      </div>
    </div>
  )
}

export default ProjectComponent