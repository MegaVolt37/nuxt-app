export function animateModeling(gsap, tl) {
  const lEase = gsap.parseEase("linear");
  const tlModeling = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__modeling",
      start: "top top",
      scrub: 1,
      // pin: true
    },
  });
  tl.fromTo(
    ".section__modeling-text",
    {
      opacity: 0,
      xPercent: -150,
    },
    {
      xPercent: 0,
      opacity: 1,
      duration: 24,
    },
    "<-=24"
  );
  tl.to(
    ".section__modeling",
    {
      top: "-100%",
      duration: 40,
      ease: "none",
    },
    ">"
  );
  tl.to(
    ".section__render",
    {
      top: 0,
      duration: 40,
      ease: "none",
      // onStart: () => {
      //   gsap.set(".section__render", {
      //     marginTop: "-0.25vh",
      //   });
      // },
      // onComplete: () => {
      //   gsap.set(".section__render", {
      //     marginTop: "0px",
      //   });
      // },
    },
    "<"
  );

  return tlModeling;
}
