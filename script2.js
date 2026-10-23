// ======================================
// SOCIAL MEDIA LINK ANIMATIONS
// ======================================

document.querySelectorAll(".social-link").forEach((link) => {

    const arrow = link.querySelector(".social-arrow");

    if (!arrow) return;

    link.addEventListener("mouseenter", () => {
        arrow.style.transform = "translate(5px, -5px)";
    });

    link.addEventListener("mouseleave", () => {
        arrow.style.transform = "translate(0, 0)";
    });

});
