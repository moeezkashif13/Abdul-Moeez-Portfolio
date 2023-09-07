"use client"


import { useEffect, useState } from "react";


export const NavbarLinks = ()=>{


  // const [windowHREF,setWindowHREF] = useState('');


  //   useEffect(()=>{


  //       setWindowHREF(window.location.href)
      
      
  //     },[])

    return <div className='flex md:flex-col lg:flex-row gap-x-10  font-semibold'>

    <a href={`#i-made-them`} className='cursor-pointer'>What I Made</a>

    <a href={`#services`} className='cursor-pointer'>Services</a>

    <a href={`#portfolio`} className='cursor-pointer'>Portfolio</a>

    <a href={`#blog`} className='cursor-pointer'>Blog</a>


    <a href={`#bookappointment`} className='cursor-pointer'>Book Appointment</a>

    <a href={`#faq`} className='cursor-pointer'>FAQ</a>



    <a href={`#contact-me`} className='cursor-pointer'>Contact Me</a>

</div>
}