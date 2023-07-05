"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import Carousel from "react-multi-carousel";


type CountButtonProps = {
    totalCount: number,
    label?: string,
    variant?:string,
    carouselRef?: any
  }

export default function CountButton({totalCount,label,variant,carouselRef}: CountButtonProps) {
    const [count,setCount] = useState(totalCount);
  
    function updateCount(){
      if(count > 0 ) { setCount(count -1) }  

      if((count-1) === 0) {  
        carouselRef.current.next();
      }
    }
    return(
        <Button onClick={updateCount}> {count} تكرار</Button>
    );
  }