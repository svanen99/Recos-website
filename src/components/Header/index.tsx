import Link from "next/link";

const Header = () => {
    return (
        <div className="flex items-center justify-between bg-[#B22234] p-4 shadow-md">
            <div className="flex justify-around flex-1 text-lg space-x-6">
                <Link href="/" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">HOME</Link>
                <Link href="/food" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">FOOD</Link>
                <Link href="/prices" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">PRICES</Link>
            </div>
            <div className="flex justify-center flex-shrink-0 transition-transform duration-300 transform hover:scale-110">
                <a href="/">
                    <img 
                        src="/images/logo2.png" 
                        alt="Logo" 
                        className="object-contain"
                        width={250}
                        height={45}
                    />
                </a>
            </div>
            <div className="flex justify-around flex-1 text-lg space-x-6">
                <Link href="/order" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">ORDER</Link>
                <Link href="/contact" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">CONTACT</Link>
                <Link href="/about" className="text-[#F8F9FA] hover:text-[#1E3A8A] transition-colors ease-in-out duration-300">ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;
