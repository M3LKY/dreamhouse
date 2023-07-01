import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house
  return (
    <div className='bg-ppp border border-ef7c8e text-left shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2x1 transition mt-[220px] md:mt-[0px]'>
      <img className='mb-8 ' src={image} />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-pink-600 rounded-full text-white px-3'>{type}</div>
        <div className='bg-red-500 rounded-full text-white px-3'>{country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-pink-600 gap-1'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className='flex items-center text-red-600 gap-1'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        
        <div className='flex items-center text-red-600 gap-1'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'><span className='text-violet-900'>$</span> {price} <span className='text-violet-300'>USD</span></div>
    </div>
  );
};

export default House;
