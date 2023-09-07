"use client"

import anime from "animejs"
import { useEffect } from "react"

export default function Banner(){

    useEffect(()=>{

    anime({

        targets: '.loop',
        translateX: '-300px',
        duration: `5000`,
        loop: true,
        delay:0,
      direction:'alternate',
        
        easing: 'easeInOutSine'
      
      
      })

      
    },[])

    return   <div className='relative '>


    <div  className='uppercase   w-[500%]  -ml-16 bg-primary py-2 text-black  font-extrabold
    text-[0.8rem] lg:text-lg'><ul className='flex gap-x-10 list-disc loop'>


    {[1,2,3].map(()=>{
      return <>
          <li key={Math.floor(Math.random()*1000)}>React JS</li>
      <li key={Math.floor(Math.random()*1000)}>Next JS</li>
      <li key={Math.floor(Math.random()*1000)}>Tailwind CSS</li>
      <li key={Math.floor(Math.random()*1000)}>Javascript</li>
      <li key={Math.floor(Math.random()*1000)}>Strapi CMS</li>
    </>
    })}
    
    
    </ul>
    </div>




</div>
}