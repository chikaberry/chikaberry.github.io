
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



const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        console.log(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name === "Soda Springs" || towns[i].name === "Fish Haven" || towns[i].name === "Preston") {
                let info = document.createElement('section');
                let writings = document.createElement('div');
                let pictures = document.createElement('div');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let motto = document.createElement('p');
                let year = document.createElement('p');
                let img = document.createElement('img');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');

                h2.innerHTML = `${towns[i].name} <span class="black"></span>`;
                h3.innerHTML = `${towns[i].motto} <span class="black"></span>`;
                year.innerHTML = `Year Founded: ${towns[i].yearFounded} <span class="black"></span>`;
                population.innerHTML = `Population: ${towns[i].currentPopulation} <span class="black"></span>`;
                rainfall.innerHTML = `Annual Rain: ${towns[i].averageRainfall} <span class="black"></span>`;
                img.setAttribute('src', "images/" + towns[i].photo);
                img.setAttribute('class', 'image1size')
                img.setAttribute('Alt', `The offical portrait of ${towns[i].name}!`);
                writings.setAttribute('class', 'writings');
                info.setAttribute('class', 'info')



                writings.append(h2);
                writings.append(h3);
                writings.append(motto);
                writings.append(year);
                writings.append(population);
                writings.append(rainfall);
                pictures.append(img)
                info.append(pictures);
                info.append(writings);

                document.querySelector('div.individual').append(info);
            }
        };
    });

    