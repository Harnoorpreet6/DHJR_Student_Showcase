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
    delayedContainer = document.querySelectorAll('.animated-delay'),
    fadeContainer = document.querySelectorAll('.fade');
    
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
    
    fadeContainer.forEach(background => {
        gsap.fromTo(background, {opacity: 0},
            {opacity: 1, delay: .2, duration: 1, ease: 'ease.in',
                scrollTrigger: {trigger: background, start: 'top center'}
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
        { name: "Sydney Bandarra", link: "sbandarra.com" },
        { name: "Isaac Bilyea", link: "ibilyea.com" },
        { name: "Bryle Timothy", link: "btimothy.com" },
        { name: "Milana Gabbassova", link: "mgabbassova.com" },
        { name: "Bernardo Jr. Macapagal", link: "bmacapagal.com" },
        { name: "Jashan Kumar", link: "jkumar.com" },
        { name: "Sheldon Gohetia", link: "sgohetia.com" },
        { name: "Xaviere Hanbury", link: "xhanbury.com" },
        { name: "Saif Amjad Omar Abu-Sa'ad", link: "samjadomar.com" },
        { name: "Kristina Bendzsel", link: "kbendzsel.com" },
        { name: "Tapshveer Benipal", link: "tbenipal.com" },
        { name: "Shiyon Biju Varghese", link: "sbijuvarghese.com" },
        { name: "Carlos Andres Cano", link: "candres.com" },
        { name: "Izel Esteban Cardenas", link: "iesteban.com" },
        { name: "Ezekiel John Celis", link: "ejohncelis.com" },
        { name: "Wing Lam Stephanie Chan", link: "wstephanie.com" },
        { name: "Qingdong Chen", link: "qchen.com" },
        { name: "Qiao-Yi Chu", link: "qchu.com" },
        { name: "Simon Dasilva", link: "sdasilva.com" },
        { name: "Ali El Maniary", link: "aelmaniary.com" },
        { name: "Faizan Khan", link: "fkhan.com" },
        { name: "Henrique Gamborgi Menezes", link: "hgamborgi.com" },
        { name: "Joyal Gregory", link: "jgregory.com" },
        { name: "Gia Khang Ho", link: "gkhangho.com" },
        { name: "Tanya Mae Huertas", link: "tmaehuertas.com" },
        { name: "Wimarsha Heshan Jayasinghe", link: "wheshan.com" },
        { name: "Apapat 'Music'", link: "amusic.com" },
        { name: "Kelly Kakekagamic", link: "kkakekagamic.com" },
        { name: "Taylor Khan", link: "tkhan.com" },
        { name: "Yi Ting Lai", link: "ytinglai.com" },
        { name: "Dixie Marie Laput", link: "dmarielaput.com" },
        { name: "Keith Lie", link: "klie.com" },
        { name: "Rebin Reji Vazhavilayil", link: "rreji.com" },
        { name: "Aiden Riekenbrauck", link: "riekenbrauck.com" },
        { name: "Divij Saddul", link: "dsaddul.com" },
        { name: "Shauraya Salwan", link: "ssalwan.com" },
        { name: "Akamjot Singh", link: "asingh.com" },
        { name: "Alisher Yantizhanov", link: "ayantizhanov.com" },
        { name: "Amari Buck", link: "abuck.com" },
        { name: "Bohzi Zhang", link: "bzhang.com" },
        { name: "Cassidy Pelacek-Boutilier", link: "cpelacek.com" },
        { name: "Diego Rodriguez Ramos", link: "drodriguez.com" },
        { name: "Emmanuel Opadele", link: "eopadele.com" },
        { name: "Het Shah", link: "hshah.com" },
        { name: "Ishan Mehra", link: "imehra" },
        { name: "Justin Ryan Reyes", link: "jryanreyes.com" },
        { name: "Katrina Macadams", link: "kmacadams.com" },
        { name: "Kayla Cooper", link: "kcooper.com" },
        { name: "King Yin Sham", link: "kyinsham.com" },
        { name: "Kyuri Park", link: "kpark.com" },
        { name: "Lav Pareshkumar Patel", link: "lpatel.com" },
        { name: "Loi Pan Sit", link: "lpansit.com" },
        { name: "Lok Ting Tina Yam", link: "ltingtinayam.com" },
        { name: "Meet Amrutbhai Parmar", link: "mparmar" },
        { name: "Meetinder Singh Dhaliwal", link: "msingh.com" },
        { name: "Meghan Damen", link: "mdamen.com" },
        { name: "Natchanon Mahaittidon", link: "nmahaittidon.com" },
        { name: "Nikolai Meijer", link: "nmeijer.com" },
        { name: "Osarieme Ogbeide", link: "oogbeide.com" },
        { name: "Parvesh Thakur", link: "pthakur.com" },
        { name: "Ramona Lozon", link: "rlozon.com" },
        { name: "Sashoye Maxwell", link: "smaxwell.com" },
        { name: "Shon Sojan", link: "ssojan.com" },
        { name: "Sukhbhag Singh Sidhu", link: "ssidhu.com" },
        { name: "Thaseekaran Sivaskaran", link: "tsivaskaran.com" },
        { name: "Thi Thanh Thuong Nguyen", link: "tnguyen.com" },
        { name: "Wisdom Utenwojo Okutepa", link: "wmokutepa.com" },
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
        studentWebsite.href = 'https://' + portfolio.link;
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
        positionName.classList.add("card-subtitle");
        positionName.textContent = testimonial.position;
    
        const comment = document.createElement("p");
        comment.classList.add("paragraph");
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