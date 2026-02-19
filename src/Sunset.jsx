import { Typography } from "@mui/material"
export default function Sunset({forecast}){

    return(<>
    <Typography variant="h5" component="div">
 Sunset
</Typography>
<Typography variant="h5" component="div">
   {forecast?.astro?.sunset}
  </Typography>
<Typography variant="h5" component="div">
    <img style={{width: "60px",height: "60px"}} src="https://copilot.microsoft.com/th/id/BCO.24f4921a-a4f4-474f-9ab9-a933cfd3c08e.png" />

            </Typography>
    </>)
}