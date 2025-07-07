
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          We're not building just a project — 
          <span className="text-pink-400"> we're building a movement</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          A community of builders, learners & dreamers. Every bit of support builds the foundation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('support')}
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
          >
            Support Me
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Have Questions
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
