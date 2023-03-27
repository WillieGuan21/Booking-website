import React, { useState } from 'react';
import './Payment.css';
import OutlineBtn from '../OutlineBtn';
import Myinput from '../Myinput';
import { FormControl, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

function Payment() {
  const [mobilNum, setMobileNum] = useState('');
  const handleMobileNum = (e) => {
    setMobileNum(e.target.value)
  }

  return (
    <div className='payment-body'>
      <div style={{ width: '80%' }}>
        <div className='payment-content'>
          <div className='mb-40'><Link to="/detail" className='arrow'>	&lt; <span className="bold reserve">Reserve and Pay</span></Link></div>
          <div className='bold'>Sign in to check out?</div>
          <div>Be our member and collect points to use for your next booking.</div>
          <OutlineBtn name='Sign in or create account' width='100%' className="mb-40"></OutlineBtn>
          <hr className='mb-60' />
        </div>
        <div className='payment-content'>
          <div className='bold'>Continue as a guest</div>
          <FormControl variant="standard" className=''>
            <div className='full-name'>
              <div>
                <div className='input-label'>First name</div>
                <Myinput placeholder='First name' />
              </div>
              <div>
                <div className='input-label'>Last name</div>
                <Myinput placeholder='Last name' />
              </div>
            </div>
            <div className='mobile-content'>
              <div className='input-label'>Mibole</div>
              <div className='mobile-flex'>
                <FormControl sx={{ width: '15%' }}>
                  <Select
                    value={mobilNum}
                    onChange={handleMobileNum}
                    sx={{ borderRadius: '0px' }}
                  >
                    <MenuItem value={+886}>+886</MenuItem>
                    <MenuItem value={+852}>+852</MenuItem>
                    <MenuItem value={+61}>+61</MenuItem>
                  </Select>
                </FormControl>
                <Myinput placeholder='Mobile' />
              </div>
            </div>
            <div className='mb-60'>
              <div className='input-label'>Confirmation email</div>
              <Myinput placeholder='Email' />
            </div>
          </FormControl>
          <hr className='mb-60' />
        </div>
        <div className='payment-content'>
          <div className='bold'>Payment type</div>
          <FormControl variant="standard" className='paytype-content'>
            <div>
              <div className='input-label'>Name on Card</div>
              <Myinput placeholder='Name on Card' />
            </div>
            <div>
              <div className='input-label'>Debit/Credit card number</div>
              <Myinput placeholder='Debit/Credit card number' />
            </div>
            <div>
              <div className='input-label'>Expiry date</div>
              <Myinput placeholder='mm/yy' />
            </div>
            <div>
              <div className='input-label'>Security code</div>
              <Myinput placeholder='Security code' />
            </div>
          </FormControl>
          <OutlineBtn name="Complete booking" width='100%' className="mb-60"></OutlineBtn>
        </div>
      </div>
      <div className='payment-content'>
        <div>
          <img src="./images/rtype02.png" alt="hotels" />
        </div>
        <div>
          <div className='bold'>Superior Room</div>
        </div>
        <div>
          <div className='bold'>$320 per night</div>
          <div>includes taxes & fees</div>
        </div>
        <div className='info-content'>
          <div>
            <div>Date: 8 Oct - 10 Oct 2022</div>
            <div>Number of room: 1</div>
            <div>Number of guest: 1</div>
          </div>
          <div>Edit</div>
        </div>
        <div><hr /></div>
        <div>1 night: AUD $320 x 1</div>
        <div><hr /></div>
        <div className='bold'>Total pay: AUD$320</div>
      </div>
    </div>
  );
}

export default Payment;