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

    return   <ul className='flex gap-x-10 list-disc loop'>


    {[1,2,3].map(()=>{
      return <>
          <li>React JS</li>
      <li>Next JS</li>
      <li>Tailwind CSS</li>
      <li>Javascript</li>
      <li>Strapi CMS</li>
    </>
    })}
    
    
    </ul>
}