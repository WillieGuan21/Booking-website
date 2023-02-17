import React from 'react';
import './Detail.css';
import MiniCarousel from '../MiniCarousel';
import TargetHotel from '../TargetHotel';

function Detail (){
  return(
    <div>
      <div className='detail-hero'>
        <img src='./images/d01.png' alt='detail-hero' />
      </div>
      <div className='detail-container'>
        <MiniCarousel />
      </div>
      <div className='target-container'>
        <TargetHotel />
      </div>
      
    </div>
  )
}

export default Detail;