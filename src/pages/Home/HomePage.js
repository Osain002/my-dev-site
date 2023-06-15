import { useEffect } from 'react';
import '../../App.scss'
import $ from 'jquery';
import NamePage from './NamePage';
import Bio from './Bio';
import PageNames_ from '../../Navbar/pageNames';
import { color_nav } from '../../Navbar/NavbarManager';


function HomePage() {
  // Color correct navbar section
  useEffect(() => {
    color_nav(PageNames_.HOME)
  })

  $(document).ready(function () {
    $(".fade").css({opacity: 1})
    $(".main").scroll(function (event) {
      var st = $(this).scrollTop();
      var lastScrollTop = 0;
      if (st > lastScrollTop) {
        $(".fade").css({opacity: 1-st/300})
      } 
    });
  });

  return (
    <div className='main'>
      <NamePage/>
      <Bio />
    </div>
  );
}

export default HomePage;