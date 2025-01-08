'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const throttle = (func: { (): void; apply?: any; }, limit: number) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }, 100); 

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`flex items-center justify-between bg-[#B22234] transition-all duration-200 ${isScrolled ? "p-2 pt-2 pb-2" : "p-2 pt-2 pb-2"} shadow-md border-b-2 border-[#1D4E89] sticky top-0 z-50`}>
            <div className={`flex justify-around flex-1 text-lg space-x-6 ${isScrolled ? "text-lg" : ""}`}>
                <Link href="/" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">HOME</Link>
                <Link href="/food" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">FOOD</Link>
                <Link href="/prices" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">PRICES</Link>
            </div>

            <div className={`flex justify-center flex-shrink-0 transition-transform duration-200 transform ${isScrolled ? "scale-75" : "scale-100"} will-change-transform`}>
                <a href="/">
                    <img
                        src="/images/logo2.png"
                        alt="Logo"
                        className="object-contain"
                        width={300} 
                        height={45}
                    />
                </a>
            </div>

            <div className={`flex justify-around flex-1 text-lg space-x-6 ${isScrolled ? "text-lg" : ""}`}>
                <Link href="/order" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">ORDER</Link>
                <Link href="/contact" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">CONTACT</Link>
                <Link href="/about" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;