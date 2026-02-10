import { useState, FormEvent, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useProducts } from "@/contexts/ProductContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";
import { Heart, Trash2, MapPin, CreditCard, ArrowLeft, Check, AlertCircle, Lock, Zap, Shield, Truck, Package, Loader, Gift, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { searchViaCEP } from "@/hooks/useViaCEP";

// Função para gerar UUID v4
function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

interface FormData {
  // Cliente
  name: string;
  email: string;
  phone: string;
  // Endereço
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  number: string;
  complement: string;
  // Pagamento
  paymentMethod: "cartao" | "pix";
  // Cartão
  cardNumber: string;
  cardName: string;
  cardValidity: string;
  cardCVV: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Checkout() {
  const { items, removeFromCart, total } = useCart();
  const { products, useCoupon } = useProducts();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    number: "",
    complement: "",
    paymentMethod: "cartao",
    cardNumber: "",
    cardName: "",
    cardValidity: "",
    cardCVV: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepError, setCepError] = useState<string | null>(null);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingTime, setShippingTime] = useState("");
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  // Coupon discount states
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  // Carregar dados do perfil quando usuário está logado
  useEffect(() => {
    if (user) {
      // Carregar dados salvos do usuário
      const saved = localStorage.getItem(`customer_${user.id}`);
      if (saved) {
        const customerData = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          name: customerData.name || "",
          email: user.email || "",
          phone: customerData.phone || "",
        }));
      } else {
        // Se não houver dados salvos, apenas preencher o email
        setFormData((prev) => ({
          ...prev,
          email: user.email || "",
        }));
      }
    }
  }, [user]);

  // Buscar endereço via ViaCEP
  const handleCepChange = async (value: string) => {
    const cleanCep = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, cep: cleanCep }));
    setCepError(null);

    if (cleanCep.length === 8) {
      setCepLoading(true);
      
      const address = await searchViaCEP(cleanCep);

      if (address) {
        setFormData((prev) => ({
          ...prev,
          street: address.street,
          neighborhood: address.neighborhood,
          city: address.city,
          state: address.state,
          complement: address.complement,
        }));

        // Calcular frete baseado no estado
        const shippingCosts: { [key: string]: { cost: number; time: string } } = {
          SP: { cost: 15.9, time: "2-3 dias úteis" },
          RJ: { cost: 18.5, time: "3-4 dias úteis" },
          MG: { cost: 19.9, time: "3-5 dias úteis" },
          BA: { cost: 29.9, time: "5-7 dias úteis" },
          RS: { cost: 24.9, time: "4-6 dias úteis" },
          PR: { cost: 17.5, time: "2-4 dias úteis" },
          SC: { cost: 22.5, time: "3-5 dias úteis" },
          PE: { cost: 28.5, time: "5-7 dias úteis" },
          CE: { cost: 29.9, time: "5-7 dias úteis" },
          GO: { cost: 26.5, time: "4-6 dias úteis" },
        };

        const shipping = shippingCosts[address.state] || {
          cost: 35.0,
          time: "7-10 dias úteis",
        };

        setShippingCost(shipping.cost);
        setShippingTime(shipping.time);
      } else {
        setCepError("CEP não encontrado. Verifique e tente novamente.");
        setFormData((prev) => ({
          ...prev,
          street: "",
          neighborhood: "",
          city: "",
          state: "",
          complement: "",
        }));
      }

      setCepLoading(false);
    }
  };

  // Aplicar cupom de desconto
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponMessage("Digite um código de cupom");
      setCouponApplied(false);
      return;
    }

    const result = useCoupon(couponCode);
    
    if (result.valid) {
      setCouponDiscount(result.discount || 0);
      setCouponMessage(result.message);
      setCouponApplied(true);
    } else {
      setCouponDiscount(0);
      setCouponMessage(result.message);
      setCouponApplied(false);
    }
  };

  // Remover cupom de desconto
  const handleRemoveCoupon = () => {
    setCouponCode("");
    setCouponDiscount(0);
    setCouponMessage("");
    setCouponApplied(false);
  };

  // Formatar telefone com máscara (XX) 9XXXX-XXXX ou (XX) XXXX-XXXX
  const handlePhoneChange = (value: string) => {
    const cleanPhone = value.replace(/\D/g, "");

    let formattedPhone = "";

    if (cleanPhone.length > 0) {
      if (cleanPhone.length <= 2) {
        // Apenas códígigo de área: (XX
        formattedPhone = `(${cleanPhone}`;
      } else if (cleanPhone.length <= 7) {
        // Até 7 dígitos: (XX) 9XXXX ou (XX) XXXX
        const areaCode = cleanPhone.substring(0, 2);
        const firstPart = cleanPhone.substring(2, 7);
        formattedPhone = `(${areaCode}) ${firstPart}`;
      } else {
        // Mais de 7 dígitos: (XX) 9XXXX-XXXX ou (XX) XXXX-XXXX
        const areaCode = cleanPhone.substring(0, 2);
        const firstPart = cleanPhone.substring(2, 7);
        const secondPart = cleanPhone.substring(7, 11);
        formattedPhone = `(${areaCode}) ${firstPart}-${secondPart}`;
      }
    }

    setFormData((prev) => ({ ...prev, phone: formattedPhone }));
  };

  // Validar campos obrigatórios
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validação de cliente
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";

    // Validação de endereço
    if (!formData.cep.trim()) newErrors.cep = "CEP é obrigatório";
    if (!formData.street.trim()) newErrors.street = "Rua é obrigatória";
    if (!formData.neighborhood.trim()) newErrors.neighborhood = "Bairro é obrigatório";
    if (!formData.city.trim()) newErrors.city = "Cidade é obrigatória";
    if (!formData.state.trim()) newErrors.state = "Estado é obrigatório";
    if (!formData.number.trim()) newErrors.number = "Número é obrigatório";

    // Validação de pagamento
    if (formData.paymentMethod === "cartao") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Número do cartão é obrigatório";
      if (!formData.cardName.trim()) newErrors.cardName = "Nome no cartão é obrigatório";
      if (!formData.cardValidity.trim()) newErrors.cardValidity = "Validade é obrigatória";
      if (!formData.cardCVV.trim()) newErrors.cardCVV = "CVV é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    // Simular envio de pedido
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Enriquecer items com categoria do produto
    const enrichedItems = items.map((item) => {
      const product = products.find((p) => p.id === item.id);
      return {
        ...item,
        category: product?.category || "Sem categoria",
      };
    });

    // Salvar pedido no localStorage
    const order = {
      id: generateUUID(),
      date: new Date().toISOString(),
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      address: {
        street: formData.street,
        neighborhood: formData.neighborhood,
        city: formData.city,
        state: formData.state,
        number: formData.number,
        complement: formData.complement,
        cep: formData.cep,
      },
      items: enrichedItems,
      subtotal: total,
      shipping: shippingCost,
      discount: couponDiscount,
      couponCode: couponCode || null,
      total: total + shippingCost - couponDiscount,
      paymentMethod: formData.paymentMethod,
      status: "pendente",
    };

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Se usuário está logado, salvar/atualizar dados do perfil automaticamente
    if (user) {
      const customerProfile = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        cpf: localStorage.getItem(`customer_${user.id}`) 
          ? JSON.parse(localStorage.getItem(`customer_${user.id}`) || "{}").cpf 
          : "",
      };
      localStorage.setItem(`customer_${user.id}`, JSON.stringify(customerProfile));
    }

    // Disparar evento personalizado para atualizar Dashboard
    window.dispatchEvent(new Event("ordersUpdated"));

    setLoading(false);
    setShowSuccessScreen(true);
    
    // Redirecionar para perfil após 4 segundos
    setTimeout(() => {
      navigate(user ? "/minha-conta" : "/");
    }, 4000);
  };

  const itemsSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = itemsSubtotal + shippingCost - couponDiscount;

  // Tela de sucesso animada
  if (showSuccessScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 flex items-center justify-center overflow-hidden">
        {/* Animação de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          {/* Ícone de sucesso com animação */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24">
              {/* Círculo externo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-spin" style={{ animationDuration: "3s" }} />
              
              {/* Círculo branco */}
              <div className="absolute inset-1 rounded-full bg-slate-900" />
              
              {/* Checkmark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="w-12 h-12 text-cyan-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Texto */}
          <h1 className="text-5xl font-black text-white mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Pedido Confirmado! 🎉
          </h1>
          
          <p className="text-xl text-cyan-100 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Seu pedido foi finalizado com sucesso
          </p>

          {/* Detalhes */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 mb-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-cyan-100">
                <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center">
                  <Check className="w-5 h-5 text-cyan-400" />
                </div>
                <span>Email de confirmação enviado</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-100">
                <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center">
                  <Check className="w-5 h-5 text-cyan-400" />
                </div>
                <span>Pedido aprovado para processamento</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-100">
                <div className="w-8 h-8 rounded-full bg-cyan-500/30 flex items-center justify-center">
                  <Check className="w-5 h-5 text-cyan-400" />
                </div>
                <span>Trace seu status em breve</span>
              </div>
            </div>
          </div>

          {/* Contador automático */}
          <p className="text-cyan-100 text-sm animate-fade-in" style={{ animationDelay: "0.8s" }}>
            ⏱️ Redirecionando em alguns segundos...
          </p>
        </div>

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50/30 to-gray-50 flex flex-col">
      <Header />
      
      
      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Premium */}
          <div className="mb-12 animate-fade-in">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold mb-6 transition-all group hover:gap-3"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              Voltar ao Carrinho
            </button>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-cyan-700 to-cyan-900 bg-clip-text text-transparent drop-shadow-sm">
                  Finalizar Compra
                </h1>
                <p className="text-gray-700 font-medium text-lg">Você está a um passo de receber seu pedido! ✨</p>
              </div>
              
              {/* Progress Bars */}
              <div className="flex gap-2 max-w-xs">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                      step <= 1
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center space-y-6 animate-bounce-slow">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center border-2 border-cyan-200/50 backdrop-blur-xl">
                  <Heart className="w-16 h-16 text-cyan-600 animate-pulse" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-2xl mb-2">Seu carrinho está vazio</p>
                  <p className="text-gray-600 mb-8 text-lg">Explore nossos produtos e adicione itens para começar sua compra</p>
                  <button
                    type="button"
                    onClick={() => navigate("/produtos")}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 hover:from-cyan-700 hover:via-cyan-800 hover:to-blue-800 text-white rounded-full font-bold text-lg transition-all hover:shadow-2xl active:scale-95 shadow-lg"
                  >
                    Explorar Produtos
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 1. Resumo do Carrinho - PREMIUM */}
                  <div className="group bg-gradient-to-br from-white via-cyan-50/20 to-white rounded-3xl p-8 border-2 border-cyan-200/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-300/80 animate-fade-in"
                    style={{ animationDelay: "0.1s" }}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-300/50 backdrop-blur-sm">
                        <Package className="w-8 h-8 text-cyan-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-gray-900">Seus Itens</h2>
                        <p className="text-gray-600 text-sm font-medium">{items.length} {items.length === 1 ? "item" : "itens"} no carrinho</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {items.map((item, idx) => (
                        <div 
                          key={item.id} 
                          className="flex gap-4 p-5 bg-gradient-to-r from-gray-50/80 via-cyan-50/30 to-transparent rounded-2xl border-2 border-gray-100/50 group/item hover:border-cyan-400/60 hover:bg-cyan-50/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
                          style={{ animationDelay: `${idx * 0.05}s` }}>
                          {/* Imagem */}
                          <div className="w-28 h-28 rounded-2xl overflow-hidden bg-white border-2 border-gray-200 flex-shrink-0 shadow-md relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover/item:scale-125 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </div>

                          {/* Detalhes */}
                          <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg group-hover/item:text-cyan-700 transition-colors">{item.name}</h4>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold border border-cyan-300/50">
                                  {item.quantity}x
                                </span>
                                <span className="text-gray-600 font-semibold">{formatCurrency(item.price)}</span>
                              </div>
                            </div>
                            <p className="text-cyan-600 font-black text-xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                              {formatCurrency(item.price * item.quantity)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="p-3 hover:bg-red-100/80 rounded-xl transition-all text-gray-400 hover:text-red-600 hover:scale-110 active:scale-95 backdrop-blur-sm"
                          >
                            <Trash2 className="w-6 h-6" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Dados do Cliente - PREMIUM */}
                  <div className="group bg-gradient-to-br from-white via-blue-50/20 to-white rounded-3xl p-8 border-2 border-blue-200/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-300/80 animate-fade-in"
                    style={{ animationDelay: "0.15s" }}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl border border-blue-300/50 backdrop-blur-sm">
                        <AlertCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-black text-gray-900">Seus Dados</h2>
                    </div>

                    {/* Aviso de usuário logado */}
                    {user && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl flex items-start gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-green-900">Você está logado!</p>
                          <p className="text-sm text-green-800 mt-1">
                            Seus dados foram carregados automaticamente. Se ainda não preencheu seu perfil, complete as informações abaixo.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-3 sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">1</span>
                            Nome Completo *
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="João Silva"
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${errors.name ? "border-red-400 bg-red-50/50" : "border-blue-200 bg-blue-50/30 focus:border-blue-500 focus:bg-blue-50/50"}`}
                          />
                          {errors.name && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.name}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">2</span>
                            Email *
                            {user && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Verificado</span>}
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => !user && setFormData((prev) => ({ ...prev, email: e.target.value }))}
                            placeholder="email@example.com"
                            readOnly={user ? true : false}
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${
                              user 
                                ? "border-green-300 bg-green-50/50 cursor-not-allowed" 
                                : errors.email ? "border-red-400 bg-red-50/50" : "border-blue-200 bg-blue-50/30 focus:border-blue-500 focus:bg-blue-50/50"
                            }`}
                          />
                          {user && (
                            <p className="text-xs text-green-600 font-semibold">Email não pode ser alterado (verificado no cadastro)</p>
                          )}
                          {errors.email && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">3</span>
                          Telefone *
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          placeholder="(19) 99691-2323"
                          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${errors.phone ? "border-red-400 bg-red-50/50" : "border-blue-200 bg-blue-50/30 focus:border-blue-500 focus:bg-blue-50/50"}`}
                        />
                        {errors.phone && (
                          <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 3. Endereço - PREMIUM */}
                  <div className="group bg-gradient-to-br from-white via-purple-50/20 to-white rounded-3xl p-8 border-2 border-purple-200/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-300/80 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-300/50 backdrop-blur-sm">
                        <MapPin className="w-8 h-8 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-black text-gray-900">Endereço de Entrega</h2>
                    </div>

                    <div className="space-y-5">
                      {/* CEP Input */}
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">
                          CEP * <span className="text-purple-600">Buscar</span>
                        </label>
                        <div className="flex gap-3">
                          <Input
                            type="text"
                            value={formData.cep}
                            onChange={(e) => {
                              const cleaned = e.target.value.replace(/\D/g, "");
                              setFormData((prev) => ({ ...prev, cep: cleaned }));
                              if (cleaned.length === 8) {
                                handleCepChange(cleaned);
                              }
                            }}
                            placeholder="12345-678"
                            maxLength={8}
                            disabled={cepLoading}
                            className={`flex-1 px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold disabled:opacity-60 ${errors.cep || cepError ? "border-red-400 bg-red-50/50" : "border-purple-200 bg-purple-50/30 focus:border-purple-500 focus:bg-purple-50/50"}`}
                          />
                        </div>
                        {cepLoading && (
                          <div className="flex items-center gap-2 text-purple-600 font-bold">
                            <Loader className="w-5 h-5 animate-spin" />
                            Buscando endereço...
                          </div>
                        )}
                        {cepError && (
                          <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {cepError}
                          </span>
                        )}
                        {errors.cep && (
                          <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.cep}
                          </span>
                        )}
                        {formData.state && shippingTime && !cepError && (
                          <div className="mt-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl text-sm backdrop-blur-sm">
                            <p className="text-green-700 font-black flex items-center gap-2 text-lg mb-2">
                              <Check className="w-6 h-6" />
                              Entrega em {shippingTime}
                            </p>
                            <p className="text-green-600 font-bold">Frete: {formatCurrency(shippingCost)}</p>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2 space-y-2">
                          <label className="block text-sm font-bold text-gray-700">Rua *</label>
                          <Input
                            type="text"
                            value={formData.street}
                            onChange={(e) => setFormData((prev) => ({ ...prev, street: e.target.value }))}
                            placeholder="Avenida Paulista"
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${errors.street ? "border-red-400 bg-red-50/50" : "border-purple-200 bg-purple-50/30 focus:border-purple-500 focus:bg-purple-50/50"}`}
                          />
                          {errors.street && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.street}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700">Bairro *</label>
                          <Input
                            type="text"
                            value={formData.neighborhood}
                            onChange={(e) => setFormData((prev) => ({ ...prev, neighborhood: e.target.value }))}
                            placeholder="Bela Vista"
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${errors.neighborhood ? "border-red-400 bg-red-50/50" : "border-purple-200 bg-purple-50/30 focus:border-purple-500 focus:bg-purple-50/50"}`}
                          />
                          {errors.neighborhood && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.neighborhood}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700">Número *</label>
                          <Input
                            type="text"
                            value={formData.number}
                            onChange={(e) => setFormData((prev) => ({ ...prev, number: e.target.value }))}
                            placeholder="123"
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${errors.number ? "border-red-400 bg-red-50/50" : "border-purple-200 bg-purple-50/30 focus:border-purple-500 focus:bg-purple-50/50"}`}
                          />
                          {errors.number && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.number}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700">Complemento (Apto, Bloco, etc)</label>
                        <Input
                          type="text"
                          value={formData.complement}
                          onChange={(e) => setFormData((prev) => ({ ...prev, complement: e.target.value }))}
                          placeholder="Apto 42"
                          className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 bg-purple-50/30 focus:border-purple-500 focus:bg-purple-50/50 transition-all backdrop-blur-sm font-semibold"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700">Cidade *</label>
                          <Input
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                            placeholder="São Paulo"
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${errors.city ? "border-red-400 bg-red-50/50" : "border-purple-200 bg-purple-50/30 focus:border-purple-500 focus:bg-purple-50/50"}`}
                          />
                          {errors.city && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.city}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700">Estado *</label>
                          <Input
                            type="text"
                            value={formData.state}
                            onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value.toUpperCase() }))}
                            placeholder="SP"
                            maxLength={2}
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all backdrop-blur-sm font-semibold ${errors.state ? "border-red-400 bg-red-50/50" : "border-purple-200 bg-purple-50/30 focus:border-purple-500 focus:bg-purple-50/50"}`}
                          />
                          {errors.state && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.state}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Pagamento - PREMIUM */}
                  <div className="group bg-gradient-to-br from-white via-amber-50/20 to-white rounded-3xl p-8 border-2 border-amber-200/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-amber-300/80 animate-fade-in"
                    style={{ animationDelay: "0.25s" }}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-300/50 backdrop-blur-sm">
                        <Lock className="w-8 h-8 text-amber-600" />
                      </div>
                      <h2 className="text-3xl font-black text-gray-900">Pagamento Seguro</h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-8 bg-gradient-to-r from-amber-100/50 to-orange-100/50 p-1.5 rounded-2xl border border-amber-200/50 backdrop-blur-sm">
                      {["cartao", "pix"].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: method as "cartao" | "pix" }))}
                          className={`flex-1 py-4 px-6 font-bold rounded-xl transition-all duration-300 ${
                            formData.paymentMethod === method
                              ? "bg-white text-amber-600 shadow-lg border-2 border-amber-300"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          {method === "cartao" ? "💳 Cartão" : "🔐 PIX"}
                        </button>
                      ))}
                    </div>

                    {/* Cartão de Crédito */}
                    {formData.paymentMethod === "cartao" && (
                      <div className="space-y-5 animate-fade-in">
                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700">Número do Cartão *</label>
                          <Input
                            type="text"
                            value={formData.cardNumber}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16),
                              }))
                            }
                            placeholder="1234 5678 9012 3456"
                            maxLength={16}
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all font-mono tracking-wider text-lg backdrop-blur-sm ${errors.cardNumber ? "border-red-400 bg-red-50/50" : "border-amber-200 bg-amber-50/30 focus:border-amber-500 focus:bg-amber-50/50"}`}
                          />
                          {errors.cardNumber && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.cardNumber}
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-bold text-gray-700">Nome Impresso no Cartão *</label>
                          <Input
                            type="text"
                            value={formData.cardName}
                            onChange={(e) => setFormData((prev) => ({ ...prev, cardName: e.target.value.toUpperCase() }))}
                            placeholder="JOAO SILVA"
                            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all uppercase font-semibold backdrop-blur-sm ${errors.cardName ? "border-red-400 bg-red-50/50" : "border-amber-200 bg-amber-50/30 focus:border-amber-500 focus:bg-amber-50/50"}`}
                          />
                          {errors.cardName && (
                            <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.cardName}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">Validade (MM/YY) *</label>
                            <Input
                              type="text"
                              value={formData.cardValidity}
                              onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, "");
                                if (value.length >= 2) {
                                  value = value.slice(0, 2) + "/" + value.slice(2, 4);
                                }
                                setFormData((prev) => ({ ...prev, cardValidity: value }));
                              }}
                              placeholder="12/25"
                              maxLength={5}
                              className={`w-full px-5 py-4 rounded-2xl border-2 transition-all font-mono text-lg backdrop-blur-sm ${errors.cardValidity ? "border-red-400 bg-red-50/50" : "border-amber-200 bg-amber-50/30 focus:border-amber-500 focus:bg-amber-50/50"}`}
                            />
                            {errors.cardValidity && (
                              <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.cardValidity}
                              </span>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">CVV *</label>
                            <Input
                              type="text"
                              value={formData.cardCVV}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  cardCVV: e.target.value.replace(/\D/g, "").slice(0, 3),
                                }))
                              }
                              placeholder="123"
                              maxLength={3}
                              className={`w-full px-5 py-4 rounded-2xl border-2 transition-all font-mono text-lg backdrop-blur-sm ${errors.cardCVV ? "border-red-400 bg-red-50/50" : "border-amber-200 bg-amber-50/30 focus:border-amber-500 focus:bg-amber-50/50"}`}
                            />
                            {errors.cardCVV && (
                              <span className="text-red-600 text-sm font-bold flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {errors.cardCVV}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PIX */}
                    {formData.paymentMethod === "pix" && (
                      <div className="text-center py-12 bg-gradient-to-br from-cyan-50/80 via-blue-50/50 to-transparent rounded-2xl border-2 border-cyan-300/50 backdrop-blur-sm animate-fade-in">
                        <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-cyan-200/50 to-blue-200/50 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-cyan-300/50 backdrop-blur-sm">
                          <div className="text-8xl animate-bounce">📱</div>
                        </div>
                        <p className="text-gray-900 font-black text-2xl mb-6">Código PIX Copia e Cola</p>
                        <div className="bg-white border-2 border-cyan-400 p-6 rounded-2xl mb-6 text-xs text-gray-700 break-all font-mono max-w-md mx-auto shadow-lg">
                          00020126560014br.gov.bcb.brcode0136123e4567-e12b-12d1-a456-426652170000520400005303986540510.005802BR5913Maria de Oliveira6009SAO PAULO62410503***63047D3D
                        </div>
                        <p className="text-gray-600 text-lg max-w-md mx-auto font-semibold">
                          Seu código está pronto! Abra seu banco e pague agora mesmo.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 5. Cupom de Desconto - PREMIUM */}
                  <div className="group bg-gradient-to-br from-white via-green-50/20 to-white rounded-3xl p-8 border-2 border-green-200/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-green-300/80 animate-fade-in"
                    style={{ animationDelay: "0.35s" }}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-300/50 backdrop-blur-sm">
                        <Gift className="w-8 h-8 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-black text-gray-900">Cupom de Desconto</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Input
                          type="text"
                          value={couponCode}
                          onChange={(e) => {
                            setCouponCode(e.target.value.toUpperCase());
                            setCouponMessage("");
                          }}
                          onKeyPress={(e) => e.key === "Enter" && handleApplyCoupon()}
                          placeholder="Digite o código do cupom"
                          disabled={couponApplied}
                          className="flex-1 px-5 py-4 rounded-2xl border-2 border-green-200 bg-green-50/30 focus:border-green-500 focus:bg-green-50/50 transition-all backdrop-blur-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        {!couponApplied ? (
                          <button
                            type="button"
                            onClick={handleApplyCoupon}
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all active:scale-95 hover:shadow-lg shadow-md border border-green-400/50 flex items-center gap-2"
                          >
                            <Zap className="w-5 h-5" />
                            Aplicar
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={handleRemoveCoupon}
                            className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold rounded-2xl transition-all active:scale-95 hover:shadow-lg shadow-md border border-red-400/50 flex items-center gap-2"
                          >
                            <X className="w-5 h-5" />
                            Remover
                          </button>
                        )}
                      </div>

                      {couponMessage && (
                        <div className={`p-4 rounded-2xl border-2 font-bold flex items-center gap-3 ${
                          couponApplied 
                            ? "bg-green-50/80 border-green-300/50 text-green-700" 
                            : "bg-red-50/80 border-red-300/50 text-red-700"
                        }`}>
                          {couponApplied ? (
                            <Check className="w-5 h-5 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          )}
                          {couponMessage}
                        </div>
                      )}

                      {couponApplied && couponDiscount > 0 && (
                        <div className="bg-gradient-to-r from-green-100/80 to-emerald-100/80 border-2 border-green-300/50 rounded-2xl p-4 text-center">
                          <p className="text-sm text-gray-700 font-semibold mb-2">Desconto Aplicado</p>
                          <p className="text-3xl font-black text-green-600">{formatCurrency(couponDiscount)}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botão Finalizar */}
                  <button
                    type="submit"
                    disabled={loading || items.length === 0}
                    className="w-full bg-gradient-to-r from-cyan-600 via-cyan-700 via-blue-700 to-purple-700 hover:from-cyan-700 hover:via-cyan-800 hover:via-blue-800 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl transition-all active:scale-95 border-2 border-white/50 group flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>Processando Pedido...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-6 h-6" />
                        <span>Confirmar Pedido Agora</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Resumo Lateral - PREMIUM */}
              <div className="lg:col-span-1">
                <div className="rounded-3xl sticky top-40 space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  {/* Cartão Principal */}
                  <div className="bg-gradient-to-br from-white via-gradient-to-cyan to-white rounded-3xl p-8 border-2 border-cyan-300/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <h3 className="text-3xl font-black text-gray-900 mb-8">Resumo Final</h3>

                    <div className="space-y-6 border-t-2 border-gray-200 pt-6">
                      <div className="flex justify-between items-end">
                        <span className="text-gray-700 font-bold text-lg">Subtotal</span>
                        <span className="font-black text-gray-900 text-2xl">{formatCurrency(itemsSubtotal)}</span>
                      </div>

                      {shippingCost > 0 && (
                        <div className="flex justify-between items-end">
                          <span className="text-gray-700 font-bold text-lg flex items-center gap-2">
                            <Truck className="w-5 h-5" />
                            Frete
                          </span>
                          <span className="font-black text-gray-900 text-2xl">{formatCurrency(shippingCost)}</span>
                        </div>
                      )}

                      {couponDiscount > 0 && (
                        <div className="flex justify-between items-end text-green-600">
                          <span className="font-bold text-lg flex items-center gap-2">
                            <Gift className="w-5 h-5" />
                            Desconto
                          </span>
                          <span className="font-black text-2xl">-{formatCurrency(couponDiscount)}</span>
                        </div>
                      )}

                      <div className="border-t-2 border-gray-200 pt-6 flex justify-between items-end">
                        <span className="font-black text-gray-900 text-xl">Total a Pagar</span>
                        <div className="space-y-1 text-right">
                          <span className="text-4xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {formatCurrency(finalTotal)}
                          </span>
                          <p className="text-xs font-bold text-cyan-600">em até 12x sem juros</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Segurança */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-300/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="p-3 bg-green-500/20 rounded-2xl flex-shrink-0">
                        <Shield className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <p className="font-black text-green-900 text-lg mb-2">Compra 100% Segura</p>
                        <p className="text-green-700 font-semibold text-sm">Seus dados estão protegidos com criptografia SSL de 256 bits</p>
                      </div>
                    </div>
                  </div>

                  {/* Entrega */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-300/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="p-3 bg-blue-500/20 rounded-2xl flex-shrink-0">
                        <Truck className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-black text-blue-900 text-lg mb-2">Entrega Rápida</p>
                        <p className="text-blue-700 font-semibold text-sm">Entregamos em todo Brasil com rastreamento em tempo real</p>
                      </div>
                    </div>
                  </div>

                  {/* Garantia */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-300/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="p-3 bg-purple-500/20 rounded-2xl flex-shrink-0">
                        <Check className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-black text-purple-900 text-lg mb-2">Garantia Completa</p>
                        <p className="text-purple-700 font-semibold text-sm">Devoluções e trocas em até 30 dias sem complicações</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
