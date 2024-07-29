import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import propertyImg from '../public/property.jpg';
import Slider from "react-slick";
import { reviewItems } from "../data/reviewList";
import { it } from 'node:test';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
      slidesToScroll: 3,
    
  };
  return (
   
     <div id='testimonial' className='w-3/4 m-auto'>
           
            <div className='mt-20'>
                <Slider {...settings}>
                    {reviewItems.map((item, index) => (
                        <div key={index} className='bg-white h-[450px] text-black rounded-xl '>
                            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                <Image src={item.link} width={200} height={200} alt='/' className='h-44 w-44 rounded-full'/>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4 p-4'>
                                <p className='text-xl font-semibold'>{item.name}</p>
                                <p>{item.review}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
  )
}

export default Testimonial