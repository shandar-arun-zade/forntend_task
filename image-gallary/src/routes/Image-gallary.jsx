import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useNavigate, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { picSumApi } from '../service/picSumApi';


export const Route = createFileRoute('/image-gallary')({
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
  const router = useRouter();
  const photos = Route.useLoaderData();
  // console.log("this is data from image gallay", photos);
  // const [images, setImages] = useState([]);

  const handleNavigateToLogin = () => navigate({ to: '/' });
  
  const handleFullView = (id) => {
    // console.log("clicked");
    // const image = photos.data.find((photo) => photo.id === id);
    // console.log(image);
    // navigate({ to: `/Image-gallary/${id}`, params:{ id: `${id}` } });
    router.load({ to: `/Image-gallary/${id}` })
      .then(() => {
        console.log("Prefetched successfully! for full view");
        
      })
      .catch((error) => console.log(error, "Sorry, prefetch unsuccessful"));
      // navigate({ to: `/Image-gallary/${id}`, params:{ id: `${id}` } });
  };
  
  const handleHomeRoute = () => navigate({ to: '/home' });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container ">
          <h1 className="text-transparent bg-clip-text text-5xl font-extrabold text-center py-8 bg-gradient-to-r from-cyan-500 to-purple-600">
            Image Gallery
          </h1>

          <div className="flex flex-wrap justify-center gap-6">
            {photos.data.map((image) => (
              <div
                onClick={() => handleFullView(image.id)}
                key={image.id}
                className="w-72 image-card bg-[#1e1e2f] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:scale-105 hover:shadow-2xl"
              >
                <Link to="/image-gallarya/$imgId"
                params={{ imgId: image.id }}>
                <div className="relative ">
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
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 flex flex-wrap justify-center gap-6">
            <div> 
              <button
                onClick={handleHomeRoute}
                className="w-full font-medium text-lg rounded-4xl bg-[#00010d] border-1 
                  border-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-[1px] 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l hover:from-blue-600 hover:via-indigo-700 hover:to-purple-800"
              >
                <span className="block bg-[#00010d] py-3 px-8 rounded-4xl">Home Page</span>
              </button>
            </div>
            <div>
              <button
                onClick={handleNavigateToLogin}
                className="w-full font-medium text-lg rounded-4xl bg-[#00010d] border-1 
                  border-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-[1px] 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l hover:from-blue-600 hover:via-indigo-700 hover:to-purple-800"
              >
                <span className="block bg-[#00010d] py-3 px-8 rounded-4xl">Login Page</span>
              </button>
            </div>
          </div>





        </div>
      </div>
    </>
  );
}
