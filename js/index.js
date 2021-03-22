gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  defaults: {
    duration: 2,
    ease: "elastic",
  },
});
tl.to(".ball-2", {
  scale: 2,
}).to(
  ".ball-2",
  {
    // x: 500,
    // x: window.innerWidth / 2,
    x: "50vw",
    xPercent: -50,
  },
  "-=1"
);

ScrollTrigger.create({
  animation: tl,
  trigger: "#section-2",
  start: "top 25%",
  end: "bottom 75%",
  markers: true,
  scrub: true,
});

gsap.from(".ball-3", {
  x: 300,
  scale: 0.3,
  rotation: 360,
  duration: 2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".ball-3",
    // markers: true,
    start: "center center",
    end: "center 25%",
    scrub: true,
  },
});

gsap.from(".ball-4", {
  yPercent: 100,
  stagger: 0.3,
  ease: "none",
  scrollTrigger: {
    trigger: ".ball-4",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    // markers: true,
  },
});

ScrollTrigger.create({
  trigger: ".ball-5",
  start: "top center",
  end: "top 100px",
  toggleClass: "active",
  //   toggleClass: { targets: "#produkt1 h1", className: "active" },
  once: true,
  // markers: true,
});

//
// gsap.to(".ball-2", {
//   x: 200,
//   duration: 2,
//   ease: "elastic.out(1, 0.3)",
//   scrollTrigger: {
//     trigger: ".ball-2",
//     start: "top center",
//     toggleActions: "restart pause reverse pause",
//     // markers: true,
//     scrub: true,
//   },
// });
//
// gsap.from(".ball-3", {
//   opacity: 0,
//   scale: 0.3,
//   duration: 2,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".ball-3",
//     start: "top center",
//     end: "center top",
//     scrub: true,
//     markers: true,
//   },
// });
//
