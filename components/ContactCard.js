import { Input, Textarea, Button, SelectItem, Select } from '@nextui-org/react'
import { useState } from 'react';
import React from 'react'

const ContactCard = ({ hideTags }) => {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
      // Perform form submission logic
  
      // Show the thank you message
      setShowThankYou(true);

      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    };
  return (
    <div className='flex text-white flex-col relative' alt='contact card'>

        {!hideTags && 
            <div className='text-center flex flex-col items-center'>
                    <p className='text-center mb-2 mt-6 text-title'>Let's Get Started</p>
                    <p className='mb-6 max-w-[800px] text-sub self-center text-center'>Furcheto Motorsports: Where precision meets power. Reach out today to ignite your cars's potential with our top-tier expertise – crafting excellence for the pinnacle of performance.</p>
            </div>
        }
        <div className='flex flex-col items-center lg:px-[5vw]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full'>
            <Input isRequired type="name" label="Name" placeholder="Ex. John Doe" />
            <Input isRequired type="email" label="Email" placeholder="Ex. John.Doe@mymail.com" />
            <Input type="phone" label="Phone" placeholder="Ex. 000-000-0000" />
            <Input type="email" label="Make/Model" placeholder="Ex. Ford/Mustang" />
            <Input isRequired type="email" label="Trim" placeholder="Ex. GT350" />
            <Select
                label="Transmission Type"
                placeholder="Manual Or Automatic"
            >
                <SelectItem>
                   Automatic
                </SelectItem>
                <SelectItem>
                   Manual
                </SelectItem>

            </Select>
            <Input isRequired type="number" label="Year" placeholder="Ex. 2019" />
            <Input isRequired type="number" label="Approximate Mileage" placeholder="Ex. 21900" />
            <Input type="email" label="State or Country of Residnce" placeholder="Ex. Florida, USA" />

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
            <Textarea
                label="Modifications & Condition"
                placeholder="Modifications Currently Installed & Current Condition & Current Condition of Vehicle"
            />
            <Textarea
                isRequired
                label="Comments/Inquery"
                placeholder="How can we help you?"
            />
        </div>

        <Button onClick={() => handleSubmit()} className='mt-24 mb-2 px-12' color="primary" variant="solid">
            <p className='font-medium text-sub'>Submit</p>
        </Button>

        </div>
        {showThankYou &&
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black' alt='popup'>
            <div className='flex flex-col items-center justify-center' alt='final'>
              <p className='text-title'>Thank you!</p>
              <p className='text-h2 mt-2'>We'll be in touch shortly</p>

              <Button onClick={() => setShowThankYou(false)} className='mt-24 mb-2 px-12' color="primary" variant="solid">
                <p className='font-medium text-sub'>Close</p>
              </Button>
            </div>
          </div>
        }

    </div>
  )
}

export default ContactCard
