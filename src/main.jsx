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
import SingleFood from './Pages/SingleFood/SingleFood';
import MyReqFood from './Pages/MyReqFood/MyReqFood';
import AddFood from './Pages/AddFood/AddFood';
import ManageFood from './Pages/ManageFood/ManageFood';
import Manage from './Pages/Manage/Manage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        path:"/food/:id",
        element:<PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`) 
      },
      {
        path:"/availableFood",
        element: <AvailableFood></AvailableFood>
      },
      {
        path:"/requestfood",
        element: <MyReqFood></MyReqFood>
      },
      {
        path:"/addFood",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path:"/manage",
        element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>
      },
      {
        path:"/manage/:id",
        element: <Manage></Manage>,
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`) 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
