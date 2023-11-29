// Vartical Navabar Onclick Function

console.clear();
const submenu = document.querySelector(".submenu");
const menuElements = gsap.utils.toArray(".menu-element:not(:nth-child(4))");
const plusBtn = document.querySelector("span");
let open = false;

const subMenuTween = gsap
    .from(submenu, {
        height: 0,
        duration: 0.7,
        ease: "power1.inOut",
        paused: true
    })
    .reverse();

const menuElementsOpacity = gsap
    .to(menuElements, {
        duration: 0.25,
        opacity: 0.7,
        paused: true
    })
    .reverse();

plusBtn.addEventListener("click", () => {
    open = !open;
    subMenuTween.reversed(!open);
    menuElementsOpacity.reversed(!open);
});

//  Horizonatl Navabar Onclick Function

console.clear();
const submenu2 = document.querySelector(".submenu2");
const menuElements2 = gsap.utils.toArray(".menu-element2:not(:nth-child(4))");
const plusBtn2 = document.querySelector("p");
let open2= false;

const subMenuTween2 = gsap
    .from(submenu2, {
        height: 0,
        duration:0.7,
        ease: "power1.inOut",
        paused: true
    })
    .reverse();

const menuElementsOpacity2 = gsap
    .to(menuElements2, {
        duration: 0.25,
        opacity: 0.5,
        paused: true
    })
    .reverse();

plusBtn2.addEventListener("click", () => {
    open2 = !open2;
    subMenuTween2.reversed(!open2);
    menuElementsOpacity2.reversed(!open2);
});


// Dark Mode And Light Mode 

function mode_change(){
    let element = document.body;
    element.classList.toggle("dark");
}



// Counter Number //

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('keyur');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 50);
        } else {
            counter.innerText = value;
        }

    }
    animate();
});


// Dropdowm Animation //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});