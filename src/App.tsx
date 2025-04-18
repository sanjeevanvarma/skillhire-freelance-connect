
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import FreelancerProfile from "./pages/FreelancerProfile";
import SignIn from "./pages/SignIn";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/browse" element={<CategoryPage />} />
          <Route path="/freelancers/:freelancerId" element={<FreelancerProfile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<Join />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
