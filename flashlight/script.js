let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  }
  catch(e) {
    return false;
  }
};

function getMousePosition(e) {
  // if screen is touched then return the position of touch position
  // if not touch then return the cursor position
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  // set flashlight position in css to cursor position
  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

// if mousemove then call getMousePosition
document.addEventListener("mousemove", getMousePosition);
// if touchmove then call getMousePosition
document.addEventListener("touchmove", getMousePosition)