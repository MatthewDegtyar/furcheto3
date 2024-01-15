import React from 'react'
import RootLayout from '../layouts/RootLayout'
import Image from 'next/image'
import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'

const defaultStory = 
    <div className='text-white flex text-sub items-center flex-col gap-8'>
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Image
            src='/img/chev1.jpeg'
            width={500}
            height={350}
            alt='bio pic'
        />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Image
            src='/img/chev1.jpeg'
            width={500}
            height={350}
            alt='bio pic'
        />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Image
            src='/img/chev1.jpeg'
            width={500}
            height={350}
            alt='bio pic'
        />
    </div>;

const Page = () => {
  return (
    <RootLayout hideFeatured={true} pageTitle="Featured Builds">
      <div className='md:h-[calc(40vh-125px)] h-[50vh] min-h-[210px] justify-center flex flex-col content-center items-center text-white'>
        <div className='absolute'>
            <Image
                className='grayscale h-[50vh] min-h-[210px] md:h-[calc(40vh-125px)] object-cover opacity-30 '
                src='/img/chev1.jpeg'
                priority={true}
                width={2400}
                height={1400}
                alt='bg image'
            />
        </div>

        <div className='flex gap-8 max-w-[100vw] text-center lg:text-start flex-row items-center z-20 text-nowrap px-[5vw]'>

          <Avatar
            src='/img/headshot32.webp'
            className="lg:w-[200px] rounded-full w-24 h-24 lg:h-[200px] border-3 border-primary lg:shown lg:flex hidden text-large"
          />
            <div className='text-start flex flex-col items-center lg:items-start'>
                <Avatar
                  src='/img/headshot32.webp'
                  className="lg:w-[200px] h-[20vh] w-[20vh] md:w-24 md:h-24 mb-1 lg:h-[200px] border-3 border-primary shown flex lg:hidden text-large"
                />
                <h1 className='text-h2  mb-2'>Name</h1>

              <h2 className='text-title lg:mb-2'>Featured Builds & Clients</h2>
              <h3 className='text-sub text-center lg:text-start  italic'>Fastest quarter mile in a naturally aspirated V8</h3>
            </div>
              
        </div>
    </div>
    <div className='w-full mb-8 flex flex-col gap-12 items-center'>
        <div className='lg:px-[15vw] px-[5vw]' alt='spacer'>
            <div className='mt-8'>
                {defaultStory}
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
