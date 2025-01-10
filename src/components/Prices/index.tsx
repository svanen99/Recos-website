import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="bg-[#B22234] text-[#B22234] p-8 md:p-16 lg:p-24 font-poppins relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-[#F8F9FA] text-[#B22234] border-2 border-[#B22234] p-2 rounded-lg">
            Food <span className="text-[#1D4E89]">PRICES</span>
          </h1>
          <p className="text-lg text-[#F8F9FA] mt-2 italic">
            Chicken & Waffles do go together...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-semibold text-[#1D4E89] mb-6 border-b-2 border-[#B22234] pb-2">
              Foods
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Chicken & Belgian Waffles</span>
                <span className="text-[#B22234] font-bold">140kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Fried Chicken (original or spicy)</span>
                <span className="text-[#B22234] font-bold">35kr/each</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Chicken Tenders (3 pieces)</span>
                <span className="text-[#B22234] font-bold">75kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>American Pancakes</span>
                <span className="text-[#B22234] font-bold">70kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Belgian Waffles</span>
                <span className="text-[#B22234] font-bold">75kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Swedish Waffles</span>
                <span className="text-[#B22234] font-bold">65kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Vegan Waffles</span>
                <span className="text-[#B22234] font-bold">70kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Fried Chicken Salad</span>
                <span className="text-[#B22234] font-bold">140kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Macaroni & Cheese</span>
                <span className="text-[#B22234] font-bold">50kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Deep Fried Cauliflower</span>
                <span className="text-[#B22234] font-bold">70kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Scrambled Eggs</span>
                <span className="text-[#B22234] font-bold">50kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Cornbread</span>
                <span className="text-[#B22234] font-bold">45kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Alabama Cream Corn</span>
                <span className="text-[#B22234] font-bold">45kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Eggs & Toast</span>
                <span className="text-[#B22234] font-bold">75kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Small Salad</span>
                <span className="text-[#B22234] font-bold">40kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Bacon</span>
                <span className="text-[#B22234] font-bold">35kr</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-semibold text-[#1D4E89] mb-6 border-b-2 border-[#B22234] pb-2">
              Drinks
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Cola, Fanta, Sprite, Ramlösa</span>
                <span className="text-[#B22234] font-bold">25kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Brewed Coffee, Espresso</span>
                <span className="text-[#B22234] font-bold">35kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Cappuccino, Latte</span>
                <span className="text-[#B22234] font-bold">40kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Juice (Orange, Apple)</span>
                <span className="text-[#B22234] font-bold">30kr</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Festis</span>
                <span className="text-[#B22234] font-bold">25kr</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md md:col-span-2">
            <h2 className="text-3xl font-semibold text-[#1D4E89] mb-6 border-b-2 border-[#B22234] pb-2">
              Extra Toppings & Sauces - All 20kr/each
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Maple Syrup</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Jam / Sylt</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Chocolate Sauce</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Ice Cream</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Whipped Cream</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Berries (Raspberries, Blueberries)</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sweet and Spicy BBQ Sauce</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Ranch</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Hot Sauce</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 w-1/3 max-w-[300px] h-auto overflow-hidden rounded-tl-[50px] shadow-xl">
          <img
            src="/images/screen5.jpg"
            alt="Menu Highlight"
            className="object-cover rounded-tl-[50px]"
          />
          <div className="absolute top-4 right-4 bg-[#B22234] text-white font-bold px-4 py-2 rounded-lg">
            <Link href="/food">
              <button>GO TO MENU</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;