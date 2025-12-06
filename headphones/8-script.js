const hamburger = document.getElementById("hamburger");
const sideNav = document.getElementById("sideNav");
const closeNav = document.getElementById("closeNav");
const pageContent = document.getElementById("pageContent");

// OPEN MENU
hamburger.addEventListener("click", () => {
    sideNav.classList.add("open");
    pageContent.classList.add("shifted");
});

// CLOSE MENU
closeNav.addEventListener("click", () => {
    sideNav.classList.remove("open");
    pageContent.classList.remove("shifted");
});

// Clicking outside closes menu
pageContent.addEventListener("click", () => {
    if (sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        pageContent.classList.remove("shifted");
    }
});
