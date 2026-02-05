import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Award, Wrench, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/home/CTA";

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-cyan-50 via-cyan-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 animate-bounce-slow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <div className="inline-flex items-center justify-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4 bg-cyan-100/50 px-4 py-2 rounded-full border border-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              Conheça nossa história
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Inovari <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">Automações</span>
            </h1>
            <p className="text-2xl text-cyan-600 font-semibold italic">
              "Na estrada da inovação, é a Inovari quem abre caminho."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
              Somos uma empresa brasileira, especializada em soluções de automação veicular.
              Desenvolvemos e fabricamos, com excelência e atenção aos detalhes, portas 
              automáticas para vans, Kombis e motorhomes.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-gradient-to-b from-cyan-600 to-cyan-700" />
                <h2 className="font-heading text-4xl font-bold text-gray-900">
                  Quem Somos
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  A Inovari Automações é detentora da <span className="font-semibold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">patente exclusiva da porta automática para vans</span> e lidera um mercado que exige tecnologia de ponta, confiabilidade e um atendimento verdadeiramente próximo.
                </p>
                <p>
                  Atendemos com foco e personalização donos de vans escolares, empresas com frotas, motoristas de turismo, transporte executivo e frotistas em todo o Brasil. Com sede em Campinas-SP, estamos sempre inovando para facilitar a rotina de quem vive na estrada.
                </p>
                <p>
                  A Inovari nasceu da união entre fé, conhecimento técnico e propósito. Acreditamos que <span className="font-semibold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">inovar vai além de desenvolver bons produtos</span> — é fazer com responsabilidade, verdade e respeito por quem confia no nosso trabalho.
                </p>
                <p className="text-xl font-semibold text-cyan-600 italic pt-4 border-l-4 border-cyan-600 pl-4">
                  "Porque inovar é, acima de tudo, abrir portas."
                </p>
              </div>
            </div>

            {/* Valores Rápidos */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              {[
                { icon: Target, label: "Propósito", desc: "Facilitar a rotina de quem vive na estrada com soluções que realmente funcionam" },
                { icon: Heart, label: "Compromisso", desc: "Entregar mais do que tecnologia: responsabilidade, verdade e respeito" },
                { icon: Wrench, label: "Inovação", desc: "Tecnologia de ponta criada por quem se importa com cada detalhe" }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-3 group hover:transform hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${200 + i * 100}ms` }}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">{item.label}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" style={{ animationDelay: '150ms' }}>
              <span className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-px bg-gradient-to-r from-cyan-600 to-transparent" />
                Nossa História
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Inovação que nasceu da <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">necessidade</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A INOVAR nasceu da observação diária de motoristas de van que 
                  enfrentavam o desgaste físico de abrir e fechar portas manualmente 
                  centenas de vezes por dia.
                </p>
                <p>
                  Desenvolvemos um sistema inteligente de automação que não só 
                  proporciona conforto, mas também reduz o desgaste da porta ao 
                  longo do tempo, agregando valor ao veículo.
                </p>
                <p>
                  Hoje, somos referência em automação de portas de van no Brasil, 
                  com centenas de veículos equipados e clientes satisfeitos em 
                  todo o país.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-3xl blur-2xl" />
              <div className="aspect-square bg-white rounded-3xl flex items-center justify-center border border-cyan-200 relative overflow-hidden shadow-xl">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-cyan-100/50 flex items-center justify-center animate-float">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-700 shadow-2xl flex items-center justify-center">
                      <span className="font-heading font-bold text-white text-2xl">INOVAR</span>
                    </div>
                  </div>
                </div>

                {/* Decorative bars */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-2">
                  <div className="w-1 h-20 bg-cyan-200/50 rounded-full" />
                  <div className="w-1 h-32 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-full shadow-lg" />
                  <div className="w-1 h-16 bg-cyan-400/50 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: "Nossa Missão",
                desc: "Proporcionar conforto, praticidade e segurança para motoristas e passageiros de vans através de soluções inovadoras de automação, melhorando a experiência de transporte no Brasil."
              },
              {
                icon: Eye,
                title: "Nossa Visão",
                desc: "Ser a principal referência em automação de veículos de transporte de passageiros no Brasil, reconhecida pela qualidade, inovação e excelência no atendimento ao cliente."
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="group bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl p-10 shadow-md hover:shadow-2xl border border-cyan-200/50 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${i === 0 ? 'bg-gradient-to-br from-cyan-600 to-cyan-700' : 'bg-gradient-to-br from-cyan-600 to-cyan-700'} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-cyan-500/50 transition-shadow`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
            <span className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-px bg-cyan-600" />
              Nossos Valores
              <span className="w-8 h-px bg-cyan-600" />
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              O que nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">move</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Qualidade",
                description: "Utilizamos componentes de alta qualidade para garantir durabilidade",
                gradient: true
              },
              {
                icon: Users,
                title: "Compromisso",
                description: "Atendimento personalizado e suporte técnico especializado",
                gradient: false
              },
              {
                icon: Wrench,
                title: "Inovação",
                description: "Constantemente aprimorando nossos produtos e processos",
                gradient: true
              },
              {
                icon: Heart,
                title: "Paixão",
                description: "Amor pelo que fazemos refletido em cada produto entregue",
                gradient: false
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-cyan-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${500 + index * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${value.gradient ? 'bg-gradient-to-br from-cyan-600 to-cyan-700 shadow-lg' : 'bg-gradient-to-br from-cyan-600 to-cyan-700'} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default About;
