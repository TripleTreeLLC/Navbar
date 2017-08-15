function homeFunctionEnter() {
  document.getElementById("homeHeader").style.width = "145px";
}
function homeFunctionLeave() {
  document.getElementById("homeHeader").style.width = "0px";
}

function contactFunctionEnter() {
  document.getElementById("contactHeader").style.width = "195px";
}
function contactFunctionLeave() {
  document.getElementById("contactHeader").style.width = "0px";
}

function blogFunctionEnter() {
  document.getElementById("blogHeader").style.width = "110px";
}
function blogFunctionLeave() {
  document.getElementById("blogHeader").style.width = "0px";
}

var tog = 1;

function openNav() {
    if (tog == 1)
    {
      document.getElementById("mySideChick").style.width = "100%";
      document.getElementById("front").style.opacity = 1;
      document.getElementById("front").style.zIndex = 200;
      tog = 0;
    }
    else {
      document.getElementById("mySideChick").style.width = "70px";
      document.getElementById("front").style.opacity = 0;
      document.getElementById("front").style.zIndex = 0;
      tog = 1;
    }
}
