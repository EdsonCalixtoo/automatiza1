import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown, Shield, Truck, Award, RefreshCw, Play, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartIcon } from "@/components/CartIcon";
import { AuthButton } from "@/components/AuthButton";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import logoAutomatiza from "@/assets/Automatiza-logo-rgb-01.jpg";

const ADMIN_EMAIL = "juninho.caxto@gmail.com";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

const infoLinks = [
  { href: "/seguranca", label: "Segurança", icon: Shield },
  { href: "/envio", label: "Envio", icon: Truck },
  { href: "/garantia", label: "Garantia", icon: Award },
  { href: "/como-comprar", label: "Como Comprar", icon: ShoppingCart },
  { href: "/trocas-devolucoes", label: "Trocas e Devoluções", icon: RefreshCw },
  { href: "/videos-instalacao", label: "Vídeos de Instalação", icon: Play },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 flex justify-center">
      <div className="bg-white/85 backdrop-blur-2xl border border-cyan-100/30 shadow-lg rounded-2xl w-fit">
        <div className="px-4">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity group">
              <div className="relative">
                <img 
                  src={logoAutomatiza} 
                  alt="Automatiza - Automação de Vans" 
                  className="h-14 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm",
                    location.pathname === link.href
                      ? "text-cyan-600 bg-cyan-50 border border-cyan-200"
                      : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Info Dropdown */}
              <div className="relative group ml-1">
                <button className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50 transition-all duration-300 flex items-center gap-1 text-sm">
                  Informações
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur border border-cyan-100/30 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1 z-50">
                  {infoLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors group/item"
                      >
                        <Icon className="w-4 h-4 text-cyan-600 group-hover/item:scale-110 transition-transform" />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <CartIcon />
              <AuthButton />
              <a 
                href="https://wa.me/5519989429972" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="default" 
                  className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white gap-2 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 px-6"
                >
                  <Zap className="w-4 h-4" />
                  Fale Conosco
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-cyan-50 transition-colors text-gray-700 hover:text-cyan-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-cyan-100/30 animate-fade-in bg-white/80 backdrop-blur">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "px-4 py-3 rounded-lg font-medium transition-all duration-200",
                      location.pathname === link.href
                        ? "bg-gradient-to-r from-cyan-50 to-cyan-100/50 text-cyan-600 border border-cyan-200"
                        : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Info Section */}
                <button
                  onClick={() => setIsInfoOpen(!isInfoOpen)}
                  className="px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50 flex items-center justify-between transition-all duration-200 mt-2"
                >
                  Informações
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isInfoOpen && "rotate-180")} />
                </button>
                {isInfoOpen && (
                  <div className="ml-4 flex flex-col gap-1 py-2 bg-cyan-50/30 rounded-lg p-2">
                    {infoLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-cyan-100/50 hover:text-cyan-600 rounded-lg transition-all"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="w-4 h-4 text-cyan-600" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
                
                <a 
                  href="https://wa.me/5519989429972" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    size="default" 
                    className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white gap-2 font-semibold rounded-full shadow-lg"
                  >
                    <Zap className="w-4 h-4" />
                    Fale Conosco
                  </Button>
                </a>

                <Link
                  to="/minha-conta"
                  className="mt-4 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    size="default" 
                    variant="outline"
                    className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold"
                  >
                    👤 Minha Conta
                  </Button>
                </Link>

                {user && user.email === ADMIN_EMAIL && (
                  <Link
                    to="/admin/dashboard"
                    className="mt-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button 
                      size="default" 
                      variant="outline"
                      className="w-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold"
                    >
                      📊 Dashboard Admin
                    </Button>
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
