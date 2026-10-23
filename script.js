// ======================================
// SCROLL ANIMATIONS
// ======================================

const revealElements = document.querySelectorAll(".reveal");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

} else if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


// ======================================
// EXPERIENCE CARD INTERACTIONS
// ======================================

document.querySelectorAll(".experience-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateX(5px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateX(0)";
    });

});


// ======================================
// NAVIGATION LINK INTERACTIONS
// ======================================

document.querySelectorAll('.nav-links a').forEach((link) => {

    link.addEventListener("click", () => {

        document.querySelectorAll('.nav-links a').forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

    });

});
