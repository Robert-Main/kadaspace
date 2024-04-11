"use clientSide"

import React from 'react'
import Image from "next/image";
import { File,CalendarDays,Users2  } from 'lucide-react';
import { AccentButton } from './ui/accent-button';

const OurLatest = () => {
  return (
    <div className=" max-w-[1220px] py-10 my-20   mx-auto p-2 ">
        <div className="flex items-center justify-between">
            <h1 className='text-[36px]  font-[700] leading-[56px] tracking-[0.2px]'>Check Out What <span className='text-secondary-blue'>Trending</span> <br /> In Our Latest       <span className='text-primary-orange'>News</span>
            </h1>
            <div className="">
                <Image
                    src="/blog-dec.png"
                    alt="phone"
                   width={400}
                    height={200}
                    className="object-cover !w-full sm:!w-[321px] md:!w-[250px] !h-[300px] sm!h-[448.274px] md:!h-[200px] rounded-xl"
                />
            </div>
        </div>

        <div className="flex justify-between gap-6 my-3">
            <div className="flex flex-1 flex-col relative ">
                <Image
                    src="/big-blog-thumb.jpg"
                    alt="phone"
                    width={400}
                    height={200}
                    className="object-cover !w-full sm:!w-[321px] md:!w-[570px] !h-[300px] sm!h-[448.274px] md:!h-[600px] rounded-xl"
                /> 
                <div className="flex flex-col our-story-shadow px-4 py-5 rounded-xl w-full md:max-w-[500px] absolute translate-y-1/2 bottom-0">
                    <div className="flex gap-4 py-3">
                        <div className='flex gap-2'>
                            <span><CalendarDays className='text-primary-orange' /></span>
                            <p className='text-black'>24 Mar 2021</p>

                        </div>
                        <div className='flex gap-2'>
                            <span><File className='text-primary-orange' /></span>
                            <p className='text-black'>24 Mar 2021</p>

                        </div>
                        <div className='flex gap-2'>
                            <span><Users2 className='text-primary-orange' /></span>
                            <p className='text-black'>24 Mar 2021</p>

                        </div>
                    </div>
                    <h2 className='text-[25px] font-bold py-3'>SEO Agency & Digital Marketing</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nisi consectetur. Nam inventore delectus doloremque!</p>
                </div>
                

                {/* <AccentButton className=''>Discover More</AccentButton> */}
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex gap-1 flex-col">
                        <div className='flex gap-2'>
                            <span><Users2 className='text-primary-orange' /></span>
                            <p className='text-black'>24 Mar 2021</p>
                        </div>
                        <h2 className='text-[25px] font-bold '>SEO Agency & Digital Marketing</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nisi consectetur. Nam inventore delectus doloremque!</p>
                    </div>
                    <Image
                        src="/big-blog-thumb.jpg"
                        alt="phone"
                        width={400}
                        height={200}
                        className="object-cover !w-full sm:!w-[321px] md:!w-[250px] !h-[300px] sm!h-[448.274px] md:!h-[200px] rounded-xl"
                    /> 
                </div>
                <div className="flex justify-between items-center gap-4">
                    <div className="flex gap-1 flex-col">
                        <div className='flex gap-2'>
                            <span><Users2 className='text-primary-orange' /></span>
                            <p className='text-black'>24 Mar 2021</p>
                        </div>
                        <h2 className='text-[25px] font-bold '>SEO Agency & Digital Marketing</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nisi consectetur. Nam inventore delectus doloremque!</p>
                    </div>
                    <Image
                        src="/big-blog-thumb.jpg"
                        alt="phone"
                        width={400}
                        height={200}
                        className="object-cover !w-full sm:!w-[321px] md:!w-[250px] !h-[300px] sm!h-[448.274px] md:!h-[200px] rounded-xl"
                    /> 
                </div>
                <div className="flex justify-between items-center gap-4">
                    <div className="flex gap-1 flex-col">
                        <div className='flex gap-2'>
                            <span><Users2 className='text-primary-orange' /></span>
                            <p className='text-black'>24 Mar 2021</p>
                        </div>
                        <h2 className='text-[25px] font-bold '>SEO Agency & Digital Marketing</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nisi consectetur. Nam inventore delectus doloremque!</p>
                    </div>
                    <Image
                        src="/big-blog-thumb.jpg"
                        alt="phone"
                        width={400}
                        height={200}
                        className="object-cover !w-full sm:!w-[321px] md:!w-[250px] !h-[300px] sm!h-[448.274px] md:!h-[200px] rounded-xl"
                    /> 
                </div>
            </div>

        </div>
            <AccentButton className='bg-secondary-blue mt-40' >Discover More ...</AccentButton>

    </div>
  )
}

export default OurLatest

