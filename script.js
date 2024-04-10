



const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
  
});














const t2 = gsap.timeline({
  repeat: -1,
});

t2.from(".scroll>h3", 1, {
  y: -50,
  opacity: 0,
});

t2.to(".scroll>h3", 1, {
  y: 50,
  opacity: 0,
});

const tl = gsap.timeline();

tl.from(".page1>h1>span", {
  width: 0,
  duration: 1,
  ease: "power4.inOut",
});

gsap.to(".scroller1", {
  x: "-100%",
  duration: 10,
  repeat: -1,
  ease: "linear",
});

gsap.to(".moved>.moving1", {
  x: "-100%",
  duration: 1.5,
  repeat: -1,
  ease: "linear",
});

const btn = document.querySelector(".page3>button");
const img = document.querySelector(".page3>img");

btn.addEventListener("mouseenter", () => {
  gsap.to(img, {
    scale: 0.95,
    ease: "linear",
  });
});
btn.addEventListener("mouseleave", () => {
  gsap.to(img, {
    scale: 1,
    ease: "linear",
  });
});

const line = document.querySelectorAll(".circle>.mini>.line");

window.addEventListener("mousemove", (dets) => {
  let mouseX = dets.clientX;
  let mouseY = dets.clientY;

  let deltaX = mouseX - window.innerWidth / 2;
  let deltaY = mouseY - window.innerHeight / 2;

  var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  line.forEach((elem) => {
    elem.style.rotate = `${angle - 180}deg`;
  });
});

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let heading1 = document.querySelector("#heading1");
let heading2 = document.querySelector("#heading2");

box1.addEventListener("mouseenter", () => {
  gsap.to(heading1, 0.3, {
    y: "0",
    ease: "Expo.easeInOut",
  });

  gsap.to(box1, {
    scale: 0.95,
  });
});

box1.addEventListener("mouseleave", () => {
  gsap.to(heading1, 0.3, {
    y: "130",
    ease: "Expo.easeInOut",
  });
  gsap.to(box1, {
    scale: 1,
  });
});

box2.addEventListener("mouseenter", () => {
  gsap.to(heading2, 0.3, {
    y: "0",
    ease: "Expo.easeInOut",
  });
  gsap.to(box2, {
    scale: 0.95,
  });
});

box2.addEventListener("mouseleave", () => {
  gsap.to(heading2, 0.3, {
    y: "130",
    ease: "Expo.easeInOut",
  });
  gsap.to(box2, {
    scale: 1,
  });
});


const btn1 = document.getElementById("btn");

btn1.addEventListener("click",()=>{
  scroll.scrollTo(0)
 
})



