$(document).ready(function() {
    "use strict";
});

new VenoBox({
    selector: '.my-video-links',
});

let mobileBar = document.querySelector('.mobile-menu-bar');
mobileBar.addEventListener('click', function() {
    let header = document.querySelector('.header');
    let mainNav = document.querySelector('.nav-menu');
    mainNav.classList.toggle('active-nav-menu');
    header.classList.toggle('active-nav');

})