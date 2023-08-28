export function animateModeling(gsap, tl) {
  const tlModeling = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__modeling",
      start: "top top",
      toggleActions: "play none none reverse",
    },
  });
  tlModeling.fromTo(".section__modeling-text", {
    opacity: 0, xPercent: -150
  }, {
    scrollTrigger: {
      trigger: ".section__modeling",
      toggleActions: "play none none reverse",
    },
    xPercent: 0,
    opacity: 1,
    duration: 1
  })
  tlModeling.to(".section__modeling", {
    y: "-100%",
    duration: 1
  }, "+=1.5");
  tlModeling.to(".section__render", {
    y: 0,
    duration: 1
  }, "-=1.4");
}