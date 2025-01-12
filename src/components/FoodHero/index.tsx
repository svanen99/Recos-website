'use client';
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FoodHero = () => {
    const menuItems = [
        { src: "/images/american.png", alt: "Dish 1", title: "American Pancakes", price: "70kr", description: "Fluffy pancakes served with maple syrup and a side of fresh berries." },
        { src: "/images/chic-waff.png", alt: "Dish 2", title: "Chicken & Waffle", price: "140kr", description: "Crispy fried chicken served on top of a fluffy waffle served with a side of maple syrup and bbq sauce." },
        { src: "/images/swe-waff.png", alt: "Dish 3", title: "Swedish Waffle", price: "65kr", description: "Classic Swedish-style waffle topped with berries, powdered sugar and served with a dollop of whipped cream and maple syrup." },
        { src: "/images/chich-sall.png", alt: "Dish 4", title: "Chicken Salad", price: "140kr", description: "Fresh salad topped with juicy fried chicken, crisp greens, tomatoes, and cucumbers, served with a side of vinaigrette." },
        { src: "/images/tenders.png", alt: "Dish 5", title: "Chicken Tenders", price: "75kr", description: "Golden, crispy chicken tenders, normally served with bbq sauce or sauce of your choice for extra flavour." },
        { src: "/images/scramble.png", alt: "Dish 6", title: "Eggs & Toast", price: "75kr", description: "Perfectly scrambled eggs paired with buttered toast and butter." },
        { src: "/images/mac.png", alt: "Dish 7", title: "Mac & Cheese", price: "50kr", description: "Rich and creamy macaroni and cheese topped with a crunchy breadcrumb crust." },
        { src: "/images/cauli.png", alt: "Dish 8", title: "Deep Fried Cauliflower", price: "70kr", description: "Crispy battered cauliflower with a hint of spice, served normally with ranch or sauce of your choice." },
        { src: "/images/corn.png", alt: "Dish 9", title: "Alabama Cream Corn", price: "45kr", description: "Sweet corn cooked in a rich, creamy sauce with a touch of Southern flair." },
        { src: "/images/bacon.png", alt: "Dish 10", title: "Bacon", price: "35kr", description: "Crispy, perfectly cooked bacon strips, ideal as a side or topping for any dish." },
        { src: "/images/sirap.png", alt: "Dish 11", title: "Maple Syrup", price: "20kr", description: "Pure, sweet maple syrup to drizzle over pancakes, waffles, or any dish you desire." },
        { src: "/images/bbq.png", alt: "Dish 12", title: "BBQ Sauce", price: "20kr", description: "Smoky, sweet and tangy BBQ sauce, perfect as a dip or topping for chicken and sides." },
        { src: "/images/vin.png", alt: "Dish 13", title: "Vinaigrette", price: "20kr", description: "Classic vinaigrette dressing with a balanced tang, perfect for salads and sides." },
        { src: "/images/butter.png", alt: "Dish 14", title: "Butter", price: "20kr", description: "Creamy, salted butter to add richness and flavor to any dish." },
        { src: "/images/whipped.png", alt: "Dish 15", title: "Whipped Cream", price: "20kr", description: "Fluffy whipped cream, perfect as a side for our sweeter dishes." },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (src: string) => {
        setSelectedImage(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className="max-w-6xl mx-auto p-6">
                <h2 className="text-4xl font-bold text-center mb-8 text-[#B22234] font-Montserrat tracking-wider">FOOD MENU</h2>
                
                <div className="flex justify-center mb-10">
                    <span className="h-px w-1/3 bg-[#B22234]"></span>
                    <span className="mx-4 text-sm text-[#FEFEFC] font-light font-poppins">SOUTHERN GOODNESS</span>
                    <span className="h-px w-1/3 bg-[#B22234]"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <div key={index} 
                             className="flex flex-col items-center text-center border-2 border-[#ff3130] p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                             onClick={() => openModal(item.src)}
                             aria-label={`Open modal for ${item.title}`}>
                            <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
                                <Image src={item.src} alt={item.alt} width={250} height={200} className="object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 font-poppins">{item.title}</h3>
                            <p className="text-gray-500 text-sm font-poppins">{item.description}</p>
                            <p className="text-lg font-bold font-poppins text-[#004aad] mt-2">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <div 
                        className="relative p-4 bg-white rounded-lg shadow-xl max-w-2xl w-full" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            src={selectedImage} 
                            alt="Large view" 
                            width={800} 
                            height={600} 
                            className="rounded-lg shadow-lg object-contain"
                        />
                        <button 
                            onClick={closeModal} 
                            className="absolute top-3 right-3 text-white bg-[#004aad] p-3 rounded-full hover:bg-[#ff3130] transition-colors duration-200 focus:outline-none"
                            aria-label="Close modal"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FoodHero;