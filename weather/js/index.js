document.querySelector('#lastmod').textContent = document.lastModified;

let currentYear = "2021";
let yearElement = document.querySelector('#year')
yearElement.textContent = currentYear;



function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}
