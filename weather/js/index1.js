
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




const images = document.querySelectorAll("[data-src]");


function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.removeAttribute("data-src")
}



const imgOptions = {
    threshold: 1,
    rootMargin:"0px 0px 100px 0px"
};

const imageObserver = new IntersectionObserver((entries, imageObserver) => { 


    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imgOptions);


images.forEach(image => {
    imageObserver.observe(image);
});
    


function adjustRating(Stormseverity) {
    document.getElementById("ratingvalue").innerHTML = Stormseverity;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}