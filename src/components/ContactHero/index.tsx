import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen mt-24 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-5xl w-full ">
        <div className="p-8 md:p-12 relative z-10 border-2 border-[#B22234] rounded-md">
          <h1 className="text-6xl font-semibold text-[#1D4E89] mb-6">Get in Touch</h1>
          <p className="text-[#1D4E89] pb-4 font-light">
            Follow us on our social platforms or reach out through our contact details below
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/recoscnw/"
                className="flex items-center text-gray-900 hover:text-red-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 mr-2" />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/discover/reco-chicken-waffle-stockholm"
                className="flex items-center text-gray-900 hover:text-red-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/tiktok.svg" alt="TikTok" className="w-6 h-6 mr-2" />
                TikTok
              </a>
            </div>
            <div>
              <p className="text-[#B22234]">
                <strong>Phone:</strong> 08 64 00 271
              </p>
              <p className="text-[#B22234]">
                <strong>Email:</strong> info@recoschickenandwaffles.com
              </p>
              <p className="text-[#B22234]">
                <strong>Location:</strong> Stockholm, Sweden
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#1D4E89]">Opening Hours</h3>
              <p className="text-[#B22234]">
                Monday - Friday: 10:00 AM - 8:00 PM
                <br />
                Saturday - Sunday: 11:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute bg-[#1D4E89] transform -translate-y-2/3 right-0 md:w-1/2 w-full h-80 bg-cover bg-center rounded-xl shadow-lg"
          style={{
            backgroundImage: "url('/images/logo.webp')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
