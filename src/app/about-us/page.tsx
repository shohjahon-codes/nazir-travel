import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="-mt-[80px] -z-50 bg-hero bg-center bg-cover bg-no-repeat w-full h-screen">
        <Hero />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-8 bg-white">
        {/* Image Section */}
        <div className="p-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/shahar.png"
              alt="City of Lucca"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-sm font-semibold text-orange-500">
            WELCOME TO OUR SITE!
          </h3>
          <h2 className="text-3xl font-bold text-gray-800">
            We Are The Center Of Lucca To Offer You The Best
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are right in the center of Lucca to offer you the real city life!
            With years of experience in practically every tourism sector, with
            us you can find complete packages at the lowest price, to travel and
            learn and have fun all without worries and without stress. What are
            you waiting for, book a bright evening, a trip to beautiful Tuscany
            or a personal tour for you!
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-orange-500">20+</h4>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-orange-500">100+</h4>
              <p className="text-sm text-gray-600">Happy Customer</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-orange-500">15+</h4>
              <p className="text-sm text-gray-600">Choice of Services</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-orange-500">10+</h4>
              <p className="text-sm text-gray-600">Professional Guides</p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-center items-center gap-6 py-[140px] bg-orange-300 p-6">
        {/* Birinchi karta */}
        <div className="bg-orange-200 p-6 rounded-2xl shadow-lg text-center w-full sm:w-60 h-40">
          <div className="flex flex-col items-center gap-4 h-full justify-center">
            <p className="text-lg font-semibold text-gray-800">
              Over 30 Years Of Experience
            </p>
          </div>
        </div>

        {/* Ikkinchi karta */}
        <div className="bg-orange-200 p-6 rounded-2xl shadow-lg text-center w-full sm:w-60 h-40">
          <div className="flex flex-col items-center gap-4 h-full justify-center">
            <p className="text-lg font-semibold text-gray-800">
              Over 30 Years Of Experience
            </p>
          </div>
        </div>

        {/* Uchinchi karta */}
        <div className="bg-orange-200 p-6 rounded-2xl shadow-lg text-center w-full sm:w-60 h-40">
          <div className="flex flex-col items-center gap-4 h-full justify-center">
            <p className="text-lg font-semibold text-gray-800">
              Expert Guides For You
            </p>
          </div>
        </div>

        {/* To'rtinchi karta */}
        <div className="bg-orange-200 p-6 rounded-2xl shadow-lg text-center w-full sm:w-60 h-40">
          <div className="flex flex-col items-center gap-4 h-full justify-center">
            <p className="text-lg font-semibold text-gray-800">
              Guaranteed fun at the best price!
            </p>
          </div>
        </div>
      </div>



      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-6">
          Happy Customers Says
        </h2>
        
        <Carousel className="p-6">
          <CarouselContent className="flex">
            <CarouselItem className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="p-6 border rounded-lg shadow-md flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
                <h3 className="text-lg font-medium">Lyod Gomez</h3>
                <p className="text-gray-600 text-center">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="p-6 border rounded-lg shadow-md flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
                <h3 className="text-lg font-medium">Lyod Gomez</h3>
                <p className="text-gray-600 text-center">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="p-6 border rounded-lg shadow-md flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
                <h3 className="text-lg font-medium">Lyod Gomez</h3>
                <p className="text-gray-600 text-center">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>


      </div>
    </div>
  );
};

export default About;
