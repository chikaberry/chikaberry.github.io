
let thedate = new Date();
console.thedate
if (thedate.getDay() == 5) {
    document.querySelector('.banner').style.display = 'block';


} else{
    document.querySelector('.banner').style.display = 'none';
}

/*the =display else helps to not display it if it doesnt meet the condition.*/





document.querySelector('#lastmod').textContent = document.lastModified;

let currentYear = "2021";
let yearElement = document.querySelector('#year')
yearElement.textContent = currentYear;


document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});






function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}


