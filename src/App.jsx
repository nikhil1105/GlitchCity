import React, { useEffect, useState } from 'react'
import Nav from './components/Navbar'
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




function App() {

  const [isusersign,setusersign] = useState(true)
  // useEffect(()=>{
  //   setusersign(!!localStorage.getItem('token'))
  // },[isusersign])

  return (
    <div>
      <Nav/>
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
    </div>
  )
}

export default App
