// App.js
import React ,{lazy,Suspense,useState,useEffect}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Hollywood from './components/Hollywood';
import Food from './components/Food';
import Technology from './components/Technology';
import AddToCart from './components/AddToCart';
import './App.css';
import Payment from './components/Payment';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood categoryName="Bollywood" />} />
        <Route path="/hollywood" element={<Hollywood categoryName="Hollywood" />} />
        <Route path="/food" element={<Food categoryName="Food" />}/>
        <Route path="/technology" element={<Technology categoryName="Technology" />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
