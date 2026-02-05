import { CheckCircle2, Truck, Wrench, Award, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Compatível com todos os modelos",
    description: "Funciona com praticamente todas as vans comerciais do mercado brasileiro"
  },
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description: "Equipe especializada realiza a instalação sem danificar seu veículo"
  },
  {
    icon: Shield,
    title: "Sensor de Segurança",
    description: "Detecta obstáculos e reverte automaticamente para evitar acidentes"
  },
  {
    icon: Award,
    title: "Garantia 12 meses",
    description: "Proteção total com garantia de fábrica e suporte técnico"
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Receba seu kit em até 48h no interior de SP"
  },
  {
    icon: CheckCircle2,
    title: "Suporte 24h",
    description: "Time de especialistas sempre pronto para ajudar"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-50/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-600" />
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Por que nos escolher</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            A Solução Completa para Automação de Vans
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Somos mais que um produto, somos um parceiro no sucesso do seu negócio. 
            Oferecemos qualidade, segurança e inovação em um único pacote.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-500"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 font-heading text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-bl-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Content */}
            <div className="text-white space-y-6">
              <h3 className="font-heading text-3xl font-bold">
                Mais de 500 clientes em todo Brasil
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 mt-2 flex-shrink-0" />
                  <span className="text-cyan-50">Implementação em frota com desconto especial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 mt-2 flex-shrink-0" />
                  <span className="text-cyan-50">Treinamento gratuito para sua equipe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 mt-2 flex-shrink-0" />
                  <span className="text-cyan-50">Suporte técnico contínuo via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-300 mt-2 flex-shrink-0" />
                  <span className="text-cyan-50">Programa de indicação com comissão</span>
                </li>
              </ul>
            </div>

            {/* Decorative element */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-xs aspect-square">
                <div className="absolute inset-0 bg-white/10 rounded-3xl border-2 border-white/20 backdrop-blur-sm" />
                <div className="absolute inset-12 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-2xl" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <Award className="w-24 h-24 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
