"use client"


import { useEffect, useState } from "react";


export const NavbarLinks = ()=>{


  const [windowHREF,setWindowHREF] = useState('');


    useEffect(()=>{


        setWindowHREF(window.location.href)
      
      
      },[])

    return <div className='flex md:flex-col lg:flex-row gap-x-10  font-semibold'>

    <a href={`${windowHREF}#i-made-them`} className='cursor-pointer'>What I Made</a>

    <a href={`${windowHREF}#services`} className='cursor-pointer'>Services</a>

    <a href={`${windowHREF}#portfolio`} className='cursor-pointer'>Portfolio</a>

    <a href={`${windowHREF}#bookappointment`} className='cursor-pointer'>Book Appointment</a>

    <a href={`${windowHREF}#faq`} className='cursor-pointer'>FAQ</a>



    <a href={`${windowHREF}#contact-me`} className='cursor-pointer'>Contact Me</a>

</div>
}