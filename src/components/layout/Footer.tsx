import Link from "next/link";
import ScrollTopArrow from "../ScrollTopArrow";
import { AccentButton } from "../ui/accent-button";

const Footer = () => {
    return (
        <div className="mt-10 ">
            <div className="max-w-[1420px] py-[36px] mx-auto p-4 relative">
                {/* Footer top columns */}
                <div className="flex flex-wrap justify-between gap-12 md:gap-4">
                    <div className="flex flex-col gap-4 my-5 text-white md:my-0">
                        <h3 className="text-[24px] font-[700] leading-[36px] tracking-[0.2px] text-white">
                            Our Cities
                        </h3>

                        <div className="grid grid-cols-2 gap-x-3 gap-y-6">
                            <p className=" leading-[22.6px] tracking-[0.2px]">
                                Dallas
                            </p>
                            <p className=" leading-[22.6px] tracking-[0.2px]">
                                Minneapolis/St. Paul
                            </p>
                            <p className=" leading-[22.6px] tracking-[0.2px]">
                                Baltimore
                            </p>
                            <p className=" leading-[22.6px] tracking-[0.2px]">
                                Chicago
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[36px] font-[700] leading-[54px] tracking-[0.2px] text-white">
                            Get Early Access
                        </h3>

                        <div className="flex items-center gap-4 mt-6 flex-wrap_">
                            <Link
                                href="/vendor-registration"
                                className="flex-1"
                            >
                                <AccentButton className="w-full px-4 text-sm bg-transparent border whitespace-nowrap border-secondary-blue text-secondary-blue">
                                    Become a vendor
                                </AccentButton>
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="border-[#565365] opacity-30 border-[1px] my-5" />

                <div className="flex flex-col-reverse justify-between gap-6 text-white md:flex-row">
                    <p className="text-center text-black md:text-left ">
                        2023 © Space Dynamic LLC/All Rights Reserved.
                    </p>

                    <div className="flex items-center justify-center gap-3">
                        <Link
                            href="https://facebook.com/hoppnlife"
                            target="_blank"
                            className="px-2 bg-black"
                        >
                            {" "}
                            {/* Facebook */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_566_992)">
                                    <path
                                        d="M32 16C32 23.9862 26.1488 30.6056 18.5 31.8056V20.625H22.2281L22.9375 16H18.5V12.9987C18.5 11.7331 19.12 10.5 21.1075 10.5H23.125V6.5625C23.125 6.5625 21.2938 6.25 19.5431 6.25C15.8888 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C5.85125 30.6056 0 23.9862 0 16C0 7.16375 7.16375 0 16 0C24.8363 0 32 7.16375 32 16Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7334 19.1199 10.5 21.1074 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8887 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C14.3146 31.9334 15.1495 32 16 32C16.8505 32 17.6854 31.9334 18.5 31.8056V20.625H22.2281Z"
                                        fill="#262239"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_566_992">
                                        <rect
                                            width="32"
                                            height="32"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link
                            href="https://instagram.com/hoppnlife"
                            target="_blank"
                        >
                            {" "}
                            {/* Instagram */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_566_997)">
                                    <path
                                        d="M22.467 0H9.53297C4.27647 0 0 4.27647 0 9.53297V22.467C0 27.7235 4.27647 32 9.53297 32H22.467C27.7235 32 32 27.7235 32 22.467V9.53297C31.9999 4.27647 27.7235 0 22.467 0ZM28.7808 22.467C28.7808 25.954 25.954 28.7808 22.467 28.7808H9.53297C6.046 28.7808 3.2192 25.954 3.2192 22.467V9.53297C3.2192 6.04594 6.046 3.2192 9.53297 3.2192H22.467C25.954 3.2192 28.7808 6.04594 28.7808 9.53297V22.467Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M16 7.72363C11.4364 7.72363 7.72363 11.4364 7.72363 15.9999C7.72363 20.5634 11.4364 24.2763 16 24.2763C20.5636 24.2763 24.2763 20.5635 24.2763 15.9999C24.2763 11.4363 20.5636 7.72363 16 7.72363ZM16 21.0571C13.207 21.0571 10.9428 18.793 10.9428 16C10.9428 13.207 13.207 10.9428 16 10.9428C18.793 10.9428 21.0571 13.207 21.0571 16C21.0571 18.7929 18.7929 21.0571 16 21.0571Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M24.2928 9.7691C25.388 9.7691 26.2759 8.8812 26.2759 7.78592C26.2759 6.69064 25.388 5.80273 24.2928 5.80273C23.1975 5.80273 22.3096 6.69064 22.3096 7.78592C22.3096 8.8812 23.1975 9.7691 24.2928 9.7691Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_566_997">
                                        <rect
                                            width="32"
                                            height="32"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link
                            href="https://x.com/kadaspace?t=L1MRAc30diSMFgKYH-WQCg&s=08"
                            target="_blank"
                        >
                            {" "}
                            {/* Twitter */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
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
                <ScrollTopArrow />
            </div>
        </div>
    );
};

export default Footer;
