import React from 'react'
import RootLayout from '../layouts/RootLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, Button } from '@nextui-org/react'

const defaultStory = 
    <div className='text-white flex flex-col'>

        <div className='h-8' alt='spacer starter' id='1'></div>
        <div className='flex flex-col lg:flex-row gap-4'>
            <div>
                <h2 className='text-title mb-4 text-center lg:text-start'>Our Story</h2>
                <p className='text-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br></br>
                <p className='text-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <Image
            className='object-cover self-center resize-none'
                src='/img/car32.avif'
                height={230}
                width={430}
                alt='about img'
            />
        </div>

        <div className='h-8' alt='spacer starter' id='2'></div>
        <div className='flex flex-col lg:flex-row gap-4'>
            <Image
            className='object-cover self-center hidden lg:flex lg:shown resize-none'
                src='/img/car32.avif'
                height={230}
                width={430}
                alt='about img'
            />
            <div>
                <h2 className='text-title mb-4 text-center lg:text-start'>What Differentiates Us</h2>
                <p className='text-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br></br>
                <p className='text-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <Image
            className='object-cover self-center shown lg:hidden  resize-none'
                src='/img/car32.avif'
                height={230}
                width={430}
                alt='about img'
            />
           
        </div>

        <div className='h-8' alt='spacer starter' id='3'></div>
        <div className='flex flex-col lg:flex-row gap-4' >
            <div>
                <h2 className='text-title mb-4 text-center lg:text-start'>Quality Parts Only</h2>
                <p className='text-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br></br>
                <p className='text-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <Image
                className='object-cover self-center resize-none'
                src='/img/car32.avif'
                height={230}
                width={430}
                alt='about img'
            />
        </div>
        
    </div>

const Page = () => {
    return (
      <RootLayout hideAbout={true} pageTitle="About Us">
        <div className='h-[calc(40vh-125px)] min-h-[210px] px-[5vw] flex flex-col justify-center content-center items-center text-white'>
          <div className='absolute'>
              <Image
                  className='grayscale min-h-[210px] h-[calc(40vh-125px)] object-cover opacity-30 '
                  src='/img/chev1.jpeg'
                  priority={true}
                  width={2400}
                  height={1400}
                  alt='bg image'
              />
          </div>
  
          <div className='flex gap-8 flex-row items-center z-20 text-nowrap'>
  
              <div className='text-center'>
                <h2 className='text-h2 mb-3 lg:shown hidden lg:flex'>Best GM Performance Shop</h2>
                <h2 className='text-h2 mb-3 shown flex flex-col lg:hidden'><span>Best GM</span> <span>Performance Shop</span></h2>

                  <h1 className='text-title'>About Us</h1>
              </div>
                
          </div>
      </div>
      <div className='w-full mb-8 flex flex-col gap-12 items-center'>
          <div className='lg:px-[15vw] px-[5vw]' alt='spacer'>
              <div className=''>
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
