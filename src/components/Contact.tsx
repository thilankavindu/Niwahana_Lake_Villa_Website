import React, { useEffect, useState, createElement } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon, LoaderIcon, AlertCircleIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // EmailJS configuration
  // Note: In a real application, you would need to sign up for EmailJS and replace these with your actual service ID, template ID, and public key
  const emailjsServiceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
  const emailjsTemplateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID
  const emailjsPublicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
  useEffect(() => {
    // Check if user came from booking button
    const hash = window.location.hash;
    if (hash === '#contact-booking') {
      setIsBooking(true);
      setFormData(prev => ({
        ...prev,
        subject: 'Villa Booking Inquiry'
      }));
    }
  }, []);
  const handleInputChange = e => {
    const {
      id,
      value
    } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        is_booking: isBooking ? 'Yes' : 'No'
      };
      // Send email using EmailJS
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsPublicKey);
      // Show success message
      setFormSubmitted(true);
      console.log('Form submitted successfully:', formData);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        if (isBooking) {
          setIsBooking(false);
          window.location.hash = '#contact';
        }
      }, 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send your message. Please try again or contact us directly by phone.');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // Initialize the map after component mounts
    const initMap = () => {
      if (!window.L) return;
      // Create map
      const map = window.L.map('location-map').setView([6.9510004, 80.7828533], 15);
      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      // Add marker for villa location
      window.L.marker([6.9510004, 80.7828533]).addTo(map).bindPopup('Niwahana Lake View').openPopup();
    };
    // Load Leaflet CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    linkElement.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    linkElement.crossOrigin = '';
    document.head.appendChild(linkElement);
    // Load Leaflet JS
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    scriptElement.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    scriptElement.crossOrigin = '';
    scriptElement.onload = initMap;
    document.body.appendChild(scriptElement);
    // Cleanup function
    return () => {
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement);
      }
      if (document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);
  return <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Contact Information
          </h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Ready to experience the tranquility of Niwahana Lake View? Contact
            us for bookings or inquiries.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {isBooking ? 'Book the Villa' : 'Send us a Message'}
            </h3>
            {formSubmitted ? <div className="text-center py-8">
                <CheckCircleIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-700">
                  Your {isBooking ? 'booking request' : 'message'} has been sent
                  successfully. We'll get back to you shortly.
                </p>
              </div> : <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" required disabled={isLoading} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your email" required disabled={isLoading} />
                  </div>
                </div>
                <div> */}
                  {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your phone number" required disabled={isLoading} />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input type="text" id="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Subject" required disabled={isLoading} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea id="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder={isBooking ? 'Please include your preferred dates and number of guests' : 'Your message'} required disabled={isLoading}></textarea>
                </div>
                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                    <AlertCircleIcon className="w-5 h-5 mr-2 mt-0.5" />
                    <span>{error}</span>
                  </div>}
                <div>
                  <button type="submit" className="w-full bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-600 transition-colors duration-300 flex justify-center items-center" disabled={isLoading}>
                    {isLoading ? <>
                        <LoaderIcon className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Sending...
                      </> : isBooking ? 'Send Booking Request' : 'Send Message'}
                  </button>
                </div>
              </form>}
          </div> */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-emerald-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-700">
                      Niwahana Lake View, Scenic Valley, Sri Lanka
                    </p>
                    <p className="text-gray-700 text-sm">
                      Coordinates: 6.9510004, 80.7828533
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-emerald-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-700">+94 76 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-emerald-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-700">info@niwahanalakeview.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-emerald-700 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Check-in/Check-out
                    </h4>
                    <p className="text-gray-700">
                      Check-in: 2:00 PM
                      <br />
                      Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Location
              </h3>
              <div id="location-map" className="h-64 rounded-lg overflow-hidden" style={{
              position: 'relative'
            }}>
                {/* Map will be loaded here */}
              </div>
              <div className="mt-4 text-center">
                <a href="https://www.google.com/maps/place//@6.951067,80.7815444,18z/data=!4m6!1m5!3m4!2zNsKwNTcnMDMuNiJOIDgwwrA0Nic1OC4zIkU!8m2!3d6.9510004!4d80.7828533?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" className="inline-block text-emerald-700 hover:text-emerald-600 underline font-medium">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>;
}