<!-- 57d04a88-c486-4452-8041-8816d99e6a55 d8f778e5-b68b-405a-bd39-f18dfa8b6c62 -->
# Criar Repositórios para Comunicação Frontend-Backend

## Objetivo

Implementar a camada de repositórios no Angular para comunicação com o backend (Spring Boot na porta 8080), seguindo o padrão da imagem com BaseRepository, e reorganizar a documentação do projeto.

## Arquitetura da Solução

### 1. Configuração de Ambientes

Criar arquivos de environment para gerenciar URLs:

- `frontend/src/environments/environment.ts` - desenvolvimento (http://localhost:8080)
- `frontend/src/environments/environment.prod.ts` - produção

### 2. Camada de Repositórios (`frontend/src/app/infra/repository/`)

**BaseRepository** (classe abstrata):

- Injetar `HttpClient` do Angular
- Propriedade `apiUrl` protegida (do environment)
- Método `getAuthHeaders()` para incluir token JWT do localStorage
- Métodos auxiliares para requisições HTTP

**Repositórios Específicos** (estendem BaseRepository):

- `auth.repository.ts` - login, logout, validação de token
- `cliente.repository.ts` - CRUD de clientes
- `equipe.repository.ts` - operações de equipe
- `assistente.repository.ts` - comunicação com IA

### 3. Models/DTOs (`frontend/src/app/core/models/`)

Criar interfaces TypeScript para:

- `auth.model.ts` - LoginRequest, LoginResponse, Usuario
- `cliente.model.ts` - Cliente, ClienteDTO
- `equipe.model.ts` - Membro, EquipeDTO
- `assistente.model.ts` - ChatMessage, ChatResponse

### 4. Configuração do App

- Adicionar `provideHttpClient()` no `app.config.ts`
- Criar provider para `API_BASE_URL` (InjectionToken)

### 5. Reorganização de Documentação

- Mover conteúdo de `.cursor/plans/frontend-5cbaa9e8.plan.md` para `plans.readme` na raiz
- Deletar pasta `.cursor/`

## Estrutura de Arquivos

```
frontend/src/
├── environments/
│   ├── environment.ts           # apiUrl: 'http://localhost:8080'
│   └── environment.prod.ts      # apiUrl produção
├── app/
│   ├── core/
│   │   └── models/
│   │       ├── auth.model.ts
│   │       ├── cliente.model.ts
│   │       ├── equipe.model.ts
│   │       └── assistente.model.ts
│   └── infra/
│       └── repository/
│           ├── base.repository.ts
│           ├── auth.repository.ts
│           ├── cliente.repository.ts
│           ├── equipe.repository.ts
│           └── assistente.repository.ts
```

## Exemplo de Uso nos Services

```typescript
// No ClienteService
constructor(private clienteRepo: ClienteRepository) {}

listarClientes() {
  return this.clienteRepo.getAll();
}
```

## Preparação para Backend

Quando criar o backend Spring Boot, configure CORS:

```java
@CrossOrigin(origins = "http://localhost:4200")
```

## Arquivos-Chave

- `frontend/src/environments/environment.ts`
- `frontend/src/app/app.config.ts` 
- `frontend/src/app/infra/repository/base.repository.ts`
- `frontend/src/app/core/models/*.model.ts`
- `plans.readme` (novo)

### To-dos

- [x] Criar arquivos environment.ts e environment.prod.ts com configuração de apiUrl
- [x] Criar interfaces/models no core (auth, cliente, equipe, assistente)
- [x] Implementar BaseRepository abstrato com HttpClient e getAuthHeaders
- [x] Criar repositórios específicos (auth, cliente, equipe, assistente) estendendo BaseRepository
- [x] Adicionar provideHttpClient no app.config.ts
- [ ] Criar plans.readme consolidando planos e remover pasta .cursor