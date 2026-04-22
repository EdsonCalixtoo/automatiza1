import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, ShoppingCart, LogIn, Truck, CreditCard, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HowToBuy() {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-cyan-50 via-cyan-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider bg-cyan-100/50 px-4 py-2 rounded-full border border-cyan-200">
              <ShoppingCart className="w-4 h-4" />
              {t("how_to_buy.badge")}
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
              {t("how_to_buy.title_1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">{t("how_to_buy.title_2")}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              {t("how_to_buy.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            {/* Introduction */}
            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-8 rounded-xl border border-cyan-300 shadow-md mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                    {t("how_to_buy.intro_title")}
                  </h2>
                  <p className="text-cyan-900 leading-relaxed">
                    {t("how_to_buy.intro_text")}
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-5">
              {[
                {
                  step: 1,
                  icon: ShoppingCart,
                  title: t("how_to_buy.step_1_title"),
                  desc: t("how_to_buy.step_1_desc"),
                  color: "from-cyan-600 to-cyan-700"
                },
                {
                  step: 2,
                  icon: ShoppingCart,
                  title: t("how_to_buy.step_2_title"),
                  desc: t("how_to_buy.step_2_desc"),
                  color: "from-blue-600 to-blue-700"
                },
                {
                  step: 3,
                  icon: LogIn,
                  title: t("how_to_buy.step_3_title"),
                  desc: t("how_to_buy.step_3_desc"),
                  color: "from-purple-600 to-purple-700"
                },
                {
                  step: 4,
                  icon: Truck,
                  title: t("how_to_buy.step_4_title"),
                  desc: t("how_to_buy.step_4_desc"),
                  color: "from-orange-600 to-orange-700"
                },
                {
                  step: 5,
                  icon: CreditCard,
                  title: t("how_to_buy.step_5_title"),
                  desc: t("how_to_buy.step_5_desc"),
                  color: "from-red-600 to-red-700"
                },
                {
                  step: 6,
                  icon: CheckCircle,
                  title: t("how_to_buy.step_6_title"),
                  desc: t("how_to_buy.step_6_desc"),
                  color: "from-cyan-600 to-cyan-700"
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.step}
                    className="group flex gap-6 p-6 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                        {t("how_to_buy.step_prefix")} {item.step}: {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tips */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                <h3 className="font-semibold text-lg text-blue-900 mb-3 flex items-center gap-2">
                  {t("how_to_buy.tip_title")}
                </h3>
                <p className="text-blue-900 text-sm leading-relaxed">
                  {t("how_to_buy.tip_text")}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200 hover:border-cyan-300 transition-colors">
                <h3 className="font-semibold text-lg text-cyan-900 mb-3 flex items-center gap-2">
                  {t("how_to_buy.security_guarantee_title")}
                </h3>
                <p className="text-cyan-900 text-sm leading-relaxed">
                  {t("how_to_buy.security_guarantee_text")}
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">{t("how_to_buy.faq_title")}</h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: t("how_to_buy.faq_q1"),
                    a: t("how_to_buy.faq_a1")
                  },
                  {
                    q: t("how_to_buy.faq_q2"),
                    a: t("how_to_buy.faq_a2")
                  },
                  {
                    q: t("how_to_buy.faq_q3"),
                    a: t("how_to_buy.faq_a3")
                  },
                  {
                    q: t("how_to_buy.faq_q4"),
                    a: t("how_to_buy.faq_a4")
                  }
                ].map((faq, i) => (
                  <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-cyan-300 transition-colors">
                    <h3 className="font-semibold text-lg text-gray-900 mb-3">
                      ❓ {faq.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
