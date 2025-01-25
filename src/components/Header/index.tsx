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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`bg-[#B22234] text-white sticky top-0 z-50 shadow-md transition-all duration-200 ${
                isScrolled ? 'py-1' : 'py-3'
            }`}
        >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-4">
                {/* Left Navigation */}
                <nav className="flex flex-1 justify-around text-sm space-x-6">
                    {['HOME', 'MENU', 'PRICES'].map((text, index) => {
                        const linkPath =
                            text === 'HOME' ? '/' : text === 'MENU' ? '/food' : `/${text.toLowerCase()}`;
                        return (
                            <Link
                                key={index}
                                href={linkPath}
                                className={`group relative ${getLinkClass(linkPath)} transition-colors duration-300`}
                            >
                                {text}
                                <span
                                    className={`absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#1E3A8A] transition-all duration-300 group-hover:w-full ${
                                        pathname === linkPath ? 'w-full' : ''
                                    }`}
                                ></span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logo */}
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

                {/* Right Navigation */}
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
                                    className={`absolute left-0 bottom-[-3px] h-[2px] w-0 bg-[#1E3A8A] transition-all duration-300 group-hover:w-full ${
                                        pathname === linkPath ? 'w-full' : ''
                                    }`}
                                ></span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center justify-between px-4 py-3">
                <a href="/" className="logo-container">
                    <img
                        src="/images/logo2.png"
                        alt="Logo"
                        className="object-contain"
                        width={120}
                        height={30}
                    />
                </a>
                <button
                    onClick={toggleMenu}
                    className="flex flex-col space-y-1 focus:outline-none z-50"
                    aria-label="Toggle Menu"
                >
                    <span
                        className={`block h-[3px] w-6 bg-white rounded transform transition-transform ${
                            isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                        }`}
                    ></span>
                    <span
                        className={`block h-[3px] w-6 bg-white rounded transition-opacity ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span
                        className={`block h-[3px] w-6 bg-white rounded transform transition-transform ${
                            isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 bg-white text-[#1E3A8A] w-[90%] rounded-lg shadow-lg p-6 z-40">
                    <nav className="flex flex-col items-center space-y-4">
                        {['HOME', 'MENU', 'PRICES', 'ABOUT', 'CONTACT', 'UPDATE'].map((text, index) => {
                            const linkPath =
                                text === 'HOME' ? '/' : text === 'MENU' ? '/food' : `/${text.toLowerCase()}`;
                            return (
                                <Link
                                    key={index}
                                    href={linkPath}
                                    className="text-lg font-semibold hover:text-[#B22234] transition"
                                    onClick={closeMenu}
                                >
                                    {text}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
