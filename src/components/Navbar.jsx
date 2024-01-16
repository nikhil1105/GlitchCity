import React, { useState } from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/" className='ml-4 font-bold text-blue-700'>
          Logo
        </a>
        <ul className={`lg:flex justify-center items-center gap-16 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <a
              href="/"
              className='font-montserrat leading-normal text-lg text-blue-600 font-bold hover:text-white'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className='font-montserrat leading-normal text-lg text-blue-600 font-bold'
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className='font-montserrat leading-normal text-lg text-blue-600 font-bold'
            >
              Contact
            </a>
          </li>
        </ul>
        <div className='lg:hidden'>
          <img
            src="./assets/hamburger.svg"
            alt="Hamburger"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
