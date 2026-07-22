import { SocialLink } from '../models/social-link.model';
import { BRAND_COLORS } from './brand-colors.data';
import { RESUME_FILE_URL } from './resume.data';
import { SOCIAL_PROFILE_URLS } from './social-profile-urls.data';

export const CONTACT_ICONS: SocialLink[] = [
  { label: 'LinkedIn', url: SOCIAL_PROFILE_URLS.linkedIn, iconClass: 'fa-brands fa-linkedin', color: BRAND_COLORS.linkedin },
  { label: 'GitHub', url: SOCIAL_PROFILE_URLS.gitHub, iconClass: 'fa-brands fa-github' },
  { label: 'WhatsApp', url: SOCIAL_PROFILE_URLS.whatsApp, iconClass: 'fa-brands fa-whatsapp', color: BRAND_COLORS.whatsapp },
  { label: 'Baixar CV', url: RESUME_FILE_URL, iconClass: 'fa-solid fa-arrow-down', download: true },
];
