import { Zap, Shield, Wrench, Clock, Settings, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Abertura Rápida",
    description: "Sistema inteligente que abre e fecha a porta em apenas 3-4 segundos",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Sensor anti-esmagamento que detecta obstáculos e reverte automaticamente",
  },
  {
    icon: Wrench,
    title: "Fácil Instalação",
    description: "Instalação profissional sem necessidade de modificações estruturais na van",
  },
  {
    icon: Clock,
    title: "Durabilidade",
    description: "Componentes de alta qualidade projetados para uso intensivo diário",
  },
  {
    icon: Settings,
    title: "Compatibilidade",
    description: "Funciona com a maioria das vans do mercado brasileiro",
  },
  {
    icon: Award,
    title: "Garantia",
    description: "12 meses de garantia com suporte técnico especializado",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
            <span className="w-8 h-px bg-primary" />
            Benefícios
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Por que escolher nosso sistema de automação?
          </h2>
          <p className="text-muted-foreground mt-4">
            Desenvolvemos um equipamento que agrega valor ao seu veículo e reduz 
            o desgaste da porta ao longo do tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-primary/20 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-green">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
