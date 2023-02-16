import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import './Carousel.css';

function Example(props) {
  var items = [
    {
      img1:'images/h01.png',
      img2:'images/h02.png',
      img3:'images/h03.png',
      title1: 'Targeted Hotel',
      title2: 'WestFire Hotel',
      title3: 'Sydney Hotel',
      descriptions: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...' ,
    },
    {
      img1:'images/h04.png',
      img2:'images/h05.png',
      img3:'images/h06.png',
      title1: 'Inn Hotel',
      title2: 'GreenHouse Hotel',
      title3: 'RedDoor Hotel',
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
          <img src={props.item.img1} alt={props.item.title1} />
          <div>
            <div className='title'>{props.item.title1}</div>
            <div className='describe'>
              {props.item.descriptions}
            </div>
          </div>
        </div>
        <div className='cards'>
          <img src={props.item.img2} alt={props.item.title1}/>
          <div>
            <div className='title'>{props.item.title2}</div>
            <div className='describe'>
            {props.item.descriptions}
            </div>
          </div>
        </div>
        <div className='cards'>
          <img src={props.item.img3} alt={props.item.title1}/>
          <div>
            <div className='title'>{props.item.title3}</div>
            <div className='describe'>
            {props.item.descriptions}
            </div>
          </div>
        </div>
      </div>

    </Paper>


  )
}

export default Example;