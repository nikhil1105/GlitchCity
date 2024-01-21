import React, { useEffect, useState } from 'react'
import Nav from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Chatgrp from './components/Chatgrp';
import Chatbot from './components/Chatbot';
import Login from './components/login';
import Signup from './components/Signup';


function App() {

  const [isusersign,setusersign] = useState()
  useEffect(()=>{
    setusersign(!!localStorage.getItem('token'))
  },[isusersign])

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/dashboard" element={isusersign?<Dashboard/>:<Login/>}/>
        <Route path="/chat" element={isusersign?<Chatgrp/>:<Login/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default App
