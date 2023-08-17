import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader.jsx";

function Ball (){
  const [decal] = useTexture([props.imgUrl]);

};

export default function Home() {
  return (
    <div style={{width: '5px' ,height: '5px'}}> 
    </div>
  );
};

