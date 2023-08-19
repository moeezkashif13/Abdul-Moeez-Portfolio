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

export default function FAQ(){


    return <div id='faq' className='px-mobileCommon md:px-tabletCommon xl:px-desktopCommon'>

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

}