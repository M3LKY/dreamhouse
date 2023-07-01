import React, { useState, useEffect, useContext } from 'react';
import { RiMapPin2Fill, RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'
const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
        <RiMapPin2Fill className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight text-pink-300'>{country}</div>
          <div className='text=[13px] text-white'>Select your place</div>
        </div>
        {isOpen ? (<RiArrowUpLine className='dropdown-icon-secondary' />)
            : (<RiArrowDownLine className='dropdown-icon-secondary' />)}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item onClick={() => setCountry(country)} className='text-lg text-pink-900 cursor-pointer hover:text-pink-400 transition' as='li' key={index}>
              {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  );
};

export default CountryDropdown;
