import React from 'react'

const ContactUsForm = () => {
  return (
    <div>
        <form action="" className='bg-[#f5f5f5] px-5 py-5 rounded-xl'>
            <div className='flex gap-4'>
                <div className="mt-4  w-full">
                    <label htmlFor="">
                        <input type="text" placeholder='name' className='bg-[#d1f3ff] rounded-full px-4 py-3 placeholder:text-black w-full' />
                    </label>
                </div>
                <div className="mt-4  w-full">
                    <label htmlFor="">
                        <input type="text" placeholder='surname' className='bg-[#d1f3ff] rounded-full px-4 py-3 placeholder:text-black w-full' />
                    </label>
                </div>

            </div>
            <div className="mt-4  w-full">
                <label htmlFor="">
                    <input type="text" placeholder='email' className='bg-[#d1f3ff] rounded-full px-4 py-3 placeholder:text-black w-full' />
                </label>
            </div>
            <div className="mt-4 w-full">
                <label htmlFor="">
                    <textarea rows={10} placeholder='message' className='bg-[#d1f3ff] rounded-2xl px-4 py-3 placeholder:text-black w-full' />
                </label>
            </div>
        </form>
    </div>
  )
}

export default ContactUsForm