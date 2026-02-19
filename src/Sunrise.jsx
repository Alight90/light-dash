import { Typography } from "@mui/material"
export default function Sunrise({forecast}){

    return(<>
<Typography variant="h5" component="div">
 Sunrise
</Typography>
<Typography variant="h5" component="div">
  {forecast?.astro?.sunrise}
  </Typography>
<Typography variant="h5" component="div">
  <img style={{width: "60px",height: "60px"}} src="https://copilot.microsoft.com/th/id/BCO.110ab91d-3323-45b7-9da1-a850f75e8622.png" />

            </Typography>
    </>)
}