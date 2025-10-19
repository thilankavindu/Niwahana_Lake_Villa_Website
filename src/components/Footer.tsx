import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Niwahana Lake View</h3>
            <p className="text-gray-400 mb-4">
              Experience tranquility and natural beauty at our exclusive
              lakeside villa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Lake View Road,</p>
              <p className="mb-2">Scenic Valley,</p>
              <p className="mb-2">Sri Lanka</p>
              <p className="mb-2">Phone: +94 76 123 4567</p>
              <p className="mb-2">Email: info@niwahanalakeview.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Niwahana Lake View. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}