import { Layout } from "@/components/layout/Layout";
import { RefreshCw, Clock, Package, DollarSign, AlertCircle, Phone, Check } from "lucide-react";

export default function Returns() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-amber-50 via-amber-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-wider bg-amber-100/50 px-4 py-2 rounded-full border border-amber-200">
              <RefreshCw className="w-4 h-4" />
              Política Flexível
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
              Trocas e <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">Devoluções</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Você tem direito a devolver ou trocar seu produto em até 7 dias. Conheça nossas condições
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
                  Solicitação de Troca ou Devolução
                </h2>
              </div>
              
              <div className="p-8 rounded-xl bg-amber-50 border border-amber-200 hover:border-amber-300 transition-colors">
                <p className="text-lg text-amber-900 leading-relaxed mb-4">
                  Toda solicitação de troca ou devolução deve ser comunicada ao nosso Atendimento para instruções detalhadas sobre o processo.
                </p>
                <div className="bg-white p-6 rounded-lg border border-amber-200 space-y-3">
                  <p className="font-semibold text-gray-900">📍 Entre em contato através de:</p>
                  <ul className="space-y-2 text-amber-900">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600" />
                      <span><span className="font-semibold">WhatsApp</span> - No rodapé do site</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600" />
                      <span><span className="font-semibold">Email</span> - No rodapé do site</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600" />
                      <span><span className="font-semibold">Página "Fale Conosco"</span> - Para mais informações</span>
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
                  Condições para Troca, Devolução ou Arrependimento
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-blue-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Prazo Máximo
                  </h3>
                  <p className="text-blue-900 leading-relaxed">
                    <span className="font-bold text-xl text-blue-600">7 dias</span> após o recebimento do produto
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-lg text-blue-900 mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Condições da Mercadoria
                  </h3>
                  <ul className="space-y-3 text-blue-900">
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Lacres intactos</span> - Do fabricante, sem violação</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Embalagem original</span> - Deve estar em perfeitas condições</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Todos os acessórios</span> - Completo conforme recebido</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Sem uso</span> - O produto não pode ter sido utilizado</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Caixa intacta</span> - Sem danos ou violações</span>
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
                  Envio para Troca, Devolução ou Arrependimento
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200 hover:border-cyan-300 transition-colors">
                  <h3 className="font-semibold text-lg text-cyan-900 mb-3">Custo do Frete</h3>
                  <p className="text-cyan-900 leading-relaxed">
                    O custo de frete para o retorno da mercadoria será de <span className="font-bold">responsabilidade da loja virtual</span>, não tendo custo adicional ao consumidor.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200 hover:border-cyan-300 transition-colors">
                  <h3 className="font-semibold text-lg text-cyan-900 mb-3">Prazo de Solicitação</h3>
                  <p className="text-cyan-900 leading-relaxed">
                    Sendo necessário que o consumidor solicite a troca, devolução ou direito de arrependimento no prazo máximo de <span className="font-bold">7 dias</span> após o recebimento da mercadoria.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cyan-50 border border-cyan-200 hover:border-cyan-300 transition-colors">
                  <h3 className="font-semibold text-lg text-cyan-900 mb-3">Fluxo de Envio</h3>
                  <p className="text-cyan-900 leading-relaxed">
                    O fluxo de envio será explicado por nossa equipe de atendimento, onde irá depender da quantidade e tamanho do produto que será retornado.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-900 mb-2">Importante - Inspeção de Condição</p>
                      <p className="text-yellow-900 text-sm">
                        Ao chegar o produto será analisado sua condição e caso seja constatado uso do produto, poderá ser recusado a troca ou devolução, sendo retornado o produto ao remetente.
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
                  Devolução do Valor para Cartão de Crédito
                </h2>
              </div>
              
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-200 hover:border-purple-300 transition-colors">
                <div className="space-y-4 text-purple-900">
                  <p className="leading-relaxed">
                    Após o recebimento do produto em nosso <span className="font-semibold">Centro de Distribuição</span> e aprovação da devolução ou troca mediante análise dos itens, enviaremos a solicitação de estorno para a administradora do cartão de crédito.
                  </p>
                  <p className="leading-relaxed">
                    A administradora de cartão terá o prazo para processar a requisição de acordo com a <span className="font-semibold">política de cada administradora de cartão de crédito</span>.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="text-sm font-semibold text-purple-900 mb-2">💡 Importante:</p>
                    <p className="text-sm">O valor estornado poderá ser devolvido em faturas futuras, de acordo com a política da administradora de cartão.</p>
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
                  Devolução do Valor - Boleto, PIX ou Transferência
                </h2>
              </div>
              
              <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-200 hover:border-indigo-300 transition-colors">
                <div className="space-y-4 text-indigo-900">
                  <p className="leading-relaxed">
                    A restituição do valor será processada após a aprovação da devolução mediante análise dos itens em nosso <span className="font-semibold">Centro de Distribuição</span> e será realizada através de <span className="font-semibold">reembolso em uma conta corrente ou poupança</span>.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <p className="font-semibold text-indigo-900 mb-2">📋 Dados Bancários Necessários</p>
                    <p className="text-sm text-indigo-900">
                      No momento da solicitação da troca ou devolução, você deverá informar os dados bancários para o reembolso ser realizado corretamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumo */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                <RefreshCw className="w-6 h-6" />
                Sua Satisfação é Nossa Prioridade
              </h3>
              <p className="text-amber-50 leading-relaxed">
                Queremos que você fique 100% satisfeito com seus produtos Inovari. Se por algum motivo não estiver satisfeito, temos uma política flexível e sem complicações para trocas e devoluções dentro de 7 dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
