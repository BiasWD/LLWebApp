import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer.js'
import Home from './Pages/Home.js'
import Booking from './Pages/Booking.js'

import './App.css';

function App() {
  return (
<BrowserRouter>
  <div className="layout-container">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;
