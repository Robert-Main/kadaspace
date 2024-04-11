import MainLayout from "@/components/layout";
import { ArrowRight, PlayIcon, Store } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <MainLayout>
            <main className="">
                {/* Hero section */}
                <div className="relative h-[870px] md:h-[880px] z-20 bg-[url(/big-blog-thumb.jpg)] bg-top bg-bottom_ bg-cover bg-no-repeat">
                    <div className="h-full elementor-background-overlay ">
                        <div className="max-w-[1420px] h-full flex items-center mx-auto p-2">
                            <div className="md:px-16 ">
                                <h1 className="text-[30px] md:text-[42px] font-[700]  tracking-[0.2px] max-w-[209px] sm:max-w-[1009px] text-white">
                                    Hoppn! Life-Changing Technology <br /> for
                                    everyday challenges
                                </h1>
                                <p className="text-[16px] md:text-[24px] font-[500] leading-[25.6px] md:leading-[36px] tracking-[0.2px] max-w-[263px] sm:max-w-[564px] text-white my-4">
                                    Your Gateway to a World of Delicious African
                                    Cuisine, Coming Soon.
                                </p>

                                <div className="w-full mt-8 sm:w-[220px] h-[64px] flex items-center p-2  bg-[#00ccc8] ">
                                    <input
                                        type="text"
                                        className="flex-1 w-full h-full border-none   bg-[#00ccc8] placeholder:text-white placeholder:text-[16px] placeholder:opacity-100 outline-none px-4 "
                                        placeholder="Learn more"
                                    />
                                    <Link
                                        href={"/#early-access"}
                                        className="block h-full"
                                    >
                                        <h2 className="flex items-center h-full px-4 text-white md:px-8">
                                            <ArrowRight />
                                        </h2>
                                    </Link>
                                </div>
                                <div className="flex items-center py-6 gap-12 mt-12">
                                    <span className="flex items-center justify-center p-4 bg-white rounded-full animate-bounce  pause ">
                                        <PlayIcon
                                            size={40}
                                            className=" text-center bg-white rounded-full "
                                        />
                                    </span>
                                    <p className="text-[16px]font-[700] leading-[25.6px] md:leading-[36px] tracking-[0.2px] max-w-[263px] sm:max-w-[564px] text-white my-4">
                                        Empowering smallholder <br /> farmers
                                        with solar irrigation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-5 left-2 right-2 flex justify-between items-center  w-full overflow-hidden">
                        <Link
                            href={"/#early-access"}
                            className="w-full mt-8 sm:w-[300px] flex items-center py-2 ml-4  bg-[#00ccc8] rounded-full"
                        >
                            <Link
                                href={"/#early-access"}
                                className="block h-full"
                            >
                                <h2 className="flex items-center h-full px-4 text-white md:px-8">
                                    <Store />
                                </h2>
                            </Link>
                            <p className="text-white">Connect with us</p>
                        </Link>
                        <div className=" rounded-full">
                            <Link
                                href="https://x.com/kadaspace?t=L1MRAc30diSMFgKYH-WQCg&s=08"
                                target="_blank"
                                className="fixed mr-6  bg-[#00ccc8] p-4 right-3 bottom-12 rounded-full"
                            >
                                {" "}
                                {/* Twitter */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    className=""
                                >
                                    <g clipPath="url(#clip0_566_1003)">
                                        <path
                                            d="M31.4801 15.9983C31.4801 24.5487 24.5487 31.4801 15.9983 31.4801C7.44801 31.4801 0.516602 24.5487 0.516602 15.9983C0.516602 7.44801 7.44801 0.516602 15.9983 0.516602C24.5487 0.516602 31.4801 7.44801 31.4801 15.9983Z"
                                            fill="#262239"
                                            stroke="white"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6.15293 6.73877L13.7935 16.9527L6.10645 25.2607H7.83644L14.5672 17.9887L20.0062 25.2607H25.8935L17.8246 14.4723L24.9804 6.73877H23.2504L17.0509 13.4363L12.0436 6.73877H6.15293ZM8.69978 8.01385H11.4027L23.3467 23.9856H20.6404L8.69978 8.01385Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_566_1003">
                                            <rect
                                                width="32"
                                                height="32"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* <InOurWords /> */}
            {/* <AgencyOffer /> */}
            {/* <OurLatest /> */}
            {/* <AboutUs /> */}
            {/* <ContactUs /> */}
        </MainLayout>
    );
}
