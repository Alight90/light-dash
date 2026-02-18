import { useState } from "react";
import WeatherBar from "./WeatherBar";
import WeatherDisplay from "./WeatherDisplay";
import { Card, CardContent } from '@mui/material';
import "./App.css"


function App() {
  const [alignment, setAlignment] = useState("0");
  const [type, setType] = useState("current");

  console.log(type,alignment)


  return (

    <Card sx={{ width:550, background:"#d3d3d3"}}>
      <WeatherBar alignment={alignment} onAlignmentChange={setAlignment}
      onTypeChange={setType} type={type} />
      <CardContent sx={{ userSelect: "none" }}>
        <WeatherDisplay type={type} alignment={alignment}/>
      </CardContent>
    </Card>


  )
}

export default App
