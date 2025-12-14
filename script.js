//LocomotiveScroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from (
    ".first-top-heading", {
        opacity: 0,
        y: 100,
        duration: 0.5,
    }
)
gsap.from (
    ".second-top-heading", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        delay: 0.4,
    }
)
gsap.from (
    ".third-top-heading", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        delay: 0.7,
    }
)

// // <!-- svg circle rotate animation -->
// gsap.to(".svg-circle", {
//     rotation: 360,
//     transformOrigin: "50% 50%",
//     repeat: -1,
//     duration: 10,
//     ease: "linear",
// })

