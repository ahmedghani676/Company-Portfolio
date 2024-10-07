import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { LiaJenkins } from 'react-icons/lia';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Thank you for reaching out to us!');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div
      id='contact'
      className='w-full bg-cover bg-center relative'
      style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)', backgroundAttachment: 'fixed' }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div> {/* Overlay for better text visibility */}
      <div className='relative z-10 max-w-[1240px] m-auto px-4 py-16'>
        <h1 className='text-3xl tracking-widest uppercase text-[#5651e5]'>
          Contact Us
        </h1>
        <h2 className='py-4 text-white text-3xl md:text-4xl font-bold'>
          We’d Love to Hear From You
        </h2>
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Left Section */}
          <div className='w-full bg-white shadow-xl shadow-gray-400 rounded-xl p-6 lg:p-8'>
            <div className='flex flex-col items-center'>
              <Image
                className='rounded-full'
                src='/get_in_touch.png' 
                alt='personal Profile'
                width={220}
                height={200}
              />
              <h2 className='py-4 text-2xl font-semibold text-gray-800'>Ahmed Ghani</h2>
              <p className='text-gray-600'>Consistency Hardwork Dedication!</p>
              <p className='py-4 text-gray-600'>
                I am dedicated to providing innovative solutions and top-notch services. Whether you have a question, a project inquiry, or just want to say hello, I m’re here to assist you.
              </p>
              <p className='uppercase text-gray-800 pt-4'>Connect With Me</p>
              <div className='flex space-x-4 pt-4'>
                <a
                  href='https://www.linkedin.com/in/ahmed-ghani-962238217' 
                  target='_blank'
                  rel='noopener'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                    <FaLinkedinIn className='text-blue-600' />
                  </div>
                </a>
               
                <Link
                  href='/#contact' 
                 
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                    <AiOutlineMail className='text-red-500' />
                  </div>
                </Link>
                <Link href=''>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                    <BsFillPersonLinesFill className='text-gray-700' />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='w-full bg-white shadow-xl shadow-gray-400 rounded-xl p-6 lg:p-8'>
            <form
              action='https://formspree.io/f/mpwaogya'
              method='POST'
              onSubmit={handleSubmit}
              encType='multipart/form-data'
            >
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='flex flex-col'>
                  <label htmlFor='name' className='uppercase text-sm text-gray-800 py-2'>Name</label>
                  <input
                    id='name'
                    className='border-2 rounded-lg p-3 border-gray-300'
                    type='text'
                    name='name'
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='phoneNumber' className='uppercase text-sm text-gray-800 py-2'>Phone Number</label>
                  <input
                    id='phoneNumber'
                    className='border-2 rounded-lg p-3 border-gray-300'
                    type='text'
                    name='phone'
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='email' className='uppercase text-sm text-gray-800 py-2'>Email</label>
                <input
                  id='email'
                  className='border-2 rounded-lg p-3 border-gray-300'
                  type='email'
                  name='email'
                  required
                />
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='subject' className='uppercase text-sm text-gray-800 py-2'>Subject</label>
                <input
                  id='subject'
                  className='border-2 rounded-lg p-3 border-gray-300'
                  type='text'
                  name='subject'
                  required
                />
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='message' className='uppercase text-sm text-gray-800 py-2'>Message</label>
                <textarea
                  id='message'
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows={5}
                  name='message'
                  required
                ></textarea>
              </div>
              <button className='w-full py-3 mt-4 bg-[#5651e5] text-white rounded-lg'>
                Send Message
              </button>
              {status && <p className='mt-4 text-green-500'>{status}</p>}
            </form>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;