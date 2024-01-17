import { useEffect, useState } from "react";
import  "../App.css";
import { Link } from "react-router-dom";

export default function Home() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [ypos, setypos] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        const handleWindowScroll = () => {
            setypos((window.scrollY / windowHeight) * 2 + 1);
        };

        window.addEventListener('scroll', handleWindowScroll);


        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleWindowScroll);

        }
    }, []);
    console.log(windowWidth, ypos / 10);

    return (
        <div className=" h-[200vh] flex justify-center items-top text-center w-full z-0 "
        >

        <div className=" fixed h-[100vh] w-full object-cover z-[-1] flex flex-col items-center justify-center " >

            <img src="./assets/background.jpg"
                className=" fixed h-[100vh] w-full object-cover z-[-1] "
                style={{
                    scale: 1 + (ypos / 5) + ''
                }}

            />

            <img src="./assets/bg.png" className=" fixed h-[100vh] w-full object-cover z-[-1] "
                style={{
                    scale: ypos + ''
                }}
            />
            
            <div className={` ${ypos<1.2?'hidden':''} top-20 flex items-center justify-center  glitch font-extrabold  fixed sm:text-[80px] text-[60px] tracking-wider	 uppercase`} >
                <span aria-hidden >welcome!</span>
                <span aria-hidden>welcome!</span>
                <span aria-hidden>welcome!</span>
            </div>
            <div className={` ${ypos<1.5?'hidden':''} top-40 flex items-center justify-center  glitch font-extrabold  fixed sm:text-[50px] text-[30px] tracking-wider uppercase text-white`} >
                <span aria-hidden >to</span>
                <span aria-hidden>to</span>
                <span aria-hidden>to</span>
            </div>
            <div className={` ${ypos<1.8?'hidden':''} top-60 flex items-center justify-center  glitch font-extrabold  fixed sm:text-[50px] text-[30px] tracking-wider uppercase text-white`} >
                <span aria-hidden >the</span>
                <span aria-hidden>the</span>
                <span aria-hidden>the</span>
            </div>
            <div className={` ${ypos<2?'hidden':''} top-80 text-[40px] flex items-center justify-center  glitch font-extrabold  fixed sm:text-[55px] tracking-wider text-[#FCEE0A] uppercase`} >

                <span aria-hidden >GlitchCity</span>
                <span aria-hidden>GlitchCity</span>
                <span aria-hidden>GlitchCity</span>
            </div>

            <Link to='*' className=" z-[1]  top-96 fixed" >
            <div className={` ${ypos<2.2?'hidden':''} z-10 cursor-pointer bg-[#4e42f5]  w-[100px] h-[100px] rounded-full  flex items-center justify-center `} >
                <img  src="../assets/play-button1.png" className="h-[90px] w-[90px]" />
                
            </div>
            
            </Link>
            
            </div>
        </div>

    );
}