import React from 'react'
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
        <footer className='mt-20 border-t pt-10 border-neutral-700 pl-2 md:pl-8 bg-cyan-600 bottom-0'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
              <h3 className='text-md font-semibold mb-4 text-white text-3xl md:text-5xl '>GTMovies</h3>
              <p className='space-y-2 text-gray-700 '>
                The best movies preview site to show the latest and all trending movies.
              </p>
              <button className='mt-3 bg-transparent border border-white p-2 rounded-full text-white hover:text-black/70 hover:border-black/70 duration-500 ease-in-out'>Follow Us for More</button>  
            </div>
            <div>
              <h3 className='text-md font-semibold mb-4 text-white text-xl text-center'>Get In Touch</h3>
              <ul className='space-y-2'>
                <li className='flex items-center text-gray-700 justify-center text-sm sm:text-md md:text-lg'>
                    <MdOutlineMarkEmailRead className='text-2xl'/>
                    <p className='pl-1'>gkaquainoo@gmail.com</p>
                </li>
                <li className='flex items-center text-gray-700 justify-center text-sm sm:text-md md:text-lg'>
                    <MdPhoneInTalk className='text-2xl'/>
                    <p className='pl-2'>0591071237</p>
                </li>
                <li className='flex items-center text-gray-700 justify-center text-sm sm:text-md md:text-lg'>
                    <IoLocation className='text-2xl'/>
                    <p className='pl-2'>Kasoa, Ghana</p>
                </li>
              </ul>  
            </div>
            <div className=' col-span-2 sm:col-auto'>
              <h3 className='text-md font-semibold mb-2 md:text-center text-xl flex item-center justify-center text-white'>Social Media Handles</h3>
              <ul className='space-y-2 flex items-center justify-center'>
                <a href='' className='text-5xl pr-3 text-gray-700 hover:text-green-500 duration-500'>
                    <IoLogoWhatsapp />
                </a>
                <a href='' className='text-5xl pr-3 text-gray-700 hover:text-red-600 duration-500'>
                    <FaInstagram />
                </a>
                <a href='' className='text-5xl pr-3 text-gray-700 hover:text-black duration-500'>
                    <FaTiktok />
                </a>
                <a href='' className='text-5xl pr-3 text-gray-700 hover:text-black duration-500'>
                    <FaGithub />
                </a>
                <a href='' className='text-5xl pr-3 text-gray-700 hover:text-blue-900 duration-500'>
                    <FaLinkedinIn />
                </a>
              </ul>  
            </div>

        </div>
        <div className='text-center mt-4 text-sm font-medium italic'>Created by Gabby Tech @ 2024</div>
    </footer>
    </div>
  )
}

export default Footer;