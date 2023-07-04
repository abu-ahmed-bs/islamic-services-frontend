"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CountButton from "./countButton";
import { Badge } from "../ui/badge";
import { Separator } from "@radix-ui/react-separator";


type DekrCardProps = {
  item: any,
  itemCount: number,
  font:any
}



export default function DekrCard({item,itemCount,font}: DekrCardProps) {

  
  return(
    <Card className={`relative flex flex-col w-screen h-screen m-4 mx-auto rounded-none bg-slate-100 bg-opacity-20 md:bg-white md:w-2/3 md:h-80 md:rounded-md`}>
    <CardHeader>
      <CardTitle className="flex flex-row gap-2"><Badge className="self-center">{itemCount}</Badge>{item.category}</CardTitle>
      {item.description && <CardDescription>{item.description}</CardDescription>}
    </CardHeader>
    <CardContent className={`h-full ${font.className}`}>
      <p className='text-xl'>{item.content}</p>
    </CardContent>
    <hr />
    <CardFooter className='inset-x-0 bottom-0 m-3'>
      <CountButton totalCount={item.count} />
    </CardFooter>
  </Card>    
  );
}