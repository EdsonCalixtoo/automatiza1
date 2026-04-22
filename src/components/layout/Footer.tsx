import { Link, useParams } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language.split('-')[0] || 'pt';
  const toL = (path: string) => `/${currentLang}${path === '/' ? '' : path}`;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -translate-y-1/2" />
      
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/logonovo.jpeg" 
              alt="Automatiza VANS" 
              className="h-16 w-auto opacity-90 rounded-xl"
            />
             <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-white">{t("footer.quick_links")}</h4>
            <nav className="flex flex-col gap-2">
              <Link to={toL("/")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("header.home")}
              </Link>
              <Link to={toL("/produtos")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("header.products")}
              </Link>
              <Link to={toL("/sobre")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("header.about")}
              </Link>
              <Link to={toL("/contato")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("header.contact")}
              </Link>
              <Link to={toL("/seguranca")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("info.security")}
              </Link>
              <Link to={toL("/envio")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("info.shipping")}
              </Link>
              <Link to={toL("/garantia")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("info.warranty")}
              </Link>
              <Link to={toL("/como-comprar")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("info.how_to_buy")}
              </Link>
              <Link to={toL("/trocas-devolucoes")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("info.returns")}
              </Link>
              <Link to={toL("/videos-instalacao")} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                {t("info.installation_videos")}
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-white">{t("header.contact")}</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5519989429972" 
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-cyan-500" />
                (19) 98942-9972
              </a>
              <a 
                href="mailto:contato@grupoautomatiza.com.br" 
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                contato@grupoautomatiza.com.br
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-500" />
                <span>R. Dr. Élton César, 910 - Campinas, SP</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-white">{t("footer.social")}</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/automatiza_vans" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/automatiza.portas.automatica?locale=pt_BR" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@Grupoautomatiza" 
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-cyan-600 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {t("footer.follow_us")}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Automatiza. {t("footer.rights")}
          </p>
          <p className="text-gray-400 text-sm">
            {t("footer.specialist")}
          </p>
        </div>
      </div>
    </footer>
  );
}
