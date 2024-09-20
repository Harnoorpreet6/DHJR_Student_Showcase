const burger = document.querySelector('#burger'),
menu = document.querySelector('#top-menu'),
icon = document.querySelector('#top-icon'),
title = document.querySelector('#event-title');

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

burger.addEventListener('click', toggleMenu);
window.addEventListener('resize', resizeMenu);