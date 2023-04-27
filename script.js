const apiKey = 'd753c1ae34229cd9590965f41b248c6d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const search = document.querySelector('.search input');
const searchBtn = document.querySelector('.icon')

async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h"
}

searchBtn.addEventListener('click', ()=>{
    getWeather(search.value);
})

search.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        getWeather(search.value);
    }
})