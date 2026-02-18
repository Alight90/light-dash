import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import ForecastWeatherDisplay from "./ForecastWeatherDisplay";
import { Box } from "@mui/material";

export default function WeatherDisplay({type,alignment}){

  const sections =
  type ==="current"
  ?CurrentWeatherDisplay({alignment})
  :ForecastWeatherDisplay({alignment})
return(
  <Box sx={{width:"100%"}}>
        <Box sx={{ mb: 2 }}>
      {sections.top}
    </Box>

      <Box sx={{ display: "flex", flexDirection: "row", width: "100%"}}>
    <Box sx={{ flex: 1 }}>{sections.left}</Box>
    <Box sx={{ flex: 1 }}>{sections.middle}</Box>
    <Box sx={{ flex: 1 }}>{sections.right}</Box>
    </Box>
    <Box sx={{ mt: 2 }}>
      {sections.bottom}
    </Box>
    </Box>
  )
}
