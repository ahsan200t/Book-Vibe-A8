import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/layouts/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import AboutUs from './components/AboutUs/AboutUs';
import UpcomingBooks from './components/UpcomingBooks/UpcomingBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed books',
        element: <ListedBooks></ListedBooks>
      },
      {
        path:'/pages to read',
        element:<PagesToRead></PagesToRead>,
      
      },
      {
        path:'/book-details/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/data.json') 
      },
      {
        path:'/about',
        element: <AboutUs></AboutUs>
      },
      {
        path:'/coming books',
        element:<UpcomingBooks></UpcomingBooks>
      }
     
    ]  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
