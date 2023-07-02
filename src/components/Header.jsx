import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.svg'
import {RiHomeHeartFill} from 'react-icons/ri'
const Header = () => {
  return( 
  <header className='py-6 mb-12 border-b'>
    <div className='fon container mx-auto flex justify-between items-center'>
      <Link to='/dreamhouse/'>
      DreamHome
      </Link>
    </div>
  </header>
  )
};

export default Header;
