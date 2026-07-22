import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    role: 'Desenvolvedor de Sistemas',
    company: 'SMH Sistemas',
    period: 'Jan 2026 — Atual',
    location: '',
    current: true,
    startDate: '2026-01',
    achievements: [
      'Desenvolvimento do microsserviço responsável pelo ciclo de vida das propostas comerciais, centralizando regras de negócio, custos, comissões e impostos.',
      'Automatização de 100% dos cálculos tributários (INSS, ICMS, ISS, PIS, COFINS, IRPJ e CSLL), eliminando processos manuais e reduzindo erros operacionais.',
      'Implementação de arquitetura orientada a eventos com RabbitMQ, desacoplando microsserviços e aumentando a escalabilidade da plataforma.',
      'Desenvolvimento de microsserviços para clientes, colaboradores e precificação, centralizando dados e eliminando inconsistências entre sistemas.',
      'Implementação de autenticação centralizada com Keycloak e otimização de consultas com Redis, aumentando segurança e desempenho.',
      'Desenvolvimento de APIs REST com Java, Spring Boot e PostgreSQL, aplicando Clean Architecture, testes automatizados e boas práticas de engenharia de software.',
    ],
  },
  {
    role: 'Estagiário em Desenvolvimento de Sistemas',
    company: 'SMH Sistemas',
    period: 'Out 2025 — Dez 2025',
    location: '',
    current: false,
    startDate: '2025-10',
    endDate: '2025-12',
    achievements: [
      'Desenvolvimento e manutenção de APIs REST utilizando Java, Spring Boot e PostgreSQL.',
      'Implementação de autenticação e autorização com JWT e integração entre sistemas internos.',
      'Participação na modelagem de banco de dados, implementação de regras de negócio e correção de bugs.',
      'Colaboração com equipes de negócio no levantamento de requisitos e transformação de processos em soluções técnicas.',
      'Desenvolvimento de testes, documentação técnica e versionamento de código utilizando Git.',
    ],
  },
];