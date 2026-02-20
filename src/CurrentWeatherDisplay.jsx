import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import './CurrentWeatherDisplay.css'
import { formatLocalTime } from "./lib/WeatherApiHelper";
import { useWeather } from "./lib/Weatherhooks.js";
import { getUvClass } from './lib/WeatherApiHelper';

export default function CurrentWeatherDisplay({ type }) {
    const { data: weather, loading, error } = useWeather("current");



    if (loading) {
        return <p>Loading...</p>;
    }


    return {
        top: (<>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {weather?.location?.name}
                <br />
                {weather?.location?.region}
            </Typography>
        </>),
        left: (
            <>
                <Typography variant="h5" component="div">
                    Placeholder
                </Typography>
            </>
        ),
        middle: (
            <>
                <Typography variant="h5" component="div" sx={{ fontSize: 20 }}>
                    Actual Temp: {weather?.current?.temp_f != null ? Math.floor(weather?.current?.temp_f) : ""}
                    <br />
                    Feels Like: {weather?.current?.feelslike_f != null ? Math.floor(weather?.current?.feelslike_f) : ""}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    <img src={weather?.current?.condition?.icon} alt="" />
                </Typography>
                <Typography variant="body2">
                    {weather?.current?.condition?.text}
                    <br />
                    <span className={getUvClass(weather?.current?.uv)}>
                        <b> {weather?.current?.uv != null ? Math.floor(weather?.current?.uv) : ""}</b>
                    </span>
                </Typography>
            </>
        ),
        right: (
            <>
                <>
                    <Typography variant="h5" component="div">
                        Placeholder
                    </Typography>
                </>
            </>
        ),
        bottom: (
            <>
                <Typography size="small">Last Updated: {formatLocalTime(weather?.location?.localtime)}</Typography>
            </>
        )
    }
}
