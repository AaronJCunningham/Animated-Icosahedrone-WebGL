import React, { useState, useRef, useEffect } from 'react';
// import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

extend({ OrbitControls });




const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls
      autoRotate
      enableDamping
      // maxPolarAngle={Math.PI / 3}
      // minPolarAnlge={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const handleMouse = () => {
 
}

// const Plane = () => (
//   <mesh rotation={[-Math.PI / 2, 0, 0]}>
//     <planeBufferGeometry attach="geometry" args={[100, 100]} />
//     <meshPhysicalMaterial attach="material" color="white" />
//   </mesh>
// );

const Box = ({position}) => {
  const [hyperColor, setHyperColor] = useState('rgb(0,0,0)')
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [2, 2, 2] : [1, 1, 1],
    color: hovered ? 'lightblue' : 'pink',
  });
  const colorControl = () => {

  }

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      matrix={[1,2,3]}
      scale={props.scale}
      position={position}
    >
      <ambientLight />
     
      <spotLight position={[0, 5, 10]} penumbra="1" />
      <a.icosahedronBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>

  );
};



const Square = () => {
  return (<Canvas camera={{ position: [0, 0, 15] }}>
  {/* <fog attach="fog" args={['white', 10, 20]} /> */}
  <Controls />
  <Box />
  {/* <SpaceShip /> */}
</Canvas>)
}

const CompleteScene = () => {
  return (
  
    
      <Square />
    
    

  
  )
}
const App = () => {
  return (<Canvas camera={{ position: [1, 1, 1] }}>
    {/* <fog attach="fog" args={['white', 10, 20]} /> */}
    <Controls />
    <Box />

 
    {/* <SpaceShip /> */}
  </Canvas>)
};

export default App;
