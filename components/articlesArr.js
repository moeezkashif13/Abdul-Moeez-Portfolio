export function slugify(str) {
    return String(str)
      .normalize('NFKD') // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // remove consecutive hyphens
  }
  

const firstArticle = {
    id:0,
    title:'Advantages of having a website',
    slug : slugify('Advantages of having a website'),
    quote:'Hi! I have read an article of Abdul Moeez where he states the advantages of having a website',
    
    excerpt:"Having a website can be a game-changer! 🌐✨ In today's digital age, your practice deserves the spotlight it needs. 🤝 Here's why:Professional Image: A well-designed website conveys",

    
    content:`<p>Unlocking New Horizons in Therapy 🌟: Having a website as a therapist can be a game-changer! 🌐✨</p>

    <p>In today's digital age, your therapeutic practice deserves the spotlight it needs. 🤝 Here's why:</p>


    <ul class="space-y-6 list-disc">
    <li><span class="text-primary font-medium">Professional Image:</span> A well-designed website conveys professionalism and instills trust in potential clients.</li>
    
    <li><span class="text-primary font-medium">Information Accessibility:</span> Clients can easily access information about the therapist's services, qualifications, and approach, helping them make informed decisions.
    </li>
    
    
    <li><span class="text-primary font-medium">Online Appointment Booking:</span> Offer the convenience of online appointment scheduling, reducing administrative work and making it easier for clients to book sessions.</li>
    
    <li><span class="text-primary font-medium">Client Resources:</span> Provide valuable resources such as articles, worksheets, and self-help tools that clients can access between sessions.</li>
    
    
    <li><span class="text-primary font-medium">Privacy and Confidentiality:</span> Emphasize the importance of client privacy and confidentiality on the website, reassuring clients of a safe space for therapy.</li>
    
    <li><span class="text-primary font-medium">Testimonials and Reviews:</span> Showcase client testimonials and reviews to build trust and demonstrate the therapist's effectiveness.</li>
    
    <li><span class="text-primary font-medium">Online Payment:</span> Allow clients to make secure online payments for sessions, streamlining the billing process.</li>
    
    
    <li><span class="text-primary font-medium">Contact Information:</span> Make it easy for clients to find contact information, including phone numbers and email addresses, for inquiries and emergencies.</li>
    
    
    <li><span class="text-primary font-medium">Virtual Therapy:</span> Highlight the availability of teletherapy or virtual counseling services, especially relevant in today's digital world.</li>
    
    
    <li><span class="text-primary font-medium">FAQ Section:</span> Answer common questions clients may have about the therapy process, fees, insurance, and more in a FAQ section.</li>
    
    <li><span class="text-primary font-medium">Mobile Optimization:</span> Ensure the website is mobile-friendly to cater to clients who browse on smartphones and tablets.</li>
    
    </ul>
    
    <p>Ready to embrace the digital age and take your therapy practice to new heights? 🚀</p>
    
    <p>Let's create a website that truly reflects your mission to help others heal. 💙</p>`
}


export const allArticles = [firstArticle,firstArticle,firstArticle,firstArticle,firstArticle,]