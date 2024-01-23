import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import Bot from './ChatsBot';


const Nav = () => {
  const [imdobileMenuOpen, setImdobileMenuOpen] = useState(false);
  const [help,sethelp] = useState(false)
  const navigate = useNavigate()
  const isusersign = !!localStorage.getItem('token')

  const handlesignout = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  const toggleMobileMenu = () => {
    setImdobileMenuOpen(!imdobileMenuOpen);
    if (help==true) {
      sethelp(!help)
    }
  };

  return (
    <header className=' absolute  py-4 px-4 bg-opacity-[0.5] top-0  z-50 w-full'>
      <nav className=' flex justify-between items-center '>
        <Link to="/" className=' font-bold  text-white'>
          The GlitchCity
        </Link>
        <ul className={` md:flex justify-center items-center gap-16 hidden `}>
          
          <li>
            <Link
              to='/home'
              className=' leading-normal text-lg text-white font-bold hover:text-[#0c0c0c]'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/cheatsheet'
              className=' leading-normal text-lg text-white font-bold hover:text-[#111111]'
            >
              Cheatsheet
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard'
              className=' leading-normal text-lg text-white font-bold hover:text-[#19191a]'
            >
              TODO
            </Link>
          </li>
          <li>
            <Link
              to='/chat'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              ChatGroup
            </Link>
          </li>
          <li>
            {isusersign?
            <button
              onClick={handlesignout}
              className=' leading-normal text-lg text-white font-bold hover:text-[#151516]' 
            >
              logout
            </button>:
            <Link
            to="/login"
            className=' leading-normal text-lg text-white font-bold hover:text-[#171718]' 
          >
            login
          </Link>
            }
          </li>
          <li>
            <button
              onClick={()=>sethelp(!help)}
              className=' leading-normal text-lg text-white font-bold hover:text-[#1c1c1d]'
            >
              Help
            </button>
          </li>
          <li>
            <Link
              to='/about'
              className=' leading-normal text-lg text-white font-bold hover:text-[#1a1a1a]'
            >
              About us
            </Link>
          </li>
        </ul>
        <div className='md:hidden'>
          <img
            src={`./assets/${!imdobileMenuOpen?'hamburger.svg':'close.svg'}`}
            alt="Hamburger"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>
      <div>
      <ul className={` md:hidden ${imdobileMenuOpen? '':'hidden'}  absolute top-[60px] right-[30px] bg-slate-700 bg-opacity-[0.9] p-4 rounded-2xl`}>
      <li>
            <Link
              to='/home'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/cheatsheet'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Cheatsheet
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              TODO
            </Link>
          </li>
          <li>
            <Link
              to='/chat'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              ChatGroup
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
            <button
              onClick={()=>sethelp(!help)}
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              Help
            </button>
          </li>
          <li>
            <Link
              to='/about'
              className=' leading-normal text-lg text-white font-bold hover:text-[#6793ea]'
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${help?'':'hidden'}`} ><Bot/></div>
    </header>
  );
};

export default Nav;