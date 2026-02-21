import { useState } from "react";
import WeatherBar from "./WeatherBar";
import WeatherDisplay from "./WeatherDisplay";
import { Card, CardContent, Box } from '@mui/material'
import FullWeatherDisplay from "./FullWeatherDisplay";
import ToDoDisplay from "./ToDo/toDoDisplay"


function App() {

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",   // left | middle | right
        gridTemplateRows: "1fr 1fr",          // top | bottom
        gap: 2,
        p: 2,
      }}
    >

      {/* TOP LEFT */}
      <Box sx={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
        {/* Replace with your real component */}
        <FullWeatherDisplay />
      </Box>

      {/* MIDDLE COLUMN (spans both rows) */}
      <Box sx={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>
        {/* Replace with your real component */}
        <ToDoDisplay/>
      </Box>

      {/* TOP RIGHT */}
      <Box sx={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
        {/* Replace with your real component */}
        <FullWeatherDisplay />
      </Box>

      {/* BOTTOM LEFT */}
      <Box sx={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
        {/* Replace with your real component */}
        <FullWeatherDisplay />
      </Box>

      {/* BOTTOM RIGHT */}
      <Box sx={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
        {/* Replace with your real component */}
        <FullWeatherDisplay />
      </Box>

    </Box>


  )
}

export default App
