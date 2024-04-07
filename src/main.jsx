import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Home from '../src/pages/Home/Home.jsx';
import About from './pages/About/About';
import ContextProvider from './Context/ContextProvider.jsx';
import Orders from './pages/Orders/Orders.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: 'about',
    element: <About />,
  },

  {
    path: 'orders/3jqLJb4Z',
    element: <Orders />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
