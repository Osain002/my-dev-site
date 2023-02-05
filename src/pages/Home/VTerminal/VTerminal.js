import './terminal.scss'
import $ from 'jquery'
import { domTools } from '../../../tools/domTools'

import { useEffect, useState } from "react"
import { command_handler } from './command_handler'
import { useNavigate } from 'react-router-dom'

const VTerminal = () => {

  const [currentText, setCurrentText] = useState("")
  const [name, setName] = useState()
  const [ready, setReady] = useState(false)
  const [command, setCommand] = useState()
  const navigate = useNavigate()


  function handle_name_submit(e, id) {
    e.preventDefault()
    setName($(id).val())
  }

  function handle_command(e){
    e.preventDefault()
    const command = document.getElementById('command').value
    setCommand(command)
  }

  // Handle terminal start up process

  // Start terminal when a name is given
  useEffect(() => {
    async function terminal_start() {
      domTools.clear_content(".terminal-main")
      const timer = ms => new Promise(res => setTimeout(res, ms))
      const startup = [
        "starting terminal",
        "verifying connection",
        `Hello, ${name}! Welcome to my dev-site! `,
        "If you would like to find out more about me, simply type 'read -bio' and hit enter!",
        "Type 'list commands' and hit enter for more!",
      ]
      for (var i = 0; i < startup.length; i++) {
        setCurrentText(`<p>${startup[i]}</p>`)
        await timer(1000)
      }
      setReady(true)
    }
  
    if (name) {
      terminal_start()
    }
  }, [name])

  // Write to terminal when current text is changed
  useEffect(() => {
    domTools.append_html(".terminal-main", currentText)
  }, [currentText])

  // Detect commands and pass to command handler
  useEffect(() => {
    if (command){
      setReady(false)
      domTools.append_html(".terminal-main", `<p>dev-site/home ~ ${command}</p>`)
      var res = command_handler(command, setCurrentText, setReady, useNavigate)
      setCommand()
      if (res){
        navigate(res.to)
      }
    }
  }, [command, setReady, setCommand, navigate])

  // Draw
  return (
    <div className='terminal-main small-text'>
      <form className='name' onSubmit={e => handle_name_submit(e, "#visitor_name")}>
        <label>Please enter your name and hit enter to begin: </label>
        <input type="text" className="terminal-input" id="visitor_name" autoComplete='off' placeholder='Click here to type'/>
      </form>
      {
        ready ? 
        <div id="in">
          <form id="term_input" onSubmit={e => handle_command(e)}>
            <label>D:/dev-site/home ~ </label>
            <input type="text" id="command" autoComplete='off' placeholder='Click here to type'/>
          </form>
        </div>
          : null
      }
    </div>
  )
}

export default VTerminal