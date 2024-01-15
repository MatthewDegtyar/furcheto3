import React from 'react'
import RootLayout from '../layouts/RootLayout'
import Image from 'next/image'
import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'

const events = 
<div className='flex flex-col bg-[#0f0f0f] align-middle' alt='item'>

<div className='flex flex-row justify-between items-center'>
    <div className='p-2 bg-primary pointer-events-none text-white flex flex-col place-content-center items-center md:text-[40px] md:w-[100px] h-[100px]'>
        <p className='md:text-[60px] text-[28px] md:mt-[-7px]'>09</p>
        <p className='font-bold uppercase mt-[-8px] md:mt-[-30px]'>feb</p>
    </div>
        <p className='text-title md:ml-0 ml-2 text-white'>
            Event
        </p>
    <Link
        className='mr-4'
        rel = 'nofollow'
        href='/'
        alt='external site'
    >
    <Image
        className='hover:opacity-75 object-contain w-[150px] h-[100px] resize-none transition-all duration-300'
        alt='event logo'
        width={150}
        height={100}
        src='/img/sample.jpeg'
    />
    </Link>
</div>

</div>

const Page = () => {
    return (
      <RootLayout hideEvents={true} pageTitle="Events">
        <div className='h-[calc(40vh-125px)] justify-center flex flex-col content-center items-center text-white'>
          <div className='absolute'>
              <Image
                  className='grayscale h-[calc(40vh-125px)] object-cover opacity-30 '
                  src='/img/chev1.jpeg'
                  priority={true}
                  width={2400}
                  height={1400}
                  alt='bg image'
              />
          </div>
  
          <div className='flex gap-8 flex-row items-center z-20 text-nowrap'>
              <div className='text-center'>
                <h1 className='text-h2 mb-2'>Events {new Date().getFullYear()}</h1>
                <h2 className='text-title mb-2'>See Our Performance Live</h2>
              </div>
                
          </div>
      </div>
      <div className='w-full mb-8 flex flex-col gap-12 items-center'>
          <div className='w-full px-[5vw]' alt='spacer'>
              <div className='mt-8 gap-8 flex flex-col w-full'>
                  {events}
                  {events}
                  {events}
                  {events}
                  {events}
                  {events}

              </div>
          </div>
  
      <Link href='#contact' alt='contact'>
          <Button className='mt-6 px-12' color="primary" variant="solid">
            <p className='font-medium text-sub'>Contact</p>
          </Button>
        </Link>
  
      </div>
  
      </RootLayout>
    )
}

export default Page
