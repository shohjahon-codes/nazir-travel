import React from "react";

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 container">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our team cares about your full relax
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          View our Tour Packages
        </button>
      </div>
    </div>
  );
}
