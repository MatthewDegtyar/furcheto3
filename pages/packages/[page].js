import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import RootLayout from '../../layouts/RootLayout';
import { menuNav } from '../../constants';
import Image from 'next/image';
import {CircularProgress} from "@nextui-org/react";
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import Link from 'next/link';
import Tagline from '../../components/Tagline';
import { SiTurbo } from "react-icons/si";

const packageData = {
  "c8-corvette-2020-plus": {
    title: "C8 Corvette",
    image: '/img/chev1.jpeg',
    packages: {
      "package-0": {
        title: 'Package 0',
        descr: 'See C7 Stringray Packages',
        image: '/img/chev1.jpeg',
        link: '#contact',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-1": {
        title: 'Package 1',
        descr: 'Description for Package 1',
        image: '/img/package1.jpeg',
        link: '#package-1',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 1 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 1 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-2": {
        title: 'Package 2',
        descr: 'Description for Package 2',
        image: '/img/package2.jpeg',
        link: '#package-2',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 2 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 2 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      // Add more packages as needed
    },
  },

"c7-corvette-2014-2019": {
  title: "C7 Corvette — 2014-2019",
  image: '/img/chev1.jpeg',
  routes: [
    {
      title: 'C7 Stringray',
      descr: 'See C7 Stringray Packages',
      image: '/img/chev2.avif',
      link: '/packages/c7-stringray-2014-2019'
    },
    {
      title: 'C7 Grand Sport',
      descr: 'C7 Grand Sport Packages',
      image: '/img/chev2.avif',
      link: '/packages/c7-grand-sport-2017-2019'
    },
    {
      title: 'C7 Stringray',
      descr: 'See C7 Stringray Packages',
      image: '/img/chev2.avif',
      link: '/packages/c7-stringray-2014-2019'
    },
    {
      title: 'C7 Grand Sport',
      descr: 'C7 Grand Sport Packages',
      image: '/img/chev2.avif',
      link: '/packages/c7-grand-sport-2017-2019'
    },
  ],
},

  "c7-stringray-2014-2019": {
    title: "C7 Stringray",
    image:'/img/chev1.jpeg',
    packages: {
      "package-0": {
        title: 'Package 0',
        descr: 'See C7 Stringray Packages',
        image: '/img/chev1.jpeg',
        link: '#contact',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-1": {
        title: 'Package 1',
        descr: 'Description for Package 1',
        image: '/img/package1.jpeg',
        link: '#package-1',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 1 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 1 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-2": {
        title: 'Package 2',
        descr: 'Description for Package 2',
        image: '/img/package2.jpeg',
        link: '#package-2',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 2 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 2 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      // Add more packages as needed
    },

  },
  "c7-grand-sport-2017-2019": {
    title: "C7 Grand Sport",
    image:'/img/chev1.jpeg',
    packages: {
      "package-0": {
        title: 'Package 0',
        descr: 'See C7 Stringray Packages',
        image: '/img/chev1.jpeg',
        link: '#contact',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-1": {
        title: 'Package 1',
        descr: 'Description for Package 1',
        image: '/img/package1.jpeg',
        link: '#package-1',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 1 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 1 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-2": {
        title: 'Package 2',
        descr: 'Description for Package 2',
        image: '/img/package2.jpeg',
        link: '#package-2',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 2 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 2 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      // Add more packages as needed
    },

  },
  "maintainance": {
    title: "Maintainance Packages",
    image:'/img/chev1.jpeg',
    packages: {
      "package-0": {
        title: 'Package 0',
        descr: 'See C7 Stringray Packages',
        image: '/img/chev1.jpeg',
        link: '#contact',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-1": {
        title: 'Package 1',
        descr: 'Description for Package 1',
        image: '/img/package1.jpeg',
        link: '#package-1',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 1 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 1 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      "package-2": {
        title: 'Package 2',
        descr: 'Description for Package 2',
        image: '/img/package2.jpeg',
        link: '#package-2',
        stages: [
          {
            title: 'Stage 1',
            hp:'45-65',
            descr: 'Description for Package 2 - Stage 1',
          },
          {
            title: 'Stage 2',
            hp:'85-105',
            descr: 'Description for Package 2 - Stage 2',
          },
          // Add more stages as needed
        ],
      },
      // Add more packages as needed
    },

  },
};

const defaultContent =
  <div className='flex flex-col items-center'>
      <ul>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      </ul>
  </div>;

const Page = () => {
  const router = useRouter();
  const { page } = router.query;
  const [expandedKeys, setExpandedKeys] = useState([""]);
  const [accordionKey, setAccordionKey] = useState(0);

  const hanldeExpandedDef = (number) => {
    setExpandedKeys([`${number}`])
    setAccordionKey((prevKey) => prevKey + 1);

  }

  useEffect(() => {
    // This code will run after the state has been updated
    console.log(expandedKeys);
  }, [expandedKeys]);
  // Find the corresponding package data based on the dynamic page parameter
  const selectedPackage = packageData[page];

  if (!selectedPackage) {
    return (
      <div className='text-white min-h-screen flex items-center justify-center'>
        <div className='flex flex-col gap-4 items-center'>
          <CircularProgress size="lg" color="success" />
          <p className='text-title text-white'>LOADING</p>
          <Link
            className='mt-12 border-2 border-white hover:bg-white text-white hover:text-black text-[22px] p-4 font-medium'
            href='/'
          >
            Back To Home
          </Link>
        </div>
      </div>
    );
    
  }

  return (
    <RootLayout imageUrl={selectedPackage?.image} pageTitle={selectedPackage?.title} >
      <div className='h-[calc(100vh-125px)] flex flex-col content-center items-center text-white'>
        <div className='absolute'>
            <Image
                className='grayscale h-[calc(100vh-125px)] object-cover opacity-30 '
                src={selectedPackage?.image}
                priority={true}
                width={2400}
                height={1400}
                alt='bg image'
            />
        </div>


        <div className='flex flex-col mt-16 items-center z-20 text-nowrap'>
          <h1 className='text-title text-center mb-6'>{selectedPackage?.title}</h1>

          <Image
              className='z-20 mb-4 '
              src='/img/chevy.png'
              alt='logo'
              height={150}
              width={250}
          />
            <div className='text-center'>
              <h2 className='text-h2'>Performance Packages</h2>
            </div>
              
        </div>
        
{ 
  selectedPackage?.routes && (
    <div 
      className='mt-24 h-full text-center w-full z-20 items-center justify-center'
      style={{
        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))',
        backdropFilter: 'blur(7px)',
      }}
    >
      <div className='mt-8 px-[5vw] w-full gap-4 justify-between flex flex-row overflow-x-scroll' id='scrollto' alt='holder'>
        {selectedPackage.routes.map((option, index) => (
          <div key={index} className="w-fit min-w-[300px] group overflow-hidden" alt='item'>
            <div className="relative lg:hover:scale-125 transition-all duration-300 overflow-hidden">
              <div className='flex object-cover flex-col items-center'>
                <Image 
                  width={530} 
                  height={320} 
                  className="lg:group-hover:grayscale filter-none w-[530px] ascpect-square h-[320px] object-center lg:hover:opacity-0 transition-all duration-75 object-cover" 
                  src={option.image}
                  alt={option.title}
                />
                <ul className='absolute bottom-4 text-title transition-all duration-300 lg:group-hover:scale-75 text-white font-bold inline-block bg-transparent'>{option.title}</ul>
              </div>
              <Link href={option.link ? option.link : ''} alt='' className="absolute transition-all duration-900 h-full w-full  bg-primary -bottom-0 flex items-center justify-center lg:group-hover:bottom-0 opacity-0 lg:group-hover:opacity-100">
                <p className=" text-white py-2 font-bold px-5 opacity-100">{option.descr}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}   

{!selectedPackage?.routes && (
        <div className='flex flex-row gap-4 overflow-x-scroll justify-between w-full px-[10vw] mt-24 items-center z-20 text-nowrap'>
          
            <Link 
              onClick={() => hanldeExpandedDef("0")} 
              href='#scrollto' 
              className='border-primary min-w-[300px] border-2 flex flex-col items-center relative' 
              style={{ backdropFilter: 'blur(7px)' }}
              alt='item'>
              <div className='m-6 flex flex-col items-center'>
                <SiTurbo size={45}/>
                <h3 className='text-h3 mt-3'>Upgrade Type 1</h3>
                <h4 className='mt-4 text-center text-sub'>
                  <ul className='flex self-start flex-col gap-2'>
                    <p>Increase Speed</p>
                    <p>Increase Horsepower</p>
                    <p>Increase Handling</p>
                    <p>Increase Horsepower</p>
                  </ul>
                </h4>
              </div>
              <div className='overlay absolute inset-0 flex items-center justify-center bg-primary text-white opacity-0 transition-opacity duration-300 lg:hover:opacity-100'>
                <p className='font-bold text-sub'>Learn More</p>
              </div>
            </Link>
            <Link 
              onClick={() => hanldeExpandedDef("1")} 
              href='#scrollto' 
              className='border-primary min-w-[300px] border-2 flex flex-col items-center relative' 
              style={{ backdropFilter: 'blur(7px)' }}
              alt='item'>
              <div className='m-6 flex flex-col items-center'>
                <SiTurbo size={45}/>
                <h3 className='text-h3 mt-3'>Upgrade Type 1</h3>
                <h4 className='mt-4 text-center text-sub'>
                  <ul className='flex self-start flex-col gap-2'>
                    <p>Increase Speed</p>
                    <p>Increase Horsepower</p>
                    <p>Increase Handling</p>
                    <p>Increase Horsepower</p>
                  </ul>
                </h4>
              </div>
              <div className='overlay absolute inset-0 flex items-center justify-center bg-primary text-white opacity-0 transition-opacity duration-300 lg:hover:opacity-100'>
                <p className='font-bold text-sub'>Learn More</p>
              </div>
            </Link>
            <Link 
              onClick={() => hanldeExpandedDef("2")} 
              href='#scrollto' 
              className='border-primary min-w-[300px] border-2 flex flex-col items-center relative' 
              style={{ backdropFilter: 'blur(7px)' }}
              alt='item'>
              <div className='m-6 flex flex-col items-center'>
                <SiTurbo size={45}/>
                <h3 className='text-h3 mt-3'>Upgrade Type 1</h3>
                <h4 className='mt-4 text-center text-sub'>
                  <ul className='flex self-start flex-col gap-2'>
                    <p>Increase Speed</p>
                    <p>Increase Horsepower</p>
                    <p>Increase Handling</p>
                    <p>Increase Horsepower</p>
                  </ul>
                </h4>
              </div>
              <div className='overlay absolute inset-0 flex items-center justify-center bg-primary text-white opacity-0 transition-opacity duration-300 lg:hover:opacity-100'>
                <p className='font-bold text-sub'>Learn More</p>
              </div>
            </Link>

        </div>
)}
        
      </div>

      <div className='w-[100vw] flex flex-cols items-center mb-8 mt-8 bg-black'>
        <div className='px-[5vw] items-center w-full justify-between gap-4 grid grid-cols-2 lg:flex lg:flex-row text-white' alt='holder'>
      
{
  selectedPackage?.packages && (
    <div className="w-full min-w-[90vw] text-sub xl:px-[20vw] flex flex-col items-center" alt='item' id='scrollto'>
      <Accordion key={accordionKey} className="w-full" alt='holder' defaultExpandedKeys={expandedKeys}>
        {Object.keys(selectedPackage.packages).map((packageKey, packageIndex) => (
          <AccordionItem key={packageIndex} aria-label={`Package-${packageIndex + 1}`} title={
            <div className="text-white items-center justify-between flex flex-row">
              <div>
                <h5 className='text-title'>{selectedPackage.packages[packageKey].title}</h5>
              </div>
              <div>
                <p className='underline-animation-white'>View Stages</p>
              </div>
            </div>
          }>
            {selectedPackage.packages[packageKey].stages && (
              <Accordion alt='sublayer'>
                {selectedPackage.packages[packageKey].stages.map((stage, stageIndex) => (
                  <AccordionItem key={stageIndex} aria-label={`Stage-${stageIndex + 1}`} title={
                    <div className="text-white items-center justify-between flex flex-row">
                      <div>
                        <p className='text-primary text-sub font-medium'>{stage.title}</p>
                      </div>
                      <div>
                        <h6 className='text-sub'>+ {stage.hp} Horsepower</h6>
                      </div>
                      <div>
                        <p className='underline-animation-white'>View Build List</p>
                      </div>
                    </div>
                  }>
                    {/* Content for each stage */}
                    {defaultContent}
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <Link href='#contact' alt='contact'>
        <Button className='mt-6 px-12' color="primary" variant="solid">
          <p className='font-medium text-sub'>Contact For Pricing</p>
        </Button>
      </Link>
    </div>
  )
}

        </div>
      </div>

    </RootLayout>
  );
};

export default Page;
