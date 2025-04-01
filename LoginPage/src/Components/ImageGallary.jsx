import {React, useState, useEffect} from 'react'
import { useNavigate } from '@tanstack/react-router';

function ImageGallary() {

const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const api = import.meta.env.VITE_PIC_SUM_API

  const handleNavigateToLogin = () => navigate({to:'/'})
  
  const handleFullView = () => navigate({to:'image-gallary/${id'})
  
  const handleHomeRoute = () => navigate({to:'/home'})

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <>
        <div className="flex items-center justify-center min-h-screen bg-customBackground">
  <div>
    <h1 className="text-white text-4xl text-center py-8">Image Gallery</h1>

    <div className="flex flex-wrap justify-center gap-6 p-6">
      {images.map((image) => (
        <div
          key={image.id}
          className="image-card bg-white rounded-lg overflow-hidden shadow-lg border-gray-300 border-3
                    transform transition-all duration-300 hover:bg-sky-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={`https://picsum.photos/id/${image.id}/300/200`}
              alt={image.author}
              className="w-full h-auto transition-all duration-500 hover:blur-sm hover:opacity-80"
              onClick={handleFullView}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-300 hover:opacity-50"></div>
          </div>
          <p className="text-center p-4 text-gray-700 transition-all duration-300 hover:text-white">
            {image.author}
          </p>
        </div>
      ))}
    </div>

    <div className="text-center">
      <div>
        <button
          onClick={handleHomeRoute}
          className="font-bold text-xl w-auto py-3 px-6 mx-6 bg-sky-500 text-white rounded-lg
                    hover:bg-sky-600 focus:outline-none focus:ring-2
                    focus:ring-sky-500 transition-all duration-300"
        >
          Home Page
        </button>
        <button
          onClick={handleNavigateToLogin}
          className="font-bold text-xl w-auto py-3 px-6 mx-6 bg-sky-500 text-white rounded-lg
                    hover:bg-sky-600 focus:outline-none focus:ring-2
                    focus:ring-sky-500 transition-all duration-300"
        >
          Login Page
        </button>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default ImageGallary