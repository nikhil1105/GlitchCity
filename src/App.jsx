import React from 'react'
import Nav from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Routess from './components/Routess'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
