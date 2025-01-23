import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="bg-[#F8F9FA] flex flex-col items-center justify-center min-h-screen">
        <div className="flex w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-2/3">
            {/* Social Media Section */}
            <h2 className="text-5xl font-semibold text-center mb-4">
              Our Socials!
            </h2>
            <div className="flex flex-col space-y-4 justify-center items-start">
              <a
                href="https://www.instagram.com/recoscnw/"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/discover/reco-chicken-waffle-stockholm"
                className="hover:underline"
              >
                TikTok
              </a>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              <span className="cursor-pointer">Phone: 08 64 00 271</span>
              <br />
              <span className="cursor-pointer">info@recoschickenandwaffles.com</span>
              <br />
              <span>Based in Stockholm, Sweden</span>
            </p>

            Contact Form 

             Map Integration (Consider using Google Maps extension) 
            <p>
              Opening Hours:
              <br />
              Monday - Friday: 10:00 AM - 8:00 PM
              <br />
              Saturday - Sunday: 11:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;