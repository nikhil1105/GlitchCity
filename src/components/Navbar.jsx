import React from 'react'
import {hamburger} from '../Hacakthon/assets'

const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full '>
    <nav className='flex justify-between items-center max-container'>
        <a href="/" className='ml-4 font-bold text-blue-700'>Logo</a> 
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            <li><a href="/" className='font-montserrat leading-normal text-lg text-blue-600 font-bold'>Home</a></li>
            <li><a href="/" className='font-montserrat leading-normal text-lg text-blue-600 font-bold'>About</a></li>
            <li><a href="/" className='font-montserrat leading-normal text-lg text-blue-600 font-bold'>Contact</a></li>
        </ul>
        <div className='hidden max-lg:block'>
            <img src={hamburger} alt="Hamburger" 
            width={25}
            height={25}/>
        </div>     
            
    </nav>
   </header>
  )
}

export default Nav