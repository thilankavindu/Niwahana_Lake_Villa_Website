import React, { memo } from 'react';
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            About Niwahana Lake View
          </h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Nestled in the serene landscapes with breathtaking views of the
              lake and surrounding mountains, Niwahana Lake View offers a
              perfect retreat for those seeking peace and natural beauty.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our villa combines rustic charm with modern comforts, providing a
              unique experience that connects you with nature while enjoying the
              conveniences of contemporary living.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking for a romantic getaway, a family vacation,
              or a peaceful solo retreat, Niwahana Lake View provides the ideal
              setting for creating unforgettable memories.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="/WhatsApp_Image_2025-10-14_at_15.03.59.jpg" alt="Niwahana Lake View" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
}