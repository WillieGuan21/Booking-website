import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import Hero from '../Hero';
import Carousel from '../Carousel';
import './Home.css';
import { Button } from '@mui/material';
import History from '../History';
import Dialog from '../Dialog';

function Home() {
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient("https://kopxeuppkzsovmcingyd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvcHhldXBwa3pzb3ZtY2luZ3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwOTk0MzUsImV4cCI6MTk5MTY3NTQzNX0.7F4dct9mG2zDAnnM9mm5Q7ql1hOvclCtlqsgEeT-2wI");
      const { data, error } = await supabase.from("hotels").select("*");
      setPromotions(data);
    }
    fetchData();
  }, []);
  // const promoions = [
  //   { title: 'Targeted Hotel', img: 'images/h06.png', name: 'Sydney, CBD', describe: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...', prePrice: 300, crrPrice: 280, point: 10 },
  //   { title: 'Inn Hotel', img: 'images/h07.png', name: 'Sydney, CBD', describe: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...', prePrice: 400, crrPrice: 380, point: 8 },
  //   { title: 'RedCorss Hotel', img: 'images/h08.png', name: 'Sydney, CBD', describe: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...', prePrice: 500, crrPrice: 480, point: 9.6 },
  //   { title: 'Browin Hotel', img: 'images/h09.png', name: 'Sydney, CBD', describe: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...', prePrice: 600, crrPrice: 580, point: 7 },
  //   { title: 'Wiston Hotel', img: 'images/h10.png', name: 'Sydney, CBD', describe: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...', prePrice: 700, crrPrice: 680, point: 8 },
  //   { title: 'Monitain Hotel', img: 'images/h11.png', name: 'Sydney, CBD', describe: 'Beautiful Hotel description here. Hotel locate along to beautidul beachside. Each room in...', prePrice: 800, crrPrice: 780, point: 9.8 }
  // ];

  const [filterBtn, setFilterBtn] = useState(false);
  const showFilterBtn = () => {
    setFilterBtn(!filterBtn)
  };
  return (
    <>
      <Hero showFilterBtn={showFilterBtn} />
      <div className='filter'>
        {filterBtn && <Dialog />}
      </div>

      <div className='recommand'>
        <div className='recommand-container'>
          <div className='title'>Recommanded Locations</div>
          <Carousel />
        </div>
      </div>
      <div className='promoions'>
        <div className='promoions-container'>
          <div className='title'>Promotions</div>
          <div className='promoions-body'>
            {promotions.map(i => (
              <div className='cards' id={i.id}>
                <img src={i.img_url} />
                <div className='item-title'>
                  <div className='title-name'>{i.name}</div>
                  <div>
                    <i className="fa-solid fa-heart"></i>{i.rating}
                  </div>
                </div>
                <div>
                  {i.star >= 1 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {i.star >= 2 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {i.star >= 3 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {i.star >= 4 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                  {i.star >= 5 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i class="fa-regular fa-star"></i>
                  }
                </div>
                <div className='item-location'>
                  <i className="fa-solid fa-location-dot"></i>{i.location}
                </div>
                <div>
                  {i.description}
                </div>
                <div className='price-name'>
                  <del className='del-price'>${i.ori_price}</del> ${i.dis_price} per night
                </div>
              </div>
            ))}
          </div>
          <div className='viewAll-btn'>
            <Button variant="outlined">View all</Button>
          </div>
        </div>
      </div>
      <div className='history'>
        <div className='history-container'>
          <div className='title'>Viewed History</div>
          <History />
        </div>
      </div>
    </>
  );
}

export default Home;