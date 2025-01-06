'use client'
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="p-8 ">
            <div className="flex justify-around cursor-pointer">
                <div className="flex space-x-4 font-Montserrat text-xl">
                    <Link href="/" className="text-[#F8F9FA]">HOME</Link>
                    <Link href="/food" className="text-[#F8F9FA]">FOOD</Link>
                    <Link href="/prices" className="text-[#F8F9FA]">PRICES</Link>
                </div>
                <div className="flex space-x-4 font-Montserrat text-xl">
                    <Link href="/order" className="text-[#F8F9FA]">ORDER</Link>
                    <Link href="/contact" className="text-[#F8F9FA]">CONTACT</Link>
                    <Link href="/about" className="text-[#F8F9FA]">ABOUT</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
