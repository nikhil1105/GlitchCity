import React from 'react'
import Nav from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Dashboard from './components/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
