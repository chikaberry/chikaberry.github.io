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

            if (towns[i].name === "Soda Springs") {
                
                let event = document.createElement('section');



                let first = document.createElement('p')
                let second = document.createElement('p')
                let third = document.createElement('p')
                

               
                first.textContent = `${towns[i].events[0]} `;
                second.textContent = `${towns[i].events[1]} `;
                third.textContent = `${towns[i].events[2]} `;
                
                event.append(first);
                event.append(second);
                event.append(third)


                document.querySelector('div.activity').appendChild(event);
            }

            
        };




    });