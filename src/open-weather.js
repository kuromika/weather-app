
const key = '38e5c0d2f94d0db0af3651a34cae725c';
async function getCoordinates(name) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${key}`);
    const data = await response.json();
    return data;
}

// imperial = farenheit, metric = celsius
async function getWeatherData(name, units) {
    const [lat, lon] = await getCoordinates(name);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`);
    const data = await response.json();
    return data;
}


export { getCoordinates, getWeatherData };