import Image from "next/image"
import Link from "next/link"
import { allArticles, slugify } from "./articlesArr"

export default function Blog(){

    return (

        <div id="blog">


<div className='bg-[#0a0a0a] text-center py-7 space-y-2'>
    
    <p className='text-primary font-semibold md:text-xl xl:text-2xl'>Blog</p>
    
    <p className='text-xl font-bold md:text-2xl xl:text-3xl'>See What I Talk About</p>
    
    <p className=' font-bold text-base md:text-lg px-8 text-white'>
      
    </p>
    
    
    </div>

<div className="flex justify-between flex-wrap px-mobileCommon md:px-tabletCommon xl:px-desktopCommon mt-5">


{allArticles.map((eachArticle)=>{

return <Link href={`/blog/${eachArticle.slug}`} className="border-primary border-2 w-full sm:w-[calc(50%-10px)] md:w-[calc(33%-10px)] lg:max-w-[410px]   mb-6  space-y-3 pb-5">
    

<div className="w-full h-[300px] relative " >
    <img src={`/temp/${eachArticle.image}`} className="w-full h-full max-w-full object-cover object-center" alt="" />
</div>


<p className="px-3 underline text-primary font-semibold text-lg">{eachArticle.title}</p>

<p className="px-3" >{eachArticle.excerpt}......... <span className="font-bold text-primary">Open Full Article</span></p>

<div className="px-4 pt-2">

<div style={{transition:'all 0.4s'}}  className="hover:bg-primary hover:text-black text-primary font-semibold  px-6 py-1.5 rounded-2xl border-primary border-2 inline ">Read More</div>

</div>


</Link>



})}


</div>





        </div>


    )


}