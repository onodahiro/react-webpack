import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import { App } from '@/components/App';
import { LazyAbout } from '@/pages/About/About.lazy';
import { LazyShop } from '@/pages/Shop/Shop.lazy';
import imgPng from '@/assets/1.png';
import imgjpg from '@/assets/2.jpg';
import PicSvg from '@/assets/bolt-circle.svg';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <App />
        <div>
          <img src={imgPng} alt="" />
          <img width="150" height="100" src={imgjpg} alt="" />
          <PicSvg width="50" height="50" />
        </div>
        <Link to="about">About Us</Link>
        <Link to="shop">shop</Link>
      </div>
    ),
    children: [
      {
        path: "/about",
        element: <LazyAbout />,
      },
      {
        path: "/shop",
        element: <LazyShop />,
      },
    ]
  },

]);


const root = createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} />);
