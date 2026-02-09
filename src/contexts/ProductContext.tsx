import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "./AuthContext";
import { formatPrice } from "@/lib/utils";

// Função para gerar UUID v4
function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  stock: number;
  createdAt: string;
  images?: string[];
  sku?: string;
  weight?: string;
  dimensions?: string;
  warranty?: string;
  material?: string;
  status?: string;
  features?: string[];
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  maxUses: number;
  currentUses: number;
  expiryDate: string;
  active: boolean;
  createdAt: string;
}

interface ProductContextType {
  products: Product[];
  coupons: Coupon[];
  loading: boolean;
  addProduct: (product: Omit<Product, "id" | "createdAt">) => Promise<void>;
  updateProduct: (id: string, product: Omit<Product, "id" | "createdAt">) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  addCoupon: (coupon: Omit<Coupon, "id" | "createdAt">) => Promise<void>;
  updateCoupon: (id: string, coupon: Omit<Coupon, "id" | "createdAt">) => Promise<void>;
  deleteCoupon: (id: string) => Promise<void>;
  useCoupon: (code: string) => { valid: boolean; discount?: number; message: string };
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregar produtos do Supabase ou localStorage
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        if (user) {
          // Carregar do Supabase
          const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("user_id", user.id);

          if (error) {
            console.error("❌ Erro ao carregar produtos do Supabase:");
            console.error("   Código:", error.code);
            console.error("   Mensagem:", error.message);
            console.error("   Hints:", error.hint);
            // Fallback para localStorage
            loadFromLocalStorage();
          } else if (data) {
            console.log(`✅ ${data.length} produtos carregados do Supabase`);
            const formattedProducts: Product[] = data.map((p: any) => ({
              id: p.id,
              name: p.name,
              description: p.description,
              category: p.category,
              subcategory: p.subcategory,
              price: p.price,
              image: p.image,
              stock: p.stock,
              createdAt: p.created_at,
              images: p.images,
              sku: p.sku,
              weight: p.weight,
              dimensions: p.dimensions,
              warranty: p.warranty,
              material: p.material,
              status: p.status,
            }));
            setProducts(formattedProducts);
            // Sincronizar com localStorage
            localStorage.setItem("products", JSON.stringify(formattedProducts));
          } else {
            // Se não há produtos no Supabase, carrega do localStorage
            console.log("ℹ️ Nenhum produto no Supabase. Tentando localStorage...");
            loadFromLocalStorage();
            setLoading(false);
            return;
          }
        } else {
          // Se não há usuário, carregar do localStorage
          console.log("ℹ️ Usuário não logado. Carregando do localStorage...");
          loadFromLocalStorage();
        }
      } catch (error) {
        console.error("❌ Erro ao carregar produtos:", error);
        loadFromLocalStorage();
      } finally {
        setLoading(false);
      }
    };

    const loadFromLocalStorage = () => {
      const saved = localStorage.getItem("products");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          console.log(`✅ ${parsed.length} produtos carregados do localStorage`);
          setProducts(parsed);
        } catch {
          console.error("❌ Erro ao parsear localStorage");
          setProducts([]);
        }
      } else {
        setProducts([]);
      }
    };

    loadProducts();
  }, [user]);

  // Carregar cupons
  useEffect(() => {
    const loadCoupons = async () => {
      try {
        if (user) {
          const { data, error } = await supabase
            .from("coupons")
            .select("*")
            .eq("user_id", user.id);

          if (error) {
            console.error("❌ Erro ao carregar cupons:", error);
            loadCouponsFromLocalStorage();
          } else if (data) {
            const formatted: Coupon[] = data.map((c: any) => ({
              id: c.id,
              code: c.code,
              description: c.description,
              discountType: c.discount_type,
              discountValue: c.discount_value,
              maxUses: c.max_uses,
              currentUses: c.current_uses,
              expiryDate: c.expiry_date,
              active: c.active,
              createdAt: c.created_at,
            }));
            setCoupons(formatted);
            localStorage.setItem("coupons", JSON.stringify(formatted));
          }
        } else {
          loadCouponsFromLocalStorage();
        }
      } catch (error) {
        console.error("❌ Erro ao carregar cupons:", error);
        loadCouponsFromLocalStorage();
      }
    };

    const loadCouponsFromLocalStorage = () => {
      const saved = localStorage.getItem("coupons");
      if (saved) {
        try {
          setCoupons(JSON.parse(saved));
        } catch {
          setCoupons([]);
        }
      }
    };

    loadCoupons();
  }, [user]);

  // Adicionar produto
  const addProduct = async (product: Omit<Product, "id" | "createdAt">) => {
    try {
      const newProduct: Product = {
        ...product,
        id: generateUUID(),
        createdAt: new Date().toISOString(),
      };

      if (user) {
        // Salvar no Supabase
        const { error } = await supabase.from("products").insert([
          {
            id: newProduct.id,
            name: newProduct.name,
            description: newProduct.description,
            category: newProduct.category,
            subcategory: newProduct.subcategory,
            price: newProduct.price,
            image: newProduct.image,
            images: newProduct.images,
            stock: newProduct.stock,
            sku: newProduct.sku,
            weight: newProduct.weight,
            dimensions: newProduct.dimensions,
            warranty: newProduct.warranty,
            material: newProduct.material,
            status: newProduct.status,
            user_id: user.id,
          },
        ]);

        if (error) {
          console.error("❌ Erro ao salvar produto no Supabase:");
          console.error("   Código:", error.code);
          console.error("   Mensagem:", error.message);
          console.error("   Detalhes:", error);
        } else {
          console.log("✅ Produto salvo no Supabase com sucesso!");
        }
      }

      // Atualizar estado e localStorage
      const updated = [...products, newProduct];
      setProducts(updated);
      localStorage.setItem("products", JSON.stringify(updated));
      console.log("✅ Produto criado localmente com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao criar produto:", error);
      throw error;
    }
  };

  // Atualizar produto
  const updateProduct = async (id: string, product: Omit<Product, "id" | "createdAt">) => {
    try {
      if (user) {
        const { error } = await supabase
          .from("products")
          .update({
            name: product.name,
            description: product.description,
            category: product.category,
            subcategory: product.subcategory,
            price: product.price,
            image: product.image,
            images: product.images,
            stock: product.stock,
            sku: product.sku,
            weight: product.weight,
            dimensions: product.dimensions,
            warranty: product.warranty,
            material: product.material,
            status: product.status,
          })
          .eq("id", id)
          .eq("user_id", user.id);

        if (error) {
          console.error("❌ Erro ao atualizar produto no Supabase:", error);
        }
      }

      const updated = products.map((p) =>
        p.id === id ? { ...p, ...product } : p
      );
      setProducts(updated);
      localStorage.setItem("products", JSON.stringify(updated));
      console.log("✅ Produto atualizado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao atualizar produto:", error);
      throw error;
    }
  };

  // Deletar produto
  const deleteProduct = async (id: string) => {
    try {
      if (user) {
        const { error } = await supabase
          .from("products")
          .delete()
          .eq("id", id)
          .eq("user_id", user.id);

        if (error) {
          console.error("❌ Erro ao deletar produto no Supabase:", error);
        }
      }

      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      localStorage.setItem("products", JSON.stringify(updated));
      console.log("✅ Produto deletado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao deletar produto:", error);
      throw error;
    }
  };

  // Adicionar cupom
  const addCoupon = async (coupon: Omit<Coupon, "id" | "createdAt">) => {
    try {
      const newCoupon: Coupon = {
        ...coupon,
        id: generateUUID(),
        createdAt: new Date().toISOString(),
      };

      if (user) {
        const { error } = await supabase.from("coupons").insert([
          {
            id: newCoupon.id,
            code: newCoupon.code,
            description: newCoupon.description,
            discount_type: newCoupon.discountType,
            discount_value: newCoupon.discountValue,
            max_uses: newCoupon.maxUses,
            current_uses: newCoupon.currentUses,
            expiry_date: newCoupon.expiryDate,
            active: newCoupon.active,
            user_id: user.id,
          },
        ]);

        if (error) {
          console.error("❌ Erro ao salvar cupom no Supabase:", error);
        }
      }

      const updated = [...coupons, newCoupon];
      setCoupons(updated);
      localStorage.setItem("coupons", JSON.stringify(updated));
      console.log("✅ Cupom criado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao criar cupom:", error);
      throw error;
    }
  };

  // Atualizar cupom
  const updateCoupon = async (id: string, coupon: Omit<Coupon, "id" | "createdAt">) => {
    try {
      if (user) {
        const { error } = await supabase
          .from("coupons")
          .update({
            code: coupon.code,
            description: coupon.description,
            discount_type: coupon.discountType,
            discount_value: coupon.discountValue,
            max_uses: coupon.maxUses,
            current_uses: coupon.currentUses,
            expiry_date: coupon.expiryDate,
            active: coupon.active,
          })
          .eq("id", id)
          .eq("user_id", user.id);

        if (error) {
          console.error("❌ Erro ao atualizar cupom no Supabase:", error);
        }
      }

      const updated = coupons.map((c) =>
        c.id === id ? { ...c, ...coupon } : c
      );
      setCoupons(updated);
      localStorage.setItem("coupons", JSON.stringify(updated));
      console.log("✅ Cupom atualizado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao atualizar cupom:", error);
      throw error;
    }
  };

  // Deletar cupom
  const deleteCoupon = async (id: string) => {
    try {
      if (user) {
        const { error } = await supabase
          .from("coupons")
          .delete()
          .eq("id", id)
          .eq("user_id", user.id);

        if (error) {
          console.error("❌ Erro ao deletar cupom no Supabase:", error);
        }
      }

      const updated = coupons.filter((c) => c.id !== id);
      setCoupons(updated);
      localStorage.setItem("coupons", JSON.stringify(updated));
      console.log("✅ Cupom deletado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao deletar cupom:", error);
      throw error;
    }
  };

  // Usar cupom
  const useCoupon = (code: string) => {
    const coupon = coupons.find((c) => c.code.toUpperCase() === code.toUpperCase());

    if (!coupon) {
      return { valid: false, message: "Cupom não encontrado" };
    }

    if (!coupon.active) {
      return { valid: false, message: "Cupom desativado" };
    }

    if (new Date(coupon.expiryDate) < new Date()) {
      return { valid: false, message: "Cupom expirado" };
    }

    if (coupon.currentUses >= coupon.maxUses) {
      return { valid: false, message: "Cupom atingiu o limite de uso" };
    }

    // Atualizar uso
    updateCoupon(coupon.id, {
      ...coupon,
      currentUses: coupon.currentUses + 1,
    });

    return {
      valid: true,
      discount: coupon.discountValue,
      message: `Cupom aplicado! ${coupon.discountType === "percentage" ? coupon.discountValue + "% de desconto" : "R$ " + formatPrice(coupon.discountValue) + " de desconto"}`,
    };
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        coupons,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        addCoupon,
        updateCoupon,
        deleteCoupon,
        useCoupon,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts deve ser usado dentro de ProductProvider");
  }
  return context;
}
