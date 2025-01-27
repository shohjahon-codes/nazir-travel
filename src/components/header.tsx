import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className=" !bg-[rgba(255,255,255,0.2)] sticky top-0 left-0 z-50 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-orange-500 text-2xl font-bold">Hours in Tuscany</h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li  className="text-white hover:border-b-2 hover:border-orange-500"> <Link href={"/"} >Home</Link></li>
                        <li  className="text-white hover:border-b-2 hover:border-orange-500"> <Link href={"/about-us"} >About Us</Link></li>
                        <li  className="text-white hover:border-b-2 hover:border-orange-500"> <Link href={"/tur-pacagets"} >Tour Packages</Link></li>
                        <li  className="text-white hover:border-b-2 hover:border-orange-500"> <Link href={"/"} >Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <span className="text-white">Eng</span>
                    <a href="#" className="text-white hover:text-orange-500">Login</a>
                    <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Sign Up</a>
                </div>
            </div>
        </header>
    );
};

export default Header; 