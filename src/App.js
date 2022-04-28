import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import About from './Components/About.js/About';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SingUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
