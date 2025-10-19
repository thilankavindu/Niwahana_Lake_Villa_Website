import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <img
          src="/lake04.jpg"
          alt="Lake"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Niwahana Lake View
          </h1>

          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl">
            Experience tranquility and natural beauty at our exclusive lakeside villa
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#rooms"
              className="bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-600 transition-colors duration-300"
            >
              Explore Rooms
            </a>

            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-emerald-800 transition-colors duration-300"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      {/* Featured Location View */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Breathtaking Surroundings
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Nestled in the heart of Sri Lanka's scenic highlands, our villa
                offers spectacular views of lush tea plantations, serene lakes,
                and majestic mountains.
              </p>
              <p className="text-lg text-gray-700">
                Immerse yourself in the tranquil beauty of nature while enjoying
                all the comforts of our luxurious accommodation. The perfect
                destination for nature lovers and those seeking peace away from
                city life.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lake04.jpg"
                alt="Scenic view of lake and mountains surrounding Niwahana Lake View"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
