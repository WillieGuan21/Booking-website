import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import Hero from '../Hero';
import Carousel from '../Carousel';
import './Home.css';
import { Button } from '@mui/material';
import History from '../History';
import Dialog from '../Dialog';
import { Link } from 'react-router-dom';
import OutlineBtn from '../OutlineBtn';

function Home() {
  const [promotions, setPromotions] = useState([]);
  const supabase = createClient("https://kopxeuppkzsovmcingyd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvcHhldXBwa3pzb3ZtY2luZ3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwOTk0MzUsImV4cCI6MTk5MTY3NTQzNX0.7F4dct9mG2zDAnnM9mm5Q7ql1hOvclCtlqsgEeT-2wI");

  useEffect(() => {
    // const fetchData = async () => {
    //   const supabase = createClient("https://kopxeuppkzsovmcingyd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvcHhldXBwa3pzb3ZtY2luZ3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwOTk0MzUsImV4cCI6MTk5MTY3NTQzNX0.7F4dct9mG2zDAnnM9mm5Q7ql1hOvclCtlqsgEeT-2wI");
    //   const { data, error } = await supabase.from("hotels").select("*");
    //   setPromotions(data);
    // }
    // fetchData();


    getProducts()
  }, []);

 

  async function getProducts(){
    const { data, error } = await supabase.from("hotels").select("*");
    setPromotions(data);
  }

  const [filterBtn, setFilterBtn] = useState(false);
  const showFilterBtn = () => {
    setFilterBtn(!filterBtn)
  };
  

  const bookmarkControl = async (i) =>{
    const updatedData = {isBookmark:!i.isBookmark};
    console.log(updatedData);
    try{
      let { error:uploadError } = await supabase.from("hotels").update(updatedData).eq('id',i.id );
      if (uploadError) throw uploadError
      window.location.reload();
    }
    catch(error){
      alert(error.message)
    }

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
            {promotions.map((i, index) => (
              <div className='cards' key={index}>
                <Link to="/detail">
                  <img src={i.img_url} />
                </Link>
                <i className={`${i.isBookmark ? 'fa-solid' : 'fa-regular'} fa-regular fa-bookmark bookmark`}
                  // onClick={()=>bookmarkControl(i)}
                ></i>
                <div className='item-title'>
                  <Link to="/detail" className='title-name'>{i.name}</Link>
                  <div>
                    <i className="fa-solid fa-heart"></i>{i.rating}
                  </div>
                </div>
                <div>
                  {i.star >= 1 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i className="fa-regular fa-star"></i>
                  }
                  {i.star >= 2 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i className="fa-regular fa-star"></i>
                  }
                  {i.star >= 3 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i className="fa-regular fa-star"></i>
                  }
                  {i.star >= 4 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i className="fa-regular fa-star"></i>
                  }
                  {i.star >= 5 ? <i className="fa-sharp fa-solid fa-star"></i>
                    : <i className="fa-regular fa-star"></i>
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
            <OutlineBtn name="View all"></OutlineBtn>
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