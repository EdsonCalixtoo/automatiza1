import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang: currentLang } = useParams();

  const changeLanguage = (lng: string) => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments[0] === currentLang) {
      pathSegments[0] = lng;
    } else {
      pathSegments.unshift(lng);
    }
    navigate(`/${pathSegments.join('/')}${location.search}${location.hash}`);
  };

  const languages = [
    { code: "pt", label: "Português", flag: "🇧🇷", short: "PT" },
    { code: "en", label: "English", flag: "🇺🇸", short: "EN" },
    { code: "es", label: "Español", flag: "🇪🇸", short: "ES" },
  ];

  const currentLanguage = languages.find((l) => l.code === (currentLang || i18n.language.split('-')[0])) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="group relative flex items-center gap-2 px-3 py-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-cyan-100/50 hover:bg-cyan-50/80 hover:border-cyan-200 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-cyan-100/50 rounded-lg group-hover:bg-cyan-200/50 transition-colors">
              <Globe className="w-4 h-4 text-cyan-600" />
            </div>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">{currentLanguage.short}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 transition-colors group-data-[state=open]:rotate-180 duration-300" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-56 p-2 bg-white/90 backdrop-blur-xl border-cyan-100/50 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="px-3 py-2 mb-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600/60">Selecionar Idioma</p>
        </div>
        
        {languages.map((lang) => {
          const isActive = currentLanguage.code === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`
                relative flex items-center justify-between gap-3 px-3 py-3 rounded-2xl cursor-pointer transition-all duration-200 mb-1 last:mb-0
                ${isActive 
                  ? "bg-cyan-50/80 text-cyan-700 border border-cyan-100/50" 
                  : "hover:bg-slate-50 text-slate-600 border border-transparent"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl filter drop-shadow-sm">{lang.flag}</span>
                <span className={`text-sm font-semibold ${isActive ? "text-cyan-900" : "text-slate-700"}`}>
                  {lang.label}
                </span>
              </div>
              
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white stroke-[3px]" />
                </motion.div>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
