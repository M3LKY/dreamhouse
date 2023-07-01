import React from 'react';
import Image from '../assets/img/houses/house3.png'
import Search from './Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-6xl lg:text-58px font-semibold leading-none mb-6 text-pink-100 hom'>
          Find your <span className='text-pink-200'>Dream Home</span> today
          </h1>
          
          <p className='max-w-[480px] mb-8 text-white'>
           
          Discover your ideal living space at Dream Home. Our carefully crafted properties redefine what it means to find the perfect sanctuary, with luxurious features that cater to your desires. Experience a captivating and comfortable lifestyle where every detail is designed to ensure your utmost satisfaction.

          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>

        </div>
        
      </div>
      <br/>
      <br/>
      <Search/>
    </section>
  )
};

export default Banner;
