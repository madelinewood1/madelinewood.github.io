// ======================================
// PHOTO LOADING
// ======================================

const profilePhoto = document.getElementById("profile-photo");
const photoError = document.getElementById("photo-error");

if (profilePhoto && photoError) {

    profilePhoto.addEventListener("error", () => {

        console.error(
            "Profile photo could not be loaded:",
            profilePhoto.src
        );

        photoError.hidden = false;

    });

    profilePhoto.addEventListener("load", () => {

        photoError.hidden = true;

    });

    // Handle images that failed before this script ran
    if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {

        photoError.hidden = false;

    }
}


// ======================================
// SCROLL ANIMATIONS
// ======================================

const revealElements = document.querySelectorAll(".reveal");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (
    !reducedMotion &&
    "IntersectionObserver" in window
) {

    document.documentElement.classList.add("js-enabled");

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

}


// ======================================
// EXPERIENCE CARD INTERACTIONS
// ======================================

if (!reducedMotion) {

    document.querySelectorAll(".experience-card").forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateX(5px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateX(0)";

        });

    });

}


// ======================================
// SOCIAL MEDIA LINKS
// ======================================

// The links work directly through HTML.
// JavaScript is not required to open them.

const socialLinks = document.querySelectorAll(".social-link");

socialLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log("Opening:", link.href);

    });

});


// ======================================
// NAVIGATION
// ======================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigationLinks.forEach((navLink) => {

            navLink.classList.remove("active");

        });

        link.classList.add("active");

    });

});
