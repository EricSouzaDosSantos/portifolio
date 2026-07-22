import { StackGroup } from '../models/stack-group.model';

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'Backend',
    items: ['Java 17+', 'Spring Boot', 'Spring Security', 'JPA / Hibernate'],
  },
  {
    title: 'Arquitetura & Mensageria',
    items: ['Clean Architecture', 'SOLID', 'DDD', 'RabbitMQ'],
  },
  {
    title: 'Dados & Infra',
    items: ['PostgreSQL', 'Docker', 'AWS EC2/S3', 'Nginx'],
  },
  {
    title: 'Segurança & Frontend',
    items: ['Keycloak', 'JWT / OAuth2', 'Angular', 'SCSS'],
  },
];
