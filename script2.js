// ======================================
// SCROLL ANIMATIONS
// ======================================

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    // Stop observing once visible
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    document.querySelectorAll(".reveal").forEach((element) => {

        observer.observe(element);

    });

} else {

    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll(".reveal").forEach((element) => {

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
