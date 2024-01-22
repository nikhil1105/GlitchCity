import React from 'react';
import StarsCanvas from './canvas/Stars';

const About = () => {
  return (
    <div className='relative'>
      <div className="flex min-h-screen items-center justify-center bg-neutral-800 main ">
        <div className="flex">

          {/* First Section */}

        <div class="flex gap-2"> 
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl rounded-lg hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/ng.png" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Nikhil Gupta</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Full Stack Developer </p>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Graduating From Bhavans College </p>
              <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Impleting The knowledge Into The Real World Application </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <a href="https://portfolio-nikhil-gupta.netlify.app/" target='_blank'>See More</a>
              </button>
            </div>
          </div>

          {/* Second Section (New Section) */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl rounded-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/nj.jpeg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Nikhil Jha</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Full Stack Developer </p>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Bhavans College </p>
              <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Eager To Implement Knowledge Into Contributing TO Information Technology</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <a href="https://your-link.com" target='_blank'>See More</a>
              </button>
            </div>
          </div>
        </div> 
          {/* Third Section (Existing Section) */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  hover:shadow-black/30 w-[px]">
            {/* ... (existing content for the third section) */}
            <div className='text-white'>
               <h1 className='font-extrabold text-3xl'>About Project!</h1> 
               <p>We are thrilled to present our innovative website at the upcoming competition,</p>
               <p>where creativity and digital excellence take center stage!</p>
               <p>Our website is a testament to thoughtful design, user engagement,</p>
               <p>and cutting-edge functionality. We've poured passion and </p><p>expertise into crafting an online experience that goes beyond the ordinary.</p>
                
          </div>
          </div>

        </div>
        <StarsCanvas />
      </div>
    </div>
  );
}

export default About;
