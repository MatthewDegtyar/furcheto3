import React from 'react'
import Testimonial from './testimonial'
import Link from 'next/link'

const TestimonialSlider = () => {
  return (
    <div className='w-[100vw] px-[5vw] bg-white text-black flex flex-col items-center' alt='testimonial slider'>
            <div className='flex flex-col items-center mt-16'>
                    <p className='font-sanomat-medium text-[32px] text-black text-center mb-1'>What Authors Say</p>
                    <div className='h-[2px] mt-4 mb-4 w-[200px] bg-[#316FAA]'></div>
                    <p className='font-guardian-regular text-[24px] mt-0 text-center text-[rgb(0,0,0,1)] mb-8'>See testimonials and endorsements from bestselling authors.</p>

      </div>
        <div className='mt-8 grid lg:grid-cols-3 gap-8 lg:flex-row overflow-auto'>
          <Testimonial
                book1='/books/perf.png'
                book2='/books/elev.png'
                link1='https://www.amazon.com/Performance-Partnerships-Checkered-Affiliate-Marketing/dp/1619615827'
                link2='https://www.amazon.com/Elevate-Beyond-Limits-Success-Yourself/dp/1492691488'
                name='Bob Glazer'
                headshot='/headshots/bob-g.jpg'
                descr="My collaboration with Rob Wolf Petersen on two books was an incredibly positive experience. His ability to understand and articulate my ideas with precision cultivated a deep trust and efficient partnership. Rob's attention to detail, allied with his empathetic listening, enriched my voice and helped hone the effectiveness of my message. Rob's expertise allowed my ideas to resonate deeply with readers, He is an invaluable asset for any author seeking to leave a lasting imprint with their work."
            >
                <p>Author of Performance Partnerships: The Checkered Past, Changing Present & Exciting Future of Affiliate Marketing and Elevate: Push Beyond Your Limits and Unlock Success in Yourself and Others</p>
            </Testimonial>
          <Testimonial
              book1='/goggins.png'
              link1='https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1690041789&sr=1-1'
              descr="Hal was the exceptional editor on both <span style='font-style: italic;'>Can't Hurt Me</span> and <span style='font-style: italic;'>Never Finished</span>, and is a pleasure to work with."
              name='Adam Skolnick'
              book2='/books/goggins2.png'
              link2='https://www.amazon.com/Never-Finished-Unshackle-Your-Within/dp/1544534078/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1690041816&sr=1-1'
              headshot='/headshots/adam-s.jpeg'

          >
              <p>Ghostwriter for David Goggins, author of New York Times Bestsellers Can’t Hurt Me and Never Finished</p>
          </Testimonial>
          <Testimonial
              book1='/img/house.png'
              book2='/books/your.png'
              link1='https://www.amazon.com/Household-Endowment-Model-Planning-Affluent/dp/1544502354/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1689772879&sr=1-2'
              link2='https://www.amazon.com/Your-High-Performing-Virtual-Family-Office/dp/1544544235/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1689772823&sr=1-1'
              name='Vince Annable'
              headshot='/headshots/vincent.jpeg'
              descr="Tom Lane has assisted me in writing two Amazon best sellers. [He] was instrumental in creating both books. His ability to grasp what we were doing and the message we wanted to convey was very professional and hit all the high points we were seeking. My recommendation to anyone who has an opportunity to work with Tom is to do it. He is professional and has the unique ability to work with you and convey your message exactly as you want."                            
          >
              <p>Author of The Household Endowment Model and Your High-Performing Virtual Family Office.</p>
            </Testimonial>
            

        </div>


        <Link href='/testimonials' className=' border-4 mb-8 border-primary items-center bg-white rounded-[2px] p-4 font-guardian-medium hover:bg-primary hover:text-white text-[20px] text-black mt-16 max-w-[250px] self-center cursor-pointer '>
                See What Authors Say
            </Link>


    </div>
  )
}

export default TestimonialSlider
