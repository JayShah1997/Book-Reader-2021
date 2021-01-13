import React from 'react';

const Books = () => {
  return (
    <div className='relative lg:px-32' style={{ minHeight: '65vh' }}>
      <h1 className='text-6xl text-center mt-32  font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500'>
        <i class='fas fa-book'></i> Read Books
      </h1>

      <div className='mt-16  space-x-8 flex '>
        <div className='text-center w-1/3 bg-white rounded shadow-lg  pt-16 pb-16  px-4 transform  hover:-translate-y-4 hover:shadow-xl transition duration-500 border-t-8  border-green-700'>
          <i class='text-transparent bg-clip-text bg-gradient-to-r from-green-600  to-blue-600 fas fa-pen text-6xl mb-8'></i>
          <h3 className='text-4xl  uppercase mb-6 text-gray-900 font-bold tracking-wide'>
            English
          </h3>
          <p className='text-xl'>
            To be, or not to be that is the question
            <br /> - Shakesphere
          </p>
          <a
            href='/'
            class='relative inline-block my-8 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500 '
          >
            Read Book
          </a>
        </div>
        <div className='text-center w-1/3 bg-white p-6 rounded shadow-lg pt-16 pb-16  transform  hover:-translate-y-4 hover:shadow-xl transition duration-500 border-t-8  border-green-700'>
          <i class='text-transparent bg-clip-text bg-gradient-to-r from-green-600  to-blue-600  far fa-compass text-6xl mb-8'></i>
          <h3 className='text-4xl  uppercase mb-6 text-gray-900 font-bold tracking-wide'>
            History
          </h3>
          <p className='text-xl'>
            Those who forget the past are condemn to repeat it
          </p>
          <a
            href='/'
            class='relative inline-block my-8 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500'
          >
            Read Book
          </a>
        </div>
        <div className='text-center w-1/3 bg-white p-6 rounded shadow-lg pt-16 pb-16  transform  hover:-translate-y-4 hover:shadow-xl transition duration-500 border-t-8  border-green-700'>
          <i class='text-transparent bg-clip-text bg-gradient-to-r from-green-600  to-blue-600  fas fa-globe text-6xl mb-8'></i>
          <h3 className='text-4xl uppercase mb-6 text-gray-900 font-bold tracking-wide'>
            Geography
          </h3>
          <p className='text-xl'>
            Exploring the unexplored, an unknown journey
          </p>
          <a
            href='/'
            class='relative inline-block my-8 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500'
          >
            Read Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default Books;
