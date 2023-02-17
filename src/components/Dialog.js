import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import './Dialog.css';
import PicturePicker from './PicturePicker';




function FilterDialog() {
  //control dialog open and close
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //sort by
  const [sortValue, setSortValue] = useState('Popular');

  const handlesortValue = (event) => {
    setSortValue(event.target.value);
  };

  //budget
  const budgetMarks = [
    {
      value: 1000,
      label: '$1000',
    },
    {
      value: 100000,
      label: '$100000',
    },
  ];

  function budgetValuetext(value) {
    return `${value}`;
  }

  //guest rating
  const guestMarks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 10,
      label: '10',
    },
  ];

  function guestValuetext(value) {
    return `${value}`;
  }

  //Property class
  const [PropertyValue, setPropertyValue] = useState(2);

  const PropertyImg = [
    { img: '/images/hotel.png' },
    { img: '/images/apartment.png' },
    { img: '/images/motel.png' },
    { img: '/images/B&B.png' },
    { img: '/images/backpacker.png' },
  ]

  //location
  const [locationValue, setlocationValue] = useState('city');

  const handlelocationValue = (event) => {
    setlocationValue(event.target.value);
  };

  //payment type
  const [paymentValue, setpaymentValue] = useState('refundable');

  const handlepaymentValue = (event) => {
    setpaymentValue(event.target.value);
  };

  //Facilities
  const FacilitiesImg = [
    { img: '/images/parking.png' },
    { img: '/images/pickUp.png' },
    { img: '/images/lift.png' },
    { img: '/images/wifi.png' },
    { img: '/images/Gym.png' },
    { img: '/images/pool.png' },
    { img: '/images/PowerBackup.png' },
  ]



  return (
    <>
      <Button variant="outlined" sx={{width:'100%',borderRadius:'0px'}} onClick={handleClickOpen}>
        Sorting and Filter
      </Button>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={'md'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ padding: '27px 24px' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
          <div className='dia-container'>
            <div className='dia-title'>Sort by</div>
            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={sortValue}
                  onChange={handlesortValue}
                >
                  <FormControlLabel value="Popular" control={<Radio />} label="Popular" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                  <FormControlLabel value="Hight rating" control={<Radio />} label="Hight rating" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                  <FormControlLabel value="Price low to high" control={<Radio />} label="Price low to high" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                  <FormControlLabel value="Price high to low" control={<Radio />} label="Price high to low" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                  <FormControlLabel value="Name A to Z" control={<Radio />} label="Name A to Z" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                  <FormControlLabel value="Name Z to A" control={<Radio />} label="Name Z to A" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className='dia-container'>
            <div className='dia-title'>Budget</div>
            <div>
              <Slider
                aria-label="Always visible"
                defaultValue={10000}
                min={1000}
                max={100000}
                getAriaValueText={budgetValuetext}
                marks={budgetMarks}
                valueLabelDisplay="auto"
                sx={{
                  '& .MuiSlider-markLabel': {
                    transform: 'translateX(-100%)',
                    '&[data-index="0"]': {
                      transform: 'none'
                    },
                  }
                }}
              />
            </div>
          </div>
          <div className='dia-container'>
            <div className='dia-title'>Guest rating</div>
            <div>
              <Slider
                aria-label="Always visible"
                defaultValue={10}
                min={1}
                max={10}
                getAriaValueText={guestValuetext}
                marks={guestMarks}
                valueLabelDisplay="auto"
                sx={{
                  '& .MuiSlider-markLabel': {
                    transform: 'translateX(-100%)',
                    '&[data-index="0"]': {
                      transform: 'none'
                    },
                  }
                }}
              />
            </div>
          </div>
          <div className='dia-container'>
            <div className='dia-title'>Property class</div>
            <div>
              <Rating
                name="simple-controlled"
                value={PropertyValue}
                onChange={(event, newValue) => {
                  setPropertyValue(newValue);
                }}
              />
            </div>
          </div>
          <div className='dia-container'>
            <div className='dia-title'>Property type</div>
            {/* <div className='dia-property'>
              {PropertyImg.map((i) =>
                <a href='#' ><img src={i.img} alt={i.img} /></a>
              )}
            </div> */}
             <PicturePicker imageList={PropertyImg}/>
          </div>
          <div className='dia-container'>
            <div className='dia-title'>Location</div>
            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={locationValue}
                  onChange={handlelocationValue}
                >
                  <div>
                    <FormControlLabel value="city" control={<Radio />} label="Near city" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                    <FormControlLabel value="airport" control={<Radio />} label="Near airport" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className='dia-container'>
            <div className='dia-title'>Payment type</div>
            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={paymentValue}
                  onChange={handlepaymentValue}
                >
                  <div>
                    <FormControlLabel value="refundable" control={<Radio />} label="Fully refundable" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                    <FormControlLabel value="later" control={<Radio />} label="Pay later" sx={{ '& .MuiTypography-root': { fontFamily: 'none' } }} />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className='dia-container'>
            <div className='dia-title'>Facilities & services</div>
            {/* <div className='dia-facilities'>
              {FacilitiesImg.map((i) =>
                <a href='#' ><img src={i.img} alt={i.img} /></a>
              )}
            </div> */}
            <PicturePicker imageList={FacilitiesImg}/>
          </div>
          
        </DialogContent>
        <DialogActions>
          <div className='dia-actionBox'>
            <Button variant="outlined" onClick={handleClose}>Cancel all</Button>
            <Button variant="outlined" onClick={handleClose} autoFocus>
              Show result 500+
            </Button>
          </div>

        </DialogActions>
      </Dialog>
    </>
  );
}

export default FilterDialog;