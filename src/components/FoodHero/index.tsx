"use client";
import React, { useState } from "react";
import Image from "next/image";

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
        <div className="bg-gradient-to-b from-white to-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold text-[#B22234] p-2 rounded-lg mb-3">
                    Food <span className="underline decoration-wavy text-[#1D4E89]">MENU</span>
                </h1>
                <div className="flex flex-col items-center gap-2 mb-6">
                    <span className="h-px w-1/3 bg-[#B22234]"></span>
                    <p className="text-lg sm:text-base text-[#B22234] italic leading-tight mt-1">
                        Soul-satisfying flavors of Southern American cuisine right here in Sweden.
                    </p>
                    <span className="h-px w-1/3 bg-[#B22234]"></span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                            onClick={() => openModal(item.src)}
                        >
                            <div className="relative w-full h-56">
                                <Image 
                                    src={item.src} 
                                    alt={item.alt} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="group-hover:brightness-75 transition-all duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <div className="flex items-center justify-center gap-2 text-xl font-semibold text-blue-600">
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <div 
                        className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            src={selectedImage} 
                            alt="Large view" 
                            layout="responsive" 
                            width={800} 
                            height={600} 
                            className="object-contain"
                        />
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-white bg-red-500 p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                            aria-label="Close modal"
                        >
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodHero;
