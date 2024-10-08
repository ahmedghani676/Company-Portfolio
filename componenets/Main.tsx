import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-black"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="relative z-10 text-center">
          <div className='flex justify-center'>
          <Image
            src="/profiles.png"
            width={300}
            height={100}
            className="object-cover rounded-lg"
            alt="Our Expertise"
          />
          </div>
         
          <div className="mt-4">
            <p className="text-white text-lg mb-4">
              I have over 2 years of experience in web technologies. Super passionate about beautiful UI, intuitive UX design, and maintaining a good workflow through APIs. I believe in high quality, simplicity, collaboration, and tight feedback loops.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/ahmed-ghani-962238217"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
              >
                <FaLinkedinIn className="text-blue-600" />
              </a>
              <Link href="/#contact">
                <div className="rounded-full bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
                  <AiOutlineMail className="text-red-600" />
                </div>
              </Link>
              <Link href="/resume">
                <div className="rounded-full bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
                  <BsFillPersonLinesFill className="text-gray-700" />
                </div>
              </Link>
            </div>
            <div className="mt-8">
              <Link href="/#contact">
                <div className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300">
                  Contact Me
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;