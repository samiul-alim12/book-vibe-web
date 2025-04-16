

import {
    createBrowserRouter,
    
  } from "react-router";
import Root from '../Root/Root';
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
  

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {index:true, path:'/', Component:Home}
      ]
      
    },
  ]);