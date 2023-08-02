import { Opening } from 'shared/src/email/openings-email/Opening'
import { Openings } from '../Openings'

const localOpenings: Opening[] = [
  {
    title: 'Designer Gráfico',
    company: 'Deloitte',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Criação de Arte', 'Adobe Creative Suite', 'Comunicação Visual'],
    headerInfo: 'Júnior',
    url: 'https://www.linkedin.com/jobs/view/3667740644/',
  },
  {
    title: 'Desenvolvedor(a) .Net(C#)',
    company: 'Codecycle',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['.Net', 'SQL Server', 'Angular', 'API', 'Bootstrap'],
    headerInfo: 'Júnior (até R$4,000)',
    url: 'https://programathor.com.br/jobs/29015-desenvolvedor-a-net-c-junior',
  },
  {
    title: 'Analista de Testes',
    company: 'Melhor Escolha',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: [
      'JavaScript',
      'HTML',
      'Testes automatizados',
      'Testes de Regressão',
      'Testes Funcionais',
    ],
    headerInfo: 'Júnior (até R$3,500)',
    url: 'https://programathor.com.br/jobs/28976-analista-de-testes-junior-100-remoto',
  },
  {
    title: 'Desenvolvedor(a) .NET',
    company: 'Datanext Informatica Ltda',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['C#', 'iOS', 'Android', 'API', 'SQLServer'],
    headerInfo: 'Júnior (até R$2,500)',
    url: 'https://programathor.com.br/jobs/28998-desenvolvedor-a-jr-net-c-ios-android',
  },
  {
    title: 'Desenvolvedor(a) Flutter',
    company: 'Criasol',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Flutter', 'Dart', 'SCRUM'],
    headerInfo: 'Sênior (até R$15,000)',
    url: 'https://programathor.com.br/jobs/28923-desenvolvedor-a-flutter-bilingue-senior',
  },
  {
    company: 'Monde',
    title: 'Desenvolvedor(a) Ruby on Rails Sênior',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Ruby on Rails', 'TDD', 'Clean Code', 'Front-end'],
    headerInfo: 'Mínimo de 5 anos de XP (até R$12,000)',
    url: 'https://programathor.com.br/jobs/29054-desenvolvedor-a-ruby-on-rails-senior',
  },
  {
    title: 'Desenvolvedor Angular',
    company: 'DataFarm',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Angular 11+', 'RxJS', 'Front-end', 'SPA', 'UX'],
    headerInfo: 'Pleno (Até R$10.000)',
    url: 'https://programathor.com.br/jobs/29038-desenvolvedor-a-pleno-angular-remoto',
  },
  {
    title: 'Desenvolvedor Backend',
    company: 'Gentle Startup',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['web', 'mobile', 'Documentação de código', 'Metodologias ágeis'],
    headerInfo: 'Sênior (Até R$8,000)',
    url: 'https://programathor.com.br/jobs/29051-desenvolvedor-a-backend-senior',
  },
  {
    title: 'Desenvolvedor(a) React Native / Flutter',
    company: 'DataFarm',
    location: 'Brasil',
    language: 'Português',
    url: 'https://programathor.com.br/jobs/29040-desenvolvedor-a-pleno-react-native-flutter-remoto',
    headerInfo: 'Pleno (até R$8,000)',
    skills: ['React Native', 'Flutter', 'Dart', 'JavaScript', 'SQL'],
    currency: 'R$',
  },

  {
    title: 'Desenvolvedor Python para Web',
    company: 'Weef',
    location: 'Brasil',
    language: 'Português',
    headerInfo: 'Pleno (Até R$8,000)',
    skills: ['Python', 'Django', 'JavaScript', 'Banco de Dados NoSQL', 'CI/CD'],
    currency: 'R$',
    url: 'https://programathor.com.br/jobs/28996-desenvolvedor-a-python-para-web-pleno-100-remoto',
  },
  {
    title: 'Desenvolvedor(a) PHP',
    company: 'Inovando Soluções Digitais',
    location: 'Brasil',
    language: 'Português',
    url: 'https://programathor.com.br/jobs/28993-desenvolvedor-a-php-pleno',
    headerInfo: 'Pleno (até R$7,000)',
    skills: [
      'PHP',
      'JavaScript',
      'Banco de dados MySQL',
      'Docker',
      'Metodologias ágeis',
    ],
    currency: 'R$',
  },
  {
    title: 'Desenvolvedor(a) Laravel',
    company: 'KnowBIT',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Laravel', 'PHP', 'ERP', 'MySQL'],
    headerInfo: 'Pleno (até R$6,000)',
    url: 'https://programathor.com.br/jobs/29036-desenvolvedor-a-laravel-pleno',
  },
  {
    title: 'Desenvolvedor Pleno',
    company: 'BW2 Tech',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: [
      'Desenvolvimento web',
      'Front-End',
      'UX',
      'Metodologias ágeis',
      'Design system',
    ],
    headerInfo: 'Pleno (Até R$5,000)',
    url: 'https://programathor.com.br/jobs/29019-desenvolvedor-a-front-end-react-typescript-pleno',
  },
  {
    title: 'Desenvolvedor(a) React Native Pleno',
    company: 'BW2 Tech',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['React Native', 'Android', 'iOS', 'TypeScript', 'Git'],
    headerInfo: 'Pleno (até R$6,000)',
    url: 'https://programathor.com.br/jobs/29018-desenvolvedor-a-react-native-pleno',
  },
  {
    title: 'Desenvolvedor Delphi',
    company: 'Adaptive Tecnologia',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: [
      'Delphi',
      'Pascal',
      'PLpgSQL',
      'APIs REST',
      'Conhecimentos contábeis',
    ],
    headerInfo: 'Pleno (até R$4,000)',
    url: 'https://programathor.com.br/jobs/29008-dev-delphi-pleno',
  },
  {
    company: 'meutudo.',
    title: 'DevOps',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Shell Script', 'Python', 'Docker', 'Monitoramento', 'CircleCI'],
    headerInfo: 'Sênior',
    url: 'https://jobs.quickin.io/meutudo/jobs/64b1dcf185c82c001a3ecc92',
  },

  {
    title: 'Desenvolvedor Fullstack (node.js e react.js)',
    company: 'Grupo Matera',
    location: 'Brasil',
    language: 'Português',
    url: 'https://matera.inhire.app/vagas/f6788d5e-d362-45c3-ba54-aec524dc467a/desenvolvedor-fullstack-(node.js-e-react.js)',
    headerInfo: 'Fullstack',
    skills: ['Node.JS', 'Microsserviços', 'AWS', 'NoSQL', 'Testes unitários'],
    currency: 'R$',
  },
  {
    company: 'Grupo Matera',
    title: 'Desenvolvedor Fullstack Pleno (Java e Angular)',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Java', 'AngularJS', 'Oracle', 'JUnit', 'Sprint Boot'],
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://matera.inhire.app/vagas/8eeca34d-3d70-4617-82a0-0c9f4e4a51b4/desenvolvedor-fullstack-pleno-(java-e-angular)',
  },
  {
    company: 'Deloitte',
    title: 'Arquiteto de Soluções',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['.Net', 'C#', 'TDD', 'Docker', 'Angular'],
    headerInfo: 'Pleno',
    url: 'https://www.linkedin.com/jobs/view/3667740471/',
  },
  {
    company: 'Dataside',
    title: 'Engenheiro de Dados Azure PL/SR',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['OLAP', 'Apache Spark', 'Databricks', 'Cloud provider'],
    headerInfo: 'Pleno',
    url: 'https://dataside.solides.jobs/vacancies/97533#vacancyDescription',
  },
  {
    company: 'Dataside',
    title: 'Analista de Governança de Dados',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['DAMA DMBOK', 'fluxos de dados', 'Arquitetura de dados'],
    headerInfo: 'Pleno',
    url: 'https://dataside.solides.jobs/vacancies/267300', //! confirmar com caio
  },
  {
    company: 'Croct',
    title: 'Cloud Engineer',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Kubernetes', 'Google Cloud', 'Kafka', 'CI/CD', 'Microservices'],
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://croct.com/careers/jobs/cloud-engineer/',
  },
  {
    title: 'Analista de Teste/QA Pleno',
    company: 'Via Linkedin',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Testes automatizados', 'WEB', 'Mobile', 'CI/CD', 'AWS'],
    headerInfo: 'Pleno (R$3,500)', //! confirmar virgula, na opening 2023-07 esta com ponto(linha 40)
    url: 'https://www.linkedin.com/jobs/view/3662364085', //! 500 candidaturas
  },
]

const globalOpenings: Opening[] = [
  {
    title: 'Product Designer',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    url: 'https://www.onstrider.com/jobs/product-designer-d7ed2ba9',
    headerInfo: 'Mínimo de 3 anos de XP',
    skills: ['UI', 'UX', 'Data visualization'],
    currency: 'U$',
  },
  {
    company: 'Strider',
    title: 'Mid-level Scraping Engineer',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    skills: ['Python', 'Playwright', 'Web Scraping'],
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://www.onstrider.com/jobs/mid-level-scraping-engineer-python-768b97ac',
  },
  {
    title: 'Mid Front-end Engineer',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    skills: ['Vue.js', 'HTML', 'CSS'],
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://www.onstrider.com/jobs/mid-front-end-engineer-vue.js-625390c7',
  },
  {
    company: 'Proxify',
    title: 'Senior Full Stack Developer',
    location: 'Reino Unido',
    language: 'Inglês',
    currency: 'U$',
    skills: [
      'React JS',
      'NodeJS',
      'Microservices architecture',
      'SQL',
      'MongoDB',
    ],
    headerInfo: 'Mínimo de 4 anos de XP ($4,100 a $6,250)',
    url: 'https://remotive.com/remote-jobs/software-dev/senior-full-stack-developer-1359476',
  },
  {
    company: 'Skrapp.io',
    title: 'Fullstack Developer (Node.js, React, NoSQL, SQL)',
    location: 'Singapura',
    language: 'Inglês',
    currency: 'U$',
    skills: ['Node.js', 'React', 'NoSQL', 'SQL'],
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://apply.workable.com/skrapp/j/F89337DE3A/',
  },
  {
    company: 'SegMetrics',
    title: 'Full Stack Developer (SaaS)',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    skills: [
      'Full Stack Development',
      'Laravel',
      'MySQL',
      'Vue.js',
      'API Integration',
    ],
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://dynamitejobs.com/apply/sHcUBAieCg6vlJ5bwD1y',
  },
  {
    title: 'Senior Software Engineer',
    company: 'CloudWalk',
    location: 'Brasil',
    language: 'Inglês',
    url: 'https://dynamitejobs.com/company/cloudwalk/remote-job/senior-software-engineer',
    headerInfo: 'Mínimo de 5 anos de XP',
    skills: ['Next.js', 'Problem solving', 'React.js'],
    currency: 'R$',
  },
  {
    title: 'Lead Front-end Engineer - React.js',
    company: 'Strider',
    location: 'Estados Unidos',
    currency: 'U$',
    language: 'Inglês',
    url: 'https://www.onstrider.com/jobs/lead-front-end-engineer-react.js-23302e4c',
    headerInfo: 'Mínimo de 6 anos de XP',
    skills: ['React.js', 'Technical lead', 'Communication'],
  },
  {
    title: 'Front End Developer',
    company: 'Coalition Technologies',
    location: 'Estados Unidos',
    language: 'Inglês',
    headerInfo: '$2,600 a $6,000',
    currency: 'U$',
    skills: ['HTML5', 'CSS3', 'jQuery'],
    url: 'https://app.testedrecruits.com/posting/11625',
  },
  {
    company: 'Southgeeks',
    title: 'Golang Engineer',
    location: 'LATAM',
    language: 'Inglês',
    headerInfo: 'Mínimo de 3 anos de XP',
    skills: ['Software developer', 'Golang', 'Javascript'],
    currency: 'U$',
    url: 'https://www.southgeeks.com/careers?ashby_jid=737b86b2-4ead-4a48-8971-9624cf58b0d1',
  },
  {
    company: 'Southgeeks',
    title: 'Senior Front end engineer',
    location: 'LATAM',
    language: 'Inglês',
    currency: 'U$',
    skills: ['Vue.js', 'React.js', 'REST API', 'Accessibility'],
    headerInfo: 'Front-end Engineer',
    url: 'https://jobs.ashbyhq.com/southgeeks/5355abc9-df87-4321-a588-fc42b251ca64',
  },
  {
    company: 'Builder Prime',
    title: 'Senior DevOps Engineer (SaaS)',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    skills: [
      'DevOps',
      'Java Spring',
      'AngularJS',
      'PostgreSQL',
      'Continuous Integration',
    ],
    headerInfo: 'Mínimo de 5 anos de XP',
    url: 'https://dynamitejobs.com/company/builderprime/remote-job/senior-devops-engineer-saas',
  },
]

export const openings20230719: Openings = {
  localOpenings,
  globalOpenings,
}
