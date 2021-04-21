var navbar = document.querySelector(".navbar")
var burger = document.querySelector(".burger")


burger.addEventListener("click", toggleHamburger)

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  burger.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)

//  Pauses all videos
var pauseVideo = document.getElementsByClassName("videoPause");

function stop() {
  var i;
  for (i = 0; i < pauseVideo.length; i++) {
    pauseVideo[i].pause();
  }
}


// Photo Gallery Modal

function openModal() {
  document.getElementById("myModalPics").style.display = "block";
}

// Edited for stop video
// function closeModal() {
//   document.getElementById("myModalPics").style.display = "none";
// }

function closeModal(id) {
  close();
  stop();
    function close() {
      document.getElementById("myModalPics").style.display = "none";
    }
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
  next();
  stop();
    function next() {
      showSlides(slideIndex += n);
    }
  }

// Edited for stop video
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myGallerySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
 
}
