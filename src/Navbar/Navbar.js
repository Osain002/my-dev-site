import { Link } from "react-router-dom";
import pages from "./pages";
import mypic from '../Images/me.png'
import {  } from "./NavbarManager";
import './nav.scss'


const Navbar = () => {

 
  return (
    <div className="navbar">
      <div className="my-pic">
        <img src={mypic} width="100%"  alt="Unable to load"/>
      </div>
      { pages.map(page => 
      <Link 
        to={page.route} 
        className="nav-element" 
        id={page.id}
        key={page.key}
        >{page.page_name}</Link>)}
    </div>

  )
}

export default Navbar;