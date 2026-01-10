import { useState } from "react";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [search, setSearch] = useState("");

  const faqItems = [
    {
      question: "Where does my contribution go?",
      answer: "It funds designing, building tools, and holding community sessions; it's the fuel behind the progress."
    },
    {
      question: "What do I get for ₹69.99?",
      answer: "You get a 15-minute live segment during a Twitch stream to share your idea, project, or creative process. It's a one-time feature, and slots are first come, first served."
    },
    {
      question: "Is this just for students?",
      answer: "No. Builders, dreamers, coders, artists. Everyone is welcome."
    },
    {
      question: "How do I join the community?",
      answer: "Links are provided in the bio, NavBar (top), footer (bottom), or type !discord or !community during a stream to get in."
    },
    {
      question: "Can I share my project idea here?",
      answer: "Yes! That’s exactly what the ₹69.99 live slot is for. Whether you have a rough concept or a work-in-progress, you're welcome to present it."
    },
    {
      question: "Is this a mentorship platform?",
      answer: "Not officially. It’s more of a collaborative build space, sometimes with guest experts, but mostly peer-led and community-driven."
    },
    {
      question: "When will the actual platform launch?",
      answer: "It’s being built in public. Beta access to the frontend will roll out soon, especially for early community members."
    },
    {
      question: "Will my feedback be used?",
      answer: "Absolutely. Feedback helps shape the direction of the platform. Anonymous suggestions are welcome too."
    },
    {
      question: "Is there a cost to join the platform?",
      answer: "No. The platform and Discord are free. Contributions are totally optional and go toward supporting development."
    },
    {
      question: "I'm not ready to share yet. Can I still be part?",
      answer: "Yes. You can lurk, learn, and jump in when you're ready. There's zero pressure to present anything."
    },
    {
      question: "What's the difference between the ₹69.99 and ₹99.99 options?",
      answer: "₹69.99 is a one-time 15-minute stream slot. ₹99.99 is a full-month pass: you get that same 15-minute feature in Week 1, plus 5-minute check-ins in Weeks 2–4 to update yourwith Second Cup."
    },
    {
      question: "How does the ₹99.99 monthly pass work exactly?",
      answer: "It's a 4-week spotlight cycle:\n\nWeek 1: 15-minute deep-dive into your idea or project\n\nWeeks 2–4: 5-minute weekly check-ins to show progress, pivots, or updates\nYou’ll also receive a clean recording of your first appearance and have a chance to earn from stream donations."
    },
    {
      question: "What do I use the weekly check-ins for?",
      answer: "To keep momentum. Each 5-minute segment is your space to share progress, wins, problems, or changes — whatever’s relevant to your buildwith Second Cup."
    },
    {
      question: "Can I earn through the stream with the ₹99.99 plan?",
      answer: "Yes. If your segment hits with viewers and they donate during your spotlight, you’ll receive a portion of those earnings."
    },
    {
      question: "Can I switch from ₹69.99 to ₹99.99 later?",
      answer: "If slots are still open for the month, yes; you can upgrade by paying the difference. Just reach out and we’ll sort it."
    },
    {
      question: "Will I get a recording of my live appearance?",
      answer: "Yes, if you’re on the ₹99.99 plan. You’ll receive a clean video file of your 15-minute stream segment to use however you want."
    }
  ];

  // Real-time search: match if question includes search or answer includes search (case-insensitive)
  const filteredFaqs = search.trim()
    ? faqItems.filter(
        item =>
          item.question.toLowerCase().includes(search.trim().toLowerCase()) ||
          item.answer.toLowerCase().includes(search.trim().toLowerCase())
      )
    : faqItems;

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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>

        <div className="flex items-center gap-2 max-w-lg mx-auto mb-8 relative">
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Type your question..."
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
            {search && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1"
                onClick={() => setSearch("")}
                tabIndex={0}
                aria-label="Clear"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {search.trim() && filteredFaqs.length === 0 ? (
            <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScC-527SAcO37z9YGq2kMpN83sUmKaI3ZuHX6wYZ6keG0oZLA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition"
            >
              Ask Reply
            </a>
          ) : (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition cursor-default"
              tabIndex={-1}
              disabled
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          )}
        </div>

        <div className="space-y-4">
          {search.trim() && filteredFaqs.length === 0 ? (
            <div className="text-center text-gray-400 mb-8">
              No related questions found.
            </div>
          ) : (
            filteredFaqs.map((item, index) => (
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
                  <div className="px-6 pb-4 whitespace-pre-line">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
