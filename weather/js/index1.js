
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



/* code for weather api*/


const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=78c2c821dcd0ee04582197e03a036b7b";
const apiURLW = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=78c2c821dcd0ee04582197e03a036b7b";


fetch(apiURLW)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    document.querySelector('#shortforecast').textContent = jsObject.weather[0].description;
    document.querySelector('#temperature').innerHTML = jsObject.main.temp.toFixed(0);
    document.querySelector('#humidity').textContent = jsObject.main.humidity;
    document.querySelector('#speed').textContent = jsObject.wind.speed.toFixed(0);

    let t = jsObject.main.temp; 
    let ws = jsObject.wind.speed;
    
    function windChill(tempF, speed) {
      if (tempF <= 58 && speed > 3) {
          let f = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + (0.4275 * tempF * (speed ** 0.16));
          return f;
      } else {
          let f = "N/A";
          return f;
  
      }
  }

  let value = windChill(t, ws);
  

  document.getElementById('winchill').textContent =value;

  });

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //this line using the current-temp ID and adds the main, temperature in the JSON file
    //document.getElementById('current-temp').textContent = jsObject.main.temp;

    //const topp = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    //const desc = jsObject.weather[0].description; // note how we reference the weather array
    //document.getElementsByClassName('topp').textContent = topp; // informational specification only
    //document.getElementById('icon').setAttribute('src', topp); // focus on the setAttribute() method
    //document.getElementById('icon').setAttribute('alt', desc);

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = 0;
    

    //Makes the list array 5
    const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    

    console.log(fiveDayForecast);

    fiveDayForecast.forEach(x => {

       
      let d = new Date(x.dt_txt);

      let topp = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
      let desc = x.weather[0].description;


      document.getElementById(`col-head${day+1}`).textContent =week[d.getDay()];
      document.getElementById(`forecast${day+1}`).innerHTML = x.main.temp;
      
      document.getElementById(`icon${day+1}`).setAttribute('src', topp);
      document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      day++;

    });

  });




  /*Events Js

 

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
              let event = document.createElement('section');
              

              event.innerHTML = `${towns[i].events} <span class="black"></span>`;


              document.querySelector('div.activity').append(event);
          }

          
      };




  });*/