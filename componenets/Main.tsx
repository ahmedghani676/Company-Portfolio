import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { TypeAnimation } from 'react-type-animation';

const Main  = () => {
  return (
 <div 
      id='home' 
      className='w-full h-screen flex items-center justify-center relative overflow-hidden' 
      style={{backgroundColor: '#7C7D7E', backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh' }}
    >
      <div 
        className='absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center'
      >
        <div className='relative z-10 text-center'>
          <TypeAnimation
            sequence={[
              `Welcome to Nexus Systems!`,
              2000,
              `We are Professional Engineers`,
              2000,
              `LET'S BUILD SOMETHING AMAZING`,
              2000,
              `Focused on Modern Solutions for Today's Problems`,
              2000,
              '',
              1000,
            ]}
            speed={40}
            style={{
              background: 'linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2.5em',
              fontFamily: 'Arial, sans-serif',
              lineHeight: '1.2',
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.6)'
            }}
            repeat={Infinity}
          />
          <div className='mt-8'>
            <p className='text-white text-lg mb-4'>Your trusted partner for innovative solutions and engineering excellence.</p>
            <div className='flex items-center justify-center gap-6'>
              <a
                href='https://www.linkedin.com/in/clint-briley-50056920a/'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300'
              >
                <FaLinkedinIn className='text-blue-600' />
              </a>
              <a
                href='https://github.com/fireclint'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300'
              >
                <FaGithub className='text-black' />
              </a>
              <Link href='/#contact'>
                <div className='rounded-full bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300'>
                  <AiOutlineMail className='text-red-600' />
                </div>
              </Link>
              <Link href='/resume'>
                <div className='rounded-full bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300'>
                  <BsFillPersonLinesFill className='text-gray-700' />
                </div>
              </Link>
            </div>
            <div className='mt-8'>
              <Link href='/#contact'>
                <div className='bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300'>
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main