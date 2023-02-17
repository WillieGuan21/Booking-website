import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './MiniCarousel.css';

function Example(props) {
  var items = [
    {
      img1:'images/d02.png',
      img2:'images/d03.png',
      img3:'images/d04.png',
      img4:'images/d05.png',
      img5:'images/d06.png',
      
    },
    {
      img1:'images/d03.png',
      img2:'images/d05.png',
      img3:'images/d06.png',
      img4:'images/d02.png',
      img5:'images/d04.png',
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
          <img src={props.item.img1} alt=''/>
        </div>
        <div className='cards'>
          <img src={props.item.img2} alt=''/>
        </div>
        <div className='cards'>
          <img src={props.item.img3} alt=''/>
        </div> 
        <div className='cards'>
          <img src={props.item.img4} alt=''/>
        </div> 
        <div className='cards'>
          <img src={props.item.img5} alt=''/>
        </div> 
      </div>

    </Paper>


  )
}

export default Example;