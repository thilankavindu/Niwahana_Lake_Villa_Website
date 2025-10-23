import React from 'react';
export function Rooms() {
  const villaFeatures = [{
    name: 'Loft Sleeping Area',
    description: 'Cozy attic space with 4 comfortable beds under wooden beams, perfect for families or groups.',
    image: "/WhatsApp_Image_2025-10-14_at_15.03.43.jpg",
    features: ['4 comfortable beds', 'Wooden beam ceiling', 'Warm lighting', 'Rustic charm']
  }, {
    name: 'Living Space',
    description: 'Bright and airy lounge area with comfortable seating and large windows overlooking the lake.',
    image: "/WhatsApp_Image_2025-10-14_at_15.03.39.jpg",
    features: ['Comfortable seating', 'Bright space', 'Large windows', 'Perfect for relaxation']
  }, {
    name: 'Lake View Area',
    description: 'Beautiful space with large windows offering stunning views of the lake and surrounding mountains.',
    image: "/WhatsApp_Image_2025-10-14_at_15.03.36_-_Copy.jpg",
    features: ['Panoramic views', 'Natural lighting', 'Warm atmosphere', 'Rustic design']
  }];
  return <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Villa Accommodation
          </h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Niwahana Lake View is a single villa that comfortably accommodates
            groups or families with a spacious 4-bed loft area in the upper
            section and beautiful common spaces throughout.
          </p>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-12 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Villa Rental
              </h3>
              <p className="text-gray-700 mb-6">
                Niwahana Lake View offers the entire villa for your exclusive
                use. The property features a charming loft area with 4 beds in
                the upper section, along with comfortable living spaces, all
                designed to provide a peaceful retreat surrounded by nature.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                <li className="text-gray-700 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full mr-2"></span>
                  Sleeps up to 8 guests
                </li>
                <li className="text-gray-700 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full mr-2"></span>
                  Private villa
                </li>
                <li className="text-gray-700 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full mr-2"></span>
                  Full kitchen access
                </li>
                <li className="text-gray-700 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full mr-2"></span>
                  Panoramic lake views
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-600 transition-colors duration-300">
                Book the Villa Contact Us
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/WhatsApp_Image_2025-10-14_at_15.03.43.jpg" alt="Niwahana Lake View Villa" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Villa Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villaFeatures.map((feature, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <img src={feature.image} alt={feature.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Features:
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {feature.features.map((item, idx) => <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full mr-2"></span>
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}