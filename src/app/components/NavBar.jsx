"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";



const NavBar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathName = usePathname();

    // console.log(pathName, pathName.includes('dashboard'));

    if (!pathName.includes('dashboard')) {
        return (
            <div className="w-full bg-[#F1F6FF] shadow-sm fixed top-0 left-0 z-50">
                <nav className="flex items-center justify-between px-3.5 md:px-5 lg:px-0 py-1 md:py-1.5 lg:py-2.5 max-w-7xl mx-auto">
                    {/* Mobile Hamburger Menu */}
                    <button
                        className="lg:hidden flex flex-col space-y-1 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-5 h-0.5 bg-gray-600"></div>
                        <div className="w-5 h-0.5 bg-gray-600"></div>
                        <div className="w-5 h-0.5 bg-gray-600"></div>
                    </button>

                    {/* Logo Section */}
                    <Link href="/">
                        <div className="flex items-center lg:space-x-0.5 cursor-pointer">
                            <img src="/img_1.png" alt="" className="w-12" />
                            <span className="hidden md:flex text-xl font-semibold text-gray-800 hover:text-blue-700">BookMyCampus</span>
                        </div>
                    </Link>

                    {/* Navigation Links - Hidden on mobile */}
                    <ul className="hidden lg:flex md:items-center space-x-3.5 lg:space-x-8">
                        <Link href="/colleges">
                            {
                                pathName.includes('colleges') ?
                                    <li className="bg-blue-500/90 text-white cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-blue-600/90 transition-colors">Colleges</li>
                                    :
                                    <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer border-2 px-2.5 py-1.5 border-gray-200 rounded-md">Colleges</li>
                            }
                        </Link>
                        <Link href="/admission">

                            {
                                pathName.includes('admission') ?
                                    <li className="bg-blue-500/90 text-white cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-blue-600/90 transition-colors">Admission</li>
                                    :
                                    <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer border-2 px-2.5 py-1.5 border-gray-200 rounded-md">Admission</li>
                            }
                        </Link>
                        <Link href="/user-dashboard/my-college">
                            <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer border-2 px-2.5 py-1.5 border-gray-200 rounded-md">My College</li>
                        </Link>
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-2.5 lg:space-x-3">
                        <Link href="/login">
                            {
                                pathName.includes('login') ?
                                    <button className="bg-blue-500/90 text-white cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-blue-600/90 transition-colors">
                                        Login
                                    </button>
                                    :
                                    <button className="text-gray-600 font-medium hover:text-blue-600 px-4 py-1.5 cursor-pointer border-2 p-1 border-gray-200 rounded-md">
                                        Login
                                    </button>
                            }
                        </Link>
                        <Link href="/signup">

                            {
                                pathName.includes('signup') ?
                                    <button className="bg-blue-500/90 text-white cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-blue-600/90 transition-colors">
                                        Sign Up
                                    </button>
                                    :

                                    <button className="text-gray-600 font-medium hover:text-blue-600 px-4 py-1.5 cursor-pointer border-2 p-1 border-gray-200 rounded-md">
                                        Sign Up
                                    </button>
                            }
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                <div className={`lg:hidden bg-white border-t border-gray-500/25 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <ul className="flex flex-col space-y-2 px-6 py-4">
                        <Link href="/colleges">
                            {
                                pathName.includes('colleges') ?
                                    <li className="bg-blue-500/90 text-white cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-blue-600/90 transition-colors">Colleges</li>
                                    :
                                    <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer px-4 py-2">Colleges</li>
                            }
                        </Link>
                        <Link href="/admission">
                            {
                                pathName.includes('admission') ?
                                    <li className="bg-blue-500/90 text-white cursor-pointer font-medium px-4 py-2 rounded-lg hover:bg-blue-600/90 transition-colors">Admission</li>
                                    :
                                    <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer px-4 py-2">Admission</li>
                            }
                        </Link>
                        <Link href="/user-dashboard/my-college">
                            <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer px-4 py-2">My College</li>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    } else {
        return <></>;
    }


};

export default NavBar;