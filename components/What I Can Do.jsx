import { techStack, whatICreated } from "./HelpingArrays"

export default function WhatICanDo(){
    return <div >




    <div id='services'  className='text-center relative'>
    
    <p className='text-primary font-semibold md:text-xl xl:text-2xl '>Services</p>
    
    <p className='text-xl md:text-3xl lg:text-4xl font-bold'>Available services that <br /> I can work on</p>
    
    
    <div className='absolute right-5 lg:right-10 xl:right-36 -bottom-14 xl:-bottom-20'>
      <img src="/3d-cube.svg" className='w-[65px] md:w-[80px] lg:w-[100px]  ' alt="" />
    </div>
    
    
    </div>
    
    
    
    <div className='space-y-8 px-mobileCommon md:px-tabletCommon xl:px-desktopCommon '>
    
    {/*  */}
    
     <div className='mt-7'>
    
    <div className='relative md:text-lg xl:text-xl'>
      <span className='text-primary'>01.</span>
    <span> Tech Stack</span>
    
    
    
    
    </div>
    
    
    <p className='text-right py-3 md:w-1/2 md:ml-auto md:text-left xl:text-right invisible'>dasdasdasdas das dasjd basjdbsjab djsabdjasbd jdbasjdb</p>
    
    
    <div className='flex flex-wrap xl:text-lg border border-white border-b-0'>
    
    {techStack.map((elem)=>{
      return <a href={elem.link} target='_blank' style={{transition:'all 0.5s'}} className=' w-1/2 h-[60px] even:border-l border-b text-center flex justify-center items-center  hover:bg-white hover:font-semibold hover:text-black '>{elem.name}</a>
    })}
    
    
    
    </div>
    
    
    
    </div>
    
    {/*  */}
    
    
    <div className='mt-7'>
    
    <div className='relative md:text-lg xl:text-xl'>
      <span className='text-primary'>02.</span>
    <span> What I Created</span>
    
    
    <div className='absolute left-3  top-8 md:top-7 lg:top-6 lg:left-10'>
      <img src="/3d-cube.svg" className='w-[55px] md:w-[65px] lg:w-[45px]'   alt="" />
    </div>
    
    
    
    </div>
    
    
    <p className='text-right py-3 md:w-1/2 md:ml-auto md:text-left xl:text-right invisible'>dasdasdasdas das dasjd basjdbsjab djsabdjasbd jdbasjdb</p>
    
    
    <div className='flex flex-wrap xl:text-lg border border-white border-b-0 text-sm'>
    
    {whatICreated.map((elem)=>{
      return <a href={elem.link} target='_blank' className='w-1/2 h-[60px] even:border-l border-b text-center px-4 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 hover:font-semibold  '>{elem.text}</a>
    })}
    
    
    
    </div>
    
    
    
    </div>
    
    
    {/*  */}
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    </div>
}