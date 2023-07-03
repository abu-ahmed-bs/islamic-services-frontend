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


import { FcNext,FcPrevious,FcMindMap } from "react-icons/fc";
import Link from 'next/link';



export default async function Home() {
    


  return (
    <Link href={"/adkar"}>Adkar Page</Link> 
  )
}
