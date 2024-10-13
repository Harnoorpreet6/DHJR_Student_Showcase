(() => {
const burger = document.querySelector('#burger'),
menu = document.querySelector('#top-menu'),
icon = document.querySelector('#top-icon'),
menuBtns = document.querySelectorAll('#top-menu a'),
body = document.querySelector('body');

const slides = document.querySelectorAll('.slide'),
slideCount = slides.length,
miniatures = document.querySelectorAll('.mini'),
nextBtn = document.querySelector('#next'),
prevBtn = document.querySelector('#prev');

const portfolioCon = document.querySelector('#portfolio-con'),
testimonialCon = document.querySelector('#testimonial-con');

const container = document.querySelectorAll('.animated'),
delayedContainer = document.querySelectorAll('.animated-delay');

const player = new Plyr('video');

let count = 0;

function removeMenu() {
    body.style.overflow = 'auto';
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
            body.style.overflow = 'hidden';
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

gsap.registerPlugin(ScrollTrigger);
    
container.forEach(container => {
    gsap.fromTo(container, {opacity: 0, y: 80},
        {opacity: 1, y: 0, duration: 1, ease: 'sine.out',
            scrollTrigger: {trigger: container, start: 'top center'}
        });
});

gsap.fromTo(delayedContainer, {opacity: 0},
    {opacity: 1, delay: .1, stagger: .3, duration: .5, ease: 'ease', 
        scrollTrigger: {trigger: delayedContainer, start: 'top center'}
});

function updateMiniature() {
    miniatures.forEach(mini => mini.classList.remove('selected'));
    miniatures[count].classList.add('selected');
}

function slideSelect(index) {
    slides[count].classList.remove('active');
    count = index;
    slides[count].classList.add('active');
    updateMiniature();
}

function nextSlide() {
    slides[count].classList.remove('active');

    count++;
    if (count >= slideCount) {
        count = 0;
    }
  
    slides[count].classList.add('active');
    updateMiniature();
}

function previousSlide() {
    slides[count].classList.remove('active');

    count--;
    if(count < 0) {
        count = slideCount - 1;
    }

    slides[count].classList.add('active');
    updateMiniature();
}

const portfolios = [
    { name: "stud1", link: "stud1.com" },
    { name: "stud2", link: "stud2.com" },
    { name: "stud3", link: "stud3.com" },
    { name: "stud4", link: "stud4.com" },
    { name: "stud5", link: "stud5.com" },
    { name: "stud6", link: "stud6.com" },
    { name: "stud7", link: "stud7.com" },
    { name: "stud8", link: "stud8.com" },
];

const testimonials = [
    { name: "Marco de Luca", position: "Program Coordinator", comment: "The work of those students is inspiring to see. Each of them has such a different approach to the same project, which leads to a good variety of results. It's gratifying." },
    { name: "Jarrod Osterback", position: "Professor", comment: "Personally, I think the students of this year really made good use of my classes. Amazing visual directions and good use of the fundamentals we learned back in the previous terms." },
    { name: "Robert Haaf", position: "Professor", comment: "Awesome layouts done by students. I really like many of them went far and beyond to make sure their website had a clear structure and good acessibility features" },
]

portfolios.forEach((portfolio) => {
    const portfolioDiv = document.createElement("div");
    portfolioDiv.classList.add("col-span-2", "m-col-span-4", "l-col-span-3", "box", "animated-delay");

    const studentName = document.createElement("p");
    studentName.classList.add("student-name", "bold");
    studentName.textContent = portfolio.name;

    const studentWebsite = document.createElement("a");
    studentWebsite.textContent = portfolio.link;
    studentWebsite.classList.add("student-website");

    portfolioDiv.appendChild(studentName);
    portfolioDiv.appendChild(studentWebsite);

    portfolioCon.appendChild(portfolioDiv);
});

testimonials.forEach((testimonial) => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("testimonial-card");

    const personName = document.createElement("p");
    personName.classList.add("card-title", "bolder");
    personName.textContent = testimonial.name;

    const positionName = document.createElement("p");
    positionName.classList.add("card-subtitle", "bold");
    positionName.textContent = testimonial.position;

    const comment = document.createElement("p");
    comment.classList.add("card-text");
    comment.textContent = testimonial.comment;

    testimonialDiv.appendChild(personName);
    testimonialDiv.appendChild(positionName);
    testimonialDiv.appendChild(comment);

    testimonialCon.appendChild(testimonialDiv);
});

burger.addEventListener('click', toggleMenu);
menuBtns.forEach(button => button.addEventListener('click', () => removeMenu()));
window.addEventListener('resize', resizeMenu);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);
miniatures.forEach((mini, index) => mini.addEventListener('click', () => slideSelect(index)));
miniatures.forEach(mini => mini.addEventListener('click', function() {
    mini.style.transition = 'transform .3s ease-in'; 
}));

})();