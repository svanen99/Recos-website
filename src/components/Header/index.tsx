'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const throttle = (func: () => void, limit: number) => {
    let lastRan: number | null = null;
    let timeout: NodeJS.Timeout | null = null;

    return () => {
        const now = Date.now();
        if (lastRan === null || now - lastRan >= limit) {
            func();
            lastRan = now;
        } else if (!timeout) {
            timeout = setTimeout(() => {
                func();
                lastRan = now;
                timeout = null;
            }, limit - (now - lastRan));
        }
    };
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); 

    useEffect(() => {
        const handleScroll = throttle(() => setIsScrolled(window.scrollY > 50), 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkClass = (linkPath: string) => {
        const isActive = pathname === linkPath || (pathname === '/' && linkPath === '/');
        return isActive
            ? 'text-[#F8F9FA] font-semibold'
            : 'text-[#F8F9FA] hover:text-[#F8F9FA] hover:font-semibold';
    };

    return (
        <div
            className={`flex items-center justify-between bg-[#B22234] shadow-md border-b-2 border-[#1D4E89] sticky top-0 z-50 
            transition-all duration-200 ${isScrolled ? 'py-1' : 'py-3'}`}
        >
            <nav className="flex flex-1 justify-around text-sm space-x-6">
                {['HOME', 'MENU', 'PRICES'].map((text, index) => {
                    const linkPath = text === 'HOME' ? '/' : (text === 'MENU' ? '/food' : `/${text.toLowerCase()}`);
                    return (
                        <Link
                            key={index}
                            href={linkPath}
                            className={`group relative ${getLinkClass(linkPath)} transition-colors duration-300`}
                        >
                            {text}
                            <span
                                className={`absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#1E3A8A] transition-all duration-300 
                                group-hover:w-full ${pathname === linkPath ? 'w-full' : ''}`}
                            ></span>
                        </Link>
                    );
                })}
            </nav>
            <div
                className={`flex flex-shrink-0 justify-center transform transition-transform duration-300 ${
                    isScrolled ? 'scale-75' : 'scale-100'
                }`}
            >
                <a href="/" className="logo-container">
                    <img
                        src="/images/logo2.png"
                        alt="Logo"
                        className="object-contain hover:rotate-12 transition-transform duration-300"
                        width={200}
                        height={45}
                    />
                </a>
            </div>
            <nav className="flex flex-1 justify-around text-sm space-x-6">
                {['ABOUT', 'CONTACT', 'UPDATE'].map((text, index) => {
                    const linkPath = `/${text.toLowerCase()}`;
                    return (
                        <Link
                            key={index}
                            href={linkPath}
                            className={`group relative ${getLinkClass(linkPath)} transition-colors duration-300`}
                        >
                            {text}
                            <span
                                className={`absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#1E3A8A] transition-all duration-300 
                                group-hover:w-full ${pathname === linkPath ? 'w-full' : ''}`}
                            ></span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default Header;