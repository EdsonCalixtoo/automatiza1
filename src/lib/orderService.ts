import { supabase } from "@/lib/supabase";

/**
 * Cria um novo pedido no Supabase com status "aguardando_pagamento"
 */
export async function createOrder(payload: {
    cliente_nome: string;
    cliente_email: string;
    cliente_telefone?: string;
    endereco?: object;
    itens: object[];
    subtotal: number;
    frete: number;
    desconto: number;
    total: number;
    metodo_pagamento: "pix" | "cartao";
    cupom?: string;
}) {
    const { data, error } = await supabase
        .from("pedidos")
        .insert({
            cliente_nome: payload.cliente_nome,
            cliente_email: payload.cliente_email,
            cliente_telefone: payload.cliente_telefone || null,
            endereco: payload.endereco || null,
            itens: payload.itens,
            subtotal: payload.subtotal,
            frete: payload.frete,
            desconto: payload.desconto,
            total: payload.total,
            metodo_pagamento: payload.metodo_pagamento,
            cupom: payload.cupom || null,
            status: "aguardando_pagamento",
        })
        .select()
        .single();

    if (error) throw new Error(`Erro ao criar pedido: ${error.message}`);
    return data;
}

/**
 * Busca um pedido pelo ID
 */
export async function getOrder(orderId: string) {
    const { data, error } = await supabase
        .from("pedidos")
        .select("*")
        .eq("id", orderId)
        .single();

    if (error) throw new Error(`Pedido não encontrado: ${error.message}`);
    return data;
}

/**
 * Atualiza o status de um pedido
 */
export async function updateOrderStatus(
    orderId: string,
    status: "aguardando_pagamento" | "pago" | "cancelado",
    extra?: { pix_code?: string; pix_qrcode?: string; mp_payment_id?: string }
) {
    const updateData: any = { status };
    if (extra?.pix_code) updateData.pix_code = extra.pix_code;
    if (extra?.pix_qrcode) updateData.pix_qrcode = extra.pix_qrcode;
    if (extra?.mp_payment_id) updateData.mp_payment_id = extra.mp_payment_id;
    if (status === "pago") updateData.data_pagamento = new Date().toISOString();

    const { data, error } = await supabase
        .from("pedidos")
        .update(updateData)
        .eq("id", orderId)
        .select()
        .single();

    if (error) throw new Error(`Erro ao atualizar pedido: ${error.message}`);
    return data;
}
