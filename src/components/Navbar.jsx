import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";


const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const isusersign = !!localStorage.getItem('token')

  const handlesignout = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=' py-4 px-4 bg-[#9d46d700] bg-opacity-[0.5] absolute z-10 w-full'>
      <nav className=' flex justify-between items-center '>
        <Link to="/" className=' font-bold  text-white'>
          Logo
        </Link>
        <ul className={` sm:flex justify-center items-center gap-16 hidden `}>
          <li>
            <Link
              to='/'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Home
            </Link>
          </li>
          <li>
            {isusersign?
            <button
              onClick={handlesignout}
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]' 
            >
              logout
            </button>:
            <Link
            to="/login"
            className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]' 
          >
            login
          </Link>
            }
          </li>
          <li>
            <Link
              href="/"
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='sm:hidden'>
          <img
            src="./assets/hamburger.svg"
            alt="Hamburger"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>
      <div>
      <ul className={`sm:hidden ${isMobileMenuOpen? '':'hidden'}  absolute top-[60px] right-[30px] bg-slate-700 bg-opacity-[0.9] p-4 rounded-2xl`}>
          <li>
            <Link
              href="/"
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Home
            </Link>
          </li>
          <li>
          {isusersign?
            <button
              onClick={handlesignout}
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]' 
            >
              logout
            </button>:
            <Link
            to="/login"
            className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]' 
          >
            login
          </Link>
            }
          </li>
          <li>
            <Link
              href="/"
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
