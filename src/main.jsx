import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/Error/ErrorPage';
import App from './App';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Registration from './Pages/Registration/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
      {
        path:"/",
        element: <Home></Home> 
      },
      {
        path:"/registration",
        element: <Registration></Registration> 
      },
      {
        path:"/LogIn",
        element:<LogIn></LogIn> 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
