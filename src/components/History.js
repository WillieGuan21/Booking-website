import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import './History.css';
import { Link } from 'react-router-dom';

function HotelCarousel(props) {
  const hotels = [
    {
      img: ['images/h07.png', 'images/h08.png', 'images/h09.png'],
      title: ['Targeted Hotel', 'WestFire Hotel', 'Sydney Hotel'],
      points: [10, 8.9, 7],
      prePrices: [300, 400, 500],
      crrPrices: [280, 380, 480],
      star:[4,3,5],
      description: 'Beautiful hotel description here. The hotel is located along a beautiful beachside. Each room...',
    },
    {
      img: ['images/h10.png', 'images/h11.png', 'images/h12.png'],
      title: ['Inn Hotel', 'GreenHouse Hotel', 'RedDoor Hotel'],
      points: [10, 8.9, 7],
      prePrices: [300, 400, 500],
      crrPrices: [280, 380, 480],
      star:[5,2,4],
      description: 'Beautiful hotel description here. The hotel is located along a beautiful beachside. Each room...',
    },
  ];

  return (
    <Carousel>
      {hotels.map((hotel, index) => (
        <HotelItem key={index} hotel={hotel} />
      ))}
    </Carousel>
  );
}

function HotelItem(props) {
  const { img, title, points, prePrices, crrPrices, description,star } = props.hotel;

  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <div className="card-container">
        {img.map((image, index) => (
          <div className="cards" key={index}>
            <Link to="/detail">
              <img src={image} alt={title[index]} />
            </Link>
            <div className="item-title">
              <Link to="/detail" className="title-name">{title[index]}</Link>
              <div>
                <i className="fa-solid fa-heart"></i>
                {points[index]}
              </div>
            </div>
            <div>
            {star[index] >= 1 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {star[index] >= 2 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {star[index] >= 3 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {star[index] >= 4 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {star[index] >= 5 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
            </div>
            <div>{description}</div>
            <div className="price-name">${crrPrices[index]} per night</div>
          </div>
        ))}
      </div>
    </Paper>
  );
}

export default HotelCarousel;
