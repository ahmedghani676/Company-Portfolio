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
     <div
      className=' bg-cover bg-center'
      style={{ backgroundImage: 'url(/bgimage.jpg)',minHeight: '50vh' }}
      // Update the path to your image
    >
      <div id='services' className='w-full min:h-screen  p-2 bg-opacity-60'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <h1 className='text-3xl lg:text-4xl tracking-widest uppercase text-white mb-8'>
            Services
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12'>
            {servicesList.map((item, index) => (
              <div
                key={index}
                className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'
              >
                <div className='grid grid-cols-2 gap-4 items-center'>
                  <div className='m-auto'>
                    <Image src={item.link} width={600} height={600} alt={item.name} />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services