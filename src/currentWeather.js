
import { getCurrentData, getCoordinates} from "./openWeather"

async function CurrentWeather(location) {
    const data = await getCurrentData(location);
    const coords = await getCoordinates(location);
    const name = `${coords.name}, ${coords.country}`;
    const { main: weather, description, icon } = data.weather[0];
    const { temp: temperature, feels_like: feels, pressure, humidity } = data.main;
    const { deg: windDegree, speed: windSpeed } = data.wind;

    return {
        name, weather, description, icon,
        temperature, feels, pressure, humidity,
        windDegree, windSpeed
    }
}

export default CurrentWeather;