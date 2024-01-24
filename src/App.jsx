import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from "react-audio-player";
import Landingpage from './components/Landingpage'
import { Routes , Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Chatgrp from './components/Chatgrp';
import Bot from './components/ChatsBot';
import Login from './components/login';
import Signup from './components/Signup';

import About from './components/About';

import Cheatsheet from './components/Cheatsheet';
import Home from './components/Home';
import { useLocation } from "react-router-dom";
import TopBtn from './components/TopBtn';



function App() {

  const location = useLocation();
  const currentPath = location.pathname;
  const [isusersign,setusersign] = useState()
  useEffect(()=>{
    setusersign(!!localStorage.getItem('token'))
  },[isusersign])

  return (
    <div>
      <Routes>
        <Route path="*" element={<Landingpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/dashboard" element={isusersign?<Dashboard/>:<Login/>}/>
        <Route path="/chat" element={isusersign?<Chatgrp/>:<Login/>}/>
        <Route path="/chatbot" element={<Bot/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cheatsheet" element={isusersign?<Cheatsheet/>:<Login/>}/>
      </Routes>
      <TopBtn/>
    </div>
  )
}

export default App
