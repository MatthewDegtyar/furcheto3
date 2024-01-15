import React from 'react'
import Head from 'next/head'
import Navigationbar from '@/components/Navigationbar'
import Footer from '../components/Footer'
import { Suspense } from 'react'
import Tagline from '../components/Tagline'
import TestimonialSlider from '../components/TestimonialSlider'
import NavFooter from '../components/NavFooter'

const RootLayout = ({ children, pageTitle, imageUrl , hidePackages, hideFeatured, hideAbout, hideEvents, hideContact, hideTagline}) => {
  const defaultImageUrl = '/img/bannerlogo.jpeg';
  const finalImageUrl = imageUrl || defaultImageUrl;

  return (
    <div>
            <Navigationbar/>
            <Head>
                <title>{`${pageTitle} - Furcheto Motorsports`}</title>
                <meta name="description" content="Custom Racing Packages" />
                <link rel="icon" href="/img/favicon.png" />
                <link rel='canonical' href='https://www.WEBSITE.com/' />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.WEBSITE.com/" />
                <meta property="og:description" content="Furcheto Motorsports" />
                <meta
                    property="og:image"
                    content={finalImageUrl}
                    />
                <meta name="og:title" content={`Furcheto Motorsports - ${pageTitle}`} />
                <meta name="twitter:card" content="summary_large_image" />  
            </Head>

              <div className='mt-[125px]'>
                {children}
              </div>
            
              {!hideTagline &&
                <div className='-mt-4'>
                  <Tagline/>
                </div>
              }



            <NavFooter 
              hidePackages={hidePackages} 
              hideFeatured={hideFeatured} 
              hideAbout={hideAbout} 
              hideEvents={hideEvents} 
              hideContact={hideContact}
            />
            <Footer/>

    </div>
  )
}

export default RootLayout
