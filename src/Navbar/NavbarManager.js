import $ from 'jquery';
import pages from './pages';
import { detect_orientation } from "../components/tools/orientation_manager";


$(document).ready(() => {
  var screen_width = $(window).width();
  detect_orientation()
  console.log("w:", screen_width)
  if (screen_width < 500){
    handle_hide_nav()
  }
})

function handle_hide_nav(){
  $("body").mousemove(e => {
    if (e.pageX < 100){
      return $('.navbar').fadeIn("slow")
    }
    if (e.pageX > 150){
      return $('.navbar').hide("slow")
    }
  })
}

function color_nav(selected){
  pages.forEach(el => {
    if (el.id === selected){
      $(`#${selected}`).addClass('nav-element-active');
    }else{
      $(`#${el.id}`).removeClass('nav-element-active');
    }
  })
}

export {color_nav};