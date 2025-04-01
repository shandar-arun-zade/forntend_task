import { createFileRoute, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import ImageGallary from './Components/ImageGallary.jsx';

const rootRoute = createRootRoute({
  notFoundComponent: () => <div className='text-white text-center justify-center items-center w-full'> Oops Page Not Found !</div>,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/', 
  component: App,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: Home,
});

const imageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path:'/image-gallary',
    component: ImageGallary
})

// const fullImageViewRoute = {
//     getParentRoute: () => homeRoute,
//     path: '/image/:id', 
//     component: Home,
//   };

export const routeTree = rootRoute.addChildren([loginRoute, homeRoute, imageRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent', 
  defaultNotFoundComponent: () => <div className='text-amber-300'>Page Not Found</div>,
});