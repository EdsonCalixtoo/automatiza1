import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, Zap, Shield } from "lucide-react";
import { useProducts } from "@/contexts/ProductContext";
import { formatCurrency } from "@/lib/utils";

export function ProductsPreview() {
  const { products } = useProducts();
  const mainProducts = products.filter(p => p.category?.includes("Kits") || p.category === "completo" || p.category === "simples").slice(0, 2);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-cyan-600 font-bold text-sm uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            Nossos Produtos
            <Zap className="w-4 h-4" />
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mt-6 text-gray-900">
            Kits de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">Automação</span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Escolha a solução perfeita para sua van. Dois kits premium desenvolvidos para máxima qualidade e confiabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mainProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2 ${
                index === 0 ? 'border-cyan-500/50 md:scale-105' : 'border-gray-100 hover:border-cyan-200'
              }`}
            >
              {product.badge && (
                <div className="absolute top-6 right-6 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    <Zap className="w-4 h-4" />
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Image area */}
              <div className="relative h-72 flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-600">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="relative w-full h-full object-contain group-hover:scale-125 transition-transform duration-700 p-10 drop-shadow-lg"
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider mb-1">
                      {index === 0 ? '🏆 Premium' : '⚡ Essencial'}
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    
                    {/* Categoria */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.category && (
                        <span className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {product.category}
                        </span>
                      )}
                      {product.subcategory && (
                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {product.subcategory}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Features */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <ul className="space-y-3">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex-shrink-0">
                          <Check className="w-3 h-3 text-white font-bold" />
                        </span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm font-medium">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                  <div className="flex flex-col">
                    <span className="font-heading text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-500">
                      {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-green-600 font-semibold mt-1">
                        Economize {formatCurrency(product.originalPrice - product.price)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link to={`/produto/${product.id}`} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-bold py-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                      Ver Detalhes Completos
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-2 justify-center mt-4 text-xs text-gray-500">
                  <Shield className="w-4 h-4 text-cyan-600" />
                  {product.warranty}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/produtos">
            <Button className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-bold py-6 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              Ver Todos os Produtos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
