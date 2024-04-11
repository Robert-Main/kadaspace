import { PhoneCall } from 'lucide-react'
import React from 'react'
import ContactUsForm from './forms/ContactUsForm'

const ContactUs = () => {
  return (
    <div  className=" flex items-center justify-center h-[508px] md:h-[780px] z-20 bg-[url(/contact-bg.png)] bg-top bg-bottom_ bg-cover bg-no-repeat my10 ">
        <div className="max-w-[1420px] mx-auto gap-5 flex justify-between !flex-row py-10">
            <div className="flex flex-col gap-6 flex-1">
                 <h1 className='text-[50px] font-[900] py-3 text-white'>Feel Free To Send Us A Message About Your Website Needs</h1>
                 <p className='text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia provident tenetur autem nisi dolor aspernatur iste harum cum beatae.</p>

                 <div className="flex gap-7  items-center">
                    <h2 className='text-[30px] font-[600] py-3 text-white'>For any enquiry, Call Us: </h2>
                    <p className='text-[30px] font-[600] py-3 text-white flex flex-row gap-3 items-center'>
                        <span><PhoneCall className='w-20 h-20 bg-white rounded-full text-red-500 p-5' /></span>
                         010-020-0340
                    </p>
                 </div>
            </div>
            <div className="flex-1">
                 <ContactUsForm  />
            </div>

        </div>
    </div>
  )
}

export default ContactUs