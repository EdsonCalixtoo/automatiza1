import { CheckCircle2, Truck, Wrench, Award, Clock, Shield } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function WhyChooseUs() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || i18n.language.split('-')[0] || 'pt';
  const toL = (path: string) => `/${currentLang}${path === '/' ? '' : path}`;

  const features = [
    {
      icon: Truck,
      title: t("home.feature_compatible_title"),
      description: t("home.feature_compatible_desc"),
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Wrench,
      title: t("home.feature_professional_title"),
      description: t("home.feature_professional_desc"),
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
    {
      icon: Shield,
      title: t("home.feature_safety_title"),
      description: t("home.feature_safety_desc"),
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Award,
      title: t("home.feature_warranty_title"),
      description: t("home.feature_warranty_desc"),
      color: "text-yellow-400",
      bg: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
      icon: Clock,
      title: t("home.feature_shipping_title"),
      description: t("home.feature_shipping_desc"),
      color: "text-green-400",
      bg: "bg-green-500/10 border-green-500/20",
    },
    {
      icon: CheckCircle2,
      title: t("home.feature_support_title"),
      description: t("home.feature_support_desc"),
      color: "text-pink-400",
      bg: "bg-pink-500/10 border-pink-500/20",
    },
  ];

  const perks = [
    t("home.perk_discount"),
    t("home.perk_training"),
    t("home.perk_support"),
    t("home.perk_referral"),
  ];
  return (
    <section className="py-28 bg-gradient-to-b from-slate-900 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">{t("home.why_choose_us_badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {t("home.why_choose_us_title").split(" ")[0]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {t("home.why_choose_us_title").split(" ")[1]}
            </span>{" "}
            {t("home.why_choose_us_title").split(" ").slice(2).join(" ")}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t("home.why_choose_us_subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl border ${feature.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1.5 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-10 md:p-14">
            {/* Left */}
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-white text-xs font-semibold">{t("home.fleet_offer")}</span>
              </div>
              <h3 className="text-3xl font-black leading-tight">
                {t("home.satisfied_clients")}
              </h3>
              <ul className="space-y-3">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span className="text-cyan-50 text-sm">{perk}</span>
                  </li>
                ))}
              </ul>
              <Link to={toL("/produtos")}>
                <button className="group inline-flex items-center gap-2 mt-2 bg-white text-cyan-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg">
                  {t("home.all_products")}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>

            {/* Right — decorative numbers */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: t("home.clients") },
                { value: "1.000+", label: t("home.installations") },
                { value: "12m", label: t("home.warranty_short") },
                { value: "99.8%", label: t("home.satisfaction") },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-all duration-300">
                  <p className="text-white font-black text-3xl">{item.value}</p>
                  <p className="text-cyan-200 text-xs mt-1 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
