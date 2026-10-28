const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");
const yearElement = document.getElementById("year");

// let is used because this variable can change.
let menuIsOpen = false;

/* ---------- MOBILE NAVIGATION ---------- */

menuToggle.addEventListener("click", function () {
    menuIsOpen = !menuIsOpen;

    navLinks.classList.toggle("active", menuIsOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(menuIsOpen)
    );

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});

/* ---------- INTERNAL NAVIGATION ---------- */

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        menuIsOpen = false;

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

/* ---------- AUTOMATIC COPYRIGHT YEAR ---------- */

const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;
