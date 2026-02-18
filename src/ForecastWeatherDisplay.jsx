import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import './CurrentWeatherDisplay.css'
import { formatLocalTime } from "./lib/WeatherApiHelper";
import { useWeather } from "./lib/Weatherhooks.js";
import { getUvClass } from './lib/WeatherApiHelper';

export default function ForecastWeatherDisplay({alignment}) {
    const { data: weather, loading, error } = useWeather("forecast", 3);
    console.log("Weather data:", weather)
    const forecastHelp = weather?.forecast?.forecastday?.[alignment]

    if (loading) {
        return <p>Loading...</p>;
    }


    return {
        top:(<>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {weather?.location?.name}
                <br />
                {weather?.location?.region}
            </Typography>
        </>),
        left:(
        <>
            <Typography variant="h5" component="div">
Placeholder
            </Typography>
        </>
    ),

    middle:(
        <>
            <Typography variant="h5" component="div">
                High: {forecastHelp?.day?.maxtemp_f}
                <br />
                Low: {forecastHelp?.day?.mintemp_f}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                <img src={forecastHelp?.day?.condition?.icon} alt="" />
            </Typography>
            <Typography variant="body2">
                {forecastHelp?.day?.condition?.text}
                <br />
                <span>1PM UV: </span>
                <span className={getUvClass(forecastHelp?.hour?.[13]?.uv)}>
                    <b>{forecastHelp?.hour?.[13]?.uv}</b>
                </span>
            </Typography>
        </>
    ),
    right:(
          <>
            <Typography variant="h5" component="div">
Placeholder
            </Typography>
        </>
    ),
    bottom:(
        <>
                    <Typography size="small">Last Updated: {formatLocalTime(weather?.location?.localtime)}</Typography>
        </>
    )

}
}
