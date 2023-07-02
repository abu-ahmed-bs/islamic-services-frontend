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

async function getData() {

  const res = await fetch('http://localhost:3000/api/adkar')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data.  ')
  }
  const response = res.json();
  console.log(response);
  return response;
}

export default async function Home() {
    const data = await getData();


  return (
<div className='container mt-6'>
  <h1 className='inline-flex p-2 text-2xl '><FcMindMap className='ml-2'/> الأذكار</h1>  
  <Separator />
  <div className='m-2'>
      <nav className="inline-flex -space-x-px bg-white rounded-md shadow-sm isolate" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <FcNext/> 
        </a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">الصفحة رقم {data.currentPage + 1} من أصل {data.pages}</span>
        <a href="#" className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Next</span>
          <FcPrevious/>
        </a>
      </nav>
    </div>

   <div className='mx-auto'>
    {
      data.dekirs.map( (item: any) => (
        <Card key={item.id} className='m-4 bg-[#2D4263] text-[#ECDBBA]'>
        <CardHeader>
          <CardTitle className='text-[#FFD966]'>{item.category}</CardTitle>
          {item.description && <CardDescription className='text-[#FFD966]'>{item.description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <p>{item.content}</p>
        </CardContent>
        <CardFooter>
        <Button variant="outline">التكرار {item.count} </Button>
        </CardFooter>
      </Card>    
      ))
    }
  </div> 
</div>
  )
}
