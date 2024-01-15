import React from 'react'
import RootLayout from '../layouts/RootLayout'
import Image from 'next/image'
import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'
import ContactCard from '../components/ContactCard'

const Page = () => {
    return (
      <RootLayout hideContact={true} pageTitle="Contact">
        <div className='h-[calc(40vh-125px)] min-h-[240px] justify-center flex flex-col content-center items-center text-white'>
          <div className='absolute'>
              <Image
                  className='grayscale min-h-[240px] h-[calc(40vh-125px)] object-cover opacity-30 '
                  src='/img/chev1.jpeg'
                  priority={true}
                  width={2400}
                  height={1400}
                  alt='bg image'
              />
          </div>
  
          <div className='flex gap-8 flex-row items-center z-20 text-nowrap'>

              <div className='text-center px-[5vw]'>
                  <h1 className='text-h2  mb-2'>Contact</h1>
                <h2 className='text-title mb-2'>Let's Get Started</h2>
                <h3 className='text-sub italic text-wrap max-w-[800px]'>Furcheto Motorsports: Where precision meets power. Reach out today to ignite your cars's potential with our top-tier expertise – crafting excellence for the pinnacle of performance.</h3>
              </div>
                
          </div>
      </div>
      <div className='lg:mt-16 mt-8 px-[5vw]'>
        <ContactCard hideTags={true}/>
      </div>
  
      </RootLayout>
    )
}

export default Page;