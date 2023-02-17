import React, { useState } from "react";
import './TargetHotel.css';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputLabel, TextField, FilledInput, InputAdornment, MenuItem, Select, Button, FormControl } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import Roomtype from './Roomtype';

function TargetHotel(props) {
  const [value, setValue] = useState([null, null]); //DateRangePicker

  const [room, setRoom] = useState('');
  const roomHandleChange = (event) => {
    setRoom(event.target.value);
  };

  const [guest, setGuest] = useState('');
  const guestHandleChange = (event) => {
    setGuest(event.target.value);
  };

  const rtypeItem1 = {
    img:'./images/rtype01.png',
    name:'Standard Double or Twin Room',
    facilities:['23 sq m','Sleeps 2','1 King Bed OR 2 Single Beds','Free WiFi','Free self-parking','Reserve now, pay later'],
    days:['Web',16,'Nov'],
    price:280,
  }

  const rtypeItem2 = {
    img:'./images/rtype02.png',
    name:'Superior Room',
    facilities:['23 sq m','Sleeps 2','1 King Bed OR 2 Single Beds','Free WiFi','Free self-parking','Reserve now, pay later'],
    days:['Web',16,'Nov'],
    price:320,
  }

  const rtypeItem3 = {
    img:'./images/rtype03.png',
    name:'Family Room',
    facilities:['23 sq m','Sleeps 2','1 King Bed OR 2 Single Beds','Free WiFi','Free self-parking','Reserve now, pay later'],
    days:['Web',16,'Nov'],
    price:380,
  }

  return (
    <div className="target-body">
      <div className="target-session1">
        <div className="title">Targeted Hotel</div>
        <div>
          <i className="fa-solid fa-heart"></i>
          <span>10</span>
          <i className="fa-regular fa-bookmark"></i>
        </div>
      </div>
      <div className="target-session2">
        <div>Descriptions and facilities</div>
        <div>Policies</div>
        <div>Review</div>
      </div>
      <div className="target-session3">
        <div><i className="fa-sharp fa-solid fa-star"></i></div>
        <div><i className="fa-solid fa-location-dot"></i>Sydney,CBD</div>
        <div>Located in Sydney Central Business District, this luxury hotel is within a 5-minute walk of Museum of Contemporary Art and Circular Quay. The Rocks Markets and Sydney Observatory are also within 10 minutes. Wynyard Station is 6 minutes by foot and Sydney Circular Quay Station is 7 minutes.</div>
        <div className="text-bold">Property amenities</div>
        <div className="property-items">
          <div><img src="./images/bi_wifi.png" alt='wifi' />Wifi</div>
          <div><img src="./images/bi_pool.png" alt='swimming pool' />Swimming pool</div>
          <div><img src="./images/bi_gym.png" alt='gym' />Gym</div>
        </div>
        <div className="text-bold">Room amenities</div>
        <div className="room-amenities-items">
          <ul>
            <li>Air conditioning (climate-controlled)</li>
            <li>Bed sheets</li>
            <li>Blackout drapes/curtains</li>
            <li>Private bathroom</li>
            <li>Towels</li>
          </ul>
        </div>
      </div>
      <div className="target-form-setting">
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
                  <TextField {...startProps} sx={{ backgroundColor: '#fff',  }} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} sx={{ backgroundColor: '#fff',  }} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          {/* Datepicker end*/}
        </div>
        <div className='items-container'>
          <FormControl fullWidth sx={{ width: '300px' }}>
            <InputLabel id="demo-simple-select-label">Number of room</InputLabel>
            <Select
              sx={{ backgroundColor: '#fff', borderRadius: '0px' }}
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
          <FormControl fullWidth sx={{ width: '300px' }}>
            <InputLabel id="guest-label">Number of guest</InputLabel>
            <Select
              sx={{ backgroundColor: '#fff', borderRadius: '0px' }}
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
          <Button variant="contained" sx={{ width: '58px', height: '58px',borderRadius:'0px' }} ><SearchIcon /></Button>
        </div>
      </div>
      <div className="title">Room type</div>
      <div className="target-session4">
        <Roomtype rtype={rtypeItem1}/>
        <Roomtype rtype={rtypeItem2}/>
        <Roomtype rtype={rtypeItem3}/>
      </div>
    </div>
  )
}

export default TargetHotel;