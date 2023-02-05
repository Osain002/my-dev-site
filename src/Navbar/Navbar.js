import { Link } from "react-router-dom";
import pages from "./pages";
import mypic from '../Images/me.png'
import { } from "./NavbarManager";
import './nav.scss'


const Navbar = () => {
  


  return (
    <div>
      <div className="navbar small-text">
        <div className="my-pic">
          <img src={mypic} width="100%" alt="Unable to load" />
        </div>
        {pages.map(page =>
          <Link
            to={page.route}
            className="nav-element"
            id={page.id}
            key={page.key}
          >{page.page_name}</Link>)}
      </div>
    </div>
  )
}

export default Navbar;