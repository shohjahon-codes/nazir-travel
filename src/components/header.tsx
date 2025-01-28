import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="!bg-[rgba(255,255,255,0.2)] sticky top-0 left-0 z-50 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-orange-500 text-2xl md:text-xl sm:text-lg font-bold">Hours in Tuscany</h1>
                <div className="flex items-center lg:hidden">
                    <input type="checkbox" id="menu-toggle" className="hidden" />
                    <label htmlFor="menu-toggle" className="text-white text-2xl cursor-pointer">☰</label>
                </div>
                <nav className="hidden lg:flex lg:space-x-8">
                    <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 gap-12 font-bold">
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/tour-packages">Tour Packages</Link>
                        </li>
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <div className="hidden lg:flex items-center space-x-4">
                    <span className="text-white">Eng</span>
                    <a href="#" className="text-white hover:text-orange-500">Login</a>
                    <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Sign Up</a>
                </div>
            </div>
            <div className="lg:hidden">
                <nav id="menu" className="hidden flex-col space-y-4 mt-4">
                    <ul className="flex flex-col">
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/tour-packages">Tour Packages</Link>
                        </li>
                        <li className="text-white hover:border-b-2 hover:border-orange-500">
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col space-y-4 mt-4">
                        <span className="text-white">Eng</span>
                        <a href="#" className="text-white hover:text-orange-500">Login</a>
                        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Sign Up</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
