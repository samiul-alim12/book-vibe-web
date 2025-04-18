

import {
    createBrowserRouter,
    
  } from "react-router";
import Root from '../Root/Root';
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Abouts from "../components/Abouts/Abouts";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";


export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {index:true,  
        path:'/',
         Component:Home,
         loader:()=>fetch('../booksData.json') ,  
        },
        {
            path:'about', Component:Abouts
        },
        {
            path:"/bookDetails/:id",
            
            loader:()=>fetch('../booksData.json') ,   

            Component:BookDetails
        },
        {
          path:'readList',
          loader:()=>fetch('../booksData.json') , 
          Component:ListedBooks
        }





      ]
      
    },
    
  ]);