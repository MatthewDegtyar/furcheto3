import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Testimonial({ name, headshot, descr, children, book1, book2, link1, link2  }){
  return (
    <div className='' alt='testimonial card'>
      <Image
        className='absolute h-[75px] w-[75px] rotate-180'
        src='/svg/Quotes.svg'
        alt=''
        height={75}
        width={75}
      />
      <div className='p-4 font-gaurdian-regular text-[16px] sm:text-[22px]'>
        
        <p dangerouslySetInnerHTML={{ __html: descr }} />
        <div className='flex flex-col' alt='book and person holder'>
        <div className='mt-3 flex items-center justify-center lg:items-start lg:justify-start flex-row' alt='book holder'>
          {book1 && link1 && (
                <Link href={link1} alt='second link' target="_blank" rel="noopener noreferrer">
                <Image
                    className='hover:scale-105 cursor-pointer'
                    src={book1}
                    height={150}
                    width={150}
                    alt='book'
                />
                </Link>
            )}
            {book2 && link2 && (
                <Link href={link2} alt='second link' target="_blank" rel="noopener noreferrer">
                <Image
                    className='hover:scale-105 cursor-pointer'
                    src={book2}
                    height={150}
                    width={150}
                    alt='book'
                />
                </Link>
            )}
        </div>

            <div className='mt-4 flex flex-row'>
                <Image
                      className='rounded-full h-[120px] w-[120px] object-cover resize-none'
                      alt='reviewer'
                      src={headshot}
                      width={120}
                      height={120}
                  />

                <div className='ml-4 mt-2 text-wrap text font-guardian-regular text-[20px]'>
                    <p className='font-guardian-medium mb-8'>{name}</p>
                    <div className='text-[16px] sm:text-[18px]'>
                      {children}

                    </div>
                </div>
            </div>
        </div>
       
      </div>
      <div className='h-[0.5px] bg-[#383838] mt-4 lg:hidden flex shown'></div>
    </div>
  )
}

