const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-2 sm:px-4 relative">
      <div className="w-full max-w-full sm:max-w-7xl mx-auto flex flex-col-reverse sm:flex-row sm:items-stretch sm:justify-between gap-0 min-h-[60vh]">
        {/* Text content */}
        <div className="flex flex-col justify-center items-start text-left sm:w-[48%] px-4 sm:px-8">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-8 leading-tight tracking-tight text-white drop-shadow-lg">
            We're not building just a project —
            <span className="block sm:inline text-pink-400"> we're building a movement</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-6 sm:mb-10 max-w-2xl">
            A community of builders, learners & dreamers. Every bit of support builds the foundation.
          </p>
        </div>
        {/* Image: fill remaining space, flush right */}
        <div className="hidden sm:flex w-[52%] h-auto items-stretch justify-end">
          <img
            src="/hero.png"
            alt="Community illustration"
            className="h-full w-full max-h-[600px] rounded-2xl shadow-2xl object-cover"
            style={{ marginTop: 0, paddingTop: 0 }}
          />
        </div>
        {/* Mobile image: above text, full width */}
        <div className="w-full flex sm:hidden justify-center items-center mb-0 p-0">
          <img
            src="/hero.png"
            alt="Community illustration"
            className="w-full h-auto max-h-[320px] rounded-2xl shadow-2xl object-cover m-0 p-0"
            style={{ marginTop: 0, paddingTop: 0 }}
          />
        </div>
      </div>
      {/* In-page navigation: below text+img, row, evenly spaced */}
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-3 sm:gap-8 mt-6">
        <button 
          onClick={() => scrollToSection('support')}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 w-full sm:w-auto text-base sm:text-lg tracking-wide"
        >
          Support Me
        </button>
        <button 
          onClick={() => scrollToSection('faq')}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto text-base sm:text-lg tracking-wide"
        >
          Have Questions
        </button>
      <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScC-527SAcO37z9YGq2kMpN83sUmKaI3ZuHX6wYZ6keG0oZLA/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto text-base sm:text-lg tracking-wide inline-block text-center"
>
  Get in Touch
</a>
        <button 
          onClick={() => scrollToSection('about')}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto text-base sm:text-lg tracking-wide"
        >
          About Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
