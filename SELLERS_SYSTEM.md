# Sistema de Vendedores - Documentação

## Visão Geral
O sistema de vendedores foi implementado para rastrear as vendas por vendedor e calcular comissões automáticamente baseado nas categorias de produtos.

## Como Funciona

### 1. **Configuração de Vendedores** (`src/data/sellers.ts`)
Cada vendedor tem:
- **ID**: Identificador único
- **Nome**: Nome do vendedor
- **Email**: Email de contato
- **Telefone**: Número de telefone
- **Avatar**: Inicial do nome (para exibir em cards)
- **Categorias**: Lista de categorias que o vendedor é responsável
  - Ex: "Kits Completos", "Acessórios", etc.
- **Taxa de Comissão**: Percentual de comissão (ex: 10%)
- **Vendas Totais**: Total de vendas (atualizado automaticamente)

### 2. **Atribuição Automática de Vendedor**

Quando um cliente faz um pedido:

1. O sistema salva cada item com sua **categoria de produto**
2. Ao exibir o pedido na Dashboard, o sistema procura qual vendedor é responsável por aquela categoria
3. O vendedor é automaticamente atribuído baseado na categoria **do primeiro item do pedido**

**Exemplo:**
- Gustavo → Responsável por "Kits Completos" e "Peças Individuais"
- Se um cliente compra um Kit → Atribuído para Gustavo
- Maria → Responsável por "Acessórios" e "Manutenção"
- Se um cliente compra Acessórios → Atribuído para Maria

### 3. **Fluxo de Compra**

```
Cliente → Adiciona produtos ao carrinho → Checkout
    ↓
Sistema salva cada item com sua categoria
    ↓
Vendedor é atribuído automaticamente na exibição do pedido
    ↓
Dashboard mostra o vendedor responsável
```

### 4. **Visualização na Dashboard**

#### Aba "Pedidos"
- Mostra cada pedido com:
  - ID e Cliente
  - **Vendedor responsável** (destaque em card roxo)
  - Itens do pedido
  - Total e Status
  - Informações de contato

#### Aba "Vendedores" (Nova)
- Mostra cada vendedor com:
  - Avatar e Nome
  - Categorias que gerencia
  - **Número de pedidos** atribuídos
  - **Total de vendas** gerado
  - **Comissão a receber** calculada automaticamente
  - Taxa de comissão

### 5. **Implementação Técnica**

#### Checkouts.tsx
```typescript
// Ao salvar o pedido, enriquecer items com categoria
const enrichedItems = items.map((item) => {
  const product = products.find((p) => p.id === item.id);
  return {
    ...item,
    category: product?.category || "Sem categoria",
  };
});
```

#### Dashboard.tsx
```typescript
// Encontrar vendedor para cada pedido
const orderSeller = order.items.length > 0 
  ? getSellerForCategory(order.items[0].category || "")?.name || "Sem vendedor"
  : "Sem vendedor";

// Calcular vendas por vendedor (na aba Sellers)
const sellerOrders = orders.filter((order) =>
  order.items.some((item) => {
    const product = products.find((p) => p.id === item.id);
    return product && seller.categories.some(
      (cat) => cat.toLowerCase() === (product.category || "").toLowerCase()
    );
  })
);
```

## Adicionando Novos Vendedores

Para adicionar um novo vendedor, edite `src/data/sellers.ts`:

```typescript
{
  id: "seller_4",
  name: "Seu Nome",
  email: "email@automatiza.com",
  phone: "(11) 99999-9999",
  avatar: "S", // Primeira letra do nome
  categories: ["Categoria 1", "Categoria 2"],
  totalSales: 0,
  commissionRate: 10, // 10%
}
```

## Categoria de Produtos

As categorias definidas no ProductForm são:
- **Kits Completos** → Gustavo, João Santos
- **Peças Individuais** → Gustavo
- **Acessórios** → Maria Silva
- **Manutenção** → Maria Silva

## Fluxo de Comissão

1. Sistema calcula total de vendas por vendedor
2. Comissão = Total de Vendas × Taxa de Comissão / 100
3. Exibido em tempo real na aba "Vendedores"

**Exemplo:**
- Gustavo tem 5 vendas somando R$ 2000
- Taxa de comissão: 10%
- **Comissão a receber: R$ 200**

## Alterações Feitas

✅ Criado `src/data/sellers.ts` com dados de vendedores
✅ Atualizado `src/pages/Dashboard.tsx`:
  - Nova aba "Vendedores"
  - Exibe vendedor em cada pedido
  - Mostra estatísticas do vendedor
✅ Atualizado `src/pages/Checkout.tsx`:
  - Salva categoria em cada item do pedido
✅ Atualizado interface Order:
  - Adicionado campo `seller` opcional
  - Itens agora incluem `category`

## Próximas Melhorias Sugeridas

1. Editar/adicionar vendedores direto na dashboard
2. Gráfico de vendas por vendedor
3. Sistema de pagamento de comissões
4. Histórico de comissões pagas
5. Filtrar pedidos por vendedor
