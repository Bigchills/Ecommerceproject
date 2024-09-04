import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaBars } from 'react-icons/fa6';
import { FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');

  return (
    <div className=''>
      <div className='flex justify-between items-center py-4 px-6'>
        <div>
          <Link to='/'>
            <img src="public/Images/logo.svg" alt="Logo" />
          </Link>
        </div>
        
        <div className='flex gap-4'>
          <Link 
            to='/' 
            onClick={() => setMenu('Home')}
            className={menu === 'Home' ? 'text-blue-950 font-semibold' : ''}
          >
            Home
          </Link>
          <Link to='/About' onClick={() => setMenu('About')}>
            <a className={menu === 'About' ? 'text-blue-950 font-semibold' : ''}>About</a>
          </Link>
          <Link to='/Contact' onClick={() => setMenu('Contact')}>
            <a className={menu === 'Contact' ? 'text-blue-950 font-semibold' : ''}>Contact us</a>
          </Link>
        </div>
        
        <div className='flex gap-4'>
          <FaRegUser className='text-lg' />
          <Link to='/cart'>
            <div className='relative'>
              <FaShoppingBag className='text-lg' />
              <div className='bg-blue-900 flex justify-center items-center w-5 h-5 text-white text-xs absolute top-[-10px] right-[-9px] rounded-full'>
                0
              </div>
            </div>
          </Link>
          <FaBars className='text-lg' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
