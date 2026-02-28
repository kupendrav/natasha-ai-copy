// ============================================
// About Page - GSAP Animations & Custom Cursor
// Natasha.ai
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ---- Custom Animated Cursor ----
  const cursor = document.querySelector(".custom-cursor");
  const follower = document.querySelector(".cursor-follower");

  if (cursor && follower) {
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let followerX = 0,
      followerY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;
      gsap.set(cursor, { x: cursorX, y: cursorY });

      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      gsap.set(follower, { x: followerX, y: followerY });
    });

    const hoverTargets = document.querySelectorAll(
      "a, button, .nav-button, .answer, .answer span, .feature_container1, li"
    );

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
        follower.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
        follower.classList.remove("hover");
      });
    });

    document.addEventListener("mousedown", () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.15, ease: "power2.out" });
      gsap.to(follower, { scale: 0.6, duration: 0.2, ease: "power2.out" });
    });

    document.addEventListener("mouseup", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)",
      });
    });
  }

  // ---- Nav Animation ----
  gsap.from("nav", {
    y: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.1,
  });

  // ---- About Hero Animation ----
  const aboutHero = document.querySelector(".about-hero");
  if (aboutHero) {
    gsap.to(aboutHero, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }

  // ---- FAQ Section Animation ----
  const faqContainer = document.querySelector(".faqContainer");
  if (faqContainer) {
    gsap.to(faqContainer, {
      scrollTrigger: {
        trigger: faqContainer,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }

  // ---- FAQ Answers stagger ----
  const answers = document.querySelectorAll(".answer");
  if (answers.length) {
    gsap.from(answers, {
      scrollTrigger: {
        trigger: ".faqContainer",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  // ---- Feature Cards Animation ----
  const featureCards = document.querySelectorAll(".feature_container1");
  if (featureCards.length) {
    featureCards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
      });
    });
  }

  // ---- Footer Animation ----
  const footer = document.querySelector("footer");
  if (footer) {
    gsap.from(footer, {
      scrollTrigger: {
        trigger: footer,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }

  // ---- Footer Links Stagger ----
  const footerLinks = document.querySelectorAll(".footer-links a");
  if (footerLinks.length) {
    gsap.from(footerLinks, {
      scrollTrigger: {
        trigger: ".footer-links",
        start: "top 95%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 15,
      scale: 0.8,
      stagger: 0.15,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }

  // ---- Logo float ----
  const logo = document.querySelector(".nav-company-logo");
  if (logo) {
    gsap.to(logo, {
      y: -3,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }
});
