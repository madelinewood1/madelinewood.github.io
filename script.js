// Reveal sections as the user scrolls

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".section, .experience-card").forEach((el) => {
  observer.observe(el);
});


// Subtle cursor interaction on experience cards

document.querySelectorAll(".experience-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateX(5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateX(0)";
  });
});
