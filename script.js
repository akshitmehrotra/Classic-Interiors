var script1 = document.createElement('script1');
script1.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script1);

(function () {

  var navButton = document.querySelector("#nav-menu-button");
  var navUl = document.querySelector(".nav-ul");

  function toggleMobileMenu() {
    navUl.classList.toggle("hide-ul");
  }

  navButton.onclick = toggleMobileMenu;
}());


const counters = document.querySelectorAll('.value1');
const speedw = 100;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speedw;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   animate();
  });
  
  const counters2 = document.querySelectorAll('.value2');
  const speedw2 = 100;
  
  counters2.forEach( counter => {
     const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;
       
        const time = value / speedw2;
       if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
          }else{
            counter.innerText = value;
          }
       
     }
     animate();
    });
  

  
  'use strict'
  
  let messages = document.querySelector('.centered').textContent;
  let messageArray = messages;
  console.log(messageArray);
  let textPosition = 0;
  let speed = 80;
  
  let typewriter = () => {
    document.querySelector('.centered').innerHTML = messageArray.substring(0,textPosition);
    // console.log(textPosition,messageArray.length,messageArray[0].substring(0,2) );
    if(textPosition === messageArray.length)document.querySelector('.welcome').innerHTML = messageArray.substring(0,textPosition);
    if(textPosition++ != messageArray.length)
    setTimeout(typewriter,speed);
  }
  
  window.addEventListener("load",typewriter);
  function hideWelcome(){
    document.querySelector('.welcome').style.display = 'none'
    
  }

  // document.getElementById("countdown").onmouseover = function() {mouseOver()};
  // function mouseOver() {
  //   document.getElementById("welcomee-text").style.visibility = "visible";
  //   document.getElementById("welcomee-text").style.opacity = 1;
  //   document.getElementById("welcomee-text").style.transition = "opacity 1s linear";
  //   console.log("hi")
  // }

  // document.getElementById("welcomee").onmouseover = function() {mouseOver()};
  // function mouseOver() {
  //   document.getElementById("welcomee-text").style.visibility = "visible";
  //   document.getElementById("welcomee-text").style.opacity = 1;
  //   document.getElementById("welcomee-text").style.transition = "opacity 1s linear";
  // }

  document.getElementById("countdown").onscroll = function() {myFunction()};

function myFunction() {
  console.log("Hello")
  document.getElementById("welcomee-text").style.visibility = "visible";
  document.getElementById("welcomee-text").style.opacity = 1;
  document.getElementById("welcomee-text").style.transition = "opacity 2s linear";
  document.getElementById("welcomee-text").style.filer = "blur(5px)";
  document.getElementById("welcomee-text").style.transition = "opacity 2s linear";
}

function fade(){
  document.getElementById("projects1").style.visibility = "hidden";
}

function SwapDivsWithClick()
{
  document.getElementById("projects1").style.display = "none";
  document.getElementById("projects-list").style.display = "block";
  document.getElementById("projects-list").style.transition = "opacity 2s linear";
}



