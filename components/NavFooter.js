import React from 'react'
import { menuNav } from '../constants'
import Link from 'next/link'
import Image from 'next/image'
import { Skeleton, Tooltip } from '@nextui-org/react'
import ContactCard from './ContactCard'

//const packages = (menuNav[0].submenu)

const Packages = () => {
    return(
        <div className='px-[5vw] flex flex-col lg:flex-row'>
            <div className='lg:w-[250px] mb-4 lg:mb-0 lg:self-start self-center inline-block' alt='title'>
                <Link href='/packages'><ul className='font-bold text-sub inline-block w-auto underline-animation'>Furcheto Packages</ul></Link>
            </div>
                <div className='flex w-full flex-col gap-6'>
                    <div className='w-full' alt='holder by car brand'>
                    <p className='text-sub font-semibold mb-3 text-center'>Chevrolette</p>
                        <div className='grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 w-full' >
                            <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                    <div className="relative lg:hover:scale-125 transition-all duration-300 overflow-hidden">
                                        <div className='flex flex-col items-center'>
                                            <Image alt='img' width={520} height={375} className="w-full lg:group-hover:grayscale filter-none h-[230px] object-center lg:hover:opacity-0 transition-all duration-75 object-cover" src='/img/car33.webp'/>
                                            <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 lg:group-hover:scale-75 lg:group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>C8 Corvette</ul>
                                        </div>
                                    <Link href='/packages/c8-corvette-2020-plus' alt='' className="absolute text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                        <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See C8 Corvette Packages</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                    <div className="relative lg:hover:scale-125 transition-all duration-300 overflow-hidden">
                                        <div className='flex flex-col items-center'>
                                            <Image alt='img' width={520} height={375} className="w-full lg:group-hover:grayscale filter-none h-[230px] object-center lg:hover:opacity-0 transition-all duration-75 object-cover" src='/img/car33.webp'/>
                                            <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 lg:group-hover:scale-75 lg:group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>C7 Corvette</ul>
                                        </div>
                                    <Link href='/packages/c7-corvette-2014-2019' alt='' className="absolute text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                        <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See C7 Corvette Packages</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                    <div className="relative lg:hover:scale-125 transition-all duration-300 overflow-hidden">
                                        <div className='flex flex-col items-center'>
                                            <Image alt='img' width={520} height={375} className="w-full lg:group-hover:grayscale filter-none h-[230px] object-center lg:hover:opacity-0 transition-all duration-75 object-cover" src='/img/car33.webp'/>
                                            <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 lg:group-hover:scale-75 lg:group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>C8 Corvette</ul>
                                        </div>
                                    <Link href='/packages/c8-corvette-2020-plus' alt='' className="absolute text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                        <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See C8 Corvette Packages</p>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>

                    
                    </div>
                    <div className='w-full' alt='holder by car brand'>
                    <p className='text-sub font-semibold mb-3 text-center'>GMC</p>
                        <div className='grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 w-full' >
                            <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                    <div className="relative lg:hover:scale-125 transition-all duration-300 overflow-hidden">
                                        <div className='flex flex-col items-center'>
                                            <Image alt='img' width={520} height={375} className="w-full lg:group-hover:grayscale filter-none h-[230px] object-center lg:hover:opacity-0 transition-all duration-75 object-cover" src='/img/car33.webp'/>
                                            <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 lg:group-hover:scale-75 lg:group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>C8 Corvette</ul>
                                        </div>
                                    <Link href='/packages/c8-corvette-2020-plus' alt='' className="absolute text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                        <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See C8 Corvette Packages</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                    <div className="relative lg:hover:scale-125 transition-all duration-300 overflow-hidden">
                                        <div className='flex flex-col items-center'>
                                            <Image alt='img' width={520} height={375} className="w-full lg:group-hover:grayscale filter-none h-[230px] object-center lg:hover:opacity-0 transition-all duration-75 object-cover" src='/img/car33.webp'/>
                                            <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 lg:group-hover:scale-75 lg:group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>C7 Corvette</ul>
                                        </div>
                                    <Link href='/packages/c7-corvette-2014-2019' alt='' className="absolute text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                        <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See C7 Corvette Packages</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="h-fit w-fit group overflow-hidden" alt='item'>               
                                    <div className="relative lg:hover:scale-125 transition-all duration-300 overflow-hidden">
                                        <div className='flex flex-col items-center'>
                                            <Image alt='img' width={520} height={375} className="w-full lg:group-hover:grayscale filter-none h-[230px] object-center lg:hover:opacity-0 transition-all duration-75 object-cover" src='/img/car33.webp'/>
                                            <ul className='text-center absolute bottom-4 text-pcard transition-all duration-300 lg:group-hover:scale-75 lg:group-hover:opacity-0 text-white font-bold inline-block bg-transparent'>C8 Corvette</ul>
                                        </div>
                                    <Link href='/packages/c8-corvette-2020-plus' alt='' className="absolute text-center transition-all duration-900 h-full w-full  bg- -bottom-0 flex items-center justify-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                                        <p className=" text-white py-2 text-sub font-bold px-5 opacity-100">See C8 Corvette Packages</p>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>

                    
                    </div>
                
            </div>
            
        </div>  
    )
}

const Featured = () => {
    return(
        <div className='px-[5vw] flex flex-col lg:flex-row'>
            <div className='lg:w-[250px] mb-4 lg:mb-0 lg:self-start self-center inline-block' alt='title'>
                <Link href='/featured'><ul className='font-bold text-sub inline-block w-auto underline-animation'>Featured Builds</ul></Link>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full gap-4 lg:gap-8'>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>Build 1</ul>
                        </div>
                        <Link href='/featured/'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/featured/'>Learn More</Link></p>
                    </div>
                </div>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>Build 1</ul>
                        </div>
                        <Link href='/featured/'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/featured/'>Learn More</Link></p>
                    </div>
                </div>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>Build 1</ul>
                        </div>
                        <Link href='/featured/'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/featured/'>Learn More</Link></p>
                    </div>
                </div>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>Build 1</ul>
                        </div>
                        <Link href='/featured/'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/featured/'>Learn More</Link></p>
                    </div>
                </div>

               
                
            </div>
        </div>
    )
}

const About = () => {
    return(
        <div className='px-[5vw] flex flex-col lg:flex-row'>
            <div className='lg:w-[250px] mb-4 lg:mb-0 lg:self-start self-center inline-block' alt='title'>
                <Link href='/about'><ul className='font-bold text-sub inline-block w-auto underline-animation'>About Us</ul></Link>
            </div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full gap-4 lg:gap-8'>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>Our Story</ul>
                        </div>
                        <Link href='/about#1'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/about#1'>Learn More</Link></p>
                    </div>
                </div>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>What Differentiates Us</ul>
                        </div>
                        <Link href='/about#2'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/about#2'>Learn More</Link></p>
                    </div>
                </div>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>Quality Parts Only</ul>
                        </div>
                        <Link href='/about#3'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/about#3'>Learn More</Link></p>
                    </div>
                </div>

                <div className='flex text-sub flex-col items-center' alt='item'>
                    <div className='overflow-hidden '>
                    <div className='mb-2'>
                            <ul className='text-center font-semibold top-0'>Second To None</ul>
                        </div>
                        <Link href='/about#4'>
                            <Image
                                className='hover:lg:scale-125 transition-transform duration-300'
                                src='/img/car32.avif'
                                width={300}
                                height={720}
                                alt='car'
                            />
                        </Link>
                    </div>
                    <div className='self-center hidden lg:shown lg:flex'>
                        <p className='text-center mt-3 font-medium  underline-animation'><Link href='/about#4'>Learn More</Link></p>
                    </div>
                </div>

                
            </div>
            
        </div>
    )
}

const Events = () => {
    return(
        <div className='px-[5vw] flex flex-col lg:flex-row'>
            <div className='lg:w-[250px] mb-4 lg:mb-0 lg:self-start self-center inline-block' alt='title'>
                <Link href='/events'><ul className='font-bold text-sub inline-block w-auto underline-animation'>Events {new Date().getFullYear()}</ul></Link>
            </div>
            <div className='w-full' alt='holder'>
                <div className='flex flex-col bg-black align-middle' alt='item'>

                    <div className='flex flex-row justify-between items-center'>
                        <div className='p-2 bg-primary pointer-events-none text-white flex flex-col place-content-center items-center md:text-[40px] md:w-[100px] h-[100px]'>
                            <p className='md:text-[60px] text-[28px] md:mt-[-7px]'>09</p>
                            <p className='font-bold uppercase mt-[-8px] md:mt-[-30px]'>feb</p>
                        </div>
                            <p className='text-title ml-2 lg:ml-0 text-white'>
                                <Link href='/events' alt='external site' rel='nofollow'>Event</Link>
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
            </div>
        </div>
    )
}

export const Contact = () => {
    return(
        <div className='px-[10vw] flex flex-row bg-black' id='contact'>
            <div className='w-full mt-8' alt='holder'>
                <ContactCard/>
            </div>
        </div>
    )
}


const NavFooter = ({ hidePackages, hideFeatured, hideAbout, hideEvents, hideContact }) => {
    return (
      <div className='w-[100vw] bg-white'>
        {!hidePackages && (
          <>
            <div className='h-8'></div>
            <Packages />
          </>
        )}
  
        {!hidePackages && <div className='h-12'></div>}
  
        {!hideFeatured && <Featured />}
  
        {!hideFeatured && <div className='h-12'></div>}

        {!hideAbout && <About />}

        {!hideAbout && <div className='h-12'></div>}

        {!hideEvents && <Events />}
  
        {!hideEvents && <div className='h-12 '></div>}
  
        {!hideContact && <Contact />}
  
        {!hideContact && <div className='h-12 bg-black'></div>}
      </div>
    );
  };

export default NavFooter
