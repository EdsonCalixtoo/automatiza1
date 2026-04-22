import { Layout } from "@/components/layout/Layout";
import { Award, Check, AlertCircle, Clock, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Warranty() {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-purple-50 via-purple-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-purple-600 font-semibold text-sm uppercase tracking-wider bg-purple-100/50 px-4 py-2 rounded-full border border-purple-200">
              <Award className="w-4 h-4" />
              {t("warranty.badge")}
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
              {t("warranty.title_1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">{t("warranty.title_2")}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              {t("warranty.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {/* Cobertura */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("warranty.coverage_title")}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:border-purple-300 transition-all hover:shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      12
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{t("warranty.months_title")}</h3>
                      <p className="text-purple-900 text-sm">{t("warranty.new_equip")}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-purple-900">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600" />
                      {t("warranty.manufacturing_defects")}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600" />
                      {t("warranty.electronic_problems")}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-600" />
                      {t("warranty.tech_support")}
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover:border-orange-300 transition-all hover:shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      90
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{t("warranty.days_title")}</h3>
                      <p className="text-orange-900 text-sm">{t("warranty.repairs")}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-orange-900">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600" />
                      {t("warranty.after_repair")}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600" />
                      {t("warranty.full_overhaul")}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-600" />
                      {t("warranty.functioning_test")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contagem do Prazo */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("warranty.counting_title")}
                </h2>
              </div>
              
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                <div className="space-y-4">
                  <p className="text-lg text-blue-900 leading-relaxed">
                    {t("warranty.counting_text")}
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-900 text-sm">{t("warranty.counting_activation")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Causas de Perda */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("warranty.loss_title")}
                </h2>
              </div>
              
              <div className="space-y-3">
                {[
                  t("warranty.loss_item_1"),
                  t("warranty.loss_item_2"),
                  t("warranty.loss_item_3"),
                  t("warranty.loss_item_4"),
                  t("warranty.loss_item_5")
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors">
                    <span className="text-red-600 font-bold flex-shrink-0">⚠</span>
                    <span className="text-red-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusões */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                {t("warranty.exclusions_title")}
              </h3>
              
              <div className="space-y-3">
                {[
                  t("warranty.exclusion_item_1"),
                  t("warranty.exclusion_item_2"),
                  t("warranty.exclusion_item_3"),
                  t("warranty.exclusion_item_4"),
                  t("warranty.exclusion_item_5")
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                    <span className="text-gray-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedimento */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center shadow-lg">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("warranty.procedure_title")}
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  t("warranty.procedure_step_1"),
                  t("warranty.procedure_step_2"),
                  t("warranty.procedure_step_3"),
                  t("warranty.procedure_step_4")
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl bg-white border border-cyan-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custos */}
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">{t("warranty.costs_title")}</p>
                  <p className="text-yellow-900 text-sm">
                    {t("warranty.costs_text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
