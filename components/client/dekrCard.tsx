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


type DekrCardProps = {
  item: any,
}



export default function DekrCard({item}: DekrCardProps) {

  
  return(
    <Card className='m-4 bg-[#2D4263] text-[#ECDBBA]'>
    <CardHeader>
      <CardTitle className='text-[#FFD966]'>{item.category}</CardTitle>
      {item.description && <CardDescription className='text-[#FFD966]'>{item.description}</CardDescription>}
    </CardHeader>
    <CardContent>
      <p>{item.content}</p>
    </CardContent>
    <CardFooter>
      <CountButton totalCount={item.count} />
    </CardFooter>
  </Card>    
  );
}