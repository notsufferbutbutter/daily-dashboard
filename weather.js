const API_KEY = YOUR_OPEN_WEATHER_API;

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`Your location: ${lat}, ${lon}`)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:nth-child(2)")
        const temp = document.querySelector("#weather span:last-child")
        city.innerText = `${data.name} - `;
        weather.innerText = data.weather[0].main
        temp.innerText = ` - ${data.main.temp}ºC`
    })

}

function onGeoError(){
    alert("Cannot find your location. No weather being showed")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)