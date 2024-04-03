import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Hader from './component/Root/Hader.jsx';
import SignIn from './component/SignIn/SignIn.jsx';
import Logine from './component/Logine/Logine.jsx';
import AuthProvider from './component/AuthProvider/AuthProvider.jsx';
import Order from './component/Order/Order.jsx';
import PrivateRoute from './roudes/PrivateRoute.jsx';
import Profile from './component/Proifiel/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hader></Hader>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/Login',
        element: <Logine></Logine>,
      },
      {
        path: '/order',
        element:<PrivateRoute> <Order></Order></PrivateRoute>,
      },
      {
        path: '/profile',
        element:<PrivateRoute> <Profile></Profile> </PrivateRoute>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
