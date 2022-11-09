import './App.css';
import { useState } from 'react';
import { ButtonBase, Grid } from '@mui/material';
import { suitekitchen, sk, sk2, sk3, sk4, sk5, sk6, sk7, wtsap } from './assets'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

function App() {
  const [selected, setSelected] = useState(sk)
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center border-y py-5 px-4'>
        <div className='flex justify-around items-center'>
          <img className='h-20' src={suitekitchen} alt="logo suite kitchen" />
          <h3 className='md:text-3xl sm:text-2xl font-serif'>Sweet Kitchen</h3>
        </div>
        <div>
          <h4 className='text-2xl text-bold'>+22230411047 </h4>
        </div>
      </div>
      <Grid className='mx-auto my-2'>
        <Grid item sx={{ width: "100%" }}>
          <ButtonBase className='w-full mx-auto'>
            <Zoom>
              <img style={{ width: "100%", border: selected ? "2px solid orange" : "none" }}
                alt="complex"
                src={selected}
                onClick={() => setSelected(selected)}
              />
            </Zoom>
          </ButtonBase>
        </Grid>
        {/* <Grid item sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", marginTop: 2 }}> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          style={{ textAlign: 'center', marginTop: '2%', padding: '2%' }}
          breakpoints={{
            // when window width is >= 640px
            240: {

              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            }
          }}
        >

          <SwiperSlide>
            {/* <ButtonBase> */}
            <img style={{ width: "80%", height: "auto", border: selected === sk ? "2px solid orange" : "none", margin: '0 auto' }}
              alt="complex"
              src={sk}
              onClick={() => setSelected(sk)}
            />
            {/* </ButtonBase> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <ButtonBase> */}
            <img style={{ width: "80%", height: "auto", border: selected === sk2 ? "2px solid orange" : "none", margin: '0 auto' }}
              alt="complex"
              src={sk2}
              onClick={() => setSelected(sk2)}
            />
            {/* </ButtonBase> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <ButtonBase> */}
            <img style={{ width: "80%", height: "auto", border: selected === sk3 ? "2px solid orange" : "none", margin: '0 auto' }}
              alt="complex"
              src={sk3}
              onClick={() => setSelected(sk3)}
            />
            {/* </ButtonBase> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <ButtonBase> */}
            <img style={{ width: "80%", height: "auto", border: selected === sk4 ? "2px solid orange" : "none", margin: '0 auto' }}
              alt="complex"
              src={sk4}
              onClick={() => setSelected(sk4)}
            />
            {/* </ButtonBase> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <ButtonBase> */}
            <img style={{ width: "80%", height: "auto", border: selected === sk5 ? "2px solid orange" : "none", margin: '0 auto' }}
              alt="complex"
              src={sk5}
              onClick={() => setSelected(sk5)}
            />
            {/* </ButtonBase> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <ButtonBase> */}
            <img style={{ width: "80%", height: "auto", border: selected === sk6 ? "2px solid orange" : "none", margin: '0 auto' }}
              alt="complex"
              src={sk6}
              onClick={() => setSelected(sk6)}
            />
            {/* </ButtonBase> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <ButtonBase> */}
            <img style={{ width: "80%", height: "auto", border: selected === sk7 ? "2px solid orange" : "none", margin: '0 auto' }}
              alt="complex"
              src={sk7}
              onClick={() => setSelected(sk7)}
            />
            {/* </ButtonBase> */}
          </SwiperSlide>

        </Swiper>
        {/* </Grid> */}
      </Grid>
      <div className='flex flex-col text-center items-center border my-8 mx-3 p-5 shadow-xl'>

        <h2 className='text-xl my-2'>
          تصميم و تركيب المطابخ العصرية لذى سويت كتشن
        </h2>
        <a
          className="my-2"
          href="https://wa.me/22230411047"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wtsap} alt="logo" />
        </a>
        <p className='my-2 text-green-500'>+222 30 41 10 47</p>
        <p>All Rights Reserved © 2022</p>
      </div>
    </div>
  );
}

export default App;
