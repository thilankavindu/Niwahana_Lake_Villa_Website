import React, { memo } from 'react';
import { FlameIcon,ShowerHeadIcon, UtensilsIcon, MountainIcon, CoffeeIcon, HeartPulseIcon } from 'lucide-react';
export function Amenities() {
  const amenities = [{
    icon: <MountainIcon className="w-8 h-8 text-emerald-700" />,
    title: 'Scenic Views',
    description: 'Enjoy breathtaking views of the lake and surrounding mountains from your accommodation.'
  }, {
    icon: <ShowerHeadIcon className="w-8 h-8 text-emerald-700" />,
    title: 'Modern Bathrooms',
    description: 'Clean, well-designed bathrooms with all essential amenities for your comfort.'
  }, {
    icon: <FlameIcon className="w-8 h-8 text-emerald-700" />,
    title: 'Hot Water',
    description: 'Reliable hot water available anytime for your comfort.'
  }, {
    icon: <UtensilsIcon className="w-8 h-8 text-emerald-700" />,
    title: 'Dining Options',
    description: 'Enjoy delicious local and international cuisine at our on-site dining facilities.'
  }, {
    icon: <CoffeeIcon className="w-8 h-8 text-emerald-700" />,
    title: 'Tea & Coffee',
    description: 'Complimentary tea and coffee making facilities available in all rooms.'
  }, {
    icon: <HeartPulseIcon className="w-8 h-8 text-emerald-700" />,
    title: 'Relaxation Areas',
    description: 'Multiple spaces designed for relaxation and enjoying the natural surroundings.'
  }];
  return <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Amenities & Services
          </h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            We provide a range of amenities and services to ensure your stay is
            comfortable, relaxing, and memorable.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-700">{amenity.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}