const Footer = () => {
    return (
        <footer className="text-white py-8 text-sm bg-[#1D4E89]">
            <div className="container mx-auto px-6 text-center rounded-xl">
                <div className="mb-6">
                <div className="flex justify-center -mb-10 pl-16 bg-transparent text-lg rotate-12">
                    <a
                        href="https://www.foodora.se/restaurant/g24m/recos-chicken-and-waffles" 
                        className="order-link"
                    >
                        Order!
                    </a>
                </div>
                    <a href="/" className="flex justify-center">
                        <img 
                            src="/images/logo.webp" 
                            alt="Reco's Chicken and Waffles Logo" 
                            width={220} 
                            height={75} 
                        />
                    </a>
                    <p className="text-sm text-gray-300 mt-2 max-w-xs mx-auto">Your new favorite American all day brunch spot in Stockholm!</p>
                </div>


                <div className="flex justify-center space-x-12 mb-6">
                    <div className="text-center">
                        <p className="text-sm text-gray-300">Address: Bondegatan 13, 116 23 Stockholm</p>
                        <p className="text-sm text-gray-300">Phone: 08 640 02 71</p>
                    </div>
                </div>

                <div className="border-t-2 border-[#1D4E89] pt-4 pb-4">
                    <div className="flex justify-center space-x-4 mb-4">
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