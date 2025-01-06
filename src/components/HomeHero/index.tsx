const HomeHero = () => {
    return (
        <>
            <section className="bg-[#B22234] text-[#F8F9FA] rounded-lg max-w-5xl mx-auto p-8 flex flex-col items-center lg:items-center">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-4xl lg:text-7xl text-shadow-xl font-bold font-cinzel mb-4">Chicken & Waffles</h1>
                    {/* <p className="text-lg lg:text-xl mb-6 font-thin">Yes, they go together...</p> */}
                    <div className="space-x-4">
                        {/* <button className="px-6 py-2 bg-white text-red-700 font-medium rounded hover:bg-red-100 transition">Home</button>
                        <button className="px-6 py-2 bg-white text-red-700 font-medium rounded hover:bg-red-100 transition">About</button> */}
                    </div>
                </div>
                <div className="mt-8">
                    <img 
                        src="/images/chic-waff.png" 
                        alt="Chicken and Waffles" 
                        className="rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"/>
                </div>
            </section>
        </>
    );
}

export default HomeHero;
