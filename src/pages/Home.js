import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-gray-200'>
      <div className='container mx-auto py-4'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
