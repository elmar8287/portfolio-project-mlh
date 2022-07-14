document.addEventListener("DOMContentLoaded", function(event) {
  
  // Set the default mode to light
  if(localStorage.getItem("darkMode") === null){
    localStorage.setItem("darkMode", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }else{
    if(localStorage.getItem("darkMode") === "dark"){
      document.documentElement.setAttribute("data-theme", "dark");
    }else{
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
});

var checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {

  var currentTheme = document.documentElement.getAttribute("data-theme");

  // Switch between `dark` and `light`
  var switchToTheme = currentTheme === "dark" ? "light" : "dark";

  // Set our currenet theme to the new one
  document.documentElement.setAttribute("data-theme", switchToTheme);

  if(current>="15") {
    switchToTheme = "dark";
    localStorage.setItem("darkMode", switchToTheme);
  } else {
    switchToTheme = "light";
    localStorage.setItem("darkMode", switchToTheme);
  }
});

// The mode switch automatically on page load
function autoSwitch() {
  var hour = (new Date()).getHours();
  if (hour >= "9" && hour <= "16") {
    checkbox = "true";
  } else {
    checkbox ="false";
  }
}

window.onload = autoSwitch;
