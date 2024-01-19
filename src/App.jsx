import React from 'react'
import Nav from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
<<<<<<< HEAD
import Chatgrp from './components/Chatgrp';
=======
import Chatbot from './components/Chatbot';
>>>>>>> 8eb732fb11da6e3bd46617f44857ec751e92f98d



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
<<<<<<< HEAD
        <Route path="/chat" element={<Chatgrp/>}/>

=======
        <Route path="/chatbot" element={<Chatbot/>}/>
>>>>>>> 8eb732fb11da6e3bd46617f44857ec751e92f98d
      </Routes>
    </BrowserRouter>
  )
}

export default App
