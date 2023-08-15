export function animateHeader(gsap) {
  let posTop;
  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".section__header-wrapper",
      start: "top+=1px top",
      end: "+=800",
      //scrub: 1,
      toggleActions: "play none none reverse",
      pin: true,
      onUpdate: (self) => {
        if (posTop < self.scroller.pageYOffset) tlHeader.play();
      },
    },
  });
  tlHeader.set(".section__header-subtitle", { opacity: 0, yPercent: 100 });
  tlHeader.set(".section__header-title", { color: "#000" });
  tlHeader.set(".section__header-img", { xPercent: -400 });
  tlHeader.to(".section__header-img", {
    xPercent: -10,
    duration: 3,
  });

  tlHeader.to(
    ".section__header-title",
    {
      color: "#fff", duration: 1.5, onComplete: () => {
        posTop = window.scrollY;
        tlHeader.pause();
      }
    }, "-=1.5"
  );
  tlHeader.to(
    ".section__header-img",
    { xPercent: 6, yPercent: -13, duration: 1 },
    "+=0.5"
  );
  tlHeader.to(
    ".section__header-title",
    {
      top: "41%", yPercent: -41, duration: 1
    },
    "-=1"
  );
  tlHeader.to(
    ".section__header-subtitle",
    {
      opacity: 1, yPercent: 0, onComplete: () => {
        posTop = window.scrollY;
        tlHeader.pause();
      }
    },
    "-=0.5"
  );
  tlHeader.to(
    ".section__header",
    { scale: "10", duration: 3 },
  );
  tlHeader.to(".section__header-title", { opacity: 0, duration: 0.1 }, "-=0.7");
}