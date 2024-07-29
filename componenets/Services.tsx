import React, { useEffect } from 'react'
import Image from 'next/image';

interface ServicesItem {
  name: string;
  link: string;
}

interface ServicesProps {
  servicesList: ServicesItem[];
}

const Services: React.FC<ServicesProps> = ({ servicesList }) => {
   
  return (
      <div id='services' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h1 className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Services
        </h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12'>
       {servicesList.map((item,index) => (
           <div key={index} className='p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
              <div className='m-auto'>
              <Image src={item.link} width={600} height={600} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{item.name}</h3>
              </div>
            </div>
          </div>

       ))}           
                 
       </div> 
      </div>
    </div>
  )
}

export default Services