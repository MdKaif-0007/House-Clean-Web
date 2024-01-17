const menuBar = document.querySelector(".menu-bar");
const navList = document.querySelector(".nav-list");

const aboutUs = document.querySelector("#about-us");
const aboutUsList = document.querySelector(".about-us-list");

const contactUs = document.querySelector("#contact-us");
const contactNumber = document.querySelector(".contact-number");


//menu bar button

menuBar.addEventListener("click", () => {
    navList.classList.toggle("active");
});


// about us button

aboutUs.addEventListener("mouseover", () => {
    if(aboutUs){
        aboutUsList.style.display = "block";
    }
});
aboutUs.addEventListener("mouseout", () => {
    if(aboutUs){
        aboutUsList.style.display = "none";
    }
});


//contact us

contactUs.addEventListener("click", () => {
    contactNumber.classList.toggle("active");
})



