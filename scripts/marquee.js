const section = document.querySelector("#reports");
const container = document.querySelector("#reports-container");

function horizontalScroll(){

const scrollStart = section.offsetTop;
const scrollEnd = scrollStart + section.offsetHeight - window.innerHeight;

const scrollY = window.scrollY;

if(scrollY >= scrollStart && scrollY <= scrollEnd){

const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);

const maxMove = container.scrollWidth - window.innerWidth;

container.style.transform = `translateX(${-progress * maxMove}px)`;

}

}

window.addEventListener("scroll", horizontalScroll);