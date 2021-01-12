import React from 'react';

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center mt-2'>
      <div class='absolute top-0 left-0 transform translate-y-4 '>
        <div class='absolute bg-gradient-to-br from-blue-200 to-blue-200 w-80 h-80 rounded-full opacity-50'></div>
        <div class='absolute ml-28 mt-24  bg-gradient-to-br from-purple-200 to-purple-200 w-80 h-80 rounded-full opacity-50'></div>
        <div class='absolute ml-24 -mt-4 bg-gradient-to-br from-red-200 to-red-200 w-80 h-80 rounded-full opacity-50'></div>
      </div>

      <h1 className='relative  text-3xl font-bold text-blue-500'>
        <a
          href='/'
          className='inline-block text-3xl mr-2 font-bold text-gray-700'
        >
          <i class='fas fa-book'></i> Book Reader
        </a>
      </h1>

      <ul className='flex space-x-4 text-gray-600 text-xl'>
        <li className='hover:text-blue-600  transition duration-300 '>
          <a href='/'>Home</a>
        </li>
        <li className='hover:text-blue-600 transition duration-300'>
          <a href='/'>Books</a>
        </li>
        <li className='hover:text-blue-600 transition duration-300'>
          <a href='/'>Upload</a>
        </li>
        <li className='hover:text-blue-600 transition duration-300'>
          <a href='/'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
