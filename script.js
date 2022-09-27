let nav = document.querySelector("nav");
let navExpand = document.querySelector('.nav-expand');
let navListItem = document.querySelectorAll(".nav-listitem");

navExpand.addEventListener('click', () => {
   nav.classList.toggle('closed');
});
navListItem.forEach('click', () =>{
   this.classList.add('active')
} )