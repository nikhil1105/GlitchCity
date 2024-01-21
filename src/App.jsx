import React, { useEffect, useState } from 'react'
import Nav from './components/Navbar'
import Home from './components/Home'
import { Routes , Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Chatgrp from './components/Chatgrp';
import Bot from './components/ChatsBot';




import Login from './components/login';
import Signup from './components/Signup';
import Cheatsheet from './components/Cheatsheet';



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
        <Route path="/chatbot" element={isusersign?<Bot/>:<Login/>}/>
        
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cheatsheet" element={<Cheatsheet/>}/>



      </Routes>
    </div>
  )
}

export default App
