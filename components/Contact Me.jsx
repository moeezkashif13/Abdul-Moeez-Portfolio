export default function ContactMe(){
    return <div id='contact-me' className='px-mobileCommon md:px-tabletCommon xl:px-desktopCommon '>


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
}