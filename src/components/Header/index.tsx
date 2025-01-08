import Link from "next/link";

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex justify-around space-x-4 flex-1 text-xl">
                <Link href="/" className="text-[#F8F9FA]">HOME</Link>
                <Link href="/food" className="text-[#F8F9FA]">FOOD</Link>
                <Link href="/prices" className="text-[#F8F9FA]">PRICES</Link>
            </div>
            <div className="flex justify-center flex-shrink-0 animate-pulse">
                <a href="/">
                    <img 
                        src="/images/logo2.png" 
                        alt="Logo" 
                        width={400} 
                        height={150} 
                    />
                </a>
            </div>
            <div className="flex justify-around space-x-4 flex-1 text-xl">
                <Link href="/order" className="text-[#F8F9FA]">ORDER</Link>
                <Link href="/contact" className="text-[#F8F9FA]">CONTACT</Link>
                <Link href="/about" className="text-[#F8F9FA]">ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;
