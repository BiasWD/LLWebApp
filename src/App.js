import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.js'
import Booking from './Pages/Booking.js'

import './App.css';

const router = createBrowserRouter([{
  path: '/',
  element: <Booking />
},
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
