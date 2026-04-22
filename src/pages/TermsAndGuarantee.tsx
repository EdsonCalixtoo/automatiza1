import { Layout } from "@/components/layout/Layout";
import { Shield, Truck, Award, CheckCircle2, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TermsAndGuarantee() {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-cyan-50 via-cyan-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider bg-cyan-100/50 px-4 py-2 rounded-full border border-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              {t("terms_and_guarantee.badge")}
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
              {t("terms_and_guarantee.title_1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">{t("terms_and_guarantee.title_2")}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              {t("terms_and_guarantee.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Navigation Tabs */}
          <div className="mb-16 border-b-2 border-gray-200">
            <div className="flex flex-wrap gap-4 md:gap-8">
              {[
                { icon: Shield, label: t("terms_and_guarantee.tab_security"), id: "security" },
                { icon: Truck, label: t("terms_and_guarantee.tab_shipping"), id: "shipping" },
                { icon: Award, label: t("terms_and_guarantee.tab_warranty"), id: "warranty" },
                { icon: CheckCircle2, label: t("terms_and_guarantee.tab_purchase"), id: "purchase" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className="pb-4 px-2 font-semibold text-gray-600 hover:text-cyan-600 border-b-4 border-transparent hover:border-cyan-600 transition-all duration-300 flex items-center gap-2 group"
                >
                  <tab.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Segurança */}
          <section className="mb-20 space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("terms_and_guarantee.security_title")}
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    {t("terms_and_guarantee.security_data_title")}
                  </h3>
                  <p className="leading-relaxed text-blue-900">
                    {t("terms_and_guarantee.security_data_text")}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    {t("terms_and_guarantee.security_ssl_title")}
                  </h3>
                  <p className="leading-relaxed text-blue-900">
                    {t("terms_and_guarantee.security_ssl_text")}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-6 rounded-xl border border-cyan-300 shadow-md">
                  <p className="text-cyan-900 font-semibold flex items-center gap-2">
                    <Check className="w-5 h-5 text-cyan-600" />
                    {t("terms_and_guarantee.security_footer")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Envio */}
          <section className="mb-20 space-y-8 animate-slide-up" style={{ animationDelay: '150ms' }}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center shadow-lg">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("terms_and_guarantee.shipping_title")}
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="p-6 rounded-xl bg-orange-50 border border-orange-200 hover:border-orange-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    {t("terms_and_guarantee.shipping_deadline_title")}
                  </h3>
                  <p className="leading-relaxed text-orange-900">
                    {t("terms_and_guarantee.shipping_deadline_text")}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-orange-50 border border-orange-200 hover:border-orange-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    {t("terms_and_guarantee.shipping_carriers_title")}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: 'JadLog', desc: t("shipping.jadlog_desc") },
                      { name: 'Rodonaves', desc: t("shipping.rodonaves_desc") },
                      { name: 'Correios (Sedex)', desc: t("shipping.correios_desc") }
                    ].map((carrier, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-orange-100">
                        <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">{carrier.name}</span>
                          <span className="text-gray-600 ml-2">— {carrier.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-orange-50 border border-orange-200 hover:border-orange-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    {t("terms_and_guarantee.shipping_tracking_title")}
                  </h3>
                  <p className="leading-relaxed text-orange-900 mb-3">
                    {t("terms_and_guarantee.shipping_tracking_text")}
                  </p>
                  <p className="font-semibold text-orange-700 bg-white px-4 py-3 rounded-lg border border-orange-200">
                    📱 (19) 99661-0774 - {t("shipping.tracking_support")}
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <p className="text-yellow-900">
                    <span className="font-semibold">⚠️ {t("shipping.important_title")}:</span> {t("terms_and_guarantee.shipping_important")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Garantia */}
          <section className="mb-20 space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("terms_and_guarantee.warranty_title")}
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 hover:border-purple-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    {t("terms_and_guarantee.warranty_coverage_title")}
                  </h3>
                  <p className="leading-relaxed text-purple-900 mb-4">
                    {t("terms_and_guarantee.warranty_coverage_text")}
                  </p>
                  <ul className="space-y-2">
                    {[
                      { time: t("terms_and_guarantee.warranty_time_new"), desc: t("terms_and_guarantee.warranty_desc_new") },
                      { time: t("terms_and_guarantee.warranty_time_repair"), desc: t("terms_and_guarantee.warranty_desc_repair") }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span><span className="font-semibold text-gray-900">{item.time}</span> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 hover:border-purple-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    {t("terms_and_guarantee.warranty_counting_title")}
                  </h3>
                  <p className="leading-relaxed text-purple-900">
                    {t("terms_and_guarantee.warranty_counting_text")}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-red-50 border border-red-200">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    {t("warranty.loss_title")}
                  </h3>
                  <ul className="space-y-2">
                    {[
                      t("warranty.loss_item_1"),
                      t("warranty.loss_item_2"),
                      t("warranty.loss_item_3"),
                      t("warranty.loss_item_4"),
                      t("warranty.loss_item_5")
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 p-3 bg-white rounded-lg border border-red-100">
                        <span className="text-red-600 font-bold flex-shrink-0">•</span>
                        <span className="text-red-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-600" />
                    {t("warranty.exclusions_title")}
                  </h3>
                  <ul className="space-y-2">
                    {[
                      t("warranty.exclusion_item_1"),
                      t("warranty.exclusion_item_2"),
                      t("warranty.exclusion_item_3"),
                      t("warranty.exclusion_item_4"),
                      t("warranty.exclusion_item_5")
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 p-3 bg-white rounded-lg border border-gray-100">
                        <span className="text-gray-600 font-bold flex-shrink-0">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-600" />
                    {t("warranty.procedure_title")}
                  </h3>
                  <ol className="space-y-3">
                    {[
                      t("warranty.procedure_step_1"),
                      t("warranty.procedure_step_2"),
                      t("warranty.procedure_step_3"),
                      t("warranty.procedure_step_4")
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 p-3 bg-white rounded-lg border border-cyan-100">
                        <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-cyan-900 pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <p className="text-yellow-900">
                    <span className="font-semibold">⚠️ {t("shipping.important_title")}:</span> {t("warranty.costs_text")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Como Comprar */}
          <section className="space-y-8 animate-slide-up" style={{ animationDelay: '250ms' }}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("terms_and_guarantee.purchase_title")}
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-6 rounded-xl border border-cyan-300 shadow-md">
                  <p className="text-cyan-900 font-semibold">
                    {t("terms_and_guarantee.purchase_intro")}
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: t("how_to_buy.step_1_title"),
                      desc: t("how_to_buy.step_1_desc")
                    },
                    {
                      title: t("how_to_buy.step_2_title"),
                      desc: t("how_to_buy.step_2_desc")
                    },
                    {
                      title: t("how_to_buy.step_3_title"),
                      desc: t("how_to_buy.step_3_desc")
                    },
                    {
                      title: t("how_to_buy.step_4_title"),
                      desc: t("how_to_buy.step_4_desc")
                    },
                    {
                      title: t("how_to_buy.step_5_title"),
                      desc: t("how_to_buy.step_5_desc")
                    },
                    {
                      title: t("how_to_buy.step_6_title"),
                      desc: t("how_to_buy.step_6_desc")
                    }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-700 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
