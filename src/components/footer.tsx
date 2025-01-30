import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <h2 className="text-orange-400 text-xl font-semibold">
            Hours in Tuscany
          </h2>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Bike and Rickshaw rental</li>
            <li>Guided Tours of Lucca</li>
            <li>Guided Bike Tour of Lucca</li>
            <li>Trip In The Tuscan Hills</li>
            <li>Transportation With Luxury Cars</li>
            <li>Wine Tours By Bus With Guide</li>
          </ul>
        </div>

        {/* Help */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contacts & Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Contacts</h3>
          <ul className="space-y-2">
            <li>📍 Piazza Napoleone, Lucca, Tuscany</li>
            <li>📞 +39 346 368 5708</li>
            <li>📧 italianlimo@gmail.com</li>
          </ul>

          {/* Social Media */}
        </div>
        <div className="text-center mt-[-20px] md:text-left">
          <h3 className="text-lg font-semibold mt-6 mb-3">Social Media</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-orange-500" />
            <Twitter className="w-6 h-6 cursor-pointer hover:text-orange-500" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-orange-500" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        Copyright © 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
