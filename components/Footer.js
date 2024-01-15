import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaPhoneAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";


const Icon = ({ children, href }) => {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    borderRadius: '50%',
    borderWidth: '2px',
    padding: '12px',
    backgroundColor: isHovered ? 'white' : 'transparent',
    borderColor: 'white',
  };

  const iconStyle = {
    color: isHovered ? 'black' : 'white',
  };

  return (
    <Link  href={href} alt={href}>
    
    <div
      className='rounded-full  border-2 p-4 iconContainer'
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
     
    >

        {React.cloneElement(children, { style: iconStyle })}

    </div>
    </Link>
  );
};

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='w-[100vw] flex flex-col lg:flex-row h-[125px]'>
      <div className='flex items-center w-full flex-col gap-4 lg:flex-row justify-between px-[5vw]'>
        {/* Logo Holder (Left) */}
        <div>
          <Link href='/' alt='/'>
            <Image alt='logo' src='/img/logobanner.jpeg' width={300} height={100} />
          </Link>
        </div>

        {/* Terms (Center) */}
        <div className='flex text-[12px] text-center text-white flex-col'>
          <p>© {year} Furcheto Motorsports. All Rights Reserved Terms & Conditions</p>
          <p>
            Built by{' '}
            <Link href='https://www.degtyarconsulting.com/'>
              <span className='font-bold underline-animation-white'>Degtyar Consulting</span>
            </Link>
          </p>
        </div>

        {/* Social Buttons (Right) */}
        <div className='flex flex-row gap-4 mt-4 lg:mt-0 mb-8 lg:mb-0'>
          <Icon href='/email'>
            <MdEmail />
          </Icon>
          <Icon href='/call'>
            <FaPhoneAlt />
          </Icon>
          <Icon href='/linkedin'>
            <FaLinkedinIn />
          </Icon>
          <Icon href='/instagram'>
            <FaInstagram />
          </Icon>
          <Icon href='/facebook'>
            <FaFacebookF />
          </Icon>
          <Icon href='/twitter'>
            <FaXTwitter />
          </Icon>
        </div>
      </div>
    </div>
  );
};
export default Footer;
