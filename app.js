const toggleHamburger = document.getElementById("toggle-hamburger");
const toggleClose = document.getElementById("toggle-close");
const mobileNavigationToggle = document.querySelector('.mobile-navigation-toggle');
const mobileNavigationList = document.getElementById('mobile-navigation-list')

const mobileNavigation = document.querySelector('.mobile-navigation');

function openMenu() {
    mobileNavigation.classList.add("active");
    toggleHamburger.style.display = "none";
    toggleClose.style.display = "block";
}

function closeMenu() {
    mobileNavigation.classList.remove("active");
    toggleHamburger.style.display = "block";
    toggleClose.style.display = "none";
}

toggleHamburger.addEventListener("click", openMenu);
toggleClose.addEventListener("click", closeMenu);

mobileNavigationList.addEventListener("click", closeMenu);
