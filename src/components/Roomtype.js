import React from "react";
import './Roomtype.css';
import OutlineBtn from './OutlineBtn';
import { Link } from 'react-router-dom';

function Roomtype(props) {
  const { img, name, facilities, days, price } = props.rtype;
  return (
    <>
      {img.map((image, index) =>
        <div className="roomtype-body" key={index}>
          <div><img src={img[index]} alt={img[index]} /></div>
          <div className="rtype-title">{name[index]}</div>
          <div className="rtype-facilities">
            <ul>
              {facilities.map((facilitie) => (
                <li key={facilitie}>{facilitie}</li>
              ))}
            </ul>
          </div>
          <a href="#" className="details">More details</a>
          <div className="rtype-refound">Fully refundable before {days[0]}, {days[1]} {days[2]}</div>
          <div className="rtype-price">
            <div>${price[index]} per night</div>
            <div>includes taxes & fees</div>
          </div>
          <div>
            <Link to="/payment">
               <OutlineBtn name="Reserve now" width="100%"></OutlineBtn>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Roomtype;