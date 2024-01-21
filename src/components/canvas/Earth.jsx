import React,{Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,useGLTF } from "@react-three/drei";
import Load from "./Load";
import Earthmodel from './Earthmodel';


const Earth = () => {
  
  return (
    <Earthmodel
    
    scale={2.5}
    position-y={0}
    rotation-y={0}
    />  )
}

const EarthCanvas=()=>{
  return(
    <Canvas frameloop='demand' shadows
    camera={{
      position:[-4,3,6],
      fov:45,
      near:0.1,
      far:200,
      
    }}>
      
      <Suspense  fallback={<Load/>}  >
      <OrbitControls autoRotate enableZoom={false} 
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <Earth/>
      </Suspense>
    <Preload all/>
    </Canvas>
  )
}
export default EarthCanvas