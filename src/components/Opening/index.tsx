import Button from '@mui/material/Button';

const Opening = () => {
  const text = "Reco´s Chicken & Waffles";

  return (
    <div
      className="relative bg-cover bg-center -min-h-screen p-6 lg:p-12 shadow-xl"
      style={{ backgroundImage: "url('/images/webbpage.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="relative z-10 text-center text-white mt-24 animate-in delay-0">
      <h1 className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-playfair mx-auto max-w-[90%]">
  {text}
</h1>

        <p className="mt-4 mb-4 text-pretty text-2xl animate-in delay-100">
          Explore Our Menu!
        </p>
        <a href="/food">
        <Button
            sx={{
              padding: '16px',
              width: '128px',
              borderRadius: '9999px',
              border: '2px solid #F8F9FA',
              color: '#F8F9FA',
              '&:hover': {
                backgroundColor: '#F8F9FA',
                color: '#B22234',
              },
            }}
            variant="outlined"
          >
            Menu
          </Button>

        </a>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="relative flex flex-col items-center justify-center w-full lg:w-96 h-96 rounded-lg border-4 border-[#B22234] shadow-xl p-4 sm:p-6 animate-in delay-200">
          <div
              className="absolute top-4 px-6 py-2 text-2xl sm:text-3xl font-bold text-[#F8F9FA] tracking-wider rounded neon-text cursor-pointer"
          >
            OPENING HOURS
          </div>
          <ul className="text-[#F8F9FA] text-center space-y-4 text-base sm:text-lg mt-8 sm:mt-16">
          <li>
              <span className="font-bold">MON - TUE</span> CLOSED
            </li>
            <li>
              <span className="font-bold">WED - THU </span> 11:00AM - 6:00PM
            </li>
            <li>
              <span className="font-bold">FRI</span> 11:00AM - 5:00PM
            </li>
            <li>
              <span className="font-bold">SAT</span> 9:00AM - 5:00PM
            </li>
            <li>
              <span className="font-bold">SUN</span> 10:00AM - 6:00PM
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3 h-96 rounded-lg overflow-hidden shadow-xl border-4 border-[#B22234] animate-in delay-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.1911096014876!2d18.079019499999998!3d59.313065699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f7587900a3%3A0xc571e2c887854a10!2sBondegatan%2013%2C%20116%2023%20Stockholm!5e0!3m2!1ssv!2sse!4v1730559062483!5m2!1ssv!2sse"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Opening;