import Image from 'next/image'

export default function Portfolio(){
    return <div id='portfolio'>


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
    
    
    
    <div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website. Click to visit</div>
    
    
    
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
    
    <div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website. Click to visit</div>
    
    
    <div className='w-full h-full relative bg-cover bg-no-repeat bg-center block '
    
    
    // style={{backgroundImage:'url(https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384537/My%20Portfolio%20Website/afsnjxd1e3cz3m9c7vk4.webp)'}}
    
    
    
    >
    
    
    
    <Image  src="https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384537/My%20Portfolio%20Website/afsnjxd1e3cz3m9c7vk4.webp" fill style={{objectFit:'cover',objectPosition:'center center'}}  quality={100}  />
    
    
    
    <div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>
    
    </div>
    
    </a>
    
    
    {/*  */}
    
    <a href='https://bridgetbarnestherapy.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]   w-full  h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] mockupBackground relative'  >
    
    <div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website. Click to visit</div>
    
    
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
    
    
    <div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website. Click to visit</div>
    
    
    
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
    
    
    <div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Therapist Website. Click to visit</div>
    
    
    
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
    
    
    
    
    <div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Marketing Website. Click to visit</div>
    
    
    <div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>
    
    </a>
    
    
    
    <a href='https://abdulmoeez-agency.netlify.app' target='_blank' className='md:w-[49%] max-w-[650px]  w-full h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] relative ' >
    
    <div className='absolute top-2 left-0  h-10 lg:h-16 text-lg lg:text-xl z-20 w-full  flex items-center justify-center text-center   font-bold bg-[rgba(0,0,0,0.7)] text-white'>Type: Design Agency Website. Click to visit</div>
    
    
    <Image src='https://res.cloudinary.com/dtcwpaba5/image/upload/v1692384778/My%20Portfolio%20Website/pro3a8svc37cnn4pvwkl.webp' fill className='object-cover'  />
    
    <div className='w-full h-full transition-all duration-300  bg-black opacity-0 hover:opacity-75 '></div>
    
    
    
    </a>
    
    </div>
    
    
    
    
    
    </div>
}