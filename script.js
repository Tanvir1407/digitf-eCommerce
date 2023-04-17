const navToggler = document.querySelector('.nav-toggler');
const navLink = document.querySelector('.nav__link');
const Play = document.getElementById("play");
const player =document.querySelector('.video__box')
const cancelPlayer =document.querySelector('.video__button')
const icon = navToggler.querySelector('.fa-bars')
let   video = document.getElementById("videoId")


Play?.addEventListener("click", function () {
    player.classList.add('play__Video');
    video.src ="https://www.youtube.com/embed/elOLEDKFbf0?autoplay=1"
})
cancelPlayer?.addEventListener("click", function () {
    player.classList.remove('play__Video');
    video.src ="https://www.youtube.com/embed/elOLEDKFbf0?autoplay=0"
})




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