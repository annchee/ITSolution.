/*Show & hide navbar*/
let header = document.querySelector("header");
let navToggleBtn = document.querySelector(".nav-toggle-btn");
let navLinks = document.querySelectorAll(".navbar-link");

navToggleBtn.onclick = () => {
    navToggleBtn.classList.toggle("active");
    header.classList.toggle("nav-active");
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = () => {
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toggle("active");
    }
}



/* Bact to top */
let backToTopBtn = document.querySelector('#back-to-top');
window.onscroll = () =>{

  navToggleBtn.classList.remove("active");
  header.classList.remove("nav-active");
  header.classList.toggle('window-scroll', window.scrollY > 0);

  if(window.scrollY > 100){
    backToTopBtn.classList.add("show");
  }else{
    backToTopBtn.classList.remove("show");
  }
}

backToTopBtn.onclick = () => {
  window.scrollTo(0,0);
};