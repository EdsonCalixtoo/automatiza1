import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Award, Wrench, Heart, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import { CTA } from "@/components/home/CTA";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Header */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-cyan-50 via-cyan-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 animate-bounce-slow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4 bg-cyan-100/50 px-4 py-2 rounded-full border border-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              {t("about.badge")}
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {t("about.title_1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">{t("about.title_2")}</span>
            </h1>
            <p className="text-2xl text-cyan-600 font-semibold italic">
              {t("about.motto")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos / Missão */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-gradient-to-b from-cyan-600 to-cyan-700" />
                <h2 className="font-heading text-4xl font-bold text-gray-900">
                  {t("about.mission_title")}
                </h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t("about.mission_text_1")}
                </p>
                <p>
                  {t("about.mission_text_2")}
                </p>
                <p className="text-xl font-semibold text-cyan-600 italic pt-4 border-l-4 border-cyan-600 pl-4">
                  {t("about.mission_quote")}
                </p>
              </div>
            </div>

            {/* Inovação Aplicada */}
            <div className="mt-20 space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                  {t("about.innovation_title")} <span className="text-cyan-600">{t("about.innovation_accent")}</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {t("about.innovation_subtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t("about.innovation_text")}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 uppercase text-sm tracking-widest">{t("about.innovation_list_title")}</h4>
                    {[
                      t("about.innovation_item_1"),
                      t("about.innovation_item_2"),
                      t("about.innovation_item_3"),
                      t("about.innovation_item_4"),
                      t("about.innovation_item_5")
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-cyan-50 p-3 rounded-xl border border-cyan-100 group hover:border-cyan-300 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-white p-8 rounded-3xl border border-cyan-100 shadow-xl space-y-6">
                    <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-600/30">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {t("about.innovation_card_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia e Qualidade */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">{t("about.engineering_badge")}</span>
                <h2 className="font-heading text-4xl font-bold">{t("about.engineering_title")} <span className="text-cyan-400">{t("about.engineering_accent")}</span></h2>
                <p className="text-gray-400 leading-relaxed">
                  {t("about.engineering_text")}
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-6">
                <h3 className="font-bold text-xl text-cyan-400">{t("about.models_title")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Mercedes Sprinter",
                    "Renault Master",
                    "Fiat Ducato",
                    "Peugeot Boxer",
                    "Citroën Jumper",
                    "Iveco Daily",
                    "Volkswagen Kombi"
                  ].map((model, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      <span className="text-sm font-medium">{model}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 pt-4 border-t border-white/10">
                  {t("about.models_footer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 bg-cyan-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <ShieldCheck className="w-10 h-10 text-cyan-600" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-gray-900">
              {t("about.commitment_title")} <span className="text-cyan-600">{t("about.commitment_accent")}</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {t("about.commitment_text_1")}
              </p>
              <p>
                {t("about.commitment_text_2")}
              </p>
            </div>
            
            <div className="pt-12 grid sm:grid-cols-3 gap-8">
              {[
                { icon: Users, label: t("about.trust"), desc: t("about.trust_desc") },
                { icon: Award, label: t("about.excellence"), desc: t("about.excellence_desc") },
                { icon: Target, label: t("about.evolution"), desc: t("about.evolution_desc") }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">{item.label}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default About;
