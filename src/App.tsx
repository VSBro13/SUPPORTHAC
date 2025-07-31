import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CoffeeSupport from "./pages/CoffeeSupport";
import JourneySupport from "./pages/JourneySupport";
import LiveSession from "./pages/LiveSession";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import TheBigBite from "@/pages/TheBigBite";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/coffee" element={<CoffeeSupport />} />
            <Route path="/journey" element={<JourneySupport />} />
            <Route path="/live-session" element={<LiveSession />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/TheBigBite" element={<TheBigBite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
