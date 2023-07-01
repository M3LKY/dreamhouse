import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.svg'
import {RiHomeHeartFill} from 'react-icons/ri'
const Header = () => {
  return( 
  <header className='py-6 mb-12 border-b'>
    <div className='fon container mx-auto flex justify-between items-center'>
      <Link to='/'>
      DreamHome

      </Link>

      {/* <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to=''>
        Log In
        </Link>
        <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>
        Sign out
        </Link>
      </div> */}
    </div>
  </header>
  )
};

export default Header;
