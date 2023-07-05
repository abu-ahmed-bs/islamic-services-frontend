"use client"

import { MutableRefObject, RefObject, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Carousel from "react-multi-carousel";


type CountButtonProps = {
    totalCount: number,
    label?: string,
    variant?:string,
    carouselRef: RefObject<Carousel>
  }

export default function CountButton({totalCount,label,variant,carouselRef}: CountButtonProps) {
    const [count,setCount] = useState(totalCount);
    const [buttonLabel,setLabel] = useState(`${count} تكرار`)
    let [canReset,setCanReset] = useState(false);
    function updateCount(){
      let totalSlides = carouselRef.current!.state.totalItems - 1;
      if(count > 0 ) { 
        setCount(count -1) 
        setLabel(`${count - 1} تكرار`)
      }  
      if((count-1) === 0 && !canReset) {  
        carouselRef.current!.next(1);
        setCount(totalCount);
        //carouselRef?.current?.next
      }

      if(totalSlides !== carouselRef?.current?.state.currentSlide && (count-1) === 0 && !canReset){ 
        setLabel(`${totalCount} تكرار`);
        return;
      }

      if(totalSlides === carouselRef?.current?.state.currentSlide && (count-1) === 0 && !canReset){
        setLabel('إعادة');
        setCanReset(true);
        return;
      }

      if(canReset){
        setCanReset(false);
        carouselRef?.current?.goToSlide(0,true);
        setCount(totalCount);
        setLabel(`${totalCount} تكرار`);
      }
      
    }
    return(
        <Button onClick={updateCount}>{buttonLabel}</Button>
    );
  }