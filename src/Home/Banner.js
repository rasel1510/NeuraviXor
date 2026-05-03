import banner from "../images/image banner.png";

const Banner = () => {
  return (
    <div className="hero bg-transparent min-h-screen transition-colors duration-300">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        {/* Image */}
        <img
          src={banner}
          alt="Neuravixor Services Banner"
          className="w-full max-w-xl sm:max-w-l rounded-lg dark:opacity-90 dark:brightness-90 transition-all"
        />

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="sm:text-4xl lg:text-5xl font-bold leading-tight">
          
            <span className="block text-black dark:text-white text-4xl md:text-6xl mb-2">
            
              BUILDING SMART DIGITAL SOLUTIONS 
            </span>
        
            <span className="block text-orange-400">
              with Web, AI & Design
            </span>
          </h1>

          <p className="py-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            We help businesses grow with modern web development, intelligent AI
            solutions, and visually stunning graphic design. From idea to
            execution — we turn concepts into powerful digital experiences.
          </p>

          <button className="btn bg-orange-400 hover:bg-orange-500 border-none text-white px-8">
            Let’s Work Together
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
