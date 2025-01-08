const Footer = () => {
    return (
        <footer className="text-white py-12 mt-16 text-sm">
            <div className="container mx-auto px-6 text-center rounded-xl max-w-90%">
                <div className="mb-8 border-t-2 border-[#1D4E89]">
                    <a href="/" className="flex justify-center">
                        <img 
                            src="/images/logo.webp" 
                            alt="Reco's Chicken and Waffles Logo" 
                            width={180} 
                            height={75} 
                        />
                    </a>
                    <p className="text-sm text-gray-300 mt-2">Your new favorite American all day brunch spot right in the heart of Stockholm!</p>
                </div>
                <div className="flex justify-center space-x-8 mb-8 text-xl">
                    <a
                        href="https://www.foodora.se/restaurant/g24m/recos-chicken-and-waffles" 
                        className="order-link"
                    >
                        Order!
                    </a>
                </div>
                <div className="flex justify-center space-x-12 mb-8">
                    <div className="text-center">
                        <p className="text-sm text-gray-300">Address: Reco's Chicken and Waffles, Bondegatan 13, 116 23 Stockholm, Sweden</p>
                        <p className="text-sm text-gray-300">Phone: 08 640 02 71</p>
                    </div>
                </div>
                <div className="border-t-2 border-[#1D4E89] pt-6 pb-6">
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="https://www.instagram.com/explore/locations/343401515524376/recos-chicken-and-waffles/" className="text-xl hover:text-white">
                            <img src="/images/instag.png" alt="Instagram" width={24} height={24} />
                        </a>
                        <a href="https://www.tiktok.com/discover/reco-chicken-waffle-stockholm" className="text-xl">
                            <img className="fill-white" src="/images/tik-tok.png" alt="TikTok" width={24} height={24} />
                        </a>
                    </div>
                    <p className="text-sm text-white font-extralight">© 2025 Reco's Chicken and Waffles. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
