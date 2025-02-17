'use client';
import React, { useState } from 'react';

const StatusUpdate = () => {
  const [criteria, setCriteria] = useState({
    location: '',
    distance: '',
    rent: '',
    licence: '',
    opening: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };
  

  const handleSubmit = () => {
    const mailtoLink = `mailto:info@recoschickenandwaffles.com?subject=Tip%20for%20a%20location&body=Hi!%0D%0A%0D%0A
      Here is some info I have for you:%0D%0A%0D%0A
      - **Location name**: ${encodeURIComponent(criteria.location) || 'Not specified'}%0D%0A
      - **Distance from the city center**: ${encodeURIComponent(criteria.distance) || 'Not specified'} km%0D%0A
      - **Max rent**: ${encodeURIComponent(criteria.rent) || 'Not specified'} kr/month%0D%0A
      - **Alcohol license?**: ${encodeURIComponent(criteria.licence) || 'Not specified'}%0D%0A
      - **Flexible opening hours?**: ${encodeURIComponent(criteria.opening) || 'Not specified'}%0D%0A%0D%0A
      Please get in touch if you have more suggestions!%0D%0A%0D%0A
      Best regards,%0D%0A[Your Name]`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8">
      <section className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-10 border-[#B22234] border-2">
        <div className="flex flex-col items-center mb-8">
          <div className="">
            <img src="/images/destination.gif" alt="Reco's Chicken and Waffles Logo" className="h-32 w-auto mb-4 custom-img" />
          </div>

          <h1 className="text-5xl font-extrabold text-[#B22234] mb-6 p-4 border-2 border-[#B22234] rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            New Location Needed!
          </h1>
            <h2 className='text-xl'>Hello everyone! </h2>
          <p className="text-lg text-gray-600 text-left mt-4">
            <br />
            We’re looking for a new home for Reco’s Chicken and Waffles, and we’d love your help! 
            If you know of a location that meets the following criteria, please let us know:
          </p>
          <ul className="text-gray-600 text-sm mt-4 space-y-2 flex flex-col text-left">
            <li>- Close to the city center</li>
            <li>- Affordable rent</li>
            <li>- Alcohol license or possibility to acquire one</li>
            <li>- Flexible opening hours to serve our amazing customers</li>
          </ul>
          
          <p className="text-lg text-gray-600 text-left mt-4">
            Your input could make a huge difference. Let’s find the perfect spot together! ❤️
          </p>
        </div>

        <div className="space-y-6">
          {[
            { label: 'Location', type: 'text', name: 'location', placeholder: 'E.g., Downtown' },
            { label: 'Distance (km)', type: 'number', name: 'distance', placeholder: 'E.g., 3 km' },
            { label: 'Max Rent (kr/month)', type: 'number', name: 'rent', placeholder: 'E.g., 15000 kr' },
          ].map(({ label, type, name, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700" htmlFor={name}>{label}</label>
              <input
                id={name}
                type={type}
                name={name}
                value={criteria[name]}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
              />
            </div>
          ))}

          {[
            { label: 'Alcohol License', name: 'licence', options: ['Yes', 'No'] },
            { label: 'Flexible Opening Hours', name: 'opening', options: ['Yes', 'No'] },
          ].map(({ label, name, options }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700" htmlFor={name}>{label}</label>
              <select
                id={name}
                name={name}
                value={criteria[name]}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                {options.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full text-[#1D4E89] border-2 border-[#B22234] text-xl py-4 rounded-lg mt-6 hover:scale-105 focus:ring-2 transition-transform duration-200"
        >
          Send Your Tip!
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Thank you for contributing to our journey! 🐔🧇
        </p>
      </section>
    </div>
  );
};

export default StatusUpdate;
