export interface Project {
  title: string;
  /** Selo curto de categoria (ex: "Corporativo", "Microsserviço"). */
  badge: string;
  /** Rótulo mono exibido no placeholder visual do card, quando não há `imageUrl`. */
  visualLabel: string;
  /** Resumo curto exibido no card do grid. */
  summary: string;
  /** Visão geral completa, exibida no modal de detalhes. */
  overview: string;
  /** Principais funcionalidades / destaques do projeto. */
  highlights: string[];
  /** Tecnologias utilizadas. */
  tags: string[];
  /** Problemas que o projeto resolveu (opcional — nem todo projeto tem essa seção). */
  problemsSolved?: string[];
  /** Descrição da arquitetura utilizada (opcional). */
  architecture?: string;
  /** Bullets descrevendo a atuação pessoal no projeto (opcional). */
  myRole?: string[];
  /** Foto de capa. Quando preenchida, substitui o placeholder visual do card. */
  imageUrl?: string;
  /** Background (cor ou gradiente CSS) da área visual, útil quando `imageUrl` não tem fundo próprio (ex: logo em PNG/SVG transparente). */
  imageBackground?: string;
  /** Como a imagem preenche a área visual do card. Padrão: `contain` (mostra a imagem inteira, sem cortes). Use `cover` para fotos/screenshots que devem preencher todo o espaço. */
  imageFit?: 'contain' | 'cover';
  /** Espaçamento (CSS) ao redor da imagem quando `imageFit` é `contain`. Padrão: `22px`. */
  imagePadding?: string;
  /** Link do repositório no GitHub. Quando preenchido, mostra um atalho no card e no modal. */
  repoUrl?: string;
  /** Link de um vídeo do YouTube. Quando preenchido, o modal exibe um iframe com o vídeo. */
  videoUrl?: string;
}
