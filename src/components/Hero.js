import React from 'react';

const Hero = () => {
  return (
    <div
      className='mt-6 flex flex-col justify-center items-center'
      style={{ minHeight: '70vh' }}
    >
      <h1 className='relative text-6xl mb-6 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500'>
        Book Reader
      </h1>

      <p className='relative text-2xl uppercase tracking-wider font-bold text-gray-700 mb-6'>
        Education is a gift every kid deserves ✨
      </p>

      <a
        href='/'
        class='relative inline-block mb-16 lg:mb-32 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500'
      >
        Discover All Books
      </a>
    </div>
  );
};

export default Hero;