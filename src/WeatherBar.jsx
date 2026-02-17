import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function WeatherBar({ alignment, onAlignmentChange }) {

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            onAlignmentChange(newAlignment);
        }
    };




    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                            <ToggleButton value="current">Today</ToggleButton>
                            <ToggleButton value="forecast">forecast</ToggleButton>
                        </ToggleButtonGroup>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}