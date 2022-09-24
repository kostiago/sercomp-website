// CHANGE NAVBAR STYLES ON SCROLL 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


//CREATE A COUNTER UNTIL EVENT
const countdown = () => {

  const finalDate = new Date("Oct 25, 2022 00:00:00").getTime()
  const nowDate = new Date().getTime()

  const diference = finalDate - nowDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(diference / days);
  let timeHours = Math.floor((diference % days) / hours);
  let timeMinutes = Math.floor((diference % hours) / minutes);
  let timeSeconds = Math.floor((diference % minutes) / seconds);

  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;


  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
}

setInterval(countdown, 1000)


// SHOW/HIDE FAQs

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

//SHOW NAVBAR MENU

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//CLOSE MENU
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


// TABS MENU SUPERIOR

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



//TABS LATERAL MENU
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




//CREATE A POPUP

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
