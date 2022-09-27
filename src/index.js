
async function getCoordinates(name) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=38e5c0d2f94d0db0af3651a34cae725c`);
    const data = await response.json();
    return [data[0].lat, data[0].lon];
}

console.log(getCoordinates('london'));