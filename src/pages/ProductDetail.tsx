import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { ArrowLeft, Check, Shield, Truck, MessageCircle, Phone, Sparkles, Star, Zap, Award, Users, Video, Lightbulb, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Produto não encontrado</h1>
          <Link to="/produtos">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Produtos
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero Header */}
      <div className="pt-28 pb-12 bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/produtos" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Produtos</span>
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section with Gallery */}
            <div className="space-y-6 sticky top-32">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl overflow-hidden border-2 border-cyan-100 shadow-2xl group">
                {product.badge && (
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg animate-pulse">
                      <Sparkles className="w-4 h-4" />
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <div className="aspect-square flex items-center justify-center py-20 px-8 bg-gradient-to-b from-cyan-50 to-white relative overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative">
                      <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all">
                        <div className="w-40 h-40 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Zap className="w-20 h-20 text-white/60" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Trust Badges */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-2 flex-wrap">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-semibold text-cyan-700 border border-cyan-100 flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 4.9/5 (327)
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-semibold text-cyan-700 border border-cyan-100 flex items-center gap-1 shadow-lg">
                    <Award className="w-4 h-4" /> Premium
                  </div>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl border-2 transition-all overflow-hidden bg-gradient-to-br from-gray-50 to-white flex items-center justify-center ${
                      selectedImage === idx 
                        ? "border-cyan-600 shadow-lg" 
                        : "border-gray-200 hover:border-cyan-300"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white/70" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Video Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all group">
                <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Vídeo de Instalação
              </button>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Category */}
              <div>
                <span className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                  {product.category === "completo" ? "🏆 Kit Completo" : 
                   product.category === "simples" ? "⚡ Kit Simples" : "🔧 Acessório"}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg">{product.description}</p>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-end gap-3">
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">
                        R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    )}
                    <span className="text-5xl font-bold text-cyan-600">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold">
                    ou em até <span className="text-cyan-600 text-lg">12x de R$ {(product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-cyan-600" />
                  O que está incluso:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all">
                      <span className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white border-2 border-gray-200 rounded-xl p-2 w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-cyan-100 transition-colors font-bold text-gray-900"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold text-gray-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-cyan-100 transition-colors font-bold text-gray-900"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/5519989429972" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Comprar pelo WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+5519989429972" className="w-full">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full rounded-xl font-bold text-lg border-2 hover:bg-gray-50"
                    >
                      <Phone className="w-5 h-5" />
                      Ligar Agora
                    </Button>
                  </a>
                </div>
              </div>

              {/* Trust Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border-2 border-blue-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{product.warranty}</p>
                    <p className="text-xs text-gray-600">Garantia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border-2 border-green-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Envio Seguro</p>
                    <p className="text-xs text-gray-600">Brasil todo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 flex items-center gap-3">
            <span className="w-1 h-12 bg-gradient-to-b from-cyan-600 to-cyan-500 rounded-full" />
            Comparação de Modelos
          </h2>

          <div className="overflow-x-auto bg-white rounded-2xl border-2 border-gray-200 shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <th className="px-6 py-4 text-left font-bold text-lg">Características</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">ABNT</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">COM SENSOR</th>
                  <th className="px-6 py-4 text-center font-bold text-lg">SEM SENSOR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Acionador",
                  "Fixação Cremalheira",
                  "Central",
                  "Suporte da Coluna",
                  "Controle Remoto",
                  "Botão no Painel",
                  "Sinal Sonoro",
                  "Chicote com Sensor",
                  "Sensor Antiesmagamento",
                  "Sensor Antesmagamento",
                  "Borda Sensível Antiesmagamento",
                  "Proteção Cremalheira",
                  "Sinais Luminosos",
                  "Sensor Van Estacionada",
                  "Adesivos Conforme Norma ABNT",
                ].map((feature, idx) => {
                  const abnt = true;
                  const comSensor = true;
                  const semSensor = idx < 9 ? true : (idx === 8 ? false : idx === 10 ? false : idx === 11 ? false : idx === 12 ? false : idx === 13 ? false : idx === 14 ? false : true);
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r border-gray-200">
                        {feature}
                      </td>
                      <td className="px-6 py-4 text-center border-r border-gray-200">
                        {abnt ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-gray-400 font-bold">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-r border-gray-200">
                        {comSensor ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-gray-400 font-bold">✕</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {semSensor ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-gray-400 font-bold">✕</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Legenda */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Incluído</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 font-bold">✕</span>
              <span className="text-gray-700">Não incluído</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 flex items-center gap-3">
            <span className="w-1 h-10 bg-gradient-to-b from-cyan-600 to-cyan-500 rounded-full" />
            O Que Clientes Dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "João Silva", role: "Proprietário de Van", rating: 5, text: "Produto excelente! Instalação rápida e funciona perfeitamente." },
              { name: "Maria Santos", role: "Transportadora", rating: 5, text: "Melhorou muito minha produtividade. Muito bom mesmo!" },
              { name: "Carlos Oliveira", role: "Profissional Autônomo", rating: 5, text: "Suporte impecável, produto de qualidade superior." },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-cyan-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 font-medium">{review.text}</p>
                <div className="border-t-2 border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-cyan-600" />
              <span className="font-semibold">+1.200 clientes satisfeitos</span>
            </p>
          </div>
        </div>
      </section>

      {/* Garantia e Suporte Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 flex items-center gap-3">
            <span className="w-1 h-12 bg-gradient-to-b from-cyan-600 to-cyan-500 rounded-full" />
            Garantia e Suporte
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border-2 border-cyan-300 p-10 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">12 Meses de Garantia</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Cobertura completa de fábrica com suporte técnico para todo o Brasil. Sua tranquilidade é nossa prioridade.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-cyan-300 p-10 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suporte Completo</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nossa equipe está pronta para te ajudar com qualquer dúvida sobre instalação ou uso do produto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 flex items-center gap-3">
            <span className="w-1 h-12 bg-gradient-to-b from-cyan-600 to-cyan-500 rounded-full" />
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Serve para outros modelos de van?",
                a: "Não, este modelo é específico para o veículo indicado. Temos soluções personalizadas para cada modelo de van."
              },
              {
                q: "A instalação é complicada?",
                a: "Não! Temos todos os vídeos no site explicando como instalar. É fácil e rápido. Caso prefira, temos uma ampla rede de técnicos parceiros aptos para instalar sua Porta Automática em todo Brasil."
              },
              {
                q: "É seguro?",
                a: "Sim! Utilizamos os melhores materiais na produção. Nossas portas contam com sensor antiesmagamento e 12 meses de garantia."
              },
              {
                q: "Posso devolver?",
                a: "Se não ficar satisfeito com nosso produto no prazo de 30 dias, devolvemos seu dinheiro (consulte condições)."
              },
            ].map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                className="w-full bg-white rounded-2xl border-2 border-gray-200 hover:border-cyan-400 transition-all text-left overflow-hidden shadow-md hover:shadow-lg"
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.q}</h3>
                  <ChevronDown className={`w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`} />
                </div>
                
                {expandedFAQ === idx && (
                  <div className="px-6 pb-6 border-t-2 border-gray-100 bg-cyan-50">
                    <p className="text-gray-700 text-base leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Garanta Mais Conforto e Praticidade
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Transforme a forma como você trabalha e ganhe mais tempo e segurança com a Porta Automática para Vans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5519989429972" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button 
                size="lg"
                className="w-full bg-white text-cyan-600 hover:bg-gray-100 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar Agora
              </Button>
            </a>
            <a href="tel:+5519989429972" className="flex-1 sm:flex-none">
              <Button 
                variant="outline"
                size="lg"
                className="w-full text-white border-2 border-white hover:bg-white/10 rounded-xl font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <span className="w-1 h-10 bg-gradient-to-b from-cyan-600 to-cyan-500 rounded-full" />
            Produtos Relacionados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link 
                key={item.id} 
                to={`/produto/${item.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-cyan-400"
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-600">
                      R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <ArrowLeft className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform rotate-180" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
