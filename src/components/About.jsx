import React from 'react'
import StarsCanvas from './canvas/Stars'



const About = () => {
  return (
    <div class="flex min-h-screen items-center justify-center bg-neutral-800 main">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
          <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/ng.png" alt="" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white">Nikhil Gupta</h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Full Stack Developer </p>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Graduating From Bhavans College </p>
          <p class="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Impleteing The knowledge Into The Real World Application </p>
          <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://portfolio-nikhil-gupta.netlify.app/" target='_blank'>See More</a></button>
        </div>
      </div>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
          <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/nj.jpeg" alt="" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white">Nikhil Jha</h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Full Stack Developer </p>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Graduating From Bhavans College</p>
          <p class="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Eager To apply Knowledge To The Real World Application</p>
          <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a href="https://www.linkedin.com/in/nikhil-jha-145793239/" target='_blank' >See More</a></button>
        </div>
      </div>
      
    </div>
   <StarsCanvas/>
  </div>
  


   
   
   
  )
}

export default About
