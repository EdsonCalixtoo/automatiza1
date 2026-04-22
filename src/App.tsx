import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProductProvider } from "@/contexts/ProductContext";
import { SellerProvider } from "@/contexts/SellerContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminRoute } from "@/components/AdminRoute";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AnniversaryCelebration } from "@/components/AnniversaryCelebration";
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
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import CustomerArea from "./pages/CustomerArea";
import PixPayment from "./pages/PixPayment";
import Dashboard from "./pages/Dashboard";
import TrackOrder from "./pages/TrackOrder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  
  useEffect(() => {
    const supportedLangs = ['pt', 'en', 'es'];
    if (lang && supportedLangs.includes(lang)) {
      const fullLang = lang === 'en' ? 'en-US' : lang === 'es' ? 'es-ES' : 'pt-BR';
      if (i18n.language !== fullLang) {
        i18n.changeLanguage(fullLang);
      }
    }
  }, [lang, i18n]);

  return <Outlet />;
};

const RootRedirect = () => {
  const { i18n } = useTranslation();
  const detectedLang = i18n.language?.split('-')[0] || 'pt';
  const finalLang = ['pt', 'en', 'es'].includes(detectedLang) ? detectedLang : 'pt';
  
  return <Navigate to={`/${finalLang}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ProductProvider>
        <SellerProvider>
          <TooltipProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <AnniversaryCelebration />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/:lang" element={<LanguageWrapper />}>
                    <Route index element={<Index />} />
                    <Route path="login" element={<Login />} />
                    <Route path="produtos" element={<Products />} />
                    <Route path="produto/:id" element={<ProductDetail />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="pix-payment/:orderId" element={<PixPayment />} />
                    <Route path="rastrear-pedido" element={<TrackOrder />} />
                    <Route path="rastreio" element={<TrackOrder />} />
                    <Route
                      path="minha-conta"
                      element={
                        <ProtectedRoute>
                          <CustomerArea />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="admin/dashboard"
                      element={
                        <AdminRoute>
                          <Dashboard />
                        </AdminRoute>
                      }
                    />
                    <Route path="sobre" element={<About />} />
                    <Route path="contato" element={<Contact />} />
                    <Route path="seguranca" element={<Security />} />
                    <Route path="envio" element={<Shipping />} />
                    <Route path="garantia" element={<Warranty />} />
                    <Route path="como-comprar" element={<HowToBuy />} />
                    <Route path="trocas-devolucoes" element={<Returns />} />
                    <Route path="videos-instalacao" element={<InstallationVideos />} />
                    <Route path="termos-garantia" element={<TermsAndGuarantee />} />
                  </Route>
                  <Route path="/" element={<RootRedirect />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </CartProvider>
          </TooltipProvider>
        </SellerProvider>
      </ProductProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
