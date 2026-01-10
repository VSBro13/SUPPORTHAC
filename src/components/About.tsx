const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-4">
            About Support Sachin
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-8">
              <img
              src="/smf.png"
              alt="Support Sachin"
              className="w-48 h-48 rounded-full mx-auto md:mx-0 border-4 border-pink-400 shadow-2xl shadow-pink-500/25"
              />
              {/* <img
              src="/fbl.jpg"
              alt="Badge"
              className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl border-2 border-white"
              /> */}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Building the Future</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A community of builders, learners & dreamers. Every bit of support builds the foundation. 
                Discord first. Everything else after.
              </p>
              <p className="text-gray-400">
                Student-led • Built in Public
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold text-purple-400 mb-3">🎯 Mission</h4>
              <p className="text-gray-300">
                Creating platform and experiences that empower creative students to build, learn, and grow together in an open, collaborative environment.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6">
              <h4 className="text-xl font-bold text-pink-400 mb-3">💡 Vision</h4>
              <p className="text-gray-300">
                A world where every idea has the potential to become reality through community support and open collaboration.
              </p>
            </div>
            
            <div className="text-center border-2 border-yellow-500/30 rounded-xl p-6 bg-gray-800/50 backdrop-blur-sm">
              <img
                src="/logo.png"
                alt="Far Thinker Community Logo"
                className="mx-auto rounded-full shadow-lg border-2 border-yellow-600 w-24 h-24 "
              />
              <p className="text-sm text-white  bold italic mt-3">
Far Thinkers is a community where ideas move forward, perspectives meet, and people grow together with clarity, honest feedback, and strong support.
              </p>
              <div className="join-container text-center mt-4 align-center">
                <button type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition cursor-default">
                  <a href="https://discord.gg/adgrhgb6yS" className="join-link">Join  Community
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
