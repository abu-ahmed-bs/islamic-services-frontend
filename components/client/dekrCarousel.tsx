"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DekrCard from './dekrCard';
import { v4 as uuidv4 } from 'uuid';

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

export default function DekrCarousel({items}: DekrCarouselProps) {

  
    return(
    <Carousel className='flex h-screen m-auto' responsive={responsive}>
        {
            items.map( (item: any) => (
                <DekrCard key={uuidv4()} item={item} />
            ))
        }
    </Carousel> 
    );
  }