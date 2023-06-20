const header = document.getElementById("header"),
  navMenu = document.getElementById("nav-menu"),
  navOpen = document.getElementById("nav-open"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link");


window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});



// Open the nav menu
navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

// Close the nav menu
navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

// Close the nav menu when the make clicks on link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});


let swiper = new Swiper(".destination__wrapper",{
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 45,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper__next",
    prevEl: ".swiper__prev",
  },
});


const video = document.getElementById("video-tour"),
  videoBtn = document.getElementById("video-btn"),
  videoIcon = document.getElementById("video-icon"),
  title_video = document.getElementById("title-tours")

function videoState() {
  if (video.paused) {
    
    video.play();
    videoIcon.classList.replace("ri-play-fill", "ri-pause-fill");
    title_video.style = "display: none";
  } else {
   
    video.pause();
    videoIcon.classList.replace("ri-pause-fill", "ri-play-fill");
    title_video.style = "display: block";
  }
}

video.addEventListener("ended", () => {
  videoIcon.classList.replace("ri-pause-fill", "ri-play-fill");
});

videoBtn.addEventListener("click", videoState);


const scrollTop = document.getElementById("scrolltop");

function showScrollTop() {
  if (window.scrollY > 400) {
    scrollTop.classList.add("scrolltop--show");
  } else {
    scrollTop.classList.remove("scrolltop--show");
  }
}

window.addEventListener("scroll", showScrollTop);


function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 150,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", addActiveLink);

const sr = ScrollReveal({
  distance: "100px",
  duration: 2000,
  delay: 400,
  reset: true,
});

sr.reveal(".home__content, .about__img, .offer__content", { origin: "left" });
sr.reveal(".home__img, .about__content, .offer__img", { origin: "right" });
sr.reveal(".destination__wrapper, .video__content, .video__info, .newsletter__wrapper");
sr.reveal(".content-img1",{interval: 200, origin:"left"})
sr.reveal(".content-img2",{interval: 200, origin:"top"})
sr.reveal(".content-img3",{interval: 200, origin:"right"})
sr.reveal(".container-servicio", { interval: 200, origin: "top" });
sr.reveal(".footer__content", { interval: 150 });
sr.reveal(".content-wrap_1", { origin: "left" });
sr.reveal(".content--wrap_2", { origin: "right" });
sr.reveal(".info", { origin: "left" });
sr.reveal(".content--map .title--home", { origin: "right" });
sr.reveal(".title--home", {interval: 200, origin: "right" });
sr.reveal(".social-1", { origin: "right" });
sr.reveal(".aviso-cookies", { origin: "left" });
// sr.reveal(".video", {origin: "top" });



let promo = document.getElementById("promo");
let botonPromo = document.getElementById('btn_promo')


window.onload =()=>{
  setTimeout(() => {
    promo.style = "margin-top: 50px;  transition: ease-in-out 2s"
  }, 2000);
}

if (!localStorage.getItem('promo-aceptada')) {
  promo.classList.add('activo2');
}

botonPromo.addEventListener('click',()=>{
  promo.classList.remove('activo2');
  localStorage.setItem('promo-aceptada',true);
})




const botonAceptar = document.getElementById('btn-aceptar-cookis')
const avisoCookies = document.getElementById('aviso-cookies')
const fondoAviso = document.getElementById('fondo-aviso-cookies')

dataLayer = [];

if ( !localStorage.getItem('cookies-aceptadas')) {
  
  avisoCookies.classList.add('activo')
  fondoAviso.classList.add('activo')
}else{
  dataLayer.push({'event' : 'cookies-aceptadas'})
}

botonAceptar.addEventListener('click', () => {
  avisoCookies.classList.remove('activo');
  fondoAviso.classList.remove('activo');

  localStorage.setItem('cookies-aceptadas',true);

  dataLayer.push({'event' : 'cookies-aceptadas'})
});

let cookies = document.getElementById('cookies')
let termino = document.getElementById('termino')
let politica = document.getElementById('politica')
let tituloVariable = document.getElementById('title-variable')




function Rediric() {
  cookies = location.href = "./cookies.html#cookies";
  termino.style.display = "none"
  politica.style.display = "none"
  tituloVariable.innerHTML = josue
}

