import { useEffect, useRef, useState } from "react";
import "./App";
import Plx from "react-plx";



export default function App() {

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
            setypos((window.scrollY/windowHeight)*2+1);
        };

        window.addEventListener('scroll', handleWindowScroll);


        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleWindowScroll);

        }
    }, []);
    console.log(windowWidth,ypos/10);

    return (        
            <div className=" h-[200vh] flex justify-center items-top z-[-1] w-full"
            >


                <img src="./assets/background.jpg"
                    className=" fixed h-[100vh] w-full object-cover z-[-1] "
                    style={{
                        scale:1+(ypos/5)+''
                    }}

                />

                <img src="./assets/bg.png" className=" fixed h-[100vh] w-full object-cover z-[-1] " 
                style={{
                    scale:ypos+''
                }}
                />

                <div className=" fixed text-[50px] text-white  drop-shadow-lg shadow-black" >
                    welcome!
                </div>
            </div>
        
    );
}