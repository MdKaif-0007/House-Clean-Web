const menuBar = document.querySelector(".menu-bar");
const navList = document.querySelector(".nav-list");

const aboutUs = document.querySelector("#about-us");
const aboutUsList = document.querySelector(".about-us-list");

const aboutUsListMq = document.querySelectorAll(".about-us-list li");



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





//mediaquery max-width 780px about us button

aboutUs.addEventListener("click", () => {
    if(window.innerWidth < 780){
        aboutUsListMq.forEach(list => {
            list.classList.toggle("active");
        });

    }
});

aboutUs.addEventListener("mouseover", () => {
    if(window.innerWidth < 780){
        if(aboutUs){
            aboutUsList.style.display = "none";
        }
        if(aboutUs){
            aboutUsList.style.display = "block";
        }
    }
});
aboutUs.addEventListener("mouseout", () => {
    if(window.innerWidth < 780){
        if(aboutUs){
            aboutUsList.style.display = "block";
        }
    }
});
