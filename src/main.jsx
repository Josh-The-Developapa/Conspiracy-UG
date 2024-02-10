import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Home from '../src/pages/Home/Home.jsx';
import Footer from '../src/components/Footer/footer.jsx';
import Products from './pages/Product/Products';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'products',
    element: <Products />,
  },

  {
    path: 'about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Footer /> */}
  </React.StrictMode>
);
