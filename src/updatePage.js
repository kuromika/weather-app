import CurrentWeather from "./currentWeather";
import updateElement from "./updateElement";


function updateConditions(feels, pressure, humidity) {
    updateElement('feels-like', `${feels} °`);
    updateElement('pressure', `${pressure} hPa`);
    updateElement('humidity', `${humidity}%`);
}

function updateWind(degree, speed) {
    updateElement('wind-degree', `${degree} °`);
    updateElement('wind-speed', `${speed} km/h`);
}

function updateMain(location, weather, description, temperature) {
    updateElement('location', location);
    updateElement('weather', weather);
    updateElement('weather-img', null, `./img/${weather}.png`);
    updateElement('description', description);
    updateElement('temperature', `${temperature} °C`);
}

async function updatePage(location) {
    const weather = await CurrentWeather(location);
    updateConditions(weather.feels, weather.pressure, weather.humidity);
    updateWind(weather.windDegree, weather.windSpeed);
    updateMain(weather.name, weather.weather, weather.description, weather.temperature);
}

export default updatePage;


