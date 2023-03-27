import React from 'react';
import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';


//Customization input
const Coustominput = styled(TextField)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-root': {

  },
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: 'white',
    // border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    // padding: '16.5px 14px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 1)} 0 0 0 1px`,
      borderColor: theme.palette.primary.main,
    },
    '&:hover': {
      // borderColor:'red',
    }
  },
}));

function Myinput (props){
  return(
    <>
      <Coustominput placeholder={props.placeholder} fullWidth></Coustominput>
    </>
  );
}

export default Myinput;