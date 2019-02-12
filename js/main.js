


window.onload = function() {

  var leftImg = document.getElementById("second-header-cont");
  var rightImg = document.getElementById("header-cont");
  var img = "right";

  function swipe(){
    if (img==="right") {
      leftImg.style = "left: 0%";
      rightImg.style = "right:-100%;";
      img = "left";
    }else if (img==="left") {
      leftImg.style = "left: -100%";
      rightImg.style = "right:0%;";
      img = "right";
    }
  }

  setInterval(swipe, 5000);
}
