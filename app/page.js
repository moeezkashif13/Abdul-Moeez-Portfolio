"use client"

import anime from 'animejs'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const techStack = [

  {name:'React JS',link:'https://react.dev/learn/start-a-new-react-project'},


  {name:'Next JS',link:'https://nextjs.org/'},
  
  
  {name:'Javascript',link:'https://www.google.com/search?q=what+is+javascript'},
  
  
  {name:'Tailwind CSS',link:'https://tailwindcss.com/'},
  
  
  {name:'React Hook Form',link:'https://react-hook-form.com/'},
  
  
  {name:'Yup JS',link:'https://github.com/jquense/yup'},
  
  
  {name:'Strapi CMS',link:'https://strapi.io/'},
  
  
  {name:'Wordpress API',link:'https://developer.wordpress.org/rest-api/'}


]



const whatICreated = [

  {text:'Next Concept',link:'https://moeezinteriordesign.netlify.app'},
  {text:'Sahhmallllc',link:'https://sahhmallllc.com'},
  {text:'Revive Digital',link:'https://revivedigi.vercel.app'},
  {text:'Design Agency',link:'https://abdulmoeez-agency.netlify.app'},


]






export default function Home() {

  let containerHeight = 230;


  const [topPosition,setTopPosition] = useState(containerHeight);



  const [windowHREF,setWindowHREF] = useState('');




useEffect(()=>{

  setWindowHREF(window.location.href)


},[])



  useEffect(()=>{

anime({

  targets: '.skillsBanner',
  translateX: '-500px',
  duration: `10000`,
  loop: true,
  delay:0,
direction:'alternate',
  
  easing: 'easeInOutSine'


})


anime({

  targets: '.loop',
  translateX: '-300px',
  duration: `5000`,
  loop: true,
  delay:0,
direction:'alternate',
  
  easing: 'easeInOutSine'


})



    const hello = document.querySelector('.hello');

    console.log(hello.offsetTop);

    





  },[])


  return (

    <div className='bg-black text-white overflow-x-hidden  relative'>

{/* <div className='w-40 h-40 absolute top-0 bg-teal-500 z-40 rounded-full'></div> */}


<div className='  absolute rotate-12 z-50 w-full top-[980px] anotherMobile:top-[950px] forBanner:top-[880px] sm:top-[1050px] md:top-[770px] xl:top-[770px] secondDesktop:top-[820px] -left-[25%] list-disc uppercase  text-black font-bold  text-xl '>
 
<ul className='skillsBanner flex  gap-x-12    w-[600%] bg-[#91ff0064] py-2' >

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

</div>



<div className='  absolute -rotate-12 z-50 w-full top-[1000px] anotherMobile:top-[970px] forBanner:top-[920px] sm:top-[1100px] md:top-[830px] xl:top-[840px] secondDesktop:top-[900px] -left-[7%] forBanner:-left-[12%] anotherDesktop:left-[0%] secondDesktop:-left-[5%]  list-disc uppercase  text-black font-bold text-xl '>
 
<ul className='skillsBanner flex  gap-x-12   py-2  w-[600%] bg-[#91ff00]' >

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

</div>












<div className='space-y-8'>


{/* NAVBAR */}

<div className='hidden md:flex items-center  justify-between px-desktopCommon pt-3 pb-6   '>

<div>logo</div>

<div className='flex gap-x-10  font-semibold'>

    <a href={`${windowHREF}#i-made-them`} className='cursor-pointer'>What I Made</a>

    <a href={`${windowHREF}#services`} className='cursor-pointer'>Services</a>


    <a href={`${windowHREF}#portfolio`} className='cursor-pointer'>Portfolio</a>
    <a href={`${windowHREF}#contact-me`} className='cursor-pointer'>Contact Me</a>

</div>


<a href='https://www.facebook.com/abdulmoeez121367' target='_blank' className='px-6 py-1.5 cursor-pointer z-50  rounded-lg border border-white'>

Get in Touch

</a>



</div>

{/* NAVBAR */}


{/* MOBILE NAVBAR */}

<div className='md:hidden block px-mobileCommon md:px-tabletCommon xl:px-desktopCommon  pt-3'>

<div className='flex'>
<div>
  logo
</div>

<div className='ml-auto' onClick={()=>document.querySelector('.toggleMobileNav').classList.toggle('mainStyles')}>

<img src="/drawer.svg" width={20} alt="" />

</div>

</div>


<div className='text-center space-y-1 mt-2 h-full toggleMobileNav mainStyles flex items-center justify-center flex-col' style={{transition:'all 0.6s linear 0'}}>

<a href={`${windowHREF}#i-made-them`} className='cursor-pointer'>What I Made</a>

<a href={`${windowHREF}#services`} className='cursor-pointer'>Services</a>


<a href={`${windowHREF}#portfolio`} className='cursor-pointer'>Portfolio</a>
<a href={`${windowHREF}#contact-me`} className='cursor-pointer'>Contact Me</a>

</div>



</div>


{/* MOBILE NAVBAR */}






{/* HERO SECT */}

<div className='relative md:h-[80vh]   flex flex-col  justify-center md:flex-row px-mobileCommon md:px-tabletCommon xl:px-desktopCommon md:mt-0 '>

<div className='hidden xl:block'>

<div className='absolute top-5 left-[15%] rotate-[30deg]'>
  <img src="/logos/html.svg" width={45} alt="" />
</div>

<div className='absolute top-[25%] left-[45%] rotate-[30deg]'>
  <img src="/logos/css.svg" width={35} alt="" />
</div>

<div className='absolute top-[50%] left-[55%] rotate-[30deg]'>
  <img src="/logos/javascript.svg" width={45} alt="" />
</div>

<div className='absolute top-[0%] left-[65%] '>
  <img src="/logos/reactjs.svg" width={55} alt="" />
</div>

<div className='absolute top-[65%] left-[40%] '>
  <img src="/logos/nextjs.svg" width={90} alt="" />
</div>


<div className='absolute -top-[7%] left-[35%] '>
  <img src="/logos/tailwind.svg" width={60} alt="" />
</div>


<div className='absolute top-[20%] right-[35%] rotate-[30deg]'>
  <img src="/logos/strapi.svg" width={100} alt="" />
</div>


<div className='absolute top-[70%] left-[60%] '>
  <img src="/logos/wordpress.svg" className='w-[50px]' alt="" />
</div>




</div>

<div className='pt-2 z-20 md:w-full md:flex md:flex-col md:justify-center'>

<h1 className='text-7xl md:text-[6rem] lg:text-[8rem] font-bold'>Abdul <br /> Moeez</h1>

<p className='text-sm mt-2 w-[85%] md:w-[365px] lg:text-[1rem] lg:pl-2.5'>Hello, my name is Abdul Moeez, nice to meet you I would like to you with my personal portfolio</p>

<p>MEASURMENT: {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}</p>

</div>

<div className='  md:absolute md:-top-[18%] md:-right-[8%] lg:-right-[5%] h-[350px]  sm:h-[525px] lg:h-[540px] xl:h-[600px] xl:-right-[6.3%] mt-4'>

<img src="/removedbackground.png" className=' w-full h-full max-w-full' alt="" />

</div>



</div>


{/* HERO SECT */}




{/* OUR CLIENTS */}


<div  id="i-made-them"   >


<div className='text-center'>

<p className='text-primary font-semibold md:text-xl xl:text-2xl'>I Made Them</p>

<p className='md:text-lg lg:text-xl'>Using the modern technologies</p>

</div>


<div className='flex  justify-center flex-wrap gap-5 pt-5'>


<a target='_blank' href='https://moeezinteriordesign.netlify.app' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

<img src="/logo1.svg" width={100} alt="" />


</a>

<a target='_blank' href='https://abdulmoeez-agency.netlify.app' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

<img src="/logo2.svg" width={40} alt="" />


</a>


<a target='_blank' href='https://sahhmallllc.com' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

<img src="/logo3.png" width={80} alt="" />


</a>

<a target='_blank' href='https://revivedigi.vercel.app' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

<img src="/logo4.svg" width={100} alt="" />


</a>




</div>




</div>



{/* OUR CLIENTS */}





{/* SKILLS */}


<div className='text-black  font-bold hello h-[150px] anotherDesktop:h-[200px] text-xl
'>



{/* <div className='  bg-[#91ff00] list-disc uppercase  py-2  '>
 

<ul className=' flex gap-x-12 '>
{[1,2,3].map(()=>{
  return <>
     <li>UI/UX DESIGN</li>
  <li>development</li>
  <li>icon design</li>
  <li>loading</li>
  </>
})}

</ul>

</div> */}



</div>





{/* SKILLS */}


{/* WHAT I CAN DO */}

<div >




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


{/* WHAT I CAN DO */}



{/* SELECTED WORKS */}

<div id='portfolio'>


<div className='bg-[#0a0a0a] text-center py-7'>

<p className='text-primary font-semibold md:text-xl xl:text-2xl'>Portfolio</p>

<p className='text-xl font-bold md:text-2xl xl:text-3xl'>Selected Works</p>

</div>



<div className='space-y-5 md:space-y-0  md:mt-6 flex flex-col items-center md:justify-center  px-mobileCommon md:px-tabletCommon xl:px-desktopCommon md:flex-row md:flex-wrap md:gap-3  '>


<a href='https://moeezinteriordesign.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground'  >

<div className='w-full h-full relative'>


<Image  src='/portfolioSample/interiordesign.png' fill className='object-cover' />


<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>

<a href='https://moeezinteriordesign.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]  bg-[#1e1e1e] w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] '  >

<div className='w-full h-full relative'>


<Image  src='/portfolioSample/interiordesign.png' fill className='object-cover' />


<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>



<a href='https://revivedigi.vercel.app/our-clients' target='_blank' className='md:w-[49%] max-w-[650px]  w-full bg-[#1e1e1e] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-center bg-no-repeat bg-[length:410px_410px] md:bg-[length:510px_510px] lg:bg-[length:570px_570px] xl:bg-[length:650px_650px]  ' style={{backgroundImage:'url(/portfolioSample/revivedigi.png)'}}>

<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</a>



<a href='https://abdulmoeez-agency.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]  w-full h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] relative ' >


<Image src='/portfolioSample/designagency.png' fill className='object-cover'  />

<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>



</a>

</div>





</div>


{/* SELECTED WORKS */}


{/* BANNER */}


<div className='relative '>


<div  className='uppercase   w-[500%]  -ml-16 bg-primary py-2 text-black  font-extrabold
text-[1rem] lg:text-lg'>


  <ul className='flex gap-x-10 list-disc loop'>


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


</div>




</div>


{/* BANNER */}


{/* CONTACT ME */}

<div id='contact-me' className='px-mobileCommon md:px-tabletCommon xl:px-desktopCommon '>


<div className='flex flex-col items-center relative'>

<p className='text-primary font-semibold md:text-xl xl:text-2xl'>Contact Me</p>

<p className='font-bold text-white text-4xl md:text-5xl xl:text-7xl xl:-mt-1 text-center mt-2 mb-3'>Lets talk to <br /> discuss</p>


<div className='absolute -right-2 xl:right-12 top-2 '>
<img src="/3d-cube.svg" className='w-[75px] md:w-[105px] xl:w-[120px]' alt="" />
</div>

<div className='absolute left-0 xl:left-12 bottom-[70px] md:bottom-[20px] '>
<img src="/3d-cube.svg" className='w-[55px] md:w-[80px] xl:w-[100px]' alt="" />
</div>

<div className='absolute left-0 md:left-20 xl:left-32 -top-3 md:top-0 '>
<img src="/3d-cube.svg" className='w-[45px] md:w-[65px] xl:w-[85px]' alt="" />
</div>




<div className=' flex space-x-2'>


<a href='https://www.linkedin.com/in/abdulmoeez19' target='_blank' className=' px-5 py-1.5 font-semibold bg-primary text-black'>Get In Touch</a>

<a href='https://www.facebook.com/abdulmoeez121367' target='_blank'  className=' px-5 py-1.5 font-semibold border'>Hire Me Now</a>

</div>

<div className='bg-[#1f1f1f] w-full h-0.5 mt-8'>

</div>



</div>



<div className='text-center space-y-6 pt-5 pb-10'>
  
<div >

<p className='text-[#bfbfbf] mb-4 md:text-lg'>Working in development has given me a stronger sense of the extraordinary in my digital work </p>

<p className='text-[#7a7a7a]'>&copy; Abdul Moeez. All rights reserved 2023</p>


</div>




<div className='text-white flex flex-col items-center gap-y-5'>


<a target='_blank' href="https://www.facebook.com/abdulmoeez121367" className='flex items-center gap-x-2'>
  <img src="/facebook.svg" width={30} alt="" />
  <span>Facebook Profile</span>
</a>

<a target='_blank' href="https://www.linkedin.com/in/abdulmoeez19" className='flex items-center gap-x-2'>
  <img src="/linkedin.svg" width={30} alt="" />
  <span>Linkedin Profile</span>
</a>

<a target='_blank' href="https://api.whatsapp.com/send/?phone=923364507406&text&type=phone_number&app_absent=0" className='flex items-center gap-x-2'>
  <img src="/whatsapp.svg" width={30} alt="" />
  <span>Whatsapp: +92 336 4507406</span>
</a>


</div>



</div>



</div>




{/* CONTACT ME */}



</div>





    </div>
    



  )
}
