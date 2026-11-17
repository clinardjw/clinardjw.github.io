const modal = document.getElementById("modal");
const contactButton = document.getElementById("contactModal");
const modalClose = document.getElementById("modalClose");
const navbar = document.getElementById("navbar");

function openModal() {
    modal.classList.add("open");
    modalClose.focus();
}

function closeModal() {
    modal.classList.remove("open");
    contactButton.focus();
}

contactButton.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

// Close when clicking the dimmed backdrop or pressing Escape
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
    }
});

// Give the navbar a solid background once you scroll past the top
function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateNavbar, { passive: true });
updateNavbar();

document.getElementById("year").textContent = new Date().getFullYear();