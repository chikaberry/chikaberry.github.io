
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


