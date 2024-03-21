import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import ErrorPage from './components/ErrorPage';
import App from './layouts/App';

import AboutUs from './components/AboutUs';
import Posts from './components/Posts';
import Post from './components/Post';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "about-us/",
        element: <AboutUs />,
      },
      {
        path: "posts/",
        element: <Posts />,
      },
      {
        path: "posts/:postId",
        element: <Post />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
)
