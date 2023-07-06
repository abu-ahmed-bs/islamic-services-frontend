import { NextResponse } from "next/server"

export async function GET(request: Request) {
  
    const res = await fetch('http://127.0.0.1:8080/api/adkar?categoryId=5',{ headers : {"Accept":"application/json","Content-Type":"application/json"}})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 

  const data = await res.json();

 
  return NextResponse.json( data )
}