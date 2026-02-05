import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import Shipping from "./pages/Shipping";
import Warranty from "./pages/Warranty";
import HowToBuy from "./pages/HowToBuy";
import Returns from "./pages/Returns";
import InstallationVideos from "./pages/InstallationVideos";
import TermsAndGuarantee from "./pages/TermsAndGuarantee";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/seguranca" element={<Security />} />
          <Route path="/envio" element={<Shipping />} />
          <Route path="/garantia" element={<Warranty />} />
          <Route path="/como-comprar" element={<HowToBuy />} />
          <Route path="/trocas-devolucoes" element={<Returns />} />
          <Route path="/videos-instalacao" element={<InstallationVideos />} />
          <Route path="/termos-garantia" element={<TermsAndGuarantee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
