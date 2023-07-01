import React, { useState, useEffect, useContext } from 'react';
import { RiMapPin2Fill,RiHome2Line, RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'
const PropertyDropdown = () => {
  const { Property, setProperty, properties } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
        <RiHome2Line   className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight text-pink-300'>{Property}</div>
          <div className='text=[13px] text-white'>Select your place</div>
        </div>
        {isOpen ? (<RiArrowUpLine className='dropdown-icon-secondary' />)
            : (<RiArrowDownLine className='dropdown-icon-secondary' />)}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((Property, index) => {
          return (
            <Menu.Item onClick={() => setProperty(Property)} className='text-lg text-pink-900 cursor-pointer hover:text-pink-400 transition' as='li' key={index}>
              {Property}
            </Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  );
};

export default PropertyDropdown;
