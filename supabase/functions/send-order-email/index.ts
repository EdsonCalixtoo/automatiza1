// @ts-ignore: Deno module
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
// @ts-ignore: ESM module
import { Resend } from "https://esm.sh/resend"

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Content-Type': 'application/json',
}

const json = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), { headers: CORS, status })

// @ts-ignore: Deno global
serve(async (req: Request) => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

    try {
        // @ts-ignore: Deno global
        const resendApiKey = Deno.env.get('RESEND_API_KEY')
        const resend = new Resend(resendApiKey)
        const { order, type, lang = 'pt' } = await req.json()

        const t = {
            pt: {
                currency: "R$",
                qty: "Qtd",
                un: "Un",
                total_order: "Total do Pedido",
                track_order: "📦 Acompanhar Meu Pedido",
                track_realtime: "📊 Acompanhar Status em Tempo Real",
                hi: "Olá",
                processing: "Seu pedido já está sendo processado com todo cuidado!",
                payment_pending: "⏳ Aguardando Pagamento",
                payment_approved: "Pagamento Aprovado",
                approved_msg: "Tudo certo! Seu kit já entrou para preparação.",
                good_news: "Notícia boa: sua automação está cada vez mais perto de você!",
                help_msg: "Precisa de ajuda com seu pedido?",
                whatsapp_btn: "💬 Chamar no WhatsApp",
                auto_email_msg: "Este é um e-mail automático, por favor não responda diretamente.",
                new_order_subject: "Recebemos seu pedido #",
                payment_approved_subject: "Pagamento Confirmado! Pedido #",
                new_order_title: "Pedido Recebido",
                admin_new_order: "Novo Pedido Recebido!",
                admin_client: "CLIENTE",
                admin_total: "VALOR TOTAL",
                admin_dashboard: "Ver Dashboard"
            },
            en: {
                currency: "$",
                qty: "Qty",
                un: "Un",
                total_order: "Order Total",
                track_order: "📦 Track My Order",
                track_realtime: "📊 Track Real-Time Status",
                hi: "Hello",
                processing: "Your order is already being processed with great care!",
                payment_pending: "⏳ Awaiting Payment",
                payment_approved: "Payment Approved",
                approved_msg: "All set! Your kit has already started preparation.",
                good_news: "Good news: your automation is getting closer to you!",
                help_msg: "Need help with your order?",
                whatsapp_btn: "💬 Contact via WhatsApp",
                auto_email_msg: "This is an automatic email, please do not reply directly.",
                new_order_subject: "We received your order #",
                payment_approved_subject: "Payment Confirmed! Order #",
                new_order_title: "Order Received",
                admin_new_order: "New Order Received!",
                admin_client: "CUSTOMER",
                admin_total: "TOTAL VALUE",
                admin_dashboard: "View Dashboard"
            },
            es: {
                currency: "R$",
                qty: "Cant",
                un: "Un",
                total_order: "Total del Pedido",
                track_order: "📦 Seguir Mi Pedido",
                track_realtime: "📊 Seguimiento en Tiempo Real",
                hi: "Hola",
                processing: "¡Su pedido ya está siendo procesado con mucho cuidado!",
                payment_pending: "⏳ Esperando Pago",
                payment_approved: "Pago Aprobado",
                approved_msg: "¡Todo listo! Su kit ya ha entrado en preparación.",
                good_news: "Buena noticia: ¡su automatización está cada vez más cerca de usted!",
                help_msg: "¿Necesita ayuda con su pedido?",
                whatsapp_btn: "💬 Contactar por WhatsApp",
                auto_email_msg: "Este es un correo electrónico automático, por favor no responda directamente.",
                new_order_subject: "Recibimos su pedido #",
                payment_approved_subject: "¡Pago Confirmado! Pedido #",
                new_order_title: "Pedido Recibido",
                admin_new_order: "¡Nuevo Pedido Recibido!",
                admin_client: "CLIENTE",
                admin_total: "VALOR TOTAL",
                admin_dashboard: "Ver Dashboard"
            }
        }[lang as 'pt' | 'en' | 'es'] || t.pt;

        // Configuração OFICIAL de domínios
        const siteUrl = "https://grupoautomatiza.com.br";
        const adminUrl = "https://grupoautomatiza.com.br/admin/dashboard";
        const logoUrl = `${siteUrl}/logo.jpg`;
        const primaryColor = "#0891b2"; 
        const primeironome = order.cliente_nome ? order.cliente_nome.split(' ')[0] : (lang === 'en' ? 'Customer' : 'Cliente');
        const itemsHtml = (order.itens || []).map((item: any) => `
            <tr>
                <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                    <div style="font-weight: 700; color: #0f172a; font-size: 15px; margin-bottom: 4px;">${item.name}</div>
                    <div style="font-size: 13px; color: #64748b; font-weight: 500;">${t.qty}: ${item.quantity} • ${t.un}: ${t.currency} ${item.price.toFixed(2)}</div>
                </td>
                <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; text-align: right; font-weight: 800; color: #0f172a; font-size: 16px;">
                    ${t.currency} ${(item.price * item.quantity).toFixed(2)}
                </td>
            </tr>
        `).join('')

        const footerHtml = `
            <div style="padding: 40px 20px; text-align: center; background: #f8fafc; border-top: 1px solid #f1f5f9;">
                <div style="margin-bottom: 25px;">
                    <p style="color: #64748b; font-size: 14px; margin-bottom: 15px; font-weight: 500;">${t.help_msg}</p>
                    <a href="https://wa.me/5519989429972" style="display: inline-flex; align-items: center; padding: 14px 28px; background: #22c55e; color: white; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 15px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);">
                       ${t.whatsapp_btn}
                    </a>
                </div>
                <div style="color: #94a3b8; font-size: 12px; line-height: 1.6;">
                    <p style="margin: 0; font-weight: 600;">© 2026 Automatiza Kits e Acessórios</p>
                    <p style="margin: 4px 0 0;">R. Dr. Élton César, 910 - Campinas, SP</p>
                </div>
            </div>
        `;

        let subject = "";
        let contentHtml = "";

        const fromEmail = "Automatiza <comercial@grupoautomatiza.com.br>";

        switch (type) {
            case 'novo_pedido':
                // Notificação para os ADMINS (Enviando separado para garantir entrega)
                const admins = ['juninho.caxto@gmail.com', 'gugaeduardo30@gmail.com'];
                
                for (const adminEmail of admins) {
                    try {
                        const adminRes = await resend.emails.send({
                            from: fromEmail,
                            to: [adminEmail],
                            subject: `🔔 NOVO PEDIDO: #${order.id.slice(0, 8)}`,
                            html: `
                                <div style="font-family: -apple-system, sans-serif; background: #f1f5f9; padding: 40px 20px;">
                                    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                                        <div style="padding: 40px; text-align: center; background: #0f172a;">
                                            <img src="${logoUrl}" alt="Logo" style="height: 45px;" />
                                        </div>
                                        <div style="padding: 40px;">
                                            <h2 style="color: #0f172a; margin: 0 0 20px; font-size: 24px;">${t.admin_new_order}</h2>
                                            <div style="background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 16px; padding: 24px; margin-bottom: 30px;">
                                                <div style="margin-bottom: 12px; color: #64748b; font-size: 14px;">${t.admin_client}</div>
                                                <div style="color: #0f172a; font-weight: 700; font-size: 18px; margin-bottom: 20px;">${order.cliente_nome}</div>
                                                
                                                <div style="margin-bottom: 12px; color: #64748b; font-size: 14px;">${t.admin_total}</div>
                                                <div style="color: #0891b2; font-weight: 800; font-size: 24px;">${t.currency} ${order.total.toFixed(2)}</div>
                                            </div>
                                            <a href="${adminUrl}" style="display: block; text-align: center; background: #0891b2; color: white; padding: 18px; border-radius: 14px; text-decoration: none; font-weight: 700; font-size: 16px;">${t.admin_dashboard}</a>
                                        </div>
                                    </div>
                                </div>
                            `,
                        });
                        console.log(`Email enviado para admin ${adminEmail}:`, adminRes);
                    } catch (e) {
                        console.error(`Erro ao enviar para admin ${adminEmail}:`, e);
                    }
                }

                // E-mail para o Cliente (Checkout)
                subject = `${t.new_order_subject}#${order.id.slice(0, 8)}! 🛍️`;
                contentHtml = `
                    <div style="text-align: center; padding-bottom: 40px;">
                        <div style="width: 64px; height: 64px; background: #ecfeff; border-radius: 20px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; font-size: 32px; line-height: 64px;">🛍️</div>
                        <h1 style="margin: 0; font-size: 32px; color: #0f172a; letter-spacing: -1px; font-weight: 800;">${t.new_order_title}</h1>
                        <p style="margin: 12px 0 0; color: #64748b; font-size: 16px; line-height: 1.5;">${t.hi}, <strong>${primeironome}</strong>. ${t.processing}</p>
                    </div>
                    
                    <div style="background: #f8fafc; border-radius: 24px; padding: 32px; margin-bottom: 32px; border: 1px solid #f1f5f9;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <span style="background: #fef3c7; color: #92400e; padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border: 1px solid #fde68a;">${t.payment_pending}</span>
                        </div>
                        <table style="width: 100%; border-collapse: collapse;">
                            ${itemsHtml}
                        </table>
                        <div style="margin-top: 24px; text-align: right;">
                            <div style="color: #64748b; font-size: 14px; font-weight: 500; margin-bottom: 4px;">${t.total_order}</div>
                            <div style="font-weight: 900; color: #0f172a; font-size: 28px; letter-spacing: -1px;">${t.currency} ${order.total.toFixed(2)}</div>
                        </div>
                    </div>

                    <div style="text-align: center; margin-bottom: 10px;">
                        <a href="${siteUrl}/rastreio?id=${order.id}" style="display: inline-block; background: #0891b2; color: white; padding: 22px 50px; border-radius: 18px; text-decoration: none; font-weight: 800; font-size: 16px; box-shadow: 0 10px 25px rgba(8, 145, 178, 0.25); transition: all 0.3s ease;">
                            ${t.track_order}
                        </a>
                    </div>
                `;
                break;

            case 'pagamento_aprovado':
                subject = `${t.payment_approved_subject}#${order.id.slice(0, 8)} 💳`;
                contentHtml = `
                    <div style="text-align: center; padding-bottom: 40px;">
                        <div style="width: 80px; height: 80px; background: #f0fdf4; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; font-size: 40px; line-height: 80px; border: 2px solid #bbf7d0;">✅</div>
                        <h1 style="margin: 0; font-size: 32px; color: #0f172a; letter-spacing: -1px; font-weight: 800;">${t.payment_approved}</h1>
                        <p style="margin: 12px 0 0; color: #64748b; font-size: 16px;">${t.hi}, <strong>${primeironome}</strong>! ${t.approved_msg}</p>
                    </div>
                    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 1px solid #bbf7d0; border-radius: 24px; padding: 32px; margin-bottom: 32px; text-align: center;">
                        <p style="margin: 0; color: #166534; font-weight: 700; font-size: 16px; line-height: 1.5;">${t.good_news}</p>
                    </div>
                    <div style="text-align: center;">
                        <a href="${siteUrl}/rastreio?id=${order.id}" style="display: inline-block; background: #166534; color: white; padding: 20px 45px; border-radius: 18px; text-decoration: none; font-weight: 800; font-size: 16px; box-shadow: 0 10px 25px rgba(22, 101, 52, 0.2);">
                            ${t.track_realtime}
                        </a>
                    </div>
                `;
                break;
        }

        if (contentHtml) {
            await resend.emails.send({
                from: fromEmail,
                to: [order.cliente_email],
                subject: subject,
                html: `
                    <div style="background-color: #f1f5f9; padding: 60px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.15);">
                            <div style="padding: 40px; text-align: center; background: white; border-bottom: 1px solid #f8fafc;">
                                <img src="${logoUrl}" alt="Automatiza" style="height: 50px;" />
                            </div>
                            <div style="padding: 40px 40px 50px;">
                                ${contentHtml}
                            </div>
                            ${footerHtml}
                        </div>
                        <div style="text-align: center; margin-top: 30px; color: #94a3b8; font-size: 12px;">
                            ${t.auto_email_msg}
                        </div>
                    </div>
                `
            });
        }

        return json({ success: true })

    } catch (err: any) {
        console.error('Email error:', err)
        return json({ error: err.message }, 500)
    }
})
