import React from 'react';
import './Footer.css';

function Footer(){
  return(
    <>
    <div className='footer'>
      <div className='footer-container'>
        <div className='box-1'>© 2022 Accomondation. All rights reserved.</div>
        <div className='box-2'>
          <div className='box-items'><a href="#">Privacy Policy</a></div>
          <div className='box-items'><a href="#">Terms of Use</a></div>
          <div className='box-items'><a href="#">Contact Us</a></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;