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
import AvailableFood from './Pages/AvailableFood/AvailableFood';
import AuthProvider from './AuthContext/AuthProvider';

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
      },
      {
        path:"/availableFood",
        element: <AvailableFood></AvailableFood>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
