# ✅ Checklist de Configuração Supabase

## 🎯 5 Passos para Fazer Produtos Salvarem

### ✓ Passo 1: Abrir o arquivo SQL
```
📂 SUPABASE_SETUP.sql (na raiz do projeto)
```
Location: `c:\Users\Edson\Desktop\SITE AUTOMATIZA\SUPABASE_SETUP.sql`

---

### ✓ Passo 2: Executar no Supabase
1. Abra: https://app.supabase.com
2. Selecione seu projeto no menu
3. Clique em **SQL Editor** (ícone {} na esquerda)
4. Clique em **New Query**
5. Copie TODO conteúdo de SUPABASE_SETUP.sql
6. Cole no editor
7. Clique em **RUN** (botão azul canto inferior direito)

**Resultado Esperado:**
```
✅ Commands completed successfully
```

---

### ✓ Passo 3: Voltar ao Dashboard
1. Abra: http://localhost:5173
2. Clique em **Dashboard** (menu topo direito)
3. Procure a aba **Diagnóstico** ⚡
4. Clique em **Re-verificar**

**Resultado Esperado:**
```
✅ Conexão com Supabase: ✅ Conectado
✅ Autenticação: ✅ Logado
✅ Tabela Products: ✅ Existe
✅ Tabela Coupons: ✅ Existe
✅ Tabela Orders: ✅ Existe
✅ Tabela Sellers: ✅ Existe
✅ Políticas RLS: ✅ Funcionando
```

---

### ✓ Passo 4: Fazer Login (IMPORTANTE!)
1. Clique no ícone de **pessoa** (topo direito)
2. Clique em **Login**
3. Use suas credenciais Supabase
4. Não saia dessa conta!

**Por quê?** Cada usuário tem seus próprios produtos no Supabase

---

### ✓ Passo 5: Criar um Produto de Teste
1. Dashboard → **Produtos**
2. Clique em **+ Novo Produto**
3. Preencha:
   - **Nome:** "Teste Supabase"
   - **Descrição:** "Teste..."
   - **Categoria:** "Kits Completos"
   - **Preço:** 99.90
   - **Estoque:** 5
4. Clique em **Criar Produto**

**Resultado Esperado:**
```
✅ Produto aparece na lista
✅ Mensagem no console: "✅ Produto criado com sucesso!"
```

---

## 🔍 Verificar se Funcionou

### No Site:
- [ ] Dashboard → Produtos
- [ ] Aparece "Teste Supabase"?

### No Supabase:
- [ ] Vá para **Table Editor**
- [ ] Clique em **products**
- [ ] Procure por "Teste Supabase"
- [ ] Está lá com todos os dados?

---

## 🐛 Se Ainda Não Funcionar

### 1. Abra o Console (F12)
```
Pressione F12 → Aba "Console" → Procure por mensagens ❌
```

### 2. Erros Comuns

**❌ "relation "products" does not exist"**
→ Execute o SUPABASE_SETUP.sql novamente

**❌ "permission denied for schema public"**
→ Verifique se as políticas RLS existem (no Diagnóstico)

**❌ "Nenhum usuário logado"**
→ Faça login (Passo 4)

**❌ "JwtTokenExpired"**
→ Faça logout e login novamente

---

## 📱 Migrar Produtos Antigos (Opcional)

Se você criou produtos **antes** dessa atualização:

1. Dashboard → **Produtos**
2. Procure botão **"Migrar Dados para Supabase"**
3. Clique e aguarde
4. Seus produtos antigos vão aparecer no Supabase

---

## 🎯 Status Final

Quando tudo está pronto, você verá:

```
🟢 ALERTA DE CONEXÃO: Desaparece
🟢 DIAGNÓSTICO: Todos ✅ verdes
🟢 PRODUTOS: Salvam e aparecem na lista
🟢 CONSOLE: Sem mensagens de erro
```

---

## 📞 Debug Rápido

**Comando no Console (F12):**
```javascript
// Ver último produto criado
localStorage.getItem('products') 
→ Se vê seu teste aqui, localStorage funciona

// Ver usuário logado
localStorage.getItem('auth')
→ Se vê dados aqui, autenticação funciona
```

---

**Tempo Total: 10-15 minutos**

Após completar todos os ✅, seus produtos vão salvar no Supabase automaticamente! 🚀
