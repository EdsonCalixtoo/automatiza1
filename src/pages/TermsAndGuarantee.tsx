import { Layout } from "@/components/layout/Layout";
import { Shield, Truck, Award, CheckCircle2, Check } from "lucide-react";

export default function TermsAndGuarantee() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-cyan-50 via-cyan-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider bg-cyan-100/50 px-4 py-2 rounded-full border border-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              Transparência e Segurança
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
              Termos, Garantia e <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">Segurança</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Conheça nossa política de garantia, segurança, envio e como comprar com confiança
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
                { icon: Shield, label: "Segurança", id: "security" },
                { icon: Truck, label: "Envio", id: "shipping" },
                { icon: Award, label: "Garantia", id: "warranty" },
                { icon: CheckCircle2, label: "Como Comprar", id: "purchase" }
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
                  Segurança
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Proteção de Dados Pessoais
                  </h3>
                  <p className="leading-relaxed text-blue-900">
                    Com relação aos seus dados pessoais de endereçamento, pagamento e conteúdo do pedido, 
                    você pode estar certo de que <span className="font-semibold">não serão utilizados para outros fins</span> que 
                    não o de processamento dos pedidos realizados, não sendo portanto divulgados em hipótese alguma.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Criptografia SSL
                  </h3>
                  <p className="leading-relaxed text-blue-900">
                    Com relação à segurança no tráfego de dados, toda transação que envolver pagamento, 
                    seja por cartão de crédito ou não, estará <span className="font-semibold">encriptada com a tecnologia SSL (Secure Socket Layer)</span>. 
                    Isso significa que <span className="font-semibold">só nossa empresa terá acesso a estes dados</span>.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-6 rounded-xl border border-cyan-300 shadow-md">
                  <p className="text-cyan-900 font-semibold flex items-center gap-2">
                    <Check className="w-5 h-5 text-cyan-600" />
                    Seus dados estão protegidos em todos os momentos
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
                  Envio e Entrega
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="p-6 rounded-xl bg-orange-50 border border-orange-200 hover:border-orange-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    Prazo de Envio
                  </h3>
                  <p className="leading-relaxed text-orange-900">
                    Todos os produtos serão enviados de acordo com a forma escolhida pelo cliente, 
                    <span className="font-semibold"> em até 5 dias úteis</span> da confirmação do pagamento.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-orange-50 border border-orange-200 hover:border-orange-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    Transportadoras Parceiras
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: 'JadLog', desc: 'Para portas automáticas' },
                      { name: 'Rodonaves', desc: 'Para portas automáticas' },
                      { name: 'Correios (Sedex)', desc: 'Para demais produtos' }
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
                    Rastreamento
                  </h3>
                  <p className="leading-relaxed text-orange-900 mb-3">
                    Para obter informações do código para rastrear sua encomenda, entre em contato:
                  </p>
                  <p className="font-semibold text-orange-700 bg-white px-4 py-3 rounded-lg border border-orange-200">
                    📱 (19) 99661-0774 - Suporte de envios
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <p className="text-yellow-900">
                    <span className="font-semibold">⚠️ Importante:</span> O prazo para a entrega varia de acordo com a forma de envio escolhida 
                    e não é de nossa responsabilidade, já que a entrega fica a cargo dos Correios, Jadlog ou Rodonaves.
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
                  Termo de Garantia
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 hover:border-purple-300 transition-colors">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    Cobertura de Garantia
                  </h3>
                  <p className="leading-relaxed text-purple-900 mb-4">
                    A Inovari Automações assegura a seus produtos, na forma da legislação vigente:
                  </p>
                  <ul className="space-y-2">
                    {[
                      { time: '1 (um) ano', desc: 'para equipamentos novos' },
                      { time: '90 dias', desc: 'para consertos' }
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
                    Contagem do Prazo
                  </h3>
                  <p className="leading-relaxed text-purple-900">
                    Os prazos serão contados a partir da <span className="font-semibold">data de entrega da mercadoria</span> conforme 
                    expresso na Nota Fiscal. A garantia será ativada quando o cliente comunicar o defeito expressamente (por escrito) 
                    dentro dos prazos assinalados.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-red-50 border border-red-200">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    Causas de Perda de Garantia
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Defeito ocasionado por uso indevido ou desacordo com as características",
                      "Alteração em placa, componentes ou tentativa de conserto não autorizado",
                      "Etiqueta de identificação adulterada, rasurada ou ausente",
                      "Instalação inadequada ou exposição a condições inadequadas",
                      "Equipamentos de terceiros ligados sem autorização prévia"
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
                    Exclusões de Garantia
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Defeitos causados por descargas elétricas atmosféricas",
                      "Lâmpadas, fusíveis, baterias e materiais de natureza semelhante",
                      "Armazenamento inadequado, avarias de transporte, negligência ou abuso",
                      "Defeitos por sinistros, acidentes ou agentes externos",
                      "Equipamentos expostos a temperaturas acima de 40ºC"
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
                    Procedimento para Garantia
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "Enviar laudo técnico com: nome, data da compra, número de série e descrição do problema",
                      "Embalagem adequada da mercadoria (não desmontar)",
                      "Envio com Nota Fiscal de remessa para conserto",
                      "Manutenção ou substituição em aproximadamente 10 dias úteis"
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
                    <span className="font-semibold">⚠️ Importante:</span> As despesas de transporte (ida e volta) correm por conta 
                    do cliente. A garantia não inclui visitas aos locais de instalação para localização de problemas.
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
                  Como Comprar
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100/50 p-6 rounded-xl border border-cyan-300 shadow-md">
                  <p className="text-cyan-900 font-semibold">
                    ✨ Comprar em nossa loja é muito fácil! Siga os passos abaixo:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Navegue e Selecione",
                      desc: "Navegue entre as diversas páginas de produtos (portas automáticas, lançamentos, consumíveis, destaques) e clique sobre o ícone 'Comprar'. Ou clique em 'Ver Produto' para maiores informações. O produto será inserido em seu carrinho de compras."
                    },
                    {
                      title: "Continue Navegando",
                      desc: "Continue navegando em nosso site até escolher todos os produtos que você deseja adquirir. Clique em 'Finalizar' para concluir sua compra."
                    },
                    {
                      title: "Faça Login ou Cadastro",
                      desc: "Entre com seu email e senha. Caso não for cadastrado, cadastre-se rapidamente clicando no link de 'Cadastro'."
                    },
                    {
                      title: "Escolha o Envio",
                      desc: "Escolha a forma de envio do produto. Trabalhamos com JadLog e Rodonaves para portas automáticas e Correios (Sedex) para demais produtos."
                    },
                    {
                      title: "Escolha a Forma de Pagamento",
                      desc: "Selecione a forma de pagamento mais conveniente para você (cartão de crédito, boleto, etc)."
                    },
                    {
                      title: "Pronto!",
                      desc: "Você adquiriu seu produto Inovari Automações! Aguarde a confirmação de pagamento e sua encomenda será enviada em até 5 dias úteis."
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
