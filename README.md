# Almeida & Associados | Advocacia

Projeto demonstrativo de site institucional criado para o portfólio da ER Web. A marca, os perfis de equipe, as áreas de atuação e os canais de contato são fictícios; não representam escritório ou profissionais reais.

## Stack e organização

- React 19, TypeScript strict e Vite.
- Tailwind CSS com componentes e estilos CSS próprios.
- GSAP + ScrollTrigger para reveals, parallax discreto e progressão da linha de atendimento.
- `src/core`: configuração de contato demonstrativo e link do portfólio.
- `src/shared`: ícones SVG reutilizáveis.
- `src/layout`: header e footer.
- `src/features/home`: página inicial, conteúdo estruturado e seções reutilizáveis.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Configuração antes de publicação

- Copie `.env.example` para `.env.local` e defina `VITE_ER_WEB_PORTFOLIO_URL` para habilitar o link do portfólio e `VITE_WHATSAPP_URL` para habilitar o botão de WhatsApp.
- Substitua e-mail/telefone fictícios em `src/core/site-config.ts`.
- Revise a política de privacidade, áreas, respostas, conteúdo institucional e imagens com o escritório antes de qualquer uso real.
- O formulário faz validação no navegador, mas não transmite nem armazena dados. A integração com backend ou serviço de formulários ainda precisa ser implementada.
- As fotografias são carregadas do Unsplash e seguem a [Licença Unsplash](https://unsplash.com/license). A licença de copyright não garante todos os direitos de imagem, privacidade ou propriedade relacionados ao que aparece nas fotos; confirme as permissões aplicáveis ao uso pretendido.

O conteúdo de publicidade jurídica foi mantido informativo e demonstrativo. Antes da publicação, valide a versão vigente do [Provimento 205/2021 da OAB](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021) e o material com os profissionais responsáveis.
