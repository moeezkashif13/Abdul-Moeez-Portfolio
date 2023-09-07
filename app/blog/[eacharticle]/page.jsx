"use client"

import Banner from "@/components/Banner";
import ContactMe from "@/components/Contact Me";
import { NavbarLinks } from "@/components/NavbarParts";
import { allArticles } from "@/components/articlesArr";
import { FacebookShareButton, LinkedinShareButton, TwitterIcon, TwitterShareButton } from "next-share";
import Link from "next/link";
import {useRouter} from "next/navigation";

import {FaCode, FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa6'


export default function EachArticle({params}){

    const slug = params.eacharticle;

    const gotArticle = allArticles.filter(eachOne=>{
        
        return eachOne.slug == slug
    })

    if(gotArticle.length==0){
        return <div className="bg-black h-screen flex items-center justify-center text-5xl font-bold text-center text-white flex-col space-y-5">

<p className="text-primary">Error 404</p>

<p className="text-primary">This Article does not exist</p>

<Link href="/">Go to Homepage</Link>


        </div>
    };
    

    const selectedArticle = gotArticle[0]
    console.log(selectedArticle);

    return <div className="bg-black text-white overflow-x-hidden  relative ">
        

        <div className='hidden md:flex items-center lg:items-center  justify-between px-desktopCommon pt-3 pb-6   '>


<Link href="/" className="text-primary text-2xl flex items-center font-semibold ">
    Abdul <span className="text-4xl mx-2 "> <FaCode/></span> Moeez
</Link>


<div className='flex md:flex-col  lg:flex-row  gap-x-10  font-semibold'>

    <Link href={`/`} className='cursor-pointer'>Go to Homepage</Link>

</div>


<a href='mailto:moeezkashif13@gmail.com' target='_blank' className='px-6 py-1.5 cursor-pointer z-50  rounded-lg border border-white'>

Get in Touch

</a>



</div>

<div className="mt-16 space-y-12 px-mobileCommon md:px-tabletCommon xl:px-desktopCommon">

<div className="flex gap-12  ">

<div className="w-full">


<h1 className="text-5xl font-semibold text-primary leading-[3.3rem]">{selectedArticle.title}</h1>


<div className="space-y-6 mt-7 text-lg leading-8" dangerouslySetInnerHTML={{__html:selectedArticle.content}}>


</div>



</div>



{/* <div className="w-1/4">dadasd</div> */}



</div>



<div className="space-y-6">
    

<p className="text-center text-4xl font-bold">Share Now To Support</p>


<div className="flex justify-center gap-x-5 text-black text-2xl">


    <div className="cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-white ">
        <FacebookShareButton url={window?.location?.href} quote={selectedArticle.quote}  blankTarget>

        <FaFacebookF/>


        </FacebookShareButton>

    </div>

    <div className="cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-white ">
        {/* <FaTwitter/> */}

<TwitterShareButton url={window?.location?.href}   title={selectedArticle.quote} blankTarget >

    <FaTwitter/>

</TwitterShareButton>


    </div>

    <div className="cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-white ">

        <LinkedinShareButton url={window?.location?.href} blankTarget>

        <FaLinkedinIn/>

        </LinkedinShareButton>


    </div>



</div>



</div>



<Banner/>


<ContactMe/>



</div>




    </div>
}