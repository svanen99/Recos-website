'use client'
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D4E89] py-12 text-white text-sm md:text-base border-t-2 border-[#B22234]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        <div className="text-gray-300 text-center">
          <p>Bondegatan 13, 116 23 Stockholm</p>
          <p>08 640 02 71</p>
        </div>
        <div className="flex flex-col items-start md:items-center">
          <a href="/" className="flex justify-center mb-4">
            <img src="/images/logo.webp" alt="Reco's Logo" width={180} height={60} />
          </a>
          <p className="font-medium text-center md:text-center">Your new favorite American all day brunch spot right in the heart of Stockholm! </p>
        </div>
        <div className="flex justify-center md:justify-end space-x-6">
          <a href="https://www.instagram.com/explore/locations/343401515524376/recos-chicken-and-waffles/" className="hover:text-[#B22234] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.tiktok.com/@recoschickenandwaffles" className="hover:text-[#B22234] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/tik-tok.png"
            alt="TikTok Logo"
            width="28"
            height="28"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
        </div>
      </div>
      <div className="pt-6 mt-6 text-center text-gray-300">
      <p>© 2025 Reco's Chicken and Waffles. All rights reserved.</p>
      </div>
       {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#B22234] text-white p-3 rounded-full hover:bg-[#911827] transition-colors duration-300 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;