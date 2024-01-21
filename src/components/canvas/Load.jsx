import { Html, useProgress } from "@react-three/drei";

const Load = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      position={[-1,-1,0]}
      style={{
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Load;