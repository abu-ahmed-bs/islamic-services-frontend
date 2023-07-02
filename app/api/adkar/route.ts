import { NextResponse } from "next/server"

export async function GET(request: Request) {

    const res = await fetch('http://localhost:8080/api/adkar')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 

  const data = await res.json();

 
  return NextResponse.json( data )
}