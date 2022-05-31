# Dan Batchelor Photography and Videography Portfolio
### Completed April 2021

## Project Overview
I worked with Dan to get an idea of website designs he liked, and what he wanted visitors to the site to be able to see and do. As we worked through the design I added in more functionality so that users could see more of his portfolio work by type and filter content by projects.

This site was built using HTML, CSS and Javascript, with some PHP for the contact form.
Due to the size of the images and videos I have not included the media folder. You can see the full site here: http://danbatch.com/

## Technologies Used

- HTML5
- CSS3
- Javascript
- PHP

## Process


## Featured Code

With my limited Javascript understanding at the time, this is what took the most time in the project. The issue I was facing was that I could get the slides to cycle through the different videos, but the sound would continue on in the background. With a lot of trial and error and the help of Stack Overflow, I found I needed to add in an extra function to pause each video, and add that to the functions controlling the next, previous and close buttons. 

```
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
```

I then used these modal boxes within the photography and project sections of the site, to be able to cycle through the images. The thought of users having to open and close each indivisual image to get a higher resolution version didn't make sense, so the ability to cycle through all images once you have opened the higher resolution version, worked best.


## Challenges

A long time was spent on being able to get the modal boxes to scroll throiugh video content without having the sound continue to play. At the time I was very new to Javascript and having to cobble together functions from different solutions I was finding using Stack Overflow. 

## Wins

- **CSS Grid:** I feel most comfortable with Flexbox in CSS, so I wanted to also try Grid to see what I could create. I grouped the different sized images into different classes (landscape, portrait and feature images) so that I could have more control on placement and reducing any blank spaces.
- **JS filtering:** I wanted to be able to let users filter the videography page by project if needed.
- **PHP:** This was only a small amount but I enjoyed getting it to work so that users can submit a form to enquire about working with Dan.


## Key Learnings

From this project I understood that I needed to get a stronger grip on Javascript to better understand functions, so that I could confidently make future sites more interactive for users. 

## Future Content

- Use Google verification for users to go through in the conatct form submission.

