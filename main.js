// It is always helpful to use comments in your code!
var dropdowns = document.getElementsByClassName('dropdown');
// console.log(dropdowns);

var navLinks = document.getElementsByClassName('nav-link');
// console.log(navLinks);

function toggleDropdown() {
    // for( i = 0; i < dropdowns.length; i++ ){
    //     dropdowns[i].classList.toggle('show');
    //}

    this.children[1].classList.toggle('show');
}

for( i = 0; i < navLinks.length; i ++){
    navLinks[i].addEventListener("mouseenter", toggleDropdown)
    navLinks[i].addEventListener("mouseleave", toggleDropdown)
}
