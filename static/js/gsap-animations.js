// ============================================
// GSAP Animations & Custom Animated Cursor
// Natasha.ai - Smooth & Elegant Animations
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger first
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

    // Smooth cursor follow using GSAP ticker
    gsap.ticker.add(() => {
      // Inner cursor - fast follow
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;
      gsap.set(cursor, { x: cursorX, y: cursorY });

      // Outer follower - slower, trailing follow
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      gsap.set(follower, { x: followerX, y: followerY });
    });

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll(
      "a, button, input, .nav-button, .search-btn, .search-btn1, .mic-btn, .feature_container1, .answer span"
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

    // Click pulse animation
    document.addEventListener("mousedown", () => {
      gsap.to(cursor, {
        scale: 0.7,
        duration: 0.15,
        ease: "power2.out",
      });
      gsap.to(follower, {
        scale: 0.6,
        duration: 0.2,
        ease: "power2.out",
      });
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

  // ---- Hero Section Animations ----
  const heroTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  heroTimeline
    .to("#hero-title, .about", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
    })
    .to(
      "#hero-desc, .description",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.5"
    )
    .to(
      ".input-container",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.4"
    )
    .to(
      ".search-btn1",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.3"
    );

  // ---- Nav Animation ----
  gsap.from("nav", {
    y: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.1,
  });

  // ---- Chat Panel / Other Details - Scroll Triggered ----
  const otherDetails = document.querySelector(".other-details");
  if (otherDetails) {
    gsap.to(otherDetails, {
      scrollTrigger: {
        trigger: otherDetails,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
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

  // ---- Wave Container Pulse ----
  const waveContainer = document.querySelector(".waveContainer");
  if (waveContainer) {
    gsap.fromTo(
      ".boxContainer .box",
      { scaleY: 0.4 },
      {
        scaleY: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        repeat: -1,
        yoyo: true,
      }
    );
  }

  // ---- Chat container entrance ----
  const chatContainers = document.querySelectorAll(".chat-container1");
  if (chatContainers.length) {
    gsap.from(chatContainers, {
      scrollTrigger: {
        trigger: ".final-chat-container",
        start: "top 80%",
      },
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  // ---- Subtle floating animation for the logo ----
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

  // ---- Input focus glow animation ----
  const promptInput = document.querySelector(".prompt-input");
  if (promptInput) {
    promptInput.addEventListener("focus", () => {
      gsap.to(".input-container", {
        boxShadow: "0 0 30px rgba(147, 51, 234, 0.15)",
        duration: 0.4,
        ease: "power2.out",
      });
    });
    promptInput.addEventListener("blur", () => {
      gsap.to(".input-container", {
        boxShadow: "none",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }
});
