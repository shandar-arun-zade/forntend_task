import { createFileRoute } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { picSumApi } from '../service/picSumApi';


export const Route = createFileRoute('/Image-gallary')({
  component: ImageGallary,
  loader: async () => {
    console.log("prefetching the data ...");
    const data = await picSumApi();
    console.log("data prefetched !");
    // console.log(data);
    return { data };
  }
});

function ImageGallary() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const api = import.meta.env.VITE_PIC_SUM_API;

  const handleNavigateToLogin = () => navigate({ to: '/' });
  
  const handleFullView = (id) => {
    console.log("clicked");
    const image = images.find((image) => image.id === id);
    console.log(image);
    navigate({ to: `/Image-gallary/${id}` });
  };
  
  const handleHomeRoute = () => navigate({ to: '/home' });

  useEffect(() => {
    const loadImage = async () => {
      try {
        // console.log("fetching images....");
        const data = await picSumApi();
        // console.log("Fetched data:", data); 
        // setImages(data);
        // console.log("Images state:", data);
        // console.log("image fetched");
        // console.log("this is data from image gallay", data);

        setImages(data);
      } catch (error) {
        console.log(error, "error while fetching images");
      }
    };
    loadImage();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container ">
          <h1 className="text-transparent bg-clip-text text-5xl font-extrabold text-center py-8 bg-gradient-to-r from-cyan-500 to-purple-600">
            Image Gallery
          </h1>

          <div className="flex flex-wrap justify-center gap-6">
            {images.map((image) => (
              <div
                onClick={() => handleFullView(image.id)}
                key={image.id}
                className="w-72 image-card bg-[#1e1e2f] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative " >
                  <img
                    src={image.download_url}
                    alt={image.author}
                    className="w-full h-48 transition-all duration-500 hover:blur-sm hover:opacity-80"
                    
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-300 hover:opacity-50"></div>
                </div>
                <p className="text-center p-4 text-gray-200 transition-all duration-300 hover:text-white">
                  {image.author}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 flex flex-wrap justify-center gap-6">
            <button
              onClick={handleHomeRoute}
              className="font-medium text-lg py-3 px-8 mx-4 bg-transparent border-2 border-teal-500 text-teal-500 rounded-full transition-all duration-300 transform hover:bg-teal-500 hover:text-white hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Home Page
            </button>
            <button
              onClick={handleNavigateToLogin}
              className="font-medium text-lg py-3 px-8 mx-4 bg-transparent border-2 border-teal-500 text-teal-500 rounded-full transition-all duration-300 transform hover:bg-teal-500 hover:text-white hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Login Page
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
