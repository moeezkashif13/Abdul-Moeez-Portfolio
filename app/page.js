import dynamic from 'next/dynamic'


import { NavbarLinks } from '@/components/NavbarParts'
import Image from 'next/image'


const Banner = dynamic(() => import('../components/Banner'))


const BookAppointment = dynamic(() => import('../components/BookAppointment'))

 
const FAQ = dynamic(() => import('../components/FAQ'))


const Portfolio = dynamic(() => import('../components/Portfolio'))


const WhatICanDo = dynamic(() => import('../components/What I Can Do'))


const ContactMe = dynamic(() => import('../components/Contact Me'))




export default function Home() {

  return (

    <div className='bg-black text-white overflow-x-hidden  relative'>



<div className='space-y-8'>



{/*LOADERRR HEREEE */}

{/* {fullScreenLoader&&
 <div className='bg-black  top-0 z-[80] fixed w-full h-full flex items-center justify-center '>

<span class="fullScreenLoader"></span>

</div> 

} */}

{/* LOADERRR HEREEE*}



{/* NAVBAR */}

<div className='hidden md:flex items-start lg:items-center  justify-between px-desktopCommon pt-3 pb-6   '>


<div>logo</div>

<NavbarLinks/>


<a href='mailto:moeezkashif13@gmail.com' target='_blank' className='px-6 py-1.5 cursor-pointer z-50  rounded-lg border border-white'>

Get in Touch

</a>



</div>



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

<div className='  md:absolute md:-top-[18%] md:-right-[8%] lg:-right-[5%] h-[350px]  sm:h-[525px] lg:h-[540px]  xl:-right-[6.3%] mt-4 1xl:top-[-15%] relative block'>

<img src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692445496/My%20Portfolio%20Website/hmqi2v93enszmn5eddog.webp" className=' w-full h-full max-w-full' alt="" />

{/* <Image src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692445496/My%20Portfolio%20Website/hmqi2v93enszmn5eddog.webp" width={520} height={520} style={{objectFit:'cover',}}  quality={100} /> */}




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


<a target='_blank' href='https://bridgetbarnestherapy.netlify.app' className='w-[130px] flex justify-center items-center h-[60px] border-white rounded-md border'>

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

<WhatICanDo/>


{/* WHAT I CAN DO */}



{/* SELECTED WORKS */}

<Portfolio/>


{/* SELECTED WORKS */}


{/* BOOK APPOINTMENT */}


<BookAppointment/>



{/* BOOK APPOINTMENT */}



{/* FAQ */}

<FAQ/>


{/* FAQ */}


{/* BANNER */}


<div className='relative '>


<div  className='uppercase   w-[500%]  -ml-16 bg-primary py-2 text-black  font-extrabold
text-[0.8rem] lg:text-lg'>


<Banner/>


</div>




</div>


{/* BANNER */}


{/* CONTACT ME */}

<ContactMe/>




{/* CONTACT ME */}



</div>





    </div>
    



  )
}
