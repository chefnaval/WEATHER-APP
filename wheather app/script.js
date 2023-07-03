// const url = 'https://pl12133-weatherspot-v1.p.rapidapi.com/db/query.php';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b4e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
//      .then(response=> response.json())
//      .then(response => console.log(response))
//      .catch(err => console.error(err));



// const url = 'https://pl12133-weatherspot-v1.p.rapidapi.com/db/query.php';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'da430141f2msh3dd164321f844dbp1c8985jsn560e4af7f016',
// 		'X-RapidAPI-Host': 'pl12133-weatherspot-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
//     console.log(response);
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// } 

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
//   params: {
//     text: 'fishermans wharf',
//     language: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'da430141f2msh3dd164321f844dbp1c8985jsn560e4af7f016',
//     'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
