import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';
import Schedule from './components/Schedule';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () =>{

  return (<>
    <BrowserRouter className="main">
    <Header />
      <Routes>
        <Route path="/" element={<Booking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>)
}

export default App;