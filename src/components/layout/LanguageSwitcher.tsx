import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang: currentLang } = useParams();

  const changeLanguage = (lng: string) => {
    // lng is "pt", "en", or "es"
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments[0] === currentLang) {
      pathSegments[0] = lng;
    } else {
      pathSegments.unshift(lng);
    }
    navigate(`/${pathSegments.join('/')}${location.search}${location.hash}`);
  };

  const languages = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const currentLanguage = languages.find((l) => l.code === i18n.language.split('-')[0]) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-2 hover:bg-cyan-50 text-cyan-600">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur border-cyan-100">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="gap-2 cursor-pointer hover:bg-cyan-50 focus:bg-cyan-50"
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
