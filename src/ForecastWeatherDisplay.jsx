import { Box, Card, CardContent, Button, Typography,Stack } from '@mui/material';
import './CurrentWeatherDisplay.css'
import { formatLocalTime } from "./lib/WeatherApiHelper";
import { useWeather } from "./lib/Weatherhooks.js";
import { getUvClass } from './lib/WeatherApiHelper';
import Sunrise from './Sunrise.jsx';
import { getForecastForDay } from './lib/WeatherApiHelper';
import Sunset from './Sunset.jsx';

export default function ForecastWeatherDisplay({alignment}) {
    const { data: weather, loading, error } = useWeather("forecast", 3);
    const forecastHelp = getForecastForDay(weather, alignment);


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
        <Stack
     direction="column"
    justifyContent="space-between"
    height="100%">
        <Stack>
<Sunrise forecast={forecastHelp}/>
            </Stack>
            <Typography>
                Chance of Rain  {forecastHelp?.day?.daily_chance_of_rain}   %
            </Typography>
        </Stack >
    ),

    middle:(
        <Stack>
            <Typography variant="h5" component="div">
                High: {forecastHelp?.day?.maxtemp_f != null
  ? Math.floor(forecastHelp.day.maxtemp_f)
  : ""}
</Typography>
                <Typography variant="h5" component="div">
                Low: {forecastHelp?.day?.mintemp_f != null ?Math.floor(forecastHelp?.day?.mintemp_f):""}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                <img src={forecastHelp?.day?.condition?.icon} alt="" />
            </Typography>
            <Typography variant="body2">
                {forecastHelp?.day?.condition?.text}
                </Typography>
                <Typography variant="body2">
                <span>1PM UV: </span>
                <span className={getUvClass(forecastHelp?.hour?.[13]?.uv)}>
                    <b>{forecastHelp?.hour?.[13]?.uv !=null ?Math.floor(forecastHelp?.hour?.[13]?.uv):""}</b>
                </span>
            </Typography>
        </Stack>
    ),
    right:(
      <Stack
     direction="column"
    justifyContent="space-between"
    height="100%">
        <Stack>
<Sunset forecast={forecastHelp}/>
            </Stack>
            <Typography>
                Moon Phase:  {forecastHelp?.astro.moon_phase} 
            </Typography>
        </Stack >
    ),
    bottom:(
        <>
                    <Typography size="small">Last Updated: {formatLocalTime(weather?.location?.localtime)}</Typography>
        </>
    )

}
}

