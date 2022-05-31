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

// modal script
var modalDiv;
  // open modals
  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  // close modal, also pauses video
  function closeModal(id) {
  close();
  stop();
    function close() {
      document.getElementById(id).style.display = "none";
    }
  }

  var slideIndex = 1;
  showSlides('myModal', slideIndex);

  function plusSlides(id, n) {
  next();
  stop();
    function next() {
      showSlides(id, slideIndex += n);
    }
  }

//  Pauses all videos
var pauseVideo = document.getElementsByClassName("videoPause");

function stop() {
  var i;
  for (i = 0; i < pauseVideo.length; i++) {
    pauseVideo[i].pause();
  }
}

  function currentSlide(id, n) {
    showSlides(id, slideIndex = n);
  }

  function showSlides(id, n) {
    var i;
    var modalDiv = document.getElementById(id);
    var slides = modalDiv.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
