import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const handleHomeRoute = () => navigate({ to: '/' });
  const handleImageRoute = () => navigate({ to: '/image-gallary' });
  const router = useRouter();

  const handlePreFetch = () => {
    router.load({ to: '/Image-gallary' })
      .then(() => {
        console.log("Prefetched successfully!");
      })
      .catch((error) => console.log(error, "Sorry, prefetch unsuccessful"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0b14] to-[#1f2630] flex items-center justify-center p-6">
      <div className="text-center max-w-md sm:max-w-lg p-6 sm:p-8 bg-[#1e2837] rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6 sm:mb-8 tracking-tight leading-tight">
          Welcome to the Image Gallery Page
        </h1>

        <div className="text-center mt-6 flex flex-wrap justify-center gap-6">
          <button
            onClick={handleHomeRoute}
            className="font-medium text-lg py-3 px-8 mx-4 bg-transparent border-2 border-teal-500 text-teal-500 
                rounded-full transition-all duration-300 transform hover:bg-teal-500 hover:text-white 
                hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
            Login Page
          </button>

          <button
            onClick={handleImageRoute}
            onMouseEnter={handlePreFetch}
            className="font-medium text-lg py-3 px-8 mx-4 bg-transparent border-2 border-teal-500 
              text-teal-500 rounded-full transition-all duration-300 transform hover:bg-teal-500 
              hover:text-white hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Image Gallery
          </button>
        </div>
      </div>
    </div>
  );
}
