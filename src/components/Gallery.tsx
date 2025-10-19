import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [{
    src: "/WhatsApp_Image_2025-10-14_at_15.03.59.jpg",
    alt: 'Lake view with mountains'
  }, {
    src: "/WhatsApp_Image_2025-10-14_at_15.03.43.jpg",
    alt: 'Attic room with wooden beams'
  }, {
    src: "/WhatsApp_Image_2025-10-14_at_15.03.40.jpg",
    alt: 'Modern bathroom'
  }, {
    src: "/WhatsApp_Image_2025-10-14_at_15.03.36_-_Copy.jpg",
    alt: 'Cozy bedroom with wooden interior'
  }, {
    src: "/WhatsApp_Image_2025-10-14_at_15.03.39.jpg",
    alt: 'Living area with green floor'
  }];
  return <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Take a visual tour of our beautiful villa and its surroundings
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:transform hover:scale-105" onClick={() => setSelectedImage(image.src)}>
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
            </div>)}
        </div>
      </div>
      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl w-full">
            <button className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70" onClick={() => setSelectedImage(null)}>
              <XIcon className="w-6 h-6" />
            </button>
            <img src={selectedImage} alt="Gallery preview" className="w-full h-auto max-h-[80vh] object-contain" />
          </div>
        </div>}
    </section>;
}