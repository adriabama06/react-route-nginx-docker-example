import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useSearchParams
} from "react-router-dom";

import './main.css'

import Root from './routes/root.jsx'
import ErrorPage from "./routes/error.jsx";
import Info from "./routes/info.jsx";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <nav>
        <Link to={{pathname: "/", search: searchParams.toString()}}>Home</Link>
        <Link to={{pathname: "/info", search: searchParams.toString()}}>Info</Link>
        <Link to={{pathname: "/miau", search: searchParams.toString()}}>Non exist</Link>
      </nav>
      <Outlet />
      <div className="bottominfo">
        <a href='https://www.youtube.com/c/adriabama06' target='_blank'>adriabama06</a>
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />
      },
      {
        path: "/info",
        element: <Info />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)