import axios from 'axios';

export const getWeather = async (latitude, longitude) =>
{
    //lat=36.7204742&lon=-4.4434064
    let option = null;
    await axios.get("https://api.open-meteo.com/v1/forecast?latitude=" +
        latitude + "&longitude=" + longitude + "&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=GMT").then(
            (response) => { option = response.data; }
        ).catch((error) => { option = null; });
    //console.log(option.coord.lon);
    return option;
};

