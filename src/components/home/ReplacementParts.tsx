import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Zap, Package, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Part {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  color: string;
}

const getParts = (t: any) => [
  {
    id: "motor",
    name: t("replacement_parts.parts.motor.name"),
    description: t("replacement_parts.parts.motor.description"),
    icon: Zap,
    badge: t("replacement_parts.parts.motor.badge"),
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "cremalheira",
    name: t("replacement_parts.parts.cremalheira.name"),
    description: t("replacement_parts.parts.cremalheira.description"),
    icon: Wrench,
    color: "from-gray-500 to-gray-600"
  },
  {
    id: "botao",
    name: t("replacement_parts.parts.botao.name"),
    description: t("replacement_parts.parts.botao.description"),
    icon: Package,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: "controle",
    name: t("replacement_parts.parts.controle.name"),
    description: t("replacement_parts.parts.controle.description"),
    icon: Zap,
    badge: t("replacement_parts.parts.controle.badge"),
    color: "from-purple-500 to-purple-600"
  },
];

export function ReplacementParts() {
  const { t } = useTranslation();
  const parts = getParts(t);
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-600" />
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">{t("replacement_parts.badge")}</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t("replacement_parts.title")}
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("replacement_parts.subtitle")}
          </p>
        </div>

        {/* Parts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {parts.map((part) => {
            const Icon = part.icon;
            return (
              <div
                key={part.id}
                className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-500"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Badge */}
                  {part.badge && (
                    <Badge className="mb-4 bg-cyan-100 text-cyan-700 hover:bg-cyan-200">
                      {part.badge}
                    </Badge>
                  )}

                  {/* Title and Description */}
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    {part.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {part.description}
                  </p>

                  {/* Action */}
                  <button className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm hover:text-cyan-700 group/btn">
                    {t("replacement_parts.saiba_mais")}
                    <span className="inline-block group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-bl-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Featured Product */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Content */}
            <div className="text-white">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {t("replacement_parts.featured_title")}
              </h3>
              <p className="text-cyan-50 text-lg leading-relaxed mb-6">
                {t("replacement_parts.featured_subtitle")}
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-300" />
                  <span>{t("replacement_parts.item_1")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-300" />
                  <span>{t("replacement_parts.item_2")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-300" />
                  <span>{t("replacement_parts.item_3")}</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-white text-cyan-700 hover:bg-gray-100 font-semibold gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                {t("replacement_parts.buy_now")}
              </Button>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                <img 
                  src="/ftproduto.jpeg" 
                  alt="Kit Completo de Reposição" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
