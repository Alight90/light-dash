import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { getDayName } from './lib/WeatherApiHelper';
const label = { inputProps: { 'aria-label': 'Toggle Forecast Mode' } };

export default function WeatherBar({ alignment, onAlignmentChange,type,onTypeChange }) {

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            onAlignmentChange(newAlignment);
        }
    };

    const handleTypeChange =(event)=>{
  const isOn = event.target.checked
  onTypeChange(isOn ? "forecast" : "current")

    }



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                     <FormGroup>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <Typography>Current</Typography>
              <Switch {...label}
              checked={type === "forecast"}
      onChange={handleTypeChange}
       sx={{
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#81c784',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#81c784',
    },
  }}

 />
        <Typography style={{ marginRight: "12px" }}>Forecast</Typography>
      </Stack>
    </FormGroup>
                {type === "forecast"&& <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <ToggleButtonGroup
                            sx={{
                                "& .MuiToggleButton-root": {
                                    color: "white",
                                    borderColor: "white"
                                },
                                "& .Mui-selected": {
                                    backgroundColor: "white",
                                    color: "black"
                                }
                            }}

                            value={alignment}
                            exclusive
                            onChange={handleChange} 
                            aria-label="Platform"
                        >

                            <ToggleButton value={0}>Today</ToggleButton>
                            <ToggleButton value={1}>{getDayName(1)}</ToggleButton>
                            <ToggleButton value={2}>{getDayName(2)}</ToggleButton>
                        </ToggleButtonGroup>
                    </Typography>}

                </Toolbar>
            </AppBar>
        </Box>
    );
}