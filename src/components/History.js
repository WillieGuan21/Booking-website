import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import './History.css';

function Example(props) {
  var items = [
    {
      img1:'images/h07.png',
      img2:'images/h08.png',
      img3:'images/h09.png',
      title1: 'Targeted Hotel',
      title2: 'WestFire Hotel',
      title3: 'Sydney Hotel',
      point1: 10,
      point2: 8.9,
      point3: 7,
      prePrice1: 300,
      prePrice2: 400,
      prePrice3: 500,
      crrPrice1: 280,
      crrPrice2: 380,
      crrPrice3: 480,
      descriptions: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...',
    },
    {
      img1:'images/h10.png',
      img2:'images/h11.png',
      img3:'images/h12.png',
      title1: 'Inn Hotel',
      title2: 'GreenHouse Hotel',
      title3: 'RedDoor Hotel',
      point1: 10,
      point2: 8.9,
      point3: 7,
      prePrice1: 300,
      prePrice2: 400,
      prePrice3: 500,
      crrPrice1: 280,
      crrPrice2: 380,
      crrPrice3: 480,
      descriptions: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...'
    },
  ]

  return (
    <Carousel
    // next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
    // prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }



    </Carousel>
  );
}

function Item(props) {
  return (

    <Paper sx={{boxShadow:'none'}}>

      <div className='card-container'>
        <div className='cards'>
          <img src={props.item.img1} alt={props.item.title1}/>
          <div className='item-title'>
            <div className='title-name'>{props.item.title1}</div>
            <div>
              <i className="fa-solid fa-heart"></i>{props.item.point1}
            </div>
          </div>
          <div>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
          <div>
            {props.item.descriptions}
          </div>
          <div className='price-name'>
            ${props.item.crrPrice1} per night
          </div>
        </div>
        <div className='cards'>
          <img src={props.item.img2} alt={props.item.title2} />
          <div className='item-title'>
            <div className='title-name'>{props.item.title2}</div>
            <div>
              <i className="fa-solid fa-heart"></i>{props.item.point1}
            </div>
          </div>
          <div>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
          <div>
            {props.item.descriptions}
          </div>
          <div className='price-name'>
            ${props.item.crrPrice2} per night
          </div>
        </div>
        <div className='cards'>
          <img src={props.item.img3} alt={props.item.title3} />
          <div className='item-title'>
            <div className='title-name'>{props.item.title3}</div>
            <div>
              <i className="fa-solid fa-heart"></i>{props.item.point1}
            </div>
          </div>
          <div>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
          <div>
            {props.item.descriptions}
          </div>
          <div className='price-name'>
            ${props.item.crrPrice3} per night
          </div>
        </div>
      </div>

    </Paper>


  )
}

export default Example;