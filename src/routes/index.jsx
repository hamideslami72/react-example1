import {createBrowserRouter, RouterProvider,
} from "react-router-dom"
import ErrorPage from '/src/components/ErrorPage';
import App from '/src/layouts/App';
import AboutUs from '/src/components/AboutUs';
import Posts from '/src/components/Posts';
import Post from '/src/components/Post';
import Home from '/src/components/Home';

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
        path: "posts/:id",
        element: <Post />,
      },
    ],
  },
  
]);
export default function Index(){
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}