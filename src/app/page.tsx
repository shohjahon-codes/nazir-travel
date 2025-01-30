import GetTurs from "@/components/getTurs";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="-mt-[80px] -z-50 bg-hero bg-center bg-cover bg-no-repeat w-full h-auto">
      <Hero />
      <div className="container">
        <GetTurs />
      </div>
      <div className="flex flex-wrap items-center justify-between container mt-20 mx-auto px-4">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 justify-center md:justify-start flex mb-6 md:mb-0">
          <Image src="/girl1.png" alt="girl1" width={400} height={300} />
        </div>
        {/* Right Content Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 font-bold">
          <p className="text-[#333333] text-center md:text-left">
            WELCOME TO OUR SITE!
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            We are the best company for your visit
          </h1>
          <p className="text-[#333333] text-sm md:text-base text-center md:text-left">
            After decades of experience, and a whole life in Lucca, we offer you
            the most complete tourism service in the city. In addition to having
            bikes and rickshaws to have as much fun as you want, you have the
            choice of tour guides with whom to tour and drivers for your every
            need! We offer packages in the way that you get the most at the
            lowest price. Book with us and we will always be available for you!
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <div className="text-center">
              <h3 className="text-[#FA8B02] text-3xl font-bold">20+</h3>
              <p className="text-[#333333] text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#FA8B02] text-3xl font-bold">100+</h3>
              <p className="text-[#333333] text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#FA8B02] text-3xl font-bold">15+</h3>
              <p className="text-[#333333] text-sm">Choice of Services</p>
            </div>
            <div className="text-center">
              <h3 className="text-[#FA8B02] text-3xl font-bold">10+</h3>
              <p className="text-[#333333] text-sm">Professional Guides</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-300 to-orange-500 flex justify-center items-center py-12 mt-72 relative h-[500px] md:h-[400px]">
        <div className="container flex flex-wrap md:flex-nowrap items-center justify-between gap-8 px-4 relative">
          {/* Left Section */}
          <div className="bg-[#FFFFFF4D] p-12 rounded-2xl shadow-lg w-full md:w-[540px] flex flex-col justify-center items-center text-center z-30 relative">
            <h2 className="text-4xl font-bold text-gray-800">
              Get Special Offers for Organizations
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button className="bg-orange-500 text-white mt-6 py-2 px-6 rounded-lg hover:bg-orange-600 transition-all">
              Contact Us
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute bottom-[30px] md:bottom-[-200px] z-20">
              <Image src="/girl2.png" alt="girl2" width={400} height={300} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <GetTurs />
      </div>
      <div className="bg-gradient-to-r from-orange-300 to-orange-500 py-16  justify- items-center mt-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
          {/* Left Form Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Book Now Bike
              </h2>
              <Card className="w-full p-8 rounded-xl shadow-lg bg-[#FFFFFF4D]">
                <CardContent className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name and Surname */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name and Surname</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name and surname"
                        className="bg-white"
                      />
                    </div>
                    {/* Email Address */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        placeholder="Enter your email address"
                        className="bg-white"
                      />
                    </div>
                    {/* Telephone Number */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Telephone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your telephone number"
                        className="bg-white"
                      />
                    </div>
                    {/* Service Type */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="service">Service Type</Label>
                      <Select>
                        <SelectTrigger
                          id="service"
                          aria-label="Service Type"
                          className="bg-white text-gray-400"
                        >
                          <SelectValue
                            placeholder="Select the service types"
                            className="text-gray-400"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-400">
                          <SelectItem value="repair">Repair</SelectItem>
                          <SelectItem value="rental">Rental</SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Date */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        placeholder="Select the date"
                        className="bg-white text-gray-400"
                      />
                    </div>
                    {/* Time */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        type="time"
                        placeholder="Select the time"
                        className="bg-white text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Right Image Section */}
          <div className="flex justify-center items-center w-full md:w-[843px]">
            <img
              src="/bike.png"
              alt="bike"
              className="w-full max-w-sm md:max-w-md lg:max-w-3xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
