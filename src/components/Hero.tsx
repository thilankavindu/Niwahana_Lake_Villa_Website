import React from 'react';
export function Hero() {
  return <section id="home" className="relative">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        
        // backgroundImage: "url('https://www.google.com/search?sca_esv=cab15efa20973062&sxsrf=AE3TifM-1JDVA9z8ftuxYs6q2v5OtSnjqQ:1760855923287&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2aTtVSqS-8espAxkq1fZ3U9sIRL69zKeuDirhjMa-1E_d5o-j4SRKpcxWLkUePm2sYa7NcDbS4r7P9cWLlu6mtGTKoxS2uSejvODUwNxfsq0WBtF4Pw8Ysv53cPXg4POw7-yVTA&q=gregory+lake&sa=X&ved=2ahUKEwjgoLu-06-QAxVhTGwGHRgKMhkQtKgLegQIFxAB&biw=1366&bih=581&dpr=1#vhid=VUD35kY1pFVBxM&vssid=mosaic')"
        // backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/uknjW9kRHZp5CUam7arwq1/image.png')"
      }}>
        <img src="/lake04.jpg" alt="Scenic view of lake and mountains surrounding Niwahana Lake View" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Niwahana Lake View
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Experience tranquility and natural beauty at our exclusive
              lakeside villa
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#rooms" className="bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-600 transition-colors duration-300">
                Explore Rooms
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-emerald-800 transition-colors duration-300">
                Book Your Stay
              </a>
            </div>
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
              <img src="/lake04.jpg" alt="Scenic view of lake and mountains surrounding Niwahana Lake View" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}