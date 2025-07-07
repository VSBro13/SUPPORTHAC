
const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=96&h=96&fit=crop&crop=face"
            alt="Sachin"
            className="w-24 h-24 rounded-full mx-auto border-4 border-pink-400 mb-6"
          />
          <h2 className="text-4xl font-bold text-blue-400 mb-6">Sachin</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            A community of builders, learners & dreamers. Every bit of support builds the foundation. 
            Discord first. Everything else after.
          </p>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&h=80&fit=crop"
              alt="Hidden Alley Community"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="text-sm text-gray-400 italic">
            Part of the Hidden Alley Community — built in public, backed by real people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
