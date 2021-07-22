




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

/* for my rental table*/
  const requestURL = "rental.json";

  fetch(requestURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonObject) {
          //console.table(jsonObject);  // temporary checking for valid response and data parsing
  let tools = document.querySelector(".tools")
          const rental = jsonObject['rental'];
// creating the rows for the table
          let table = document.createElement('table');
          let row1 = document.createElement('tr');
          let row2 = document.createElement('tr');
          let row3 = document.createElement('tr');
//creating the headers for the table
          let head = document.createElement('th');
          let head1 = document.createElement('th');
          let head2 = document.createElement('th');
          let head3 = document.createElement('th');
          let head4 = document.createElement('th');
          let head5 = document.createElement('th');
          let head6 = document.createElement('th');
          let head7 = document.createElement('th');
          let head8 = document.createElement('th');
          let head9 = document.createElement('th');
//targetting a particular head
        head.classList.add("headstyle");
          

          head.innerHTML =  "Max Persons and Price Chart (includes Tax)" 
          head.colSpan = "6"

          head1.innerHTML =  "" 
          head1.colSpan = "2"
          head2.innerHTML = "Reservation"
          head2.colSpan = "2"
          head3.innerHTML = "Walk-in"
          head3.colSpan = "2"
          head4.innerHTML = "Rent Type "
          head5.innerHTML = "Max. Persons " 
          head6.innerHTML = "Half Day(3hrs)"
          head7.innerHTML = "Full Day"
          head8.innerHTML = "Half Day(3 hrs)"
          head9.innerHTML = "Full Day"
//adding the head elements to their correct rows
          row1.appendChild(head)
          row2.appendChild(head1)
          row2.appendChild(head2)
          row2.appendChild(head3)
          row3.appendChild(head4)
          row3.appendChild(head5)
          row3.appendChild(head6)
          row3.appendChild(head7)
          row3.appendChild(head8)
          row3.appendChild(head9)
//adding the rows to be a part of the table
        table.appendChild(row1)

        table.appendChild(row2)
        table.appendChild(row3)

  
  
  for (let i = 0; i < rental.length; i++ ) {
//making a row to put ny data in
    let row = document.createElement('tr');
//making the individual columns to put data in
    let Renttype = document.createElement('td');
    let MaxPersons = document.createElement('td');
    let HalfDay1 = document.createElement('td');
    let FullDay1 = document.createElement('td');
    let HalfDay2 = document.createElement('td');
    let FullDay2 = document.createElement('td');
//assigning tthe data, taking the columns we made and oputting the data into it
    Renttype.innerHTML = rental[i].Renttype
    MaxPersons.innerHTML = rental[i].Maxpersons
    HalfDay1.innerHTML = rental[i].hDayR
    FullDay1.innerHTML = rental[i].fDayR
    HalfDay2.innerHTML = rental[i].hDayW
    FullDay2.innerHTML = rental[i].fDayW
    
//telling the column to be part of the rows made
    row.appendChild(Renttype)
    row.appendChild(MaxPersons)
    row.appendChild(HalfDay1)
    row.appendChild(FullDay1)
    row.appendChild(HalfDay2)
    row.appendChild(FullDay2)


//adding the rows to be a part of the table

    table.appendChild(row)
    





    
    
    
    
    

  
    
  
  
   

    
  
  }
     tools.appendChild(table)


    tools.classList.add("mystyle");



        });
  
  
  
  
  