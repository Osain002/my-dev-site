import $ from 'jquery'

class domTools {
  static append_html(id, html) {
    return $(id).append(html)
  }

  static clear_content(id) {
    return $(id).empty()
  }

}

export { domTools }