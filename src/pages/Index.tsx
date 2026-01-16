import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SupportOptions from "@/components/SupportOptions";
import FAQ from "@/components/FAQ";
// import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-sm sm:text-base animate-fade-in">
      <Navbar />
      <div className="pt-16 max-w-full sm:max-w-7xl mx-auto px-2 sm:px-4 animate-slide-up">
        <Hero />
        <div className="animate-fade-in">
          <SupportOptions />
        </div>
        {/* <div className="animate-fade-in">
          <FAQ />
        </div> */}
        {/* <div className="animate-fade-in">
          <ContactForm />
        </div> */}
        <div className="animate-fade-in">
          <About />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
