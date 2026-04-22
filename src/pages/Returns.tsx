import { Layout } from "@/components/layout/Layout";
import { RefreshCw, Clock, Package, DollarSign, AlertCircle, Phone, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Returns() {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-amber-50 via-amber-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-wider bg-amber-100/50 px-4 py-2 rounded-full border border-amber-200">
              <RefreshCw className="w-4 h-4" />
              {t("returns.badge")}
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
              {t("returns.title_1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">{t("returns.title_2")}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              {t("returns.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {/* Solicitação */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("returns.request_title")}
                </h2>
              </div>
              
              <div className="p-8 rounded-xl bg-amber-50 border border-amber-200 hover:border-amber-300 transition-colors">
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  {t("returns.request_text")}
                </p>
                <div className="bg-white p-6 rounded-lg border border-amber-200 space-y-3">
                  <p className="font-semibold text-gray-900">{t("returns.contact_via")}</p>
                  <ul className="space-y-2 text-amber-900">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600" />
                      <span>{t("returns.whatsapp_footer")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600" />
                      <span>{t("returns.email_footer")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600" />
                      <span>{t("returns.contact_page")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Condições */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("returns.conditions_title")}
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-blue-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {t("returns.deadline_title")}
                  </h3>
                  <p className="text-blue-900 leading-relaxed">
                    {t("returns.deadline_days")}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-blue-900 mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    {t("returns.merchandise_conditions")}
                  </h3>
                  <ul className="space-y-3 text-blue-900">
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("returns.intact_seals")}</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("returns.original_packaging")}</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("returns.all_accessories")}</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("returns.no_use")}</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{t("returns.intact_box")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Envio */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center shadow-lg">
                  <RefreshCw className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("returns.shipping_title")}
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200 hover:border-cyan-300 transition-colors">
                  <h3 className="font-semibold text-lg text-cyan-900 mb-3">{t("returns.shipping_cost_title")}</h3>
                  <p className="text-cyan-900 leading-relaxed">
                    {t("returns.shipping_cost_text")}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200 hover:border-cyan-300 transition-colors">
                  <h3 className="font-semibold text-lg text-cyan-900 mb-3">{t("returns.request_deadline_title")}</h3>
                  <p className="text-cyan-900 leading-relaxed">
                    {t("returns.request_deadline_text")}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200 hover:border-cyan-300 transition-colors">
                  <h3 className="font-semibold text-lg text-cyan-900 mb-3">{t("returns.shipping_flow_title")}</h3>
                  <p className="text-cyan-900 leading-relaxed">
                    {t("returns.shipping_flow_text")}
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-900 mb-2">{t("returns.inspection_title")}</p>
                      <p className="text-yellow-900 text-sm">
                        {t("returns.inspection_text")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reembolso - Cartão */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("returns.refund_card_title")}
                </h2>
              </div>
              
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 hover:border-purple-300 transition-colors">
                <div className="space-y-4 text-purple-900">
                  <p className="leading-relaxed">
                    {t("returns.refund_card_text_1")}
                  </p>
                  <p className="leading-relaxed">
                    {t("returns.refund_card_text_2")}
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="text-sm font-semibold text-purple-900 mb-2">💡 {t("shipping.important_title")}</p>
                    <p className="text-sm">{t("returns.refund_card_important")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reembolso - Boleto, PIX ou Transferência */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center shadow-lg">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  {t("returns.refund_cash_title")}
                </h2>
              </div>
              
              <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 hover:border-indigo-300 transition-colors">
                <div className="space-y-4 text-indigo-900">
                  <p className="leading-relaxed">
                    {t("returns.refund_cash_text")}
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <p className="font-semibold text-indigo-900 mb-2">{t("returns.bank_data_title")}</p>
                    <p className="text-sm text-indigo-900">
                      {t("returns.bank_data_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumo */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6" />
                {t("returns.summary_title")}
              </h3>
              <p className="text-amber-50 leading-relaxed">
                {t("returns.summary_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
