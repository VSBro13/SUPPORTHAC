import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "Where does my contribution go?",
      answer: "It funds designing, building tools, and holding community sessions — it's the fuel behind the progress."
    },
    {
      question: "What do I get for ₹69.99?",
      answer: "You get to book a 20-minute live stream to discuss ideas, projects, or just connect with live exposure."
    },
    {
      question: "Is this just for students?",
      answer: "No. Builders, dreamers, coders, artists — everyone is welcome."
    },
    {
      question: "How do I join the community?",
      answer: "Links are provided in the bio, or type !discord or !community during a stream."
    },
    {
      question: "Can I share my project idea here?",
      answer: "Yes! The ₹69.99 chat is meant exactly for that — whether it's a rough idea or in-progress project."
    },
    {
      question: "Is this a mentorship platform?",
      answer: "Not officially. It's more of a peer-led, collaborative build space, sometimes with guest experts."
    },
    {
      question: "When will the actual platform launch?",
      answer: "It's being built in public. Beta frontend access will roll out soon, especially for the community."
    },
    {
      question: "Will my feedback be used?",
      answer: "Absolutely. Feedback shapes the development and features. Anonymous submissions are welcome too."
    },
    {
      question: "Is there a cost to join the platform?",
      answer: "No. The platform and Discord access are free. Contributions are optional and support development."
    },
    {
      question: "I'm not ready to share yet. Can I still be part?",
      answer: "Yes! You can join quietly, observe, and participate when you're ready. No pressure."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors"
              >
                <span className="font-semibold text-white">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
