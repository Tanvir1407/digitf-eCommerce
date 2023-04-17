const navToggler = document.querySelector('.nav-toggler');
const navLink = document.querySelector('.nav__link');

const icon = navToggler.querySelector('.fa-bars')

const Home = document.querySelector('.home');
//open and close function  
navToggler.addEventListener('click', function () {
    navLink.classList.toggle('toggler-open');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace("fa-bars","fa-xmark")
    } else {
        icon.classList.replace("fa-xmark","fa-bars")
    }
})

// active link

const activePage = window.location.pathname;
const Link = document.querySelectorAll('.nav__link a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active")
    }
})