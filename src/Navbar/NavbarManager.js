import $ from 'jquery';
import pages from './pages';

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