import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/home" className="[&.active]:font-bold">
          Home 2
        </Link>
      </div>
      <hr /> */}
      <Outlet />
      <TanStackRouterDevtools />
      {/* <hr />
      <div className="p-2 flex gap-2 justify-center text-sm text-gray-500">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/home" className="[&.active]:font-bold">
          Home 2
        </Link>
      </div> */}
      
    </>
  ),
})