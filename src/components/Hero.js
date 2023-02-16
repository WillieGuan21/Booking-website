import React, { useState } from 'react';
import { Box, InputLabel, TextField, FilledInput, InputAdornment, MenuItem, Select, Button, FormControl } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import './Hero.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          // color: red;
        }
        .MuiOutlinedInput-root:hover{
          // border:1px solid red;
        }
        .MuiInputBase-input:hover{
          // border:1px solid red;
        }
      `,
    },
  },
});


function Hero({showFilterBtn}) {
  const [value, setValue] = useState([null, null]); //DateRangePicker

  const [room, setRoom] = useState('');
  const roomHandleChange = (event) => {
    setRoom(event.target.value);
  };

  const [guest, setGuest] = useState('');
  const guestHandleChange = (event) => {
    setGuest(event.target.value);
  };

  return (
    <>
      <div className='hero'>
        <div className='hero-container'>
          <div className='items-container'>
            {/* TextField with custom css */}
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <TextField
                sx={{backgroundColor:'#fff',borderRadius:'4px'}}
                placeholder='Destination'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PlaceIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </ThemeProvider>
          </div>
          <div className='items-container'>
            {/* Datepicker start*/}
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              localeText={{ start: 'Date from', end: 'Date end' }}
            >
              <DateRangePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} sx={{backgroundColor:'#fff',borderRadius:'4px'}}/>
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} sx={{backgroundColor:'#fff',borderRadius:'4px'}}/>
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
            {/* Datepicker end*/}
          </div>
          <div className='items-container'>
            <FormControl fullWidth sx={{width:'200px'}}>
              <InputLabel id="demo-simple-select-label">Number of room</InputLabel>
              <Select
                sx={{backgroundColor:'#fff',borderRadius:'4px'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={room}
                label="Number of room"
                onChange={roomHandleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </ FormControl>
          </div>
          <div className='items-container'>
            <FormControl fullWidth sx={{width:'200px'}}>
              <InputLabel id="guest-label">Number of guest</InputLabel>
              <Select
                sx={{backgroundColor:'#fff',borderRadius:'4px'}}
                labelId="guest-label"
                id="demo-simple-select"
                value={guest}
                label="Number of guest"
                onChange={guestHandleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='items-container'>
            <Button variant="contained" sx={{ width: '58px', height: '58px' }} onClick={showFilterBtn}><SearchIcon /></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;