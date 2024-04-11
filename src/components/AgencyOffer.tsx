"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image";


const AgencyOffer = () => {
  return (
    <div className=" max-w-[1220px] py-10 my-20   mx-auto p-2 ">
        <div className="flex items-center justify-between">

            {
                [1,2,3,4].map((item,idx)=>(
                    <HoverCard>
                        <HoverCardTrigger className="agency-shadow px-3 py-4 rounded-xl">
                            <Image
                                src="/portfolio-image.png"
                                alt="phone"
                                width={200}
                                height={200}
                                className="object-contain  !w-full sm:!w-[321px] md:!w-[250px] !h-[300px] sm!h-[448.274px] md:!h-[220px] rounded-xl"
                            />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <div className="flex flex-col">
                                <h1 className='text-[18px] font-[900] py-3 text-white'>Website Reporting</h1>
                                <p className="font-bold text-gray-200">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Quos, exercitationem.</p>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                ))
            }

        </div>

    </div>
  )
}

export default AgencyOffer