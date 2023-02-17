import React from "react";
import './Roomtype.css';
import { Button } from '@mui/material';

function Roomtype(props) {
  return (
    <div className="roomtype-body">
      <div><img src={props.rtype.img} alt={props.rtype.name} /></div>
      <div className="rtype-title">{props.rtype.name}</div>
      <div className="rtype-facilities">
        <ul>
          {props.rtype.facilities.map((facilitie) => (
            <li key={facilitie}>{facilitie}</li>
          ))}
        </ul>
      </div>
      <a href="#">More details</a>
      <div className="rtype-refound">Fully refundable before {props.rtype.days[0]}, {props.rtype.days[1]} {props.rtype.days[2]}</div>
      <div className="rtype-price">
        <div>${props.rtype.price} per night</div>
        <div>includes taxes & fees</div>
      </div>
      <div>
      <Button variant="outlined" sx={{width:'100%',borderRadius:'0px'}}>Reserve now</Button>
      </div>
      
    </div>
  )
}

export default Roomtype;