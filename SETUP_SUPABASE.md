# 🚀 Integração Supabase - Guia Completo

## ✅ O que foi feito

1. **ProductContext atualizado** - Agora sincroniza com Supabase
2. **SQL criado** - Arquivo `SUPABASE_SETUP.sql` com todas as tabelas
3. **Backup localStorage** - Funciona offline e sincroniza quando online

---

## 📋 Passo 1: Criar as Tabelas no Supabase

1. Acesse [app.supabase.com](https://app.supabase.com)
2. Selecione seu projeto
3. Vá para **SQL Editor** (ícone de {} no menu esquerdo)
4. Clique em **New Query**
5. **Copie TODO o conteúdo do arquivo `SUPABASE_SETUP.sql`**
6. Cole no editor
7. Clique em **RUN** (botão azul no canto inferior direito)

**Resultado esperado:**
- ✅ Tabela `products` criada
- ✅ Tabela `coupons` criada
- ✅ Tabela `orders` criada
- ✅ Tabela `sellers` criada
- ✅ Índices criados
- ✅ Políticas de segurança (RLS) ativadas

---

## 🔒 Passo 2: Verificar Row Level Security (RLS)

1. Vá para **Authentication** → **Policies**
2. Selecione a tabela `products`
3. Verifique se há políticas listadas
4. Repita para `coupons`, `orders` e `sellers`

> **Observação:** As políticas garantem que cada usuário veja apenas seus próprios dados!

---

## 🧪 Passo 3: Testar a Integração

### Criar um Produto:
1. Acesse **http://localhost:5173/admin/dashboard**
2. Vá para a aba **Produtos**
3. Clique em **+ Novo Produto**
4. Preencha os dados:
   - Nome: "Teste Supabase"
   - Descrição: "Produto de teste"
   - Categoria: Escolha uma
   - Preço: 100
   - Estoque: 5
5. Clique em **Criar Produto**

### Verificar no Supabase:
1. Vá para **Table Editor** no Supabase
2. Selecione a tabela `products`
3. Procure pelo seu produto
4. **Devem aparecer todos os dados!**

---

## 📊 Como Funciona Agora

### Fluxo de Dados:
```
Criar Produto → Frontend → Supabase → Banco de Dados
                                   ↓
                           localStorage (backup)
```

### Ao criar/editar/deletar:
1. ✅ Salva no Supabase
2. ✅ Atualiza o estado React
3. ✅ Sincroniza com localStorage

### Ao abrir a página:
1. Tenta carregar do Supabase
2. Se sucesso → usa dados do Supabase
3. Se falha → usa localStorage como fallback

---

## 🐛 Troubleshooting

### Erro: "relation "products" does not exist"
**Solução:** Execute o SQL do `SUPABASE_SETUP.sql` novamente

### Produtos não aparecem no dashboard
**Solução:**
1. Abra o **Console do navegador** (F12)
2. Procure por mensagens de erro
3. Verifique se as tabelas existem no Supabase
4. Confirme que está logado (ícone de pessoa na Dashboard)

### Produtos aparecem mas não salvam
**Solução:**
1. Verifique se o usuário está autenticado
2. Confira o `user_id` nas políticas de segurança
3. Veja se há erros no console do navegador

---

## 🔑 Variáveis de Ambiente Necessárias

Verifique se seu arquivo `.env.local` tem:
```
VITE_SUPABASE_URL=sua-url-aqui
VITE_SUPABASE_ANON_KEY=sua-chave-aqui
```

> **Dica:** Pegue essas informações em Supabase → Settings → API

---

## 📱 Recursos Disponíveis

| Recurso | Status | Notas |
|---------|--------|-------|
| Produtos | ✅ Completo | Sincroniza com Supabase |
| Cupons | ✅ Completo | Sincroniza com Supabase |
| Pedidos | 🔄 Pronto | Tabela criada, integração pendente |
| Vendedores | 🔄 Pronto | Tabela criada, integração pendente |
| RLS Segurança | ✅ Ativo | Cada usuário vê apenas seus dados |

---

## 🚀 Próximos Passos

1. **Integrar Pedidos** - Salvar no Supabase ao finalizar compra
2. **Integrar Vendedores** - Sincronizar SellerContext com Supabase
3. **Dashboard Análitica** - Gráficos com dados reais do Supabase
4. **Sincronização em Tempo Real** - Usar Supabase Realtime para atualizações instantâneas

---

## 📞 Dúvidas Comuns

**P: Meus produtos locais vão ser perdidos?**  
R: Não! Eles continuam no localStorage. Você pode migrar manualmente.

**P: Como faço backup dos meus produtos?**  
R: O Supabase faz backup automático. Você também pode exportar via CSV.

**P: Posso usar tanto localStorage quanto Supabase?**  
R: Sim! O sistema sincroniza automaticamente entre os dois.

---

## ✨ Benefícios da Integração

✅ Dados persistem na nuvem  
✅ Acesso de múltiplos dispositivos  
✅ Segurança com RLS (Row Level Security)  
✅ Backup automático  
✅ Funciona offline com localStorage  
✅ Sincronização automática  

---

**Pronto! 🎉 Seus produtos agora estão seguros no Supabase!**
