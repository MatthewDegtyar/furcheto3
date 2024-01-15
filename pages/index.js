import Image from 'next/image'
import RootLayout from '../layouts/RootLayout'
import { Button } from '@nextui-org/react';
import { RxCaretDown } from 'react-icons/rx';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Skeleton } from '@nextui-org/react';

const EmbedVideo = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideoOnLoad = () => {
      if (video) {
        video.play().catch((error) => {
          // Autoplay was prevented, handle the error if needed
          console.error('Autoplay prevented:', error);
        });
      }
    };

    playVideoOnLoad();

    return () => {
      // Clean up any event listeners or resources if needed
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={props.className}
      playsInline
      loop
      muted
    >

      <source src={props.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default function Home() {
    const videoSource = '/video/race1.mp4';

  return (
    <div>
      <RootLayout imageUrl='/img/logobanner.jpeg' pageTitle='Welcome!'>
        <div className='' alt='page'>
          <div className='flex flex-col items-center' alt='hero'>
          <EmbedVideo src={videoSource} className="h-[calc(100vh-125px)] z-0 object-cover w-[100vw]" />

            <div className="h-[calc(100vh-125px)] z-10 object-cover w-full top-0 mt-[125px] absolute bg-[rgb(0,0,0,0)]"></div>
            <div className='top-24 text-white p-4 z-30 absolute'>
                <Image
                  alt='logo'
                  priority={true}
                  src='/img/logobanner-removebg.png'
                  height={300}
                  width={800}
                />
                <div className='hidden'>
                  <h1>Late Stage Performance Specialists</h1>
                  <h2>Furcheto Motorsports</h2>
                </div>

              </div>
            <div className='h-[calc(100vh-125px)] z-20 flex flex-col items-center object-cover w-full top-0 mt-[125px] absolute bg-gradient-to-b from-transparent to-black'>
              <div className='bottom-16 absolute flex flex-col items-center'>
                <Link
                  href='#tagline'
                  alt='scroll down'
                >
                  <Button className='bg-primary text-sub font-[22px] px-12 text-white'>
                    <p className='font-medium text-sub'>Learn More</p>
                  </Button>
                </Link>
                <div className='flex flex-col items-center scroll-prompt' alt='scroll prompt anim'>
                  <RxCaretDown className='RxCaretDown' color='white' size={45}/>
                </div>
              </div>
            </div>
              <div className='' alt='tagline'>

            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  )
}
