"use client"

import { useState } from "react";
import { Button } from "../ui/button";


type CountButtonProps = {
    totalCount: number,
    label?: string,
    variant?:string
  }

export default function CountButton({totalCount,label,variant}: CountButtonProps) {
    const [count,setCount] = useState(totalCount);
  
    return(
        <Button onClick={ () => count >0 ? setCount(count -1): setCount(count)}>{count} تكرار</Button>
    );
  }