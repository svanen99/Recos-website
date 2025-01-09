'use client';
import Link from 'next/link';
import Image from 'next/image';

const Opening = () => {
    return (
        <div className="bg-gradient-to-b p-6 lg:p-12 shadow-xl">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-0">
                <div className="relative flex flex-col items-center justify-center w-96 h-96 rounded-full border-4 border-white shadow-xl mx-auto lg:mx-0 bg-[#1D4E89]">
                    <div className="absolute top-[20px] px-10 py-3 bg-white text-black font-bold text-2xl tracking-wide rounded shadow-lg border-2 border-black ">
                        OPENING HOURS
                    </div>
                    <ul className="text-white text-center space-y-4 text-lg mt-5">
                        <li>
                            <span className="font-bold">MON - TUE</span> CLOSED
                        </li>
                        <li>
                            <span className="font-bold">WED - THU </span> 11:00AM - 6:00PM
                        </li>
                        <li>
                            <span className="font-bold">FRI</span> 11:00AM - 5:00PM
                        </li>
                        <li>
                            <span className="font-bold">SAT</span> 9:00AM - 5:00PM
                        </li>
                        <li>
                            <span className="font-bold">SUN</span> 10:00AM - 6:00PM
                        </li>
                    </ul>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-center text-2xl text-[#F8F9FA]">You Find Us Here:</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.1911096014876!2d18.079019499999998!3d59.313065699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f7587900a3%3A0xc571e2c887854a10!2sBondegatan%2013%2C%20116%2023%20Stockholm!5e0!3m2!1ssv!2sse!4v1730559062483!5m2!1ssv!2sse"
                    className="w-full h-96 rounded-lg border-2 border-gray-200 shadow-lg"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Opening;
