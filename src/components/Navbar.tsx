import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
              Niwahana Lake View
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-600 transition-colors duration-300 font-medium`}>
                Home
              </a>
              <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-600 transition-colors duration-300 font-medium`}>
                About
              </a>
              <a href="#rooms" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-600 transition-colors duration-300 font-medium`}>
                Rooms
              </a>
              <a href="#amenities" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-600 transition-colors duration-300 font-medium`}>
                Amenities
              </a>
              <a href="#gallery" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-600 transition-colors duration-300 font-medium`}>
                Gallery
              </a>
              <a href="#contact" className={`${isScrolled ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-800'} px-4 py-2 rounded-md font-medium hover:bg-emerald-600 hover:text-white transition-colors duration-300`}>
                Book Now
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-700' : 'text-white'} inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-emerald-700 focus:outline-none`}>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-emerald-700">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-emerald-700">
              About
            </a>
            <a href="#rooms" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-emerald-700">
              Rooms
            </a>
            <a href="#amenities" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-emerald-700">
              Amenities
            </a>
            <a href="#gallery" className="block px-3 py-2 rounded-md text-gray-700 hover:text-white hover:bg-emerald-700">
              Gallery
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-white bg-emerald-700 hover:bg-emerald-600">
              Book Now
            </a>
          </div>
        </div>}
    </nav>;
}