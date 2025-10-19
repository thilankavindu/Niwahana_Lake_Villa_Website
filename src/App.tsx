import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>;
}