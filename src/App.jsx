import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import "./style.css"

const App = () => {
  return (
    <>
    <Canvas camera={{fov:12, position:[0,-10,220]}}>
    
    <OrbitControls />

    <Environment 
    files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}
    />

    <MacContainer />
  

    </Canvas>;
    </>
  )
}

export default App;