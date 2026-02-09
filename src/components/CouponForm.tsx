import { useState } from "react";
import { X, Plus, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProducts, type Coupon } from "@/contexts/ProductContext";
import { formatPrice } from "@/lib/utils";

interface CouponFormProps {
  onClose: () => void;
  coupon?: Coupon;
}

export function CouponForm({ onClose, coupon }: CouponFormProps) {
  const { addCoupon, updateCoupon } = useProducts();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    code: coupon?.code || generateCouponCode(),
    description: coupon?.description || "",
    discountType: coupon?.discountType || "percentage",
    discountValue: coupon?.discountValue || 10,
    maxUses: coupon?.maxUses || 100,
    expiryDate: coupon?.expiryDate || "",
    active: coupon?.active ?? true,
  });

  function generateCouponCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon) {
      updateCoupon(coupon.id, { ...formData, currentUses: coupon.currentUses });
    } else {
      addCoupon({ ...formData, currentUses: 0 });
    }
    onClose();
  };

  const copyCode = () => {
    navigator.clipboard.writeText(formData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">
            {coupon ? "Editar Cupom" : "Novo Cupom de Desconto"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Código do Cupom */}
          <div className="space-y-2">
            <Label htmlFor="code" className="text-gray-700 font-semibold">
              Código do Cupom *
            </Label>
            <div className="flex gap-2">
              <Input
                id="code"
                type="text"
                placeholder="EX: PROMO2024"
                value={formData.code}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    code: e.target.value.toUpperCase(),
                  })
                }
                required
                disabled={!!coupon}
                className="border-2 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/30 h-11 rounded-lg uppercase font-mono font-bold tracking-wider"
              />
              <button
                type="button"
                onClick={copyCode}
                className="p-2.5 border-2 border-gray-300 hover:border-cyan-500 hover:bg-cyan-50 rounded-lg transition-all"
                title="Copiar código"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700 font-semibold">
              Descrição *
            </Label>
            <Input
              id="description"
              type="text"
              placeholder="Ex: Desconto para clientes novos"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              className="border-2 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/30 h-11 rounded-lg"
            />
          </div>

          {/* Tipo e Valor de Desconto */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="discountType"
                className="text-gray-700 font-semibold"
              >
                Tipo de Desconto *
              </Label>
              <select
                id="discountType"
                value={formData.discountType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    discountType: e.target.value as "percentage" | "fixed",
                  })
                }
                className="w-full border-2 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/30 rounded-lg p-2.5 h-11"
              >
                <option value="percentage">Percentual (%)</option>
                <option value="fixed">Valor Fixo (R$)</option>
              </select>
            </div>

            <div className="space-y-2 col-span-2">
              <Label
                htmlFor="discountValue"
                className="text-gray-700 font-semibold"
              >
                Valor {formData.discountType === "percentage" ? "(%)" : "(R$)"} *
              </Label>
              <Input
                id="discountValue"
                type="number"
                step={formData.discountType === "percentage" ? "1" : "0.01"}
                min="0"
                max={formData.discountType === "percentage" ? "100" : undefined}
                placeholder="0"
                value={formData.discountValue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    discountValue: parseFloat(e.target.value),
                  })
                }
                required
                className="border-2 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/30 h-11 rounded-lg"
              />
            </div>
          </div>

          {/* Limite de Uso */}
          <div className="space-y-2">
            <Label htmlFor="maxUses" className="text-gray-700 font-semibold">
              Limite de Uso (máximo de aplicações) *
            </Label>
            <Input
              id="maxUses"
              type="number"
              min="1"
              placeholder="100"
              value={formData.maxUses}
              onChange={(e) =>
                setFormData({ ...formData, maxUses: parseInt(e.target.value) })
              }
              required
              className="border-2 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/30 h-11 rounded-lg"
            />
          </div>

          {/* Data de Expiração */}
          <div className="space-y-2">
            <Label htmlFor="expiryDate" className="text-gray-700 font-semibold">
              Data de Expiração *
            </Label>
            <Input
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={(e) =>
                setFormData({ ...formData, expiryDate: e.target.value })
              }
              required
              className="border-2 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500/30 h-11 rounded-lg"
            />
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
            <input
              type="checkbox"
              id="active"
              checked={formData.active}
              onChange={(e) =>
                setFormData({ ...formData, active: e.target.checked })
              }
              className="w-5 h-5 rounded border-gray-300 text-cyan-600 cursor-pointer"
            />
            <Label htmlFor="active" className="font-semibold text-gray-700 cursor-pointer">
              Cupom Ativo
            </Label>
          </div>

          {/* Preview */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-dashed border-cyan-300">
            <p className="text-sm text-gray-600 mb-2 font-semibold">Preview:</p>
            <div className="space-y-1">
              <p className="text-lg font-bold text-cyan-600">{formData.code}</p>
              <p className="text-sm text-gray-700">{formData.description}</p>
              <p className="text-sm text-gray-600">
                {formData.discountType === "percentage"
                  ? `${formData.discountValue}% de desconto`
                  : `R$ ${formatPrice(formData.discountValue)} de desconto`}
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 h-11"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 h-11 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg"
            >
              {coupon ? "Atualizar Cupom" : "Criar Cupom"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
