let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//Team Slider

       
$('#customers-teams').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 4500,
              checkVisibility: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
});




var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        520: {
            slidesPerView: 1,
        },
    },
  });

//firebase start
const firebaseConfig = {
  apiKey: "AIzaSyAm4k5HDYngrVURwCTov4IF89yqUbQYPvk",
  authDomain: "join-newsletter.firebaseapp.com",
  databaseURL: "https://join-newsletter-default-rtdb.firebaseio.com",
  projectId: "join-newsletter",
  storageBucket: "join-newsletter.appspot.com",
  messagingSenderId: "601828857098",
  appId: "1:601828857098:web:7b888dcddfcbc8e76d96f3",
  measurementId: "G-PE2ZMWFXED"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("joinnewsletter");

document.getElementById("joinNewsletter").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");

  saveMessages(name, emailid);
}

const saveMessages = (name, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

