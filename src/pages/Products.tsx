import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/contexts/ProductContext";
import { CATEGORY_LOGOS } from "@/data/brandLogos";
import { Package, Zap, ShoppingCart, ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/utils";

const Products = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [addedToCart, setAddedToCart] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Define categories and subcategories structure
  const categoryStructure: Record<string, { label: string; icon: string; subcategories: string[] }> = {
    "citroen-jumper": { 
      label: "Citroen - Jumper", 
      icon: "🚐",
      subcategories: ["Com Sensor", "Sem Sensor", "ABNT"]
    },
    "citroen-jumpy": {
      label: "Citroen - Jumpy",
      icon: "🚐",
      subcategories: ["Com Sensor", "Sem Sensor"]
    },
    "fiat-ducato": {
      label: "Fiat - Ducato",
      icon: "🚐",
      subcategories: ["Com Sensor", "Sem Sensor", "ABNT"]
    },
    "fiat-scudo": {
      label: "Fiat Scudo",
      icon: "🚐",
      subcategories: ["Com Sensor", "Sem Sensor"]
    },
    "ford-transit": {
      label: "Ford - Transit",
      icon: "🚐",
      subcategories: ["Modelo 2015 em diante", "Modelo até 2014"]
    },
    "iveco-daily": {
      label: "Iveco - Daily",
      icon: "🚐",
      subcategories: ["Com Sensor", "Sem Sensor", "ABNT"]
    },
    "kia-besta": {
      label: "Kia - Besta",
      icon: "🚐",
      subcategories: ["Com Sensor", "ABNT"]
    },
    "mercedes-sprinter": {
      label: "Mercedes - Sprinter",
      icon: "🚐",
      subcategories: ["Modelo 2013 em diante", "Modelo até 2012"]
    },
    "peugeot-boxer": {
      label: "Peugeot - Boxer",
      icon: "🚐",
      subcategories: ["Com Sensor", "Sem Sensor"]
    },
    "peugeot-expert": {
      label: "Peugeot Expert",
      icon: "🚐",
      subcategories: ["Com Sensor", "Sem Sensor"]
    },
    "renault-master": {
      label: "Renault - Master",
      icon: "🚐",
      subcategories: ["Modelo 2014 em diante", "Modelo até 2013"]
    },
    "vw-kombi": {
      label: "Volkswagen - Kombi",
      icon: "🚐",
      subcategories: ["JAC E-JV12", "JAC E-JV12 ABNT", "JAC E-JV12 com sensor", "JAC E-JV12 sem sensor"]
    },
  };

  const otherCategories = [
    { id: "completo", label: "Kit Completo", icon: "🏆" },
    { id: "simples", label: "Kit Simples", icon: "⚡" },
    { id: "consumivel", label: "Consumíveis & Peças", icon: "🔧" },
  ];

  const filteredProducts = 
    selectedCategory === "all" 
      ? products 
      : selectedSubcategory !== "all"
        ? products.filter(p => p.category === selectedCategory && p.subcategory === selectedSubcategory)
        : products.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Catálogo Completo</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white">
              Nossos Produtos
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Conheça nossa linha completa de kits de automação e componentes de qualidade premium
            </p>
          </div>
        </div>
      </section>

      {/* Products Section with Sidebar */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-cyan-600" />
                  <h2 className="font-heading text-lg font-bold text-gray-900">Filtros</h2>
                </div>

                {/* Other Categories */}
                <div className="mb-8 pb-8 border-b-2 border-gray-200">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Produtos</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedSubcategory("all");
                      }}
                      className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                        selectedCategory === "all"
                          ? "bg-cyan-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      📦 Todos os Produtos
                    </button>
                    {otherCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSelectedSubcategory("all");
                        }}
                        className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                          selectedCategory === cat.id && selectedSubcategory === "all"
                            ? "bg-cyan-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {cat.icon} {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Door Categories */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Portas Automáticas</h3>
                  <div className="space-y-1">
                    {Object.entries(categoryStructure).map(([key, catData]) => (
                      <div key={key}>
                        <button
                          onClick={() => {
                            setExpandedCategory(expandedCategory === key ? null : key);
                            setSelectedCategory(key);
                            setSelectedSubcategory("all");
                          }}
                          className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-300 font-medium flex items-center justify-between gap-3 ${
                            selectedCategory === key && selectedSubcategory === "all"
                              ? "bg-cyan-100 text-cyan-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {CATEGORY_LOGOS[key] ? (
                              <img 
                                src={CATEGORY_LOGOS[key]} 
                                alt={catData.label}
                                className="h-6 w-6 object-contain"
                              />
                            ) : (
                              <span>{catData.icon}</span>
                            )}
                            <span>{catData.label}</span>
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform flex-shrink-0 ${
                              expandedCategory === key ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        {expandedCategory === key && (
                          <div className="ml-4 mt-2 space-y-1 border-l-2 border-cyan-200 pl-0">
                            {catData.subcategories.map((subcat) => (
                              <button
                                key={subcat}
                                onClick={() => {
                                  setSelectedCategory(key);
                                  setSelectedSubcategory(subcat);
                                }}
                                className={`w-full text-left px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium ${
                                  selectedSubcategory === subcat
                                    ? "bg-cyan-600 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`}
                              >
                                {subcat}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Products Grid */}
            <div className="lg:col-span-3">
              {/* Products Count */}
              <div className="mb-12 flex items-center justify-between">
                <div>
                  <p className="text-gray-600">
                    Mostrando <span className="font-bold text-cyan-600">{filteredProducts.length}</span> produtos
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-300 h-full flex flex-col">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          <Zap className="w-3 h-3" />
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Image Area */}
                    <Link to={`/produto/${product.id}`} className="h-56 bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center overflow-hidden relative cursor-pointer group/img">
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-5 right-5 w-32 h-32 bg-white/20 rounded-full blur-xl" />
                      </div>
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="relative w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                      />
                    </Link>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <Link to={`/produto/${product.id}`}>
                        <h3 className="font-heading font-bold text-gray-900 mb-2 line-clamp-2 hover:text-cyan-600 transition-colors cursor-pointer">
                          {product.name}
                        </h3>
                      </Link>
                      
                      {/* Categoria */}
                      <div className="mb-3 flex flex-wrap gap-1">
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

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {product.shortDescription}
                      </p>

                      {/* Price */}
                      <div className="mb-4 pb-4 border-t border-gray-100">
                        <div className="flex items-baseline gap-2">
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-xs font-medium">
                              {formatCurrency(product.originalPrice)}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-cyan-600">
                            {formatCurrency(product.price)}
                          </span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                              quantity: 1,
                              category: product.category || "",
                            });
                            setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
                            setTimeout(() => {
                              setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
                            }, 2000);
                          }}
                          className={`w-full py-2 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                            addedToCart[product.id]
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white shadow-md hover:shadow-lg"
                          }`}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          {addedToCart[product.id] ? "✓ Adicionado" : "Adicionar ao Carrinho"}
                        </button>
                        <Link to={`/produto/${product.id}`} className="block">
                          <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-full py-2 transition-all duration-300">
                            Ver Detalhes
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Hover Border */}
                    <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg font-medium">Nenhum produto encontrado nesta categoria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
