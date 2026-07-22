export interface SocialLink {
  label: string;
  url: string;
  iconClass: string;
  /** Quando true, o link é renderizado com o atributo `download` em vez de abrir em nova aba. */
  download?: boolean;
  /** Cor de marca do ícone (ex: verde do WhatsApp). Sem valor, usa a cor padrão do tema. */
  color?: string;
}
