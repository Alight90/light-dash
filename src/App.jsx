import { useState } from "react";
import WeatherBar from "./WeatherBar";
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import ForecastWeatherDisplay from "./ForecastWeatherDisplay";
import { Card, CardContent } from '@mui/material';
import "./App.css"


function App() {
  const [alignment, setAlignment] = useState("current");


  return (

    <Card sx={{ minWidth: 275 }}>
      <WeatherBar alignment={alignment} onAlignmentChange={setAlignment} />

      <CardContent sx={{ userSelect: "none" }}>
        {alignment === "current" && <CurrentWeatherDisplay />}
        {alignment === "forecast" && <ForecastWeatherDisplay />}
      </CardContent>
    </Card>


  )
}

export default App
