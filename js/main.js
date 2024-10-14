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
      { name: "Sydney Bandarra", link: "sydneybandarra.com" },
      { name: "Isaac Bilyea", link: "isaacbilyea.com" },
      { name: "Bryle Timothy", link: "bryletimothy.com" },
      { name: "Milana Gabbassova", link: "milanagabbassova.com" },
      { name: "Bernardo Jr. Macapagal", link: "bernardomacapagal.com" },
      { name: "Jashan Kumar", link: "jashankumar.com" },
      { name: "Sheldon Gohetia", link: "sheldongohetia.com" },
      { name: "Xaviere Hanbury", link: "xavierehanbury.com" },
      { name: "Saif Amjad Omar Abu-Sa'ad", link: "saifomar.com" },
      { name: "Kristina Bendzsel", link: "kristinabendzsel.com" },
      { name: "Tapshveer Benipal", link: "tapshveerbenipal.com" },
      { name: "Shiyon Biju Varghese", link: "shiyonvarghese.com" },
      { name: "Dina Bondarchuk", link: "dinabondarchuk.com" },
      { name: "Carlos Andres", link: "carlosandres.com" },
      { name: "Izel Esteban", link: "izelesteban.com" },
      { name: "Ezekiel John Celis", link: "ezekieljohncelis.com" },
      { name: "Wing Lam Stephanie Chan", link: "winglamchan.com" },
      { name: "Qingdong Chen", link: "qingdongchen.com" },
      { name: "Qiao-Yi Chu", link: "qiaoyichu.com" },
      { name: "Simon Dasilva", link: "simondasilva.com" },
      { name: "Ali El Maniary", link: "alielmaniary.com" },
      { name: "Faizan Khan", link: "faizankhan.com" },
      { name: "Henrique Gamborgi Menezes", link: "henriquemenezes.com" },
      { name: "Joyal Gregory", link: "joyalgregory.com" },
      { name: "Harnoorpreet Kaur", link: "harnoorkaur.com" },
      { name: "Gia Khang Ho", link: "giakhangho.com" },
      { name: "Tanya Mae Huertas", link: "tanyamaehuertas.com" },
      { name: "Wimarsha Heshan", link: "Wimarshaheshan.com" },
      { name: "Apapat Juntarattanakamol", link: "apapat.com" },
      { name: "Kelly Kakekagamic", link: "kellykakekagamic.com" },
      { name: "Taylor Khan", link: "taylorkhan.com" },
      { name: "Yi Ting Lai", link: "yitinglai.com" },
      { name: "Dixie Marie Laput", link: "dixiemarielaput.com" },
      { name: "Keith Lie", link: "keithlie.com" },
      { name: "Jenifer Quelali", link: "jeniferquelali.com" },
      { name: "Rebin Reji Vazhavilayil", link: "rebinreji.com" },
      { name: "Aiden Riekenbrauck", link: "aidenriekenbrauck.com" },
      { name: "Divij Saddul", link: "divijsaddul.com" },
      { name: "Shaurya Salwan", link: "shauryasalwan.com" },
      { name: "Akamjot Singh", link: "akamjotsingh.com" },
      { name: "Alisher Yantizhanov", link: "alisheryantizhanov.com" },
      { name: "Amari Buck", link: "amaribuck.com" },
      { name: "Bohzi Zhang", link: "bohzizhang.com" },
      { name: "Cassidy Pelacek-Boutilier", link: "cassidypelacek.com" },
      { name: "Diego Rodriguez Ramos", link: "diegorodriguez.com" },
      { name: "Emmanuel Opadele", link: "emmanuelopadele.com" },
      { name: "Het Shah", link: "hetshah.com" },
      { name: "Ishan Mehra", link: "ishanmehra" },
      { name: "Justin Ryan Reyes", link: "justinreyes.com" },
      { name: "Katrina Macadams", link: "katrinamacadams.com" },
      { name: "Kayla Cooper", link: "kaylacooper.com" },
      { name: "King Yin Sham", link: "kingsham.com" },
      { name: "Kyuri Park", link: "kyuripark.com" },
      { name: "Lav Pareshkumar Patel", link: "lavpatel.com" },
      { name: "Loi Pan Sit", link: "loipansit.com" },
      { name: "Lok Ting Tina Yam", link: "loktingtinayam.com" },
      { name: "Meet Amrutbhai Parmar", link: "meetparmar" },
      { name: "Meetinder Singh Dhaliwal", link: "meetinderdhaliwal.com" },
      { name: "Meghan Damen", link: "meghandamen.com" },
      { name: "Natchanon Mahaittidon", link: "natchanonmahaittidon.com" },
      { name: "Nikolai Meijer", link: "nikolaimeijer.com" },
      { name: "Osarieme Ogbeide", link: "osariemeogbeide.com" },
      { name: "Parvesh Thakur", link: "parveshthakur.com" },
      { name: "Ramona Lozon", link: "ramonalozon.com" },
      { name: "Rodrigo Nobre do Nascimento", link: "rodrigonascimento.com" },
      { name: "Sashoye Maxwell", link: "sashoyemaxwell.com" },
      { name: "Shon Sojan", link: "shonsojan.com" },
      { name: "Sukhbhag Singh Sidhu", link: "sukhbhagsidhu.com" },
      { name: "Thaseekaran Sivaskaran", link: "thaseekaransivaskaran.com" },
      { name: "Thi Thanh Thuong Nguyen", link: "thinguyen.com" },
      { name: "Wisdom Utenwojo Okutepa", link: "wisdomokutepa.com" },
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