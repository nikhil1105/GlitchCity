import React, { useRef } from 'react'
import StarsCanvas from './canvas/Stars'
import '../Home.css'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";


const services = [

    {
        title: "reactjs",
        icon: '../assets/tech/reactjs.png',
    },
    {
        title: "nodejs",
        icon: '../assets/tech/nodejs.png',
    },
    {
        title: "tailwind",
        icon: '../assets/tech/tailwind.png',
    },

    {
        title: "MongoDB",
        icon: '../assets/tech/mongodb.png',
    },
    {
        title: "Git",
        icon: '../assets/tech/git.png',
    },
    {
        title: "Framermotion",
        icon: '../assets/tech/framermotion.png',
    },
];

const ServiceCard = ({ index, title, icon }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const sprx = useSpring(x);
    const spry = useSpring(y);

    const rotateX = useTransform(spry, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
    const rotateY = useTransform(sprx, [-0.5, 0.5], ['-17.5deg', '17.5deg']);



    const handlemove = (e) => {
        const rect = e?.target?.getBoundingClientRect?.();

        const width = rect?.width;
        const height = rect?.height;

        const mouseX = e.clientX - rect?.left;
        const mouseY = e.clientY - rect?.top;

        const xptn = mouseX / width - 0.5;
        const yptn = mouseY / height - 0.5;

        x.set(xptn);
        y.set(yptn);

    }

    const handleleave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <Tilt className=' sm:w-[200px] w-full pb-5 touch-none mb-10 mr-7 sm:mb-0 sm:mr-0 select-none' >
            <motion.div

                onPointerDown={handleleave}
                onPointerMove={handlemove}
                onPointerLeave={handleleave}
                onPointerUp={handleleave}
                onPointerDownCapture={(e) => handlemove(e.pointerId)}
                className='rounded-xl inset-4 relative sm:w-[200px] min-h-[200px]  w-full bg-[#151030]'
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: 'preserve-3d',

                }}>
                <div

                    style={{
                        transform: 'translateZ(80px)',
                        transformStyle: 'preserve-3d'
                    }}
                    className='absolute inset-4 fl rounded-xl bg-[#7a40f8f9] shadow-lg flex justify-evenly items-center flex-col'
                >
                    <img
                        style={{
                            transform: "translateZ(80px)",
                        }}
                        src={icon}
                        alt='web-development'
                        className='w-20 h-20 object-contain'
                    />

                    <h3 style={{
                        transform: "translateZ(70px)",
                    }}
                        className='text-white text-[28px] font-bold text-center '>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}


function Home() {
    
const videoRef = useRef(null);

const handleVideoEnd = () => {
    // Rewind the video to the beginning when it ends
    if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }
};
    return (
        <>
            <div className='h-full w-[100vw] text-white bg'>
                <header className='flex justify-center pt-20 '  >
                    <div className='border-4  border-[#ae09dc5f] bg-[#4c20b1] bg-opacity-[0.3]  rounded-xl w-fit p-10 flex flex-col lg:flex-row '>
                        <div>
                            <span className='text-[80px] font-bold capitalize' >
                                the <br />
                            </span>
                            <span className='text-[80px] text-yellow-300 font-bold capitalize'>
                                glitch
                            </span>
                            <span className='text-[80px] font-bold text-yellow-300 capitalize'>
                                city
                            </span>

                        </div>
                        <div className='' >
                            <img src="../assets/hero/hero1.png" className='lg:h-[80vh]' />
                        </div>
                    </div>
                </header>
                <section className='mx-8 flex justify-center items-center flex-col  ' >
                    <p className="text-white font-black md:text-[60px] sm:text-[50px] text-[30px]"
                    >Introduction</p>
                    <h2 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Overview.</h2><br />

                    <div className='mt-4 capitalize text-[17px] max-w-3xl leading-[30px]' >
                        ultimate academic companion powered by the MERN stack!
                        <br />
                        <br />
                        Organize Effortlessly:
                        Stay on top of tasks with our intuitive to-do lists. Prioritize assignments, set deadlines, and track your progress—all in one place.
                        <br /><br />
                        Collaborate Seamlessly:
                        Streamline group projects with integrated chat. Discuss ideas, share resources, and work together effortlessly.
                        <br /><br />
                        Boost Your Studies:
                        Accelerate learning with cheatsheet sharing. Access and exchange valuable cheatsheets with your peers.
                        <br /><br />
                        Instant Assistance:
                        Stuck on a concept? Our 24/7 bot support provides quick answers and helpful resources.
                        <br /><br />
                        Sign up now and experience the simplicity of [Website Name]—where MERN technology meets academic excellence!

                    </div>



                    <div
                        className='mt-20 flex  gap-10 w-full h-full flex-wrap'
                    >

                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>

                    <div className='w-full h-fit border-2 flex justify-center bg-black rounded-xl my-10  border-gray-800 '>
                        <video
                            ref={videoRef}
                            width="360px"
                            height="240px"
                            onEnded={handleVideoEnd}
                            autoPlay
                            loop
                            muted
                            className='z-10'
                        >
                            <source src='../assets/render.mp4' type='video/mp4'  />
                        </video>
                        <img src="../assets/sec/1.png" className='z-20 left-4 absolute h-[200px] w-fit' />    
                        <img src="../assets/sec/2.png" className='z-20 right-4 absolute h-[200px] w-fit' />    
                        <img src="../assets/sec/3.png" className='z-20 absolute h-[200px] w-fit' />    


                    </div>


                </section>
                <footer>

                </footer>

            </div>
        </>
    )
}

export default Home
