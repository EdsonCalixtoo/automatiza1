# Configuração do Supabase

## Como configurar a integração com Supabase

### 1. Criar uma conta no Supabase
- Acesse [supabase.com](https://supabase.com)
- Faça login ou crie uma nova conta
- Crie um novo projeto

### 2. Obter as credenciais
1. No dashboard do Supabase, vá para **Settings** > **API**
2. Copie:
   - **URL do projeto**: `https://seu-projeto.supabase.co`
   - **Chave Anônima (anon key)**: A chave pública

### 3. Configurar as variáveis de ambiente
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:

```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

### 4. Ativar a autenticação por email
1. No Supabase, vá para **Authentication** > **Providers**
2. Certifique-se de que o provedor **Email** está habilitado
3. Customize as configurações conforme necessário

### 5. Usar a autenticação no projeto

#### Hook `useAuth`
```tsx
import { useAuth } from "@/contexts/AuthContext";

function MeuComponente() {
  const { user, loading, signIn, signOut } = useAuth();

  return (
    <div>
      {user && <p>Bem-vindo {user.email}</p>}
    </div>
  );
}
```

#### Métodos disponíveis
- `signUp(email, password)` - Criar nova conta
- `signIn(email, password)` - Fazer login
- `signOut()` - Fazer logout
- `resetPassword(email)` - Resetar senha
- `user` - Objeto do usuário logado (ou null)
- `loading` - Loading state

### 6. Página de login
A página de login está disponível em `/login` e inclui:
- Abas para Login e Cadastro
- Validação de campos
- Mensagens de erro
- Redirecionamento automático após login bem-sucedido

## Próximas etapas recomendadas

1. **Criar tabelas no banco de dados** para armazenar dados dos usuários
2. **Implementar proteção de rotas** para páginas que requerem autenticação
3. **Configurar redirecionamento** após logout
4. **Adicionar recuperação de senha** com link de reset
5. **Configurar políticas de acesso** (Row Level Security) no Supabase

## Documentação útil
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase SDK JavaScript](https://supabase.com/docs/reference/javascript)
