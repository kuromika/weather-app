
import { getCurrentData, getCoordinates} from "./openWeather"

async function CurrentWeather(location) {
    const dataPromise = getCurrentData(location);
    const coordsPromise = getCoordinates(location);
    const [data, coords] = await Promise.all([dataPromise, coordsPromise]);

    const name = `${coords.name}, ${coords.country}`;
    const { main: weather, description} = data.weather[0];
    const { temp: temperature, feels_like: feels, pressure, humidity } = data.main;
    const { deg: windDegree, speed: windSpeed } = data.wind;


    return {
        name, weather, description,
        temperature, feels, pressure, humidity,
        windDegree, windSpeed
    }
}

export default CurrentWeather;