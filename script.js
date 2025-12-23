// Smooth scroll
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
};

// GSAP animations
gsap.from(".logo", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero-text h2", { x: -100, opacity: 0, duration: 1.2 });
gsap.from(".hero-text p", { x: 100, opacity: 0, duration: 1.2 });
gsap.from("button", { scale: 0, duration: 1, delay: 0.5 });
gsap.from(".card", {
  scrollTrigger: ".menu",
  y: 50,
  opacity: 0,
  stagger: 0.3
});