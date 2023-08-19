import Script from "next/script";

export default function BookAppointment(){

    return(
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

<Script defer  strategy="lazyOnload" type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>


</div>
    )

}