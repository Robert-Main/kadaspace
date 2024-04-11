"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useUrl } from "nextjs-current-url";
import { useEffect, useState } from "react";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hashKey, setHashKey] = useState("");

    const pathname = usePathname();
    const params = useParams();

    useEffect(() => {
        setHashKey(window.location.hash || "");
    }, [params]);

    const { href: currentUrl } = useUrl() ?? {};

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed opacity-100 h-[80px] !z-[100] bg-[#2b374b] right-0  left-0 top-0 ">
            <div className="elementor-background-overlay w-full">
                <div className="flex items-center  justify-between max-w-[1420px]  mx-auto w-full px-4 py-3 text-2xl ">
                    <div className="flex justify-between  gap-10">
                        <Link
                            href="/"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        >
                            <Link href="/">
                                <span className="font-black text-white uppercase">
                                    Kadaspace
                                </span>
                            </Link>
                        </Link>
                        <ul
                            className={`
					fixed inset-0 md:flex-row gap-4 z-[50] flex flex-col items-center md:static pt-8 md:pt-0 sm text-white md:flex
					${sidebarOpen ? "-translate-x-0" : "-translate-x-[100%] md:-translate-x-0 "}
					transition-all
				`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="absolute w-6 h-6 cursor-pointer md:hidden right-4 top-4"
                                onClick={closeSidebar}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>

                            <li onClick={closeSidebar}>
                                <Link
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                    href="/"
                                    className={cn(
                                        "leading-[14px] text-center font-bold text-[14px]",
                                        {
                                            "text-primary-orange":
                                                pathname === "/" &&
                                                hashKey === "",
                                        }
                                    )}
                                >
                                    Home
                                </Link>
                            </li>

                            <li onClick={closeSidebar}>
                                <Link
                                    href="/#company"
                                    className={cn(
                                        "leading-[14px] text-center font-bold text-[14px]",
                                        {
                                            "text-primary-orange":
                                                pathname === "/" &&
                                                hashKey === "#company",
                                        }
                                    )}
                                >
                                    Company
                                </Link>
                            </li>
                            <li onClick={closeSidebar}>
                                <Link
                                    href="/#products"
                                    className={cn(
                                        "leading-[14px] text-center font-bold text-[14px]",
                                        {
                                            "text-primary-orange":
                                                pathname === "/" &&
                                                hashKey === "#products",
                                        }
                                    )}
                                >
                                    Products
                                </Link>
                            </li>
                            <li onClick={closeSidebar}>
                                <Link
                                    href="/#impact"
                                    className={cn(
                                        "leading-[14px] text-center font-bold text-[14px]",
                                        {
                                            "text-primary-orange":
                                                pathname === "/" &&
                                                hashKey === "#impact",
                                        }
                                    )}
                                >
                                    Our Impact
                                </Link>
                            </li>
                            <li onClick={closeSidebar}>
                                <Link
                                    href="/#news"
                                    className={cn(
                                        "leading-[14px] text-center font-bold text-[14px]",
                                        {
                                            "text-primary-orange":
                                                pathname === "/" &&
                                                hashKey === "#news",
                                        }
                                    )}
                                >
                                    News
                                </Link>
                            </li>
                            {/* <li onClick={closeSidebar}>
                                <Link
                                    href="/#aboutUs"
                                    className={cn(
                                        "leading-[14px] text-center font-bold text-[14px]",
                                        {
                                            "text-primary-orange":
                                                pathname === "/" &&
                                                hashKey === "#aboutus",
                                        }
                                    )}
                                >
                                    About Us
                                </Link>
                            </li> */}
                            <li onClick={closeSidebar}>
                                <Link
                                    href="/#contact"
                                    className={cn(
                                        "leading-[14px] text-center font-bold text-[14px]",
                                        {
                                            "text-primary-orange":
                                                pathname === "/" &&
                                                hashKey === "#contact",
                                        }
                                    )}
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li onClick={closeSidebar}>
                                {" "}
                                <button></button>
                                <Link href="/vendor-registration">
                                    <button className="md:hidden bg-primary-orange text-white rounded-full px-6 text-[20px] py-2 flex justify-center items-center flex-col">
                                        Contact Now
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between gap-5">
                        <Link href="/vendor-registration">
                            <button className="hidden md:block bg-[#00ccc8] text-white px-6 text-[20px] py-2 ">
                                community
                            </button>
                        </Link>
                        <Link href="/vendor-registration">
                            <button className="hidden md:block text-[#00ccc8] border-2 border-[#00ccc8] bg-[#2b374b] px-8 text-[20px] py-2 ">
                                join us
                            </button>
                        </Link>
                    </div>

                    <svg
                        onClick={() => setSidebarOpen(true)}
                        className="cursor-pointer md:hidden"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28.25 5L3.75 5C3.6125 5 3.5 5.1125 3.5 5.25V7.25C3.5 7.3875 3.6125 7.5 3.75 7.5L28.25 7.5C28.3875 7.5 28.5 7.3875 28.5 7.25V5.25C28.5 5.1125 28.3875 5 28.25 5ZM28.25 24.5H3.75C3.6125 24.5 3.5 24.6125 3.5 24.75L3.5 26.75C3.5 26.8875 3.6125 27 3.75 27H28.25C28.3875 27 28.5 26.8875 28.5 26.75V24.75C28.5 24.6125 28.3875 24.5 28.25 24.5ZM28.25 14.75L3.75 14.75C3.6125 14.75 3.5 14.8625 3.5 15L3.5 17C3.5 17.1375 3.6125 17.25 3.75 17.25H28.25C28.3875 17.25 28.5 17.1375 28.5 17V15C28.5 14.8625 28.3875 14.75 28.25 14.75Z"
                            fill="#F15029"
                        />
                    </svg>
                </div>
                <hr className="!bg-red-800" />
            </div>
        </div>
    );
};

export default Header;
