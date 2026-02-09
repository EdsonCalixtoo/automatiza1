import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, User, LogOut, Eye, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { formatCurrency } from "@/lib/utils";

interface Order {
  id: string;
  date: string;
  items: Array<{ id: string; name: string; quantity: number; price: number }>;
  total: number;
  paymentMethod: string;
  status: "pendente" | "confirmado" | "enviado" | "entregue" | "cancelado";
  customer: { name: string; email: string; phone: string };
}

interface CustomerProfile {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "pendente":
      return "bg-yellow-100 text-yellow-800";
    case "confirmado":
      return "bg-blue-100 text-blue-800";
    case "enviado":
      return "bg-purple-100 text-purple-800";
    case "entregue":
      return "bg-green-100 text-green-800";
    case "cancelado":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "pendente":
      return "🕐 Pendente";
    case "confirmado":
      return "✅ Confirmado";
    case "enviado":
      return "📦 Enviado";
    case "entregue":
      return "🎉 Entregue";
    case "cancelado":
      return "❌ Cancelado";
    default:
      return status;
  }
};

export default function CustomerArea() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"orders" | "profile">("orders");
  const [isEditing, setIsEditing] = useState(false);
  
  // Estado do cliente - começa vazio e carrega do localStorage
  const [customer, setCustomer] = useState<CustomerProfile>({
    name: "",
    email: user?.email || "",
    phone: "",
    cpf: "",
  });

  const [editData, setEditData] = useState<CustomerProfile>({
    name: "",
    email: user?.email || "",
    phone: "",
    cpf: "",
  });

  // Carregar dados salvos no localStorage na primeira vez
  useEffect(() => {
    const saved = localStorage.getItem(`customer_${user?.id}`);
    if (saved) {
      const data = JSON.parse(saved);
      setCustomer(data);
      setEditData(data);
    } else {
      // Se não houver dados, usar apenas o email do usuário autenticado
      setCustomer({
        name: "",
        email: user?.email || "",
        phone: "",
        cpf: "",
      });
      setEditData({
        name: "",
        email: user?.email || "",
        phone: "",
        cpf: "",
      });
    }
  }, [user]);

  // Carregar pedidos do localStorage
  const [orders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  const handleLogout = async () => {
    // Logout será tratado pelo AuthButton
    navigate("/");
  };

  const handleSaveProfile = () => {
    // Validar campos obrigatórios
    if (!editData.name.trim()) {
      alert("Por favor, preencha o nome completo!");
      return;
    }
    if (!editData.phone.trim()) {
      alert("Por favor, preencha o telefone!");
      return;
    }
    if (!editData.cpf.trim()) {
      alert("Por favor, preencha o CPF!");
      return;
    }

    // Salvar no localStorage
    setCustomer(editData);
    localStorage.setItem(`customer_${user?.id}`, JSON.stringify(editData));
    setIsEditing(false);
    alert("Perfil atualizado com sucesso!");
  };

  // Calcular gasto total
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <Layout>
      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-gray-900">Minha Conta</h1>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg sticky top-24">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900">
                    {customer.name || "Usuário"}
                  </h2>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                  {!customer.name && (
                    <p className="text-xs text-amber-600 mt-2 bg-amber-50 px-2 py-1 rounded">
                      ⚠️ Preencha seu perfil
                    </p>
                  )}
                </div>

                <div className="space-y-2 border-t border-gray-200 pt-6">
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors flex items-center gap-3 ${
                      activeTab === "orders"
                        ? "bg-cyan-100 text-cyan-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Package className="w-5 h-5" />
                    Meus Pedidos
                  </button>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors flex items-center gap-3 ${
                      activeTab === "profile"
                        ? "bg-cyan-100 text-cyan-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <User className="w-5 h-5" />
                    Perfil
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              {/* Meus Pedidos */}
              {activeTab === "orders" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl border-2 border-gray-200 p-4 shadow-lg">
                      <p className="text-sm text-gray-600 mb-1">Total de Pedidos</p>
                      <p className="text-3xl font-bold text-cyan-600">
                        {orders.length}
                      </p>
                    </div>
                    <div className="bg-white rounded-xl border-2 border-gray-200 p-4 shadow-lg">
                      <p className="text-sm text-gray-600 mb-1">Gasto Total</p>
                      <p className="text-3xl font-bold text-cyan-600">
                        {formatCurrency(totalSpent)}
                      </p>
                    </div>
                    <div className="bg-white rounded-xl border-2 border-gray-200 p-4 shadow-lg">
                      <p className="text-sm text-gray-600 mb-1">Status</p>
                      <p className="text-sm font-bold text-cyan-600">
                        {customer.name ? "✅ Perfil Completo" : "⚠️ Perfil Incompleto"}
                      </p>
                    </div>
                  </div>

                  {orders.length === 0 ? (
                    <div className="bg-white rounded-xl border-2 border-gray-200 p-12 text-center shadow-lg">
                      <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Nenhum pedido ainda
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Você ainda não realizou nenhuma compra. Visite nossa loja
                        agora!
                      </p>
                      <Link to="/produtos">
                        <Button className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8 py-3 rounded-xl">
                          Ir para Loja
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg">
                                {order.id}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {new Date(order.date).toLocaleDateString("pt-BR", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-sm text-gray-600">Total</p>
                                <p className="text-2xl font-bold text-cyan-600">
                                  {formatCurrency(order.total)}
                                </p>
                              </div>
                              <span
                                className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(
                                  order.status
                                )}`}
                              >
                                {getStatusLabel(order.status)}
                              </span>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-4 mb-4">
                            <div className="space-y-2">
                              {order.items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex justify-between text-sm"
                                >
                                  <div className="flex gap-2">
                                    <span className="text-gray-600">
                                      {item.quantity}x
                                    </span>
                                    <span className="text-gray-900 font-semibold">
                                      {item.name}
                                    </span>
                                  </div>
                                  <span className="text-gray-900 font-semibold">
                                    {formatCurrency(item.price * item.quantity)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold transition-colors">
                              <Eye className="w-4 h-4" />
                              Ver Detalhes
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold transition-colors">
                              <Download className="w-4 h-4" />
                              Baixar NF-e
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Perfil */}
              {activeTab === "profile" && (
                <div className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Informações Pessoais
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Nome Completo
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.name}
                            onChange={(e) =>
                              setEditData({ ...editData, name: e.target.value })
                            }
                            placeholder="Digite seu nome"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-600 focus:outline-none"
                          />
                        ) : (
                          <div className="px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold">
                            {customer.name || "Não preenchido"}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Email
                        </label>
                        <div className="px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold cursor-not-allowed">
                          {customer.email}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Email não pode ser alterado</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Telefone
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={editData.phone}
                            onChange={(e) =>
                              setEditData({ ...editData, phone: e.target.value })
                            }
                            placeholder="(00) 00000-0000"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-600 focus:outline-none"
                          />
                        ) : (
                          <div className="px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold">
                            {customer.phone || "Não preenchido"}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          CPF
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={editData.cpf}
                            onChange={(e) =>
                              setEditData({ ...editData, cpf: e.target.value })
                            }
                            placeholder="000.000.000-00"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-600 focus:outline-none"
                          />
                        ) : (
                          <div className="px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 font-semibold">
                            {customer.cpf || "Não preenchido"}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex gap-3">
                        {!isEditing ? (
                          <Button
                            onClick={() => {
                              setIsEditing(true);
                              setEditData(customer);
                            }}
                            className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                            variant="outline"
                          >
                            ✏️ Editar Perfil
                          </Button>
                        ) : (
                          <>
                            <Button
                              onClick={handleSaveProfile}
                              className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white"
                            >
                              ✅ Salvar Alterações
                            </Button>
                            <Button
                              onClick={() => {
                                setIsEditing(false);
                                setEditData(customer);
                              }}
                              variant="outline"
                              className="border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                              ❌ Cancelar
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
