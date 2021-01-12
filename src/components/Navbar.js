import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-3xl font-bold text-blue-500'>
        Book Reader
      </h1>

      <ul className='flex space-x-4 text-gray-600 text-xl'>
        <li className='hover:text-gray-800  transition duration-300'>
          <a href='/'>Home</a>
        </li>
        <li className='hover:text-gray-800 transition duration-300'>
          <a href='/'>Books</a>
        </li>
        <li className='hover:text-gray-800 transition duration-300'>
          <a href='/'>Upload</a>
        </li>
        <li className='hover:text-gray-800 transition duration-300'>
          <a href='/'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
