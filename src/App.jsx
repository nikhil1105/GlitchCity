import React from 'react'
import Nav from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
