<!-- 5cbaa9e8-117a-46eb-8061-aa8d654e7269 1faf88d3-1c1f-4491-bdf0-ddadf3dffe07 -->
# Plano: Front-end Angular (Bootstrap) para AR Gestão Contábil e Financeira

## Escopo

- Criar app Angular com TypeScript, UI com Bootstrap, rotas: Home, Clientes, Equipe, Login
- Arquitetura limpa (módulos `core`, `shared`, `features/*`, `infra`), princípios SOLID
- Assistente de IA (widget flutuante) com serviço stub inicialmente; posterior integração ao back Spring Boot
- Repositório do front separado, pronto para CI/CD e integração futura
- Conteúdo inicial baseado no site antigo para referências de seções e copy básica ([site antigo](https://arcontabilidade-am.com.br/))

## Stack

- Angular 18+ (standalone desativado; usaremos NgModules para modularidade)
- Bootstrap 5.x + `@ng-bootstrap/ng-bootstrap`
- TypeScript estrito, ESLint + Prettier

## Estrutura de pastas

- `src/app/core/` (serviços base, guards, interceptors, tokens, config)
- `src/app/shared/` (componentes, pipes, directives reutilizáveis)
- `src/app/features/`
- `home/`
- `clientes/`
- `equipe/`
- `auth/` (login)
- `assistente/` (widget e chat)
- `src/app/infra/` (adapters HTTP, mapeadores, gateways)
- `src/app/routes/app-routing.module.ts`
- `src/environments/` (`environment.ts`, `environment.prod.ts`)
- `src/assets/` (logo, cores, favicon)

## Rotas iniciais

- `/` → Home
- `/clientes` → Informações para clientes (PF/PJ visão geral, links úteis)
- `/equipe` → Equipe/Empresa (sobre, missão, valores, contatos)
- `/login` → Login (stub de autenticação; integração futura)

## UI/Branding moderno

- Hero na Home com título forte, subtítulo e CTA (Contato/WhatsApp)
- Cards para serviços principais (Contábil, Fiscal, RH) com ícones
- Seção "Por que a AR Gestão?" com métricas/selos (anos de mercado, clientes)
- Navbar sticky, offcanvas em mobile; footer limpo com mapa/link para contato
- Tema Bootstrap com cores corporativas, tipografia moderna (Inter/Roboto)
- Dark mode opcional (toggle simples com `data-bs-theme`)

## Assistente de IA (fase 1)

- Botão flutuante (FAB) abre um painel de chat
- Serviço `AssistenteService` com stub (FAQs, links, encaminhar para contato)
- Depois, gateway HTTP para back-end (`/ai/chat`)

## Camadas e Clean Architecture

- `core`: contratos (ports) e modelos domínio: `Cliente`, `TipoPessoa`, `Usuario`
- `infra`: adapters HTTP implementando ports (`ClienteGateway`, `AuthGateway`)
- `features`: casos de uso por feature
- Dependências unidirecionais: features → core/shared; infra implementa ports de core

## Serviços e Interceptadores

- `AuthInterceptor` (injeta token quando existir)
- `HttpErrorInterceptor` (tratamento genérico de erros)
- `ApiConfigToken` para `API_BASE_URL` (de `environment`)

## Acessibilidade e SEO

- Metatags base (title, description), `og:*` e `twitter:*`
- Roles ARIA, foco gerenciado no widget do assistente

## Arquivos-chave

- `angular.json`, `package.json` com Bootstrap e ng-bootstrap
- `src/styles.scss` (import Bootstrap + overrides + tema)
- `src/app/app.module.ts`, `src/app/routes/app-routing.module.ts`
- `src/app/layout/header`, `src/app/layout/footer`
- `src/app/features/{home,clientes,equipe,auth}/`
- `src/app/features/assistente/assistant-widget.component.*`
- `src/app/core/models/*.ts`, `src/app/core/ports/*.ts`
- `src/app/infra/http/*.ts` (gateways)
- `src/app/core/interceptors/*.ts`
- `src/environments/environment*.ts`

## Passos de build iniciais

1. `npm install -g @angular/cli`
2. `ng new ar-gestao-frontend --routing --style=scss`
3. Adicionar Bootstrap: `npm i bootstrap @popperjs/core @ng-bootstrap/ng-bootstrap`
4. Importar Bootstrap em `styles.scss`; configurar tema/corpo
5. Criar `core`, `shared`, `infra`, `features/*` e rotas lazy
6. Implementar layout (navbar, footer); Home com hero + cards
7. Adicionar assistente (FAB + painel) com serviço stub
8. ESLint/Prettier e scripts NPM (`lint`, `format`)

## Integração futura com back Spring Boot

- `AuthGateway` → `/auth/login`
- `ClienteGateway` → `/clientes` (PF/PJ)
- `AssistenteGateway` → `/ai/chat`
- Base URL por ambiente via `environment`

## To-dos

- [ ] Inicializar projeto Angular e configurar TypeScript estrito
- [ ] Instalar Bootstrap e @ng-bootstrap, configurar styles.scss
- [ ] Criar módulos core, shared, infra e features
- [ ] Configurar AppRouting e lazy loading das features
- [ ] Implementar layout (navbar/header, footer, container)
- [ ] Criar página Home com hero, cards e CTA
- [ ] Criar página Clientes com infos PF/PJ e links úteis
- [ ] Criar página Equipe/Empresa (sobre, missão, valores)
- [ ] Criar página Login com formulário e serviço stub
- [ ] Criar widget de assistente de IA com serviço stub
- [ ] Criar models, ports e gateways HTTP base (stubs)
- [ ] Adicionar AuthInterceptor e HttpErrorInterceptor
- [ ] Configurar environments e ApiConfigToken
- [ ] Configurar ESLint/Prettier e scripts NPM

### To-dos

- [ ] Inicializar projeto Angular e configurar TypeScript estrito
- [ ] Instalar Bootstrap e @ng-bootstrap, configurar styles.scss
- [ ] Criar módulos core, shared, infra e features
- [ ] Configurar AppRouting e lazy loading das features
- [ ] Implementar layout (navbar/header, footer, container)
- [ ] Criar página Home com conteúdo institucional
- [ ] Criar página Clientes com infos PF/PJ e links úteis
- [ ] Criar página Equipe/Empresa (sobre, missão, valores)
- [ ] Criar página Login com formulário e serviço stub
- [ ] Criar widget de assistente de IA com serviço stub
- [ ] Criar models, ports e gateways HTTP base (stubs)
- [ ] Adicionar AuthInterceptor e HttpErrorInterceptor
- [ ] Configurar environments e ApiConfigToken
- [ ] Configurar ESLint/Prettier e scripts NPM