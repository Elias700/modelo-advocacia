# Almeida & Associados | Advocacia — Diretrizes do projeto

Este arquivo é a referência técnica central para desenvolver e manter o site. Leia-o antes de implementar funcionalidades e atualize-o quando decisões permanentes de arquitetura, tecnologia ou convenções mudarem.

## Estado do projeto

O projeto usa React + Vite com TypeScript e compõe um site demonstrativo para o portfólio da ER Web. Mantenha essa arquitetura e não migre para Angular sem uma solicitação explícita. O conteúdo, as áreas de atuação, as pessoas retratadas e os canais de contato são demonstrativos e precisam de validação antes de qualquer publicação institucional.

## Stack principal

- React 19 com componentes funcionais e hooks.
- TypeScript com `strict` habilitado e Vite como ferramenta de desenvolvimento e build.
- Tailwind CSS para utilitários de estilo, complementado por CSS moderno quando apropriado.
- HTML5 semântico e acessível dentro dos componentes React.
- React state/hooks para estado local e React Hook Form ou validação nativa para formulários; evite adicionar bibliotecas quando a necessidade for simples.
- GSAP e ScrollTrigger para animações complexas e efeitos ligados à rolagem.
- Three.js somente para elementos 3D que agreguem valor visual claro.
- Não adotar Angular, Next.js, jQuery ou tecnologias que substituam React + Vite.
- Evitar dependências sem necessidade concreta e manter compatibilidade entre versões.

## Identidade visual

Paleta oficial:

| Token | Cor | Uso principal |
| --- | --- | --- |
| Primary | `#101D30` | Navegação, áreas institucionais e ações principais |
| Accent | `#C5A46D` | Destaques, ícones, filetes e chamadas pontuais |
| Background | `#F7F5F0` | Fundo principal e áreas de leitura |
| White | `#FFFFFF` | Superfícies, cartões e contraste sobre fundos escuros |
| Text | `#293447` | Texto corrido e títulos sobre fundo claro |

- Títulos usam Playfair Display; textos e controles usam Inter, com fallbacks adequados.
- Trabalhe com escala de espaçamento consistente baseada em múltiplos de 4 ou 8 px. Preserve áreas de respiro e alinhamentos entre seções.
- Botões devem ter rótulos claros, área de toque confortável, estados de hover/foco/ativo e contraste suficiente. Accent é um detalhe, não um substituto de contraste.
- Cards devem ter conteúdo conciso, hierarquia tipográfica clara e superfície discreta. Evite excesso de contornos, sombras ou ornamentos.
- Use bordas finas e sombras suaves apenas para separar níveis de superfície. Prefira cantos discretos e consistentes.
- Use tipografia responsiva com limites legíveis, entrelinha confortável e largura de leitura adequada.
- A composição deve parecer premium, moderna e sóbria em todos os breakpoints.

## Arquitetura e organização

Organize o código por responsabilidade e domínio, seguindo esta estrutura como base:

```text
src/
  app/        # composição da aplicação e providers globais, se necessários
  core/       # serviços e configurações globais
  shared/     # componentes, hooks e utilitários reutilizáveis
  layout/     # header, navegação, footer e estrutura visual
  features/  # páginas, seções e funcionalidades do site
```

- Use componentes funcionais pequenos, reutilizáveis e com responsabilidade bem definida.
- Mantenha lógica de estado separada da apresentação quando isso melhorar clareza e manutenção.
- Prefira hooks focados e props tipadas; evite context global para estado local.
- Centralize tokens e configurações globais; evite duplicação e acoplamento entre features.
- Nomes de arquivos, componentes, hooks, seletores e variáveis devem ser consistentes e descrever sua função.

## Animação e movimento

- Use GSAP para sequências ou interações complexas; use ScrollTrigger para animações dependentes da rolagem.
- Use Three.js somente quando o resultado justificar o custo de desempenho e manutenção.
- Prefira `transform` e `opacity`, evitando animar propriedades que provoquem recálculo ou repintura frequente.
- Respeite `prefers-reduced-motion` e ofereça uma experiência completa sem movimento.
- Reduza ou remova animações pesadas em dispositivos móveis e hardware limitado.
- Limpe contextos GSAP, observadores e listeners no cleanup de efeitos/hooks.
- Movimento nunca pode esconder conteúdo, impedir navegação, reduzir legibilidade ou comprometer acessibilidade e desempenho.

## Responsividade

- Desenvolva com abordagem mobile-first e breakpoints consistentes.
- Verifique celular, tablet, notebook e desktop; conteúdo e ações devem continuar utilizáveis em telas estreitas e largas.
- Nenhum componente pode causar rolagem horizontal indesejada. Imagens, grids, navegação e textos longos devem se adaptar ao contêiner.
- Preserve tamanhos adequados de toque, foco visível e hierarquia visual em todos os tamanhos.

## Qualidade, acessibilidade e desempenho

- Mantenha TypeScript strict; declare tipos explicitamente quando necessário e evite `any`.
- Use hooks segundo as regras do React; evite efeitos sem necessidade e dependências de efeito incorretas.
- Evite duplicação, bibliotecas desnecessárias e lógica misturada à apresentação sem necessidade.
- Use elementos HTML semânticos, ordem de títulos coerente, labels, nomes acessíveis, navegação por teclado e foco visível.
- Garanta contraste adequado, suporte a zoom e alternativas para conteúdo não textual.
- Otimize imagens e outros recursos; defina dimensões, formatos e carregamento apropriados.
- Cuide de título, descrição, idioma, metadados e estrutura semântica para SEO.
- Não deixe erros de compilação nem warnings evitáveis.

## Regras para o site jurídico

- O site deve transmitir identidade premium, moderna e sofisticada e oferecer conteúdo institucional informativo.
- Use somente fotografias profissionais cuja licença ou permissão de uso esteja confirmada; registre a origem quando aplicável.
- Não invente credenciais, números de OAB, histórico profissional, clientes, depoimentos ou resultados jurídicos.
- Respeite as regras brasileiras vigentes de publicidade da advocacia e mantenha linguagem informativa, discreta e sem promessa de resultado ou captação indevida.
- Ao revisar conteúdo jurídico, consulte a versão vigente do [Provimento 205/2021 da OAB](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021) e orientações oficiais atualizadas; este projeto demonstrativo não substitui revisão profissional.
- Identifique o trabalho como projeto demonstrativo enquanto dados reais do escritório não forem fornecidos.
- Evite textos genéricos, garantias, superlativos e exageros comerciais. Dados institucionais não confirmados devem ser claramente demonstrativos ou omitidos.

## Fluxo de trabalho

Antes de implementar uma funcionalidade:

1. Leia este `AGENTS.md`.
2. Analise os componentes e padrões existentes.
3. Reutilize padrões e componentes quando forem adequados.
4. Respeite a identidade visual e as regras específicas do site jurídico.
5. Implemente a funcionalidade solicitada.
6. Valide a responsividade.
7. Verifique a acessibilidade.
8. Execute o build e os testes disponíveis quando solicitados ou definidos pelo fluxo da tarefa.
9. Corrija os erros encontrados e registre limitações reais.
10. Informe resumidamente quais arquivos foram alterados.

Mantenha este documento atualizado quando forem adotadas novas tecnologias, padrões arquiteturais ou convenções permanentes. Não registre instruções temporárias ou detalhes irrelevantes.
