function toggleNav() {
    var navBar = document.getElementById("myTopnav");
    var icon = navBar.querySelector(".icon");
  
    if (navBar.classList.contains("open")) {
      // Close the navbar
      navBar.classList.remove("open");
      icon.textContent = "☰"; // Change back to "☰" when closing
    } else {
      // Open the navbar
      navBar.classList.add("open");
      icon.textContent = "✕"; // Change to "✕" when opening
    }
  
    if (navBar.classList.contains("responsive")) {
      navBar.classList.remove("responsive");
    } else {
      navBar.classList.add("responsive");
    }
  }


var clickedBtnId = [];
function handleNavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const clickableDivs = document.querySelectorAll(".grid-item");
var isReverting = false;
clickableDivs.forEach((div, indx) => {
  div.addEventListener("click", function () {
    if (isReverting) return;
    else if (div.id === "box9") {
      isReverting = true;
      retracePath(0);
    } else {
      handleButtonClick(div);
      clickedBtnId.push(div);
    }
  });
});

function retracePath(idx) {
  if (idx == clickedBtnId.length) {
    clickedBtnId = [];
    isReverting = false;
    return;
  }
  clickedBtnId[idx].style.backgroundColor = "#00407A";

  setTimeout(() => {
    retracePath(idx + 1);
  }, 500);
}

function handleButtonClick(div) {
  div.style.backgroundColor = "red";
}

//CODE TO CHANGE THE COLORS OF BOXES DYNAMICALLY ---------->>>










 
  
  
  
  
  
