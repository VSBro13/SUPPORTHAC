
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-4">
            About Sachin R428
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-8">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face"
                alt="Sachin R428"
                className="w-48 h-48 rounded-full mx-auto md:mx-0 border-4 border-pink-400 shadow-2xl shadow-pink-500/25"
              />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl">
                🚀
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Building the Future</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A community of builders, learners & dreamers. Every bit of support builds the foundation. 
                Discord first. Everything else after.
              </p>
              <p className="text-gray-400">
                Student-led • Open Source • Built in Public
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold text-purple-400 mb-3">🎯 Mission</h4>
              <p className="text-gray-300">
                Creating tools and experiences that empower creators to build, learn, and grow together in an open, collaborative environment.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold text-pink-400 mb-3">💡 Vision</h4>
              <p className="text-gray-300">
                A world where every idea has the potential to become reality through community support and open collaboration.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=120&fit=crop"
                alt="Hidden Alley Community"
                className="mx-auto rounded-lg shadow-lg border border-gray-600"
              />
              <p className="text-sm text-gray-400 italic mt-3">
                Part of the Hidden Alley Community — built in public, backed by real people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
