//  Burger Dropdown Button
var brgBtn = document.getElementsByClassName("smlbrgdropbtn");
var i;

for (i = 0; i < brgBtn.length; i++) {
  brgBtn[i].addEventListener("click", function() {
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
    brgBtn[0].classList.remove("active");
    var content = brgBtn[0].nextElementSibling;
    content.style.maxHeight = "";
  });
});