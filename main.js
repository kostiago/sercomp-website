// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


//show/hide faq

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon

        const icon = faq.querySelector('faq-icon i');
        if(icon.className === 'uil uil-plus') 
        {
            icon.className = 'uil uil-minus';
        }
        else 
        {
            icon.className = 'uil uil-plus';
        }
    })
})

//show navbar menu

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


//tabs superior menu

let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});



//tabs lateral menu

const AllIndicator = document.querySelectorAll('.indicator li');
const AllContent = document.querySelectorAll('.wrapper-content li');

AllIndicator.forEach(item => {
    item.addEventListener('click', function () {
        const contentTab = document.querySelector(this.dataset.target);

        AllIndicator.forEach(i => {
            i.classList.remove('active');
        })

        AllContent.forEach(i => {
            i.classList.remove('active');
        })

        contentTab.classList.add('active');
        this.classList.add('active');
    })
})

