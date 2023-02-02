// Alert users on mobile devices to turn landscape


export function detect_orientation(){
  window.addEventListener("load", function() {
    // Announce the new orientation number
    if(window.orientation === 0){
      alert("Please use Landscape for better viewing on mobile devices!");
    }
  });
  window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    if(window.orientation === 0){
      alert("Please use Landscape for better viewing on mobile devices!");
    }
  });
}