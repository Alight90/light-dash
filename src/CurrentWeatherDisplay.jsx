import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import './CurrentWeatherDisplay.css'
import { formatLocalTime } from "./lib/WeatherApiHelper";
import { useWeather } from "./lib/Weatherhooks.js";
import { getUvClass } from './lib/WeatherApiHelper';

export default function CurrentWeatherDisplay() {
    const { data: weather, loading, error } = useWeather("current");



    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {weather?.location?.name}
                <br />
                {weather?.location?.region}
            </Typography>
            <Typography variant="h5" component="div">
                Actual Temp: {weather?.current?.temp_f}
                <br />
                Feels Like: {weather?.current?.feelslike_f}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                <img src={weather?.current?.condition?.icon} alt="" />
            </Typography>
            <Typography variant="body2">
                {weather?.current?.condition?.text}
                <br />
                <span className={getUvClass(weather?.current?.uv)}>
                    <b> {weather?.current?.uv}</b>
                </span>
            </Typography>
            <Typography size="small">{formatLocalTime(weather?.location?.localtime)}</Typography>
        </>
    );
}
