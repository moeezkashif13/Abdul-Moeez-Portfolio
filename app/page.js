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


  {text:'The Good Mental Health Company',link:'https://thegoodmentalhealthcompany.netlify.app'},


  {text:'Bridget Barnes Therapy',link:'https://bridgetbarnestherapy.netlify.app'},



  {text:'Lucia Rossi Therapy',link:'https://luciarossitherapy.netlify.app'},


  {text:'Next Concept',link:'https://moeezinteriordesign.netlify.app'},
  {text:'Sahhmallllc',link:'https://sahhmallllc.com'},
  {text:'Revive Digital',link:'https://revivedigi.vercel.app'},
  {text:'Design Agency',link:'https://abdulmoeez-agency.netlify.app'},

  {text:'The Good Mental Health Company',link:'https://thegoodmentalhealthcompany.netlify.app'},

  



]


const faqs = [
  {
    question: "Can you provide examples of websites you've developed in the past?",
    answer: "Certainly! You can view my portfolio on my website to see a range of projects I've worked on. Feel free to explore the live websites and see the diversity of designs and functionalities."
  },
  {
    question: "How do you ensure that the website will be responsive and work on different devices?",
    answer: "I prioritize responsive design in all my projects. I use modern web development techniques to ensure that the website will adapt and function well on various screen sizes, from desktops to tablets and smartphones."
  },
  {
    question: "What is your process for incorporating specific features into the website, such as contact forms or e-commerce capabilities?",
    answer: "I will discuss your requirements in detail to understand the features you need. Then, I will plan and implement these features using appropriate technologies. For instance, if you need a contact form, I'll use HTML/CSS and possibly JavaScript to create a user-friendly form that captures client inquiries."
  },
  {
    question: "How do you handle website security and protect against potential vulnerabilities?",
    answer: "I take website security seriously. I employ best practices such as using secure coding techniques, regular updates, and implementing HTTPS protocols."
  },
  {
    question: "Will I be able to update and manage the website's content on my own?",
    answer: "Absolutely! I can build your website on a content management system (CMS) which will allow you to easily update and add content without needing extensive technical knowledge. I'll also guide you for free if needed."
  },
  {
    question: "How do you handle website hosting and domain registration?",
    answer: "I can assist you in selecting a suitable hosting provider and help you with domain registration if needed."
  },
  {
    question: "What is your approach to search engine optimization (SEO) for the website?",
    answer: "I design websites with SEO in mind from the start. This includes optimizing page load speed, using proper HTML structure, and implementing meta tags."
  },
  {
    question: "What is your pricing structure and what factors can affect the overall cost of the project?",
    answer: "My pricing is based on the scope of the project, including design complexity, features required, and estimated development time. I provide detailed quotes and transparent pricing breakdowns to ensure you have a clear understanding of the costs involved."
  },
  // {
  //   question: "How do you handle ongoing website maintenance and updates?",
  //   answer: "I offer maintenance for free (3 months) that include regular updates, and technical support."
  // }
];





export default function Home() {

  let containerHeight = 230;


  const [topPosition,setTopPosition] = useState(containerHeight);



  const [windowHREF,setWindowHREF] = useState('');

  const [showLoader,setShowLoader] = useState(true);

  const [fullScreenLoader,setFullScreenLoader] = useState(true);


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

  },[])

  useEffect(()=>{

  
    setTimeout(() => {
      // setShowLoader(false)
      setFullScreenLoader(false)
    }, 2000);
  
  
  },[])
  

  return (

    <div className='bg-black text-white overflow-x-hidden  relative'>

{/* <div className='w-40 h-40 absolute top-0 bg-teal-500 z-40 rounded-full'></div> */}


{/* <div className='  absolute rotate-12 z-50 w-full top-[980px] anotherMobile:top-[950px] forBanner:top-[880px] sm:top-[1050px] md:top-[770px] xl:top-[770px] secondDesktop:top-[820px] -left-[25%] list-disc uppercase  text-black font-bold text-sm forBanner:text-lg '>
 
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



<div className='  absolute -rotate-12 z-50 w-full top-[1000px] anotherMobile:top-[970px] forBanner:top-[920px] sm:top-[1100px] md:top-[830px] xl:top-[840px] secondDesktop:top-[900px] -left-[7%] forBanner:-left-[12%] anotherDesktop:left-[0%] secondDesktop:-left-[5%]  list-disc uppercase  text-black font-bold text-sm forBanner:text-lg '>
 
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

</div> */}












<div className='space-y-8'>



{/*LOADERRR HEREEE */}

{fullScreenLoader&&
 <div className='bg-black  top-0 z-[80] fixed w-full h-full flex items-center justify-center '>

<span class="fullScreenLoader"></span>

</div> 

}

{/* LOADERRR HEREEE*}



{/* NAVBAR */}

<div className='hidden md:flex items-start lg:items-center  justify-between px-desktopCommon pt-3 pb-6   '>


<div>logo</div>

<div className='flex md:flex-col lg:flex-row gap-x-10  font-semibold'>

    <a href={`${windowHREF}#i-made-them`} className='cursor-pointer'>What I Made</a>

    <a href={`${windowHREF}#services`} className='cursor-pointer'>Services</a>

    <a href={`${windowHREF}#portfolio`} className='cursor-pointer'>Portfolio</a>

    <a href={`${windowHREF}#bookappointment`} className='cursor-pointer'>Book Appointment</a>

    <a href={`${windowHREF}#faq`} className='cursor-pointer'>FAQ</a>



    <a href={`${windowHREF}#contact-me`} className='cursor-pointer'>Contact Me</a>

</div>


<a href='mailto:moeezkashif13@gmail.com' target='_blank' className='px-6 py-1.5 cursor-pointer z-50  rounded-lg border border-white'>

Get in Touch

</a>



</div>

{/* NAVBAR */}


{/* MOBILE NAVBAR */}

{/* <div className='md:hidden block px-mobileCommon md:px-tabletCommon xl:px-desktopCommon  pt-3'>

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



</div> */}


{/* MOBILE NAVBAR */}




{/* HERO SECT */}

<div className='  max-w-[1366px] 1xl:mx-auto 1xl:items-center relative md:h-[80vh]   flex flex-col  justify-center md:flex-row px-mobileCommon md:px-tabletCommon xl:px-desktopCommon md:mt-0 '>

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

<p className='text-sm mt-2 w-[85%] md:w-[365px] lg:text-[1rem] lg:pl-2.5'>Thank you for stepping into my world. Feel free to explore my work, and get in touch to discuss how we can shape your digital dreams into a captivating digital reality.

</p>



</div>

<div className='  md:absolute md:-top-[18%] md:-right-[8%] lg:-right-[5%] h-[350px]  sm:h-[525px] lg:h-[540px]  xl:-right-[6.3%] mt-4 1xl:top-[-15%]'>

<img src="/removedbackground.png" className=' w-full h-full max-w-full' alt="" />

</div>



</div>


{/* HERO SECT */}




{/* OUR CLIENTS */}


<div  id="i-made-them"  className='pt-0 md:pt-8' >


<div className='text-center'>

<p className='text-primary font-semibold md:text-xl xl:text-2xl'>I Made Them</p>

<p className='md:text-lg lg:text-xl'>Using the modern technologies</p>

</div>


<div className='flex  justify-center flex-wrap gap-5 pt-5'>


<a target='_blank' href='https://thegoodmentalhealthcompany.netlify.app' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

<img src="/logo5.svg" className='pl-3' width={150} alt="" />


</a>


<a target='_blank' href='bridgetbarnestherapy.netlify.app' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

<img src="/logo6.png"  width={170}   alt="" />


</a>


<a target='_blank' href='https://luciarossitherapy.netlify.app' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

<img src="/logo7.svg"  className='w-full h-full object-contain'   alt="" />


</a>


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


{/* <div className='text-black  font-bold hello h-[150px] anotherDesktop:h-[200px] text-xl
'>


<div className='  bg-[#91ff00] list-disc uppercase  py-2  '>
 

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

</div>



</div> */}





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


<div className='bg-[#0a0a0a] text-center py-7 space-y-2'>

<p className='text-primary font-semibold md:text-xl xl:text-2xl'>Portfolio</p>

<p className='text-xl font-bold md:text-2xl xl:text-3xl'>Selected Works</p>

<p className=' font-bold text-base md:text-lg px-8 text-white'>
  
<ul className='space-y-4 text-left '>

<li className='text-primary text-3xl mr-4 '>Note:</li>

<li>1. The websites displayed in my portfolio have been developed to showcase my skills and capabilities as a web developer.</li>

<li>2. While the design, functionality, and attention to detail reflect the high standards I uphold for all my projects, it's important to clarify that these websites were created for demonstration purposes and not have been developed for actual clients. </li>

<li>3. These portfolio pieces serve as examples of my proficiency in web development and are intended to provide potential clients with insight into the range of projects I am capable of delivering.</li>

<li>4. Rest assured, you can expect the same dedication and excellence that you see in the work samples below.</li>


</ul>


</p>


</div>



<div className='space-y-5 md:space-y-0  mt-6 flex flex-col items-center md:justify-center  px-mobileCommon md:px-tabletCommon xl:px-desktopCommon md:flex-row md:flex-wrap md:gap-3  '>



  
{/*  */}

<a href='https://thegoodmentalhealthcompany.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground relative '  >



<div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website</div>



<div className='w-full h-full relative bg-cover bg-center bg-no-repeat block'

// style={{backgroundImage:'url(https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384521/My%20Portfolio%20Website/vpltnnumoyyyalxpjdfo.webp)'}}


>


<Image  src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384521/My%20Portfolio%20Website/vpltnnumoyyyalxpjdfo.webp" fill style={{objectFit:'cover',objectPosition:'center center'}}  quality={100}  />
  



<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>



{/*  */}




{/*  */}


<a href='https://bridgetbarnestherapy.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground relative'  >

<div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website</div>


<div className='w-full h-full relative bg-cover bg-no-repeat bg-center block '


// style={{backgroundImage:'url(https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384537/My%20Portfolio%20Website/afsnjxd1e3cz3m9c7vk4.webp)'}}



>



<Image  src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384537/My%20Portfolio%20Website/afsnjxd1e3cz3m9c7vk4.webp" fill style={{objectFit:'cover',objectPosition:'center center'}}  quality={100}  />



<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>


{/*  */}

<a href='https://bridgetbarnestherapy.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground relative'  >

<div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website</div>


<div className='w-full h-full relative bg-cover bg-center bg-no-repeat block' 


// style={{backgroundImage:'url(https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384542/My%20Portfolio%20Website/yvdd0mwhsurdw1re88fi.webp)'}}


>



<Image  src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384542/My%20Portfolio%20Website/yvdd0mwhsurdw1re88fi.webp" fill style={{objectFit:'cover',objectPosition:'center center'}}  quality={100}  />




<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>


{/*  */}




{/*  */}


<a href='https://luciarossitherapy.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground relative'  >


<div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website</div>



<div className='w-full h-full relative  bg-no-repeat 

block

bg-[center_0] bg-[length:650px] md:bg-[length:800px] anotherDesktop:bg-[length:1000px]

'
// style={{backgroundImage:'url(https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384538/My%20Portfolio%20Website/e087b0wrd5b8nvmcieac.webp)',}}

>

<Image  src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384538/My%20Portfolio%20Website/e087b0wrd5b8nvmcieac.webp" fill style={{objectFit:'cover',objectPosition:'center 50px'}}  quality={100}  />



<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>

{/*  */}



<a href='https://luciarossitherapy.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground relative'  >


<div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website</div>



<div className='w-full h-full relative bg-cover bg-no-repeat bg-center block' 


// style={{backgroundImage:'url(https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384538/My%20Portfolio%20Website/jn7wx8uc4ogins5gp6az.webp)'}} 


>


<Image  src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384538/My%20Portfolio%20Website/jn7wx8uc4ogins5gp6az.webp" fill style={{objectFit:'cover',objectPosition:'center center'}}  quality={100}  />



<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>


{/*  */}

{/*  */}



{/*  */}




<a href='https://moeezinteriordesign.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground'  >

<div className='w-full h-full relative block'>


<Image  src='https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384758/My%20Portfolio%20Website/h7ivyp4xtunnbzugguxz.png' fill className='object-cover' />


<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>

<a href='https://moeezinteriordesign.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]  bg-[#1e1e1e] w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] '  >

<div className='w-full h-full relative block'>


<Image  src='https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384758/My%20Portfolio%20Website/h7ivyp4xtunnbzugguxz.webp' fill className='object-cover' />


<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</div>

</a>



<a href='https://revivedigi.vercel.app/our-clients' target='_blank' className='md:w-[49%] max-w-[650px]  w-full bg-[#1e1e1e] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-center bg-no-repeat bg-[length:410px_410px] md:bg-[length:510px_510px] lg:bg-[length:570px_570px] xl:bg-[length:650px_650px] relative ' 


// style={{backgroundImage:'url(https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384772/My%20Portfolio%20Website/ywtpffmniatqk5rrtwd2.png)'}}


>

<Image  src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384772/My%20Portfolio%20Website/ywtpffmniatqk5rrtwd2.webp" fill style={{objectFit:'cover',objectPosition:'center center'}}  quality={100}  />




<div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Marketing Website</div>


<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>

</a>



<a href='https://abdulmoeez-agency.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]  w-full h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] relative ' >

<div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Design Agency Website</div>


<Image src='https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384778/My%20Portfolio%20Website/pro3a8svc37cnn4pvwkl.webp' fill className='object-cover'  />

<div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>



</a>

</div>





</div>


{/* SELECTED WORKS */}


{/* BOOK APPOINTMENT */}


<div id='bookappointment'>


<div className='bg-[#0a0a0a] text-center py-7'>

<p className='text-primary font-semibold md:text-xl xl:text-2xl'>Book Appointment</p>

<p className='text-xl font-bold md:text-2xl xl:text-3xl'>Discuss your ideas for free</p>

</div>



<div className='space-y-5 md:space-y-0   flex flex-col  items-center md:justify-center px-mobileCommon md:px-tabletCommon xl:px-desktopCommon md:flex-row md:flex-wrap md:gap-3 -mt-0 forbookingform:-mt-10 relative' >

{/* {showLoader?
<div className="w-full h-[970px] forbookingform:h-[1020px] anotherForBookingForm:h-[680px] relative ">


<div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'>
<span class="loader"></span>
</div>

</div>

:


 <div className={`calendly-inline-widget  w-full h-[970px] forbookingform:h-[1020px] anotherForBookingForm:h-[680px]`} data-url="https://calendly.com/moeezkashif13/portfolio-website?background_color=000000&text_color=91ff00&primary_color=91ff00" style={{minWidth:'320px'}}></div> 



} */}


<div className={`calendly-inline-widget w-full h-[970px] forbookingform:h-[1020px] anotherForBookingForm:h-[680px]  `} data-url="https://calendly.com/moeezkashif13/portfolio-website?background_color=000000&text_color=91ff00&primary_color=91ff00" style={{minWidth:'320px'}}></div>



</div>




</div>



{/* BOOK APPOINTMENT */}



{/* FAQ */}

<div id='faq' className='px-mobileCommon md:px-tabletCommon xl:px-desktopCommon'>

<div className='text-center'>
<p className='text-primary font-semibold md:text-xl xl:text-2xl '>FAQ's</p>

<p className='text-xl md:text-2xl lg:text-3xl font-bold'>Important questions, answered <br /> to save your time</p>

</div>

<div className=" flex flex-wrap flex-col  lg:flex-row mt-5 text-base font-semibold ">


    {faqs.map((eachFAQ)=>{

        return <div className=" bg-black text-primary border-2 border-primary px-4 py-4 space-y-2 rounded-lg  mt-0  mb-4 w-full lg:w-[49.1%] desktop:w-[49.3%]  lg:odd:mr-4">

<div className="  flex gap-x-2 items-center "   >  {eachFAQ.question}</div>


        {/* <div className="  flex gap-x-2 items-center "   >  {eachFAQ.question}</div> */}


<div className="  toggleDiv " >{eachFAQ.answer}</div>


        </div>


    })}




</div>




</div>


{/* FAQ */}


{/* BANNER */}


<div className='relative '>


<div  className='uppercase   w-[500%]  -ml-16 bg-primary py-2 text-black  font-extrabold
text-[0.8rem] lg:text-lg'>


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

<a target='_blank' href="mailto:moeezkashif13@gmail.com" className='flex items-center gap-x-2'>
  <img src="/email.svg" width={30} alt="" />
  <span>moeezkashif13@gmail.com</span>
</a>

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
