import type { IconName } from '../../shared/Icon'

export interface PracticeArea {
  title: string
  icon: IconName
  description: string
}

export const practiceAreas: PracticeArea[] = [
  { title: 'Direito Civil', icon: 'scales', description: 'Informação e orientação em relações privadas, obrigações e contratos.' },
  { title: 'Direito Trabalhista', icon: 'briefcase', description: 'Conteúdo e orientação sobre relações de trabalho e seus aspectos jurídicos.' },
  { title: 'Direito Empresarial', icon: 'users', description: 'Apoio jurídico informativo a empresas e relações societárias.' },
  { title: 'Direito de Família', icon: 'heart', description: 'Orientação cuidadosa para questões familiares e patrimoniais.' },
  { title: 'Direito Imobiliário', icon: 'home', description: 'Informação sobre contratos e relações jurídicas envolvendo imóveis.' },
  { title: 'Direito Previdenciário', icon: 'shield', description: 'Análise orientativa de temas relacionados à previdência social.' },
]

export const institutionalValues = [
  { icon: 'shield' as const, title: 'Ética profissional', text: 'Atuação responsável, com respeito aos deveres da profissão.' },
  { icon: 'eye' as const, title: 'Transparência', text: 'Informações claras sobre cada etapa e seus limites.' },
  { icon: 'message' as const, title: 'Atendimento próximo', text: 'Escuta atenta e diálogo ajustado a cada contexto.' },
  { icon: 'spark' as const, title: 'Compromisso', text: 'Dedicação cuidadosa à análise de cada questão.' },
]

export const differentiators = [
  { number: '01', title: 'Atendimento individualizado', text: 'A conversa começa pela compreensão da realidade e das necessidades apresentadas.' },
  { number: '02', title: 'Comunicação clara', text: 'Explicações diretas ajudam a acompanhar informações e próximos passos.' },
  { number: '03', title: 'Análise estratégica', text: 'Cada situação é examinada considerando contexto, alternativas e riscos.' },
  { number: '04', title: 'Responsabilidade ética', text: 'A atuação observa os deveres profissionais e evita promessas de resultado.' },
]

export const teamProfiles = [
  { name: 'Marina Almeida', area: 'Direito Civil', image: 0, description: 'Perfil fictício para demonstração da apresentação da equipe.' },
  { name: 'Rafael Costa', area: 'Direito Empresarial', image: 1, description: 'Perfil fictício para demonstração da apresentação da equipe.' },
  { name: 'Beatriz Nogueira', area: 'Direito de Família', image: 2, description: 'Perfil fictício para demonstração da apresentação da equipe.' },
]

export const processSteps = [
  { number: '01', title: 'Primeiro contato', text: 'Compartilhe uma descrição inicial, sem enviar dados sensíveis pelo formulário demonstrativo.' },
  { number: '02', title: 'Entendimento da necessidade', text: 'Em um atendimento real, o contexto e os objetivos seriam compreendidos em conversa reservada.' },
  { number: '03', title: 'Análise jurídica', text: 'A documentação e as questões apresentadas seriam avaliadas com atenção.' },
  { number: '04', title: 'Orientação e acompanhamento', text: 'As alternativas e os próximos passos seriam explicados de forma clara.' },
]

export const faqItems = [
  { question: 'Como funciona o primeiro atendimento?', answer: 'O formato, os documentos necessários e os próximos passos devem ser combinados diretamente com o escritório. Esta resposta é demonstrativa.' },
  { question: 'É possível realizar uma consulta online?', answer: 'A disponibilidade de atendimento remoto precisa ser confirmada com o escritório. Esta página não agenda consultas.' },
  { question: 'Quais documentos devo apresentar?', answer: 'Os documentos variam conforme o assunto. Aguarde uma orientação individual e evite enviar informações pessoais neste formulário demonstrativo.' },
  { question: 'Como são definidos os honorários?', answer: 'Valores e condições dependem da análise do serviço solicitado e devem ser informados diretamente pelo profissional, conforme as regras aplicáveis.' },
  { question: 'Como posso acompanhar meu atendimento?', answer: 'Os canais e a frequência de comunicação devem ser definidos no atendimento real. Não há acompanhamento conectado a este site demonstrativo.' },
  { question: 'O escritório atende empresas e pessoas físicas?', answer: 'O público atendido deve ser confirmado pelo escritório. As informações nesta página são ilustrativas e não indicam uma oferta de serviços real.' },
]
