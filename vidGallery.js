var navbar = document.querySelector(".navbar")
var burger = document.querySelector(".burger")


burger.addEventListener("click", toggleHamburger)

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


// Video Filter
var filterItems = document.querySelectorAll('.item')
var listItems = document.querySelectorAll('.filter-list-item');

function showAll() {
    filterItems.forEach(function(element) {
        element.classList.add('show')
    })
}

function showCategory(category) {
    filterItems.forEach(function(element){
        if (element.classList.contains(category)) {
            element.classList.add('show')
        }
        else {
            element.classList.remove('show')
        }
    })
}
showAll()

//  Dropdown Button
var filterBtn = document.getElementsByClassName("dropbtn");
var i;

for (i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  })
}

listItems.forEach(item => {
  item.addEventListener("click", function() {
    filterBtn[0].classList.remove("active");
    var content = filterBtn[0].nextElementSibling;
    content.style.maxHeight = "";
  });
});

