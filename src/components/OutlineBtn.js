import React from 'react';
import { Button } from '@mui/material';

function OutlineBtn(props){
  return(
    <Button variant="outlined" 
      sx={{ borderRadius: '0px',padding:'15px 80px',width:props.width }} 
      onClick={props.onClick}
      className={props.className}
    >
      {props.name}
    </Button>
  );
}

export default OutlineBtn;