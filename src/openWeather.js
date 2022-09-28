
const KEY = '38e5c0d2f94d0db0af3651a34cae725c';
async function getCoordinates(name) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${KEY}`,{mode: "cors"});
    const data = await response.json();
    return data[0];
}

// imperial = farenheit, metric = celsius
async function getCurrentData(name, units = 'metric') {
    const { lat, lon } = await getCoordinates(name);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${KEY}`, {mode: 'cors'});
    return response.json();
}

async function getDailyData(name, units = 'metric') {
    const { lat, lon } = await getCoordinates(name);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${KEY}`, { mode: 'cors' });
    return response.json();
}


export { getCoordinates, getCurrentData, getDailyData};
