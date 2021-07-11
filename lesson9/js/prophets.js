const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

for (let i = 0; i < prophets.length; i++ ) {

  let card = document.createElement('section');


  let h2 = document.createElement('h2');
  let img = document.createElement("img")

  h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;


  img.setAttribute('src', prophets[i].imageurl);
  img.setAttribute('alt', "The official portrait of ${prophets[i].name} ${prophets[i].lastname}! ");

  card.appendChild(h2);
  card.appendChild(img);


  document.querySelector('div.cards').appendChild(card);



}
      });




