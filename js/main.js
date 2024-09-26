const burger = document.querySelector('#burger'),
menu = document.querySelector('#top-menu'),
icon = document.querySelector('#top-icon'),
title = document.querySelector('#event-title'),
slides = document.querySelectorAll('.slide'),
slideCount = slides.length,
miniatures = document.querySelectorAll('.mini'),
nextBtn = document.querySelector('#next'),
prevBtn = document.querySelector('#prev'),
player = new Plyr('video');

let count = 0;

function removeMenu() {
    menu.classList.remove('open');
    menu.addEventListener('transitionend', () => menu.classList.remove('slideMenu'));
    icon.addEventListener('transitionend', () => menu.classList.remove('spin'));
    icon.src = 'images/fs-menu.svg';
}
    
function toggleMenu() {
    
    if (window.innerWidth <= 1200) {
        icon.classList.toggle('spin');
        menu.classList.toggle('open');
        menu.classList.add('slideMenu');
    
        if (menu.classList.contains('open')) {
            console.log('open mobile menu');
            icon.src = 'images/close.svg';
        }
        else {
            console.log('close mobile menu');
            removeMenu(); }
    }
}

function resizeMenu() {
    if (window.innerWidth >= 1200) {
        console.log('desktop menu');
        removeMenu();
    }
}

function updateMiniature() {
    miniatures.forEach(mini => mini.classList.remove('selected'));
    miniatures[count].classList.add('selected');
}

function slideSelect(index) {
    slides[count].classList.remove('active');
    count = index;
    slides[count].classList.add('active');
    updateMiniature();
    console.log('slide: ', count);
}

function nextSlide() {
    slides[count].classList.remove('active');

    count++;
    if (count >= slideCount) {
        count = 0;
    }
  
    slides[count].classList.add('active');
    updateMiniature();
    console.log('slide: ', count);
}

function previousSlide() {
    slides[count].classList.remove('active');

    count--;
    if(count < 0) {
        count = slideCount - 1;
    }

    slides[count].classList.add('active');
    updateMiniature();
    console.log('slide: ', count);
}

burger.addEventListener('click', toggleMenu);
window.addEventListener('resize', resizeMenu);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);
miniatures.forEach((mini, index) => mini.addEventListener('click', () => slideSelect(index)));