// Home.jsx
import { useNavigate } from '@tanstack/react-router';
import { React, useEffect, useState } from 'react';

function Home() {
    const navigate =useNavigate()
  
    const handleHomeRoute = () => navigate({to:'/'})
    const handleImageRoute = () => navigate( { to: '/image-gallary'})

  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <h1 className="text-4xl py-8 text-blue-200 font-bold">Welcome to the Image Gallery Page</h1>
    <div>
      <button
        onClick={handleHomeRoute}
        className="font-bold text-xl w-auto py-3 px-6 mx-6 bg-sky-500 text-white rounded-lg
                  hover:bg-sky-600 focus:outline-none focus:ring-2
                  focus:ring-sky-500 transition-all duration-300"
      >
        Login Page
      </button>
      <button
        onClick={handleImageRoute}
        className="font-bold text-xl w-auto py-3 px-6 mx-6 bg-sky-500 text-white rounded-lg
                  hover:bg-sky-600 focus:outline-none focus:ring-2
                  focus:ring-sky-500 transition-all duration-300"
      >
        Image Gallery
      </button>
    </div>
  </div>
</div>

  );
}

export default Home;
