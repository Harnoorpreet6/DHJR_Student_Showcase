const burger = document.querySelector('#burger'),
menu = document.querySelector('#top-menu'),
icon = document.querySelector('#top-icon'),
title = document.querySelector('#event-title'),
slides = document.querySelectorAll('.slide'),
slideCount = slides.length,
miniatures = document.querySelectorAll('.mini'),
nextBtn = document.querySelector('#next'),
prevBtn = document.querySelector('#prev');

let count = 0;

function removeMenu() {
    menu.classList.remove('open');
    icon.src = 'images/fs-menu.svg';
    title.innerHTML = '';
}
    
function toggleMenu() {
    
    if (window.innerWidth <= 1200) {
        menu.classList.toggle('open');
    
        if (menu.classList.contains('open')) {
            console.log('open mobile menu');
            icon.src = 'images/close.svg'; 
            title.innerHTML = 
        
            `<p>Industry Night <span>2025</span></p>
            <div id="menu-line1"></div>
            <div id="menu-line2"></div>`}

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