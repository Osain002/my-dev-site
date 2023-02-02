
async function display_bio(setCurrentText, setReady) {

  //Create a timer and bio
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const bio_string =  String("I am a Mathematics and Theoretical physics graduate currently working as a Junior Software Engineer at Made Snappy 360, a startup company specialising in the production of high quality virtual tours and floor plans for the property market.")
  const bio = bio_string.split('')

  for (var i = 0; i < bio.length; i++) {
    if (bio[i+1] === bio[i]){
      setCurrentText(bio[i].concat("", bio[i+1]));
      bio[i+1] = ""
    }else{
      setCurrentText(bio[i])
    }
    await timer(65)
  }
  setReady(true)
}

async function list_commands(cmd, setCurrentText, setReady){
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const command_helper = [
    "<p> Change page: cd 'pagename in lowercase'  e.g cd mathematics</p>",
    "<p> Read file: read -filename. Try read -bio or read -interests </p>"
  ]
  if (cmd === "commands"){
    for (var i = 0; i < command_helper.length; i++) {
      await timer(500)
      setCurrentText(command_helper[i])
    } 
  } else {
    setCurrentText(`Unable to list ${cmd}`)
  }
  setTimeout(() => setReady(true), 500)
}

async function display_interests(setCurrentText, setReady) {

  //Create a timer and bio
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const interests = [
    "I have many hobbies and interests, too many to list all of them! Here are a few:",
    "<p>-> Coding</p>",
    "<p>-> Mathematics and Physics</p>",
    "<p>-> Super complex origami </p>",
    "<p>-> Playing musical instruments</p>",
    "<p>-> Power kiting</p>"
  ]
  // wait 1 second before writing next section to terminal
  for (var i = 0; i < interests.length; i++) {
    setCurrentText(interests[i])
    await timer(1000)
  }
  setReady(true)
}

function read_commands(cmd, setCurrentText, setReady) {
  switch (cmd){
    case "-bio":
      return display_bio(setCurrentText, setReady)
    case "-interests":
      return display_interests(setCurrentText, setReady)
    default:
      setCurrentText(`<p>File '${cmd}' does not exist</p>`)
      setTimeout(() => setReady(true), 500)
  }
}

function cd_commands(cmd, setCurrentText, setReady) {
  switch (cmd) {
    case "education":
      return { to: "/education" }
    case "work":
      return { to: "/work" }
    case "projects":
      return { to: "/projects" }
    case "mathematics":
      return { to: "/maths" }
    case "origami":
      return { to: "/origami" }
    case "contact":
      return { to: "/contact" }
    default:
      setCurrentText(`<p>Page '${cmd}' not found</p>`)
      setTimeout(() => setReady(true), 500)
  }
}

export function command_handler(command, setCurrentText, setReady) {
  const command_as_array = command.split(" ")
  switch (command_as_array[0]) {
    case "read":
      return read_commands(command_as_array[1], setCurrentText, setReady)
    case "cd":
      return cd_commands(command_as_array[1], setCurrentText, setReady)
    case "list":
      return list_commands(command_as_array[1], setCurrentText, setReady)
    default:
      setCurrentText(`<p>Invalid command: ${command}.</p>`)
      setTimeout(() => {
        setCurrentText("")
        setReady(true)
      }, 500)
  }
}