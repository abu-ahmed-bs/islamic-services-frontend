"use client"

import { useState } from 'react';
import { RevealJS, Slide, H } from 'revealjs-react';
 
export default function Presentation() {
  const [count, setCount] = useState(0);
  
  return(
    <RevealJS id="root">
      <Slide>
        <H size="1">Hello, World!</H>
      </Slide>
    </RevealJS>
  );
}