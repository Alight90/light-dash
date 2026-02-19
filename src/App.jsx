import { useState } from "react";
import WeatherBar from "./WeatherBar";
import WeatherDisplay from "./WeatherDisplay";
import { Card, CardContent, Box } from '@mui/material';
import "./App.css"


function App() {
  const [alignment, setAlignment] = useState("0");
  const [type, setType] = useState("current");

  console.log(type, alignment)


  return (

    <Card sx={{
      width: 550, position: "relative",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      userSelect: "none"
    }}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/global-map.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.85)", // optional darken
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.15)",
          zIndex: 1
        }}
      />

      <CardContent sx={{ position: "relative", zIndex: 2, p: 3, userSelect: "none" }}>
        <WeatherBar alignment={alignment} onAlignmentChange={setAlignment}
          onTypeChange={setType} type={type} />
        <CardContent sx={{
          userSelect: "none"
        }}>
          <WeatherDisplay type={type} alignment={alignment} />
        </CardContent>
      </CardContent>
    </Card>


  )
}

export default App
