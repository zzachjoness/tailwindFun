const hamburger = document.getElementById("hamburger-button");
const open = document.getElementById("hamburger-open");
const close = document.getElementById("hamburger-close");
const mobileMenu = document.getElementById("mobile-menu");
const MobileMenuSelect = document.getElementById("mobile-menu-select");
const body = document.getElementById("body");
open.addEventListener("click", ()=>{
    open.setAttribute("class", "hidden");
    close.setAttribute("class", "block h-6 w-6");
    mobileMenu.setAttribute("class", "flex sm:hidden overflow-hidden");
    body.setAttribute("class", "overflow-hidden");
});
close.addEventListener("click", ()=>{
    close.setAttribute("class", "hidden");
    open.setAttribute("class", "block h-6 w-6");
    mobileMenu.setAttribute("class", "hidden");
    body.setAttribute("class", "");
});
MobileMenuSelect.addEventListener("click", ()=>{
    mobileMenu.setAttribute("class", "hidden");
    body.setAttribute("class", "");
});

//# sourceMappingURL=index.816e7b21.js.map
