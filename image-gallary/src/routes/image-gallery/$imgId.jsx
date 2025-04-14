import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import {getImageById} from '../../service/image.service' 


export const Route = createFileRoute('/image-gallery/$imgId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log(params, 'this is params from route');
    const  id  =  Number(params.imgId )
    console.log(`prefetching image with id: ${id}...`);
    const image = await getImageById(id)  
    console.log(`image with id: ${id} prefetched!`);
    console.log(image, 'this is image from route');
    return { image }
  },
})

function RouteComponent() {
  const fullImage = Route.useLoaderData()
      console.log(fullImage, 'this is full image from child route');
  
      const navigate = useNavigate()
      const handleNavigateToLogin = () => navigate({ to: '/' })
      const handleHomeRoute = () => navigate({ to: '/home' })
    
    
    
      return (
        <> 
          <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-transparent bg-clip-text text-5xl font-extrabold text-center py-8 bg-gradient-to-r from-cyan-500 to-purple-600">Hello from Nested Image Route!</h1>
             
            <div className="relative mb-6 w-full max-w-3xl overflow-hidden rounded-lg border-transparent bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-[1px]  
                       shadow-2xl">
              <img
                src={fullImage?.image.download_url}
                alt={fullImage?.image.author}
                className="w-full h-auto max-h-[600px] object-cover transition-transform transform hover:scale-105 hover:rotate-2 hover:opacity-80 ease-in-out duration-300 rounded-lg"
              />
              </div>
  
            <h1 className="text-transparent bg-clip-text text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-500 to-purple-600">{fullImage?.image.author}</h1>
  
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
        </>
      )
}
