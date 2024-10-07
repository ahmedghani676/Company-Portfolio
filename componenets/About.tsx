import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full bg-black py-16 px-4 md:px-8 flex items-center'>
      <div className='max-w-7xl mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Image Content */}
        <div className='flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-lg'>
          <div className='w-full max-w-md'>
            <Image
              src="/iuy.jpg"
              width={500}
              height={300}
              className='object-cover rounded-lg'
              alt='Our Expertise'
            />
          </div>
        </div>

        {/* Text Content */}
        <div className='flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#5651e5] uppercase tracking-wider'>
            Short Intro
          </h1>
          <h2 className='py-4 text-xl font-semibold'>Who I Am</h2>
          <p className='py-2 text-gray-700'>
            I am a software Engineer , specialize in delivering innovative solutions and exceptional services tailored to your business needs. I  excel in providing comprehensive services including software engineering, ensuring that we meet and exceed your expectations.
          </p>

          <p className='py-2 text-gray-700'>
            My portfolio includes successful projects for a diverse range of clients, from startups to established enterprises. We leverage our extensive experience and technical proficiency to tackle complex challenges and deliver impactful solutions. In addition to my core services, i am passionate about sharing our knowledge and expertise through our blog, YouTube channel, etc in the coming days, where i provide insights into industry trends and best practices.
          </p>
          <div className='flex justify-around items-center '>
            <Link href='/#projects'>
            <div className='py-2 text-blue-600 hover:underline'>
              Explore our latest projects !
            </div>
            </Link>
             <Link href='/#contact'>
                <div className='bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300'>
                  Contact Me
                </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About