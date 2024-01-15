import Image from 'next/image'
import React from 'react'

const Tagline = () => {
  return (
    <div className='w-[100vw] text-white bg1 flex flex-col items-center' id='tagline'>
        <div className='px-[5vw] flex flex-col items-center'>
            <div className='z-10'>
                <Image
                    className='opacity-100'
                    src='/img/logobanner.jpeg'
                    width={630}
                    height={280}
                    alt='img'
                />
            </div>
            <p className='max-w-[1100px] mt-8 mb-8 text-center text-sub'>Furcheto Motorsports leads the way in elevating vehicle performance through premier upgrades, installations, and tuning. We prioritize delivering high-performance enhancements that seamlessly blend drivability and reliability while maximizing power and speed. Regardless of your automotive goals, Furcheto Motorsports is your gateway to unlocking the full potential of your vehicle. Experience the difference with us today!</p>
            <div className='opacity-100 place-self-center left-1/8 bg- flex flex-row'>
                <div className='grid grid-cols-4 mb-16 items-center'>
                    <Image
                        src='/img/chevy.png'
                        width={300}
                        height={110}
                        alt='img'
                    />
                    <Image
                        src='/img/ford.png'
                        width={300}
                        height={110}
                        alt='img'
                    />
                    <Image
                        src='/img/cad.png'
                        width={300}
                        height={110}
                        alt='img'
                    />
                    <Image
                        src='/img/dodge.png'
                        width={300}
                        height={110}
                        alt='img'
                    />
                </div>
                
            </div>
        </div>
        
        
    </div>
  )
}

export default Tagline
