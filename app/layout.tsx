
import Link from 'next/link'
import './globals.css'
import { WiHorizonAlt, WiNightAltCloudy } from "react-icons/wi";
import { LuBed, LuHelpingHand, LuHome } from "react-icons/lu";

export const metadata = {
  manifest:'/manifest.webmanifest',
  title: 'أذكاري',
  description: 'برنامج مبسط يساعدك على الوصول لأذكارك و أدعيتك ',
  charset: 'UTF-8',
  icons: {
    apple: '/icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/icon.png',
    }
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className='overflow-hidden md:overflow-auto'>
        <div className='flex gap-3 m-5'>    
          <Link className='flex items-center gap-1 p-2 bg-gray-900 rounded-sm hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:to-pink-500' href={"/"}><LuHome className='md:text-[2rem]'/></Link>  
          <Link className='flex items-center gap-1 p-2 bg-gray-900 rounded-sm hover:bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500' href={"/adkar/morning"}><WiHorizonAlt className='md:text-[2rem]'/>الصباح</Link>
          <Link className='flex items-center gap-1 p-2 bg-gray-900 rounded-sm hover:bg-gradient-to-r hover:text-white hover:from-slate-800 hover:to-blue-500' href={"/adkar/evening"}><WiNightAltCloudy className='md:text-[2rem]'/>المساء</Link>
          <Link className='flex items-center gap-1 p-2 bg-gray-900 rounded-sm hover:bg-gradient-to-r hover:text-white hover:from-purple-400 hover:to-blue-500' href={"/adkar/prayer-after"}><LuHelpingHand className='md:text-[2rem]'/>بعد الصلاة</Link>
          <Link className='flex items-center gap-1 p-2 bg-gray-900 rounded-sm hover:bg-gradient-to-r hover:text-white hover:from-purple-400 hover:to-pink-500' href={"/adkar/bed-time"}><LuBed className='md:text-[2rem]'/> قبل النوم</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
