import Image from "next/image";

const AboutHero = () => {
    return (
        <div className="bg-white px-6 py-12 md:px-16 lg:px-24 font-serif rounded-lg shadow-lg m-6 border-t-8 border-[#ff3130]">
            <div className="max-w-4xl mx-auto space-y-12 text-lg leading-relaxed">
                <div className="relative flex justify-center">
                    <div className="absolute w-48 h-48 bg-[#fef7e8] rounded-full -top-12 -z-10"></div>
                    <Image
                        src="/images/alabama.png"
                        width={150}
                        height={200}
                        alt="Alabama"
                        className="rounded-full border-4 border-[#ff3130] shadow-lg"
                    />
                </div>
                <h1 className="text-4xl font-bold text-center text-[#004aad]">
                    Welcome to Reco's Chicken and Waffles!
                </h1>
                <div className="space-y-6">
                    <p className="text-center text-xl font-medium text-[#333]">
                        Your new favorite American all-day brunch spot in the heart of Stockholm!
                    </p>
                    <p className="text-justify text-[#555]">
                        We are proud to bring a slice of American comfort and culinary traditions to
                        the local area, offering a unique dining experience that stands out from
                        the crowd.
                    </p>
                    <p className="text-justify text-[#555]">
                        My journey to founding Reco's Chicken and Waffles has been nothing short of
                        an adventure. Coming from Alabama, living all across America, and being a
                        military brat to eventually becoming a professional basketball player in
                        Europe has given me the incredible opportunity to live in 10 different
                        countries around the world.
                    </p>
                </div>
                <blockquote className="italic font-semibold text-center text-[#004aad] border-l-4 border-[#ff3130] pl-4">
                    "It gives me joy to bring a little piece of home to Americans living abroad and
                    offer a new culinary adventure for Swedes."
                </blockquote>
                <p className="text-justify text-[#555]">
                    My mission is simple yet profound: To create not just a restaurant but a
                    community where people can gather, share stories, and enjoy the delicious,
                    soul-satisfying flavors of American Southern cuisine right here in Sweden.
                </p>
                <div className="flex justify-center mt-8">
                    <button className="bg-[#004aad] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#003580] transition duration-300">
                        Explore Our Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;