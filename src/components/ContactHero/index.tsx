import React from 'react';
import { FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12"> 
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8"> 
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex"> 
          <div className="md:w-1/2 p-8 md:p-12">
          <div className="bg-[#B22234] rounded-lg p-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get in Touch
            </h1>
          </div>
            <p className="text-gray-700 mb-6 leading-relaxed"> 
              We'd love to hear from you! Follow us on social media or contact us using the information below.
            </p>
            <div className="space-y-6"> 
              <div>
                <h3 className="text-lg font-semibold text-[#1D4E89] mb-2">Social Media</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.instagram.com/recoscnw/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-[#1D4E89] transition">
                      <FaInstagram className="w-5 h-5 mr-2" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/discover/reco-chicken-waffle-stockholm" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-[#1D4E89] transition">
                      <FaTiktok className="w-5 h-5 mr-2" /> TikTok
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D4E89] mb-2">Contact Information</h3>
                <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                <a href="tel:086400271" className="flex items-center text-gray-700 hover:text-[#1D4E89] transition">
                  <FaPhone className="w-5 h-5 mr-2" /> 08 64 00 271
                </a>
              </li>
              <li className="flex items-center text-gray-700">
                <a href="mailto:info@recoschickenandwaffles.com" className="flex items-center text-gray-700 hover:text-[#1D4E89] transition"> 
                  <FaEnvelope className="w-5 h-5 mr-2" /> info@recoschickenandwaffles.com
                </a>
              </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D4E89] mb-2">Opening Hours</h3>
                <div className="text-gray-700"> 
                  <p>Monday - Tuesday: CLOSED</p>
                  <p>Wednesday - Thursday: 11:00 AM - 6:00 PM</p>
                  <p>Friday: 11:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative"> 
            <div className="absolute inset-0 bg-[#1D4E89] bg-cover bg-center rounded-r-2xl shadow-inner" style={{ backgroundImage: "url('/images/logo.webp')" }}></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;