"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DekrCard from './dekrCard';
import { v4 as uuidv4 } from 'uuid';
import { Amiri_Quran } from 'next/font/google'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import CountButton from './countButton';
import { MutableRefObject, RefObject, useRef } from 'react';
import { Badge } from '../ui/badge';

const font = Amiri_Quran({ weight:'400', subsets: ['latin','arabic'],display:'swap' })

type DekrCarouselProps = {
    items: any[],
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const isTouchScreenDevice = () => {
    try{
        document.createEvent('TouchEvent');
        return false;
    }catch(e){
        return true;
    }
}
  

export default function DekrCarousel({items}: DekrCarouselProps) {
      
    var carousel = useRef<Carousel>(null);

    return(
    <Carousel ref={carousel} rtl draggable={false} arrows={isTouchScreenDevice()} className='flex h-screen m-auto' responsive={responsive}>
        {
            items.map( (item: any,index:number) => (
              <Card key={item.id} className={`relative flex flex-col w-screen mx-auto rounded-none bg-slate-100 bg-opacity-20 h-screen  md:bg-white md:w-2/3 md:h-80 md:rounded-md`}>
                <CardHeader>
                  <CardTitle className="flex flex-row gap-2 text-[1.1rem]"><Badge className="self-center">{index + 1}/ {items.length}</Badge>{item.category}</CardTitle>
                  {item.description && <CardDescription>{item.description}</CardDescription>}
                </CardHeader>
                <CardContent className={`h-3/5
                 md:h-full ${font.className}`}>
                  <p className='text-xl leading-9'>{item.content}</p>
                </CardContent>
                <hr />
                <CardFooter className='m-3 md:bottom-0 md:inset-x-0'>
                  <CountButton  carouselRef={carousel} totalCount={item.count} />
                </CardFooter>
            </Card>
            ))
        }
    </Carousel> 
    );
  }

function userRef(arg0: null) {
  throw new Error('Function not implemented.');
}
