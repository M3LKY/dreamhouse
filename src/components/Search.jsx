import React, {useContext} from 'react';
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import { RiSearchEyeLine } from 'react-icons/ri'
import {HouseContext} from '../components/HouseContext'
const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-gray-700 lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={()=>handleClick()} className='bg-ef7c8e hover:bg-pink-700 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearchEyeLine />
      </button>
    </div>
  );
};

export default Search;
