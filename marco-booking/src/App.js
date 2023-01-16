import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Booking from './components/Booking';
import Contact from './components/Contact';
import './styles/main.css';
import Schedule from './components/Schedule';

const App = () =>{
  return (<>
    <BrowserRouter className="main">
    <Header />
      <Routes>
        <Route path="/" element={<Booking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;