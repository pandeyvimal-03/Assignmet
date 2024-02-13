import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import Login from "./components/Login";
import Error from "./components/Error";
import Signup from "./components/Signup";
import Header from "./components/header"
import { createBrowserRouter , Outlet , RouterProvider } from 'react-router-dom'
import Products from "./components/Products";
import MyOrders from "./components/MyOrders";
import { LogProvider } from "./context/logContext";

const App = ()=>{
   
return(
   
    <div>
       <LogProvider>
       <Header/>
       <Outlet/>
       </LogProvider>
    </div>
    
)
}

const router = createBrowserRouter([{
    path:'/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Products/>
      },
      {
        path : '/myOrders',
        element : <MyOrders/>
      },
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/signup',
        element : <Signup/>
      }
      
    ],
    errorElement : <Error/>
  }])

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    
    <RouterProvider router={router}/> 
    
  
  );
  
