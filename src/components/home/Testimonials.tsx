import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "João Silva",
    role: "Proprietário",
    company: "Transportes Silva",
    message: "Melhor investimento que fiz! Meus passageiros adoraram. Agora não preciso mais ficar abrindo a porta manualmente.",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Gerente Operacional",
    company: "Frota Premium",
    message: "Sistema confiável, instalação rápida e o suporte é excelente. Recomendo para todo mundo!",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    role: "Motorista",
    company: "Transportes Inteligentes",
    message: "Muito prático! Ganho muito tempo com essa automação. Qualidade muito boa.",
    rating: 5
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-50/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Clientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">Satisfeitos</span>
          </h2>
          <p className="text-lg text-gray-600">
            Veja o que nossos clientes falam sobre nosso sistema de automação
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500 group hover:border-cyan-200"
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Testimonial */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.message}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="pt-6 border-t border-gray-100">
                <p className="font-heading font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>

              {/* Avatar placeholder */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-lg opacity-50 group-hover:opacity-100 transition-opacity">
                {testimonial.name.charAt(0)}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <p className="text-center text-gray-600 mb-8 font-medium">
            Confie em números que falam por si
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-cyan-600">500+</p>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-cyan-600">1000+</p>
              <p className="text-gray-600">Vans Automatizadas</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-cyan-600">99.8%</p>
              <p className="text-gray-600">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
