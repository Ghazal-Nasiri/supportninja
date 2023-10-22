const carousel = document.querySelector(".carousel");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

let btn_diva = document.querySelector(".btn-diva");
let btn_divb = document.querySelector(".btn-divb");
let diva = document.querySelector(".diva");
let divb = document.querySelector(".divb");
btn_diva.addEventListener("click", () => {
    diva.style.display = "block";
    divb.style.display = "none";
    btn_diva.classList.add("active");
    btn_divb.classList.remove("active");

})
btn_divb.addEventListener("click", () => {
    diva.style.display = "none";
    divb.style.display = "block";
    btn_diva.classList.remove("active");
    btn_divb.classList.add("active");

})

const carousel2 = document.querySelector(".carousel2");
const arrowBtns = document.querySelectorAll(".arrow-btns i");
const firstCardWidth = carousel2.querySelector(".card2").offsetWidth;
const carouselChildrens = [...carousel2.children];

let isDragging2 = false, startX2, startScrollLeft2;

let cardPerView = Math.round(carousel2.offsetWidth / firstCardWidth)

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging2");
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    if(!isDragging2) return;
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging2");   
}

const infiniteScroll = () => {
    if(carousel2.scrollLeft === 0){
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
        carousel2.classList.remove("no-transition");

    }
    else if(Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth){
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.offsetWidth;
        carousel2.classList.remove("no-transition");

    }
}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll);



// nav hamburger menu
let close = true;
const hamburgerMenu = document.querySelector(".hamburger");
const line_1 = document.querySelector(".line_1");
const line_2 = document.querySelector(".line_2");
const line_3 = document.querySelector(".line_3");
const alertBar = document.querySelector(".alert-bar");
const openMenu = document.querySelector(".open-menu");
const nav = document.querySelector('nav');
hamburgerMenu.addEventListener("click" , () => {
    line_1.classList.toggle("ch-line-1");
    line_2.classList.toggle("opacity-0");
    line_3.classList.toggle("ch-line-3");
    if(close){
        close = false;
        nav.style.backgroundColor = "white";
        nav.classList.replace("sticky" , "fixed-top");
        openMenu.classList.replace("d-none" , "block");
    }
    else{
        close = true;
        nav.style.backgroundColor = "transparent";
        // nav.classList.replace("fixed-top" , "sticky");
        openMenu.classList.replace("block" , "d-none");

    }
    nav.classList.toggle("bg-light");
    nav.classList.replace("sticky" , "fixed-top");



});
// change style on scroll

const listNav = document.querySelector('nav ul');
const textLogo = document.querySelector(".text-logo");
window.addEventListener("scroll" , () => {
    let scrollValue = window.scrollY;

    if(scrollValue < 150){
        listNav.style.backgroundColor = "transparent";
        listNav.style.border = "0";
        textLogo.style.opacity = "1";
        nav.style.backgroundColor = "#f7e1d2";

    }
    else{
        listNav.style.border = "1px solid rgba(43, 44, 48, 0.2)";
        listNav.style.backgroundColor = "white";
        nav.style.backgroundColor = "transparent";
        textLogo.style.opacity = "0";
    }
})
const sliderText = document.querySelector(".slider-text");
let mobile;

// if(document.body.clientWidth < 992 && mobile){
//     mobile = false;
//     sliderText.classList.add("bg-img-mobile-slider-text")
//     sliderText.classList.remove("bg-img-slider-text")
// }
// if (document.body.clientWidth > 992 && !mobile){
//     mobile = true;
//     sliderText.classList.remove("bg-img-mobile-slider-text")
//     sliderText.classList.add("bg-img-slider-text")

// }

// if(document.body.clientWidth < 992){
//     sliderText.style.backgroundImage = "url(../../assets/images/64149f79022d0c50acce4796_Testimonial\ Mobile\ Scribble\ 01.svg),url(../../assets/images/64149f79022d0c7320ce4797_Testimonial\ Mobile\ Scribble\ 02.svg) ";
//     sliderText.style.backgroundPosition = "0% 100%,100% 100%";
// }
// else{
//     sliderText.style.backgroundImage = "url(../../assets/images/64149f79022d0c6fbcce4788_Testimonial\ Scribble\ 01.svg),url(../../assets/images/64149f79022d0ce154ce4785_Testimonial\ Scribble\ 02.svg)";
//     sliderText.style.backgroundPosition = "0% 0%,100% 0%";
// }

// const b = document.querySelector(".bg-img-mobile-slider-text");
// console.log(bh.clientWidth);

// console.log()



