import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"


import { FcNext,FcPrevious,FcMindMap, FcLike } from "react-icons/fc";
import Link from 'next/link';



export default async function Home() {
    


  return (
    <div className="container grid h-screen place-items-center">
      <div className='flex items-center gap-3 bg-gray-900 rounded-sm p-9'><h1 className="align-middle">هذا البرنامج صدقة جارية لي و لوالدي .</h1><FcLike className='text-[2rem] animate-bounce'/></div>
    </div>
    
  )
}
