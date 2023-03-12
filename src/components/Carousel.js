import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import './Carousel.css';
import { Link } from 'react-router-dom';

function Example(props) {
  var items = [
    {
      img: ['images/h01.png', 'images/h02.png', 'images/h03.png'],
      title: ['Targeted Hotel', 'WestFire Hotel', 'Sydney Hotel'],
      points: [10, 8.9, 7],
      prePrices: [300, 400, 500],
      crrPrices: [280, 380, 480],
      description: 'Beautiful hotel description here. The hotel is located along a beautiful beachside. Each room...',
    },
    {
      img: ['images/h04.png', 'images/h05.png', 'images/h06.png'],
      title: ['Inn Hotel', 'GreenHouse Hotel', 'RedDoor Hotel'],
      points: [10, 8.9, 7],
      prePrices: [300, 400, 500],
      crrPrices: [280, 380, 480],
      description: 'Beautiful hotel description here. The hotel is located along a beautiful beachside. Each room...',
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
  const { img, title, points, prePrices, crrPrices, description } = props.item
  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <div className='card-container'>
        {img.map((image, index) => (
          <div className='cards' key={index}>
            <Link to="/detail">
              <img src={image} alt={title} />
            </Link>
            <div>
              <Link to="/detail" className='title'>{title[index]}</Link>
              <div className='describe'>
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  )
}

export default Example;