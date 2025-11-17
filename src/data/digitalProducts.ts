import { BookOpen, PlayCircle, Code, Layers } from "lucide-react";

export const digitalProductsData = [
  {
    id: "guia-montagem-pc",
    type: "ebook",
    title: "Guia Completo de Montagem de PC Gamer",
    description: "Aprenda do zero como montar seu PC gamer. Inclui lista de componentes, passo a passo detalhado e dicas de otimização.",
    longDescription: "Este e-book é o guia definitivo para quem deseja montar seu próprio PC gamer. Com mais de 200 páginas de conteúdo rico e ilustrado, você aprenderá desde a escolha dos componentes até os toques finais de otimização. Inclui tabelas comparativas, listas de compatibilidade e dicas exclusivas de nossos especialistas.",
    price: 49.9,
    rating: 5,
    students: 342,
    icon: BookOpen,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Introdução ao Hardware Gamer",
      "Escolhendo o Processador Ideal",
      "Placas de Vídeo: Guia Completo",
      "Memória RAM e Armazenamento",
      "Placa-Mãe e Fonte de Alimentação",
      "Gabinetes e Refrigeração",
      "Montagem Passo a Passo",
      "Instalação do Sistema Operacional",
      "Drivers e Otimizações",
      "Troubleshooting Comum"
    ],
    benefits: [
      "Acesso vitalício ao conteúdo",
      "Atualizações gratuitas",
      "Lista de componentes atualizada",
      "Suporte via email"
    ]
  },
  {
    id: "curso-manutencao",
    type: "course",
    title: "Curso: Manutenção e Upgrade de PCs",
    description: "Curso completo em vídeo sobre manutenção preventiva, diagnóstico de problemas e upgrade de componentes.",
    longDescription: "Domine a arte da manutenção e upgrade de PCs com este curso prático em vídeo. São mais de 15 horas de conteúdo distribuídas em 45 aulas, onde você aprenderá técnicas profissionais de diagnóstico, limpeza, substituição de componentes e muito mais.",
    price: 149.9,
    rating: 5,
    students: 128,
    icon: PlayCircle,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Ferramentas Essenciais",
      "Diagnóstico de Problemas",
      "Limpeza e Manutenção Preventiva",
      "Upgrade de Memória RAM",
      "Instalação de SSD e HD",
      "Troca de Placa de Vídeo",
      "Upgrade de Processador",
      "Aplicação de Pasta Térmica",
      "Gerenciamento de Cabos",
      "Testes de Estabilidade"
    ],
    benefits: [
      "45 videoaulas práticas",
      "Certificado de conclusão",
      "Grupo exclusivo no Discord",
      "Material complementar em PDF"
    ]
  },
  {
    id: "ebook-otimizacao",
    type: "ebook",
    title: "E-book: Otimização de Performance",
    description: "Técnicas avançadas para extrair o máximo desempenho do seu hardware em jogos e aplicações.",
    longDescription: "Descubra os segredos para otimizar ao máximo seu PC gamer. Este e-book reúne técnicas profissionais de tweaking, ajustes de sistema operacional, configurações de BIOS e otimizações específicas para jogos populares.",
    price: 39.9,
    rating: 4,
    students: 215,
    icon: BookOpen,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Otimização do Windows",
      "Configurações de BIOS",
      "Ajustes de Placa de Vídeo",
      "Gerenciamento de Energia",
      "Otimização de Rede",
      "Tweaks para Jogos Específicos",
      "Monitoramento de Performance",
      "Limpeza de Sistema"
    ],
    benefits: [
      "Guias práticos ilustrados",
      "Scripts de otimização",
      "Comparativos de performance",
      "Atualizações mensais"
    ]
  },
  {
    id: "curso-overclock",
    type: "course",
    title: "Overclock Seguro: Do Básico ao Avançado",
    description: "Aprenda a fazer overclock de forma segura em processadores e placas de vídeo para ganhar mais FPS.",
    longDescription: "Master class sobre overclock seguro e eficiente. Aprenda com profissionais como extrair performance extra do seu hardware sem comprometer a estabilidade ou vida útil dos componentes.",
    price: 199.9,
    rating: 5,
    students: 89,
    icon: PlayCircle,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Fundamentos do Overclock",
      "Overclock de CPU Intel",
      "Overclock de CPU AMD",
      "Overclock de GPU NVIDIA",
      "Overclock de GPU AMD",
      "Overclock de Memória RAM",
      "Testes de Estabilidade",
      "Monitoramento e Segurança",
      "Refrigeração para Overclock",
      "Cases de Sucesso"
    ],
    benefits: [
      "30 videoaulas detalhadas",
      "Planilhas de configuração",
      "Grupo VIP de overclockers",
      "Suporte direto com instrutor"
    ]
  },
  {
    id: "ebook-streaming",
    type: "ebook",
    title: "Streaming para Gamers: Guia Definitivo",
    description: "Configure seu setup de streaming, escolha equipamentos e aprenda técnicas de engajamento.",
    longDescription: "Tudo que você precisa saber para começar sua carreira como streamer. Desde a configuração técnica até estratégias de crescimento e engajamento de comunidade.",
    price: 59.9,
    rating: 5,
    students: 167,
    icon: BookOpen,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Equipamentos para Streaming",
      "Configuração do OBS Studio",
      "Overlays e Alertas",
      "Qualidade de Áudio",
      "Iluminação para Stream",
      "Interação com Chat",
      "Estratégias de Crescimento",
      "Monetização"
    ],
    benefits: [
      "Templates exclusivos de overlays",
      "Lista de equipamentos recomendados",
      "Guia de configuração do OBS",
      "Dicas de marketing"
    ]
  },
  {
    id: "curso-linux-gaming",
    type: "course",
    title: "Linux Gaming: Steam Deck e Desktop",
    description: "Domine o gaming no Linux com configurações otimizadas para Steam Deck e desktops.",
    longDescription: "Aprenda a tirar o máximo proveito do gaming no Linux. Configurações avançadas, compatibilidade de jogos, otimizações e troubleshooting para Steam Deck e sistemas desktop.",
    price: 129.9,
    rating: 4,
    students: 73,
    icon: Code,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Instalação do Linux para Gaming",
      "Proton e Compatibilidade",
      "Drivers de GPU no Linux",
      "Steam Deck: Primeiros Passos",
      "Emulação no Linux",
      "Otimização de Performance",
      "Modding e Customização",
      "Troubleshooting Avançado"
    ],
    benefits: [
      "25 videoaulas",
      "Scripts de instalação automática",
      "Comunidade Linux Gaming",
      "Guias escritos complementares"
    ]
  },
  {
    id: "ebook-water-cooling",
    type: "ebook",
    title: "Water Cooling: Refrigeração Líquida Personalizada",
    description: "Guia completo para planejar e montar seu sistema de water cooling custom.",
    longDescription: "Aprenda a criar um sistema de refrigeração líquida personalizado. Desde o planejamento e escolha de componentes até a montagem final e manutenção.",
    price: 69.9,
    rating: 5,
    students: 94,
    icon: Layers,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Introdução ao Water Cooling",
      "Componentes do Sistema",
      "Planejamento do Loop",
      "Escolha de Radiadores",
      "Blocos de CPU e GPU",
      "Reservatórios e Bombas",
      "Tubulação: Rígida vs Flexível",
      "Montagem Passo a Passo",
      "Líquidos e Corantes",
      "Manutenção Preventiva"
    ],
    benefits: [
      "Calculadora de componentes",
      "Templates de planejamento",
      "Lista de fornecedores",
      "Galeria de inspiração"
    ]
  },
  {
    id: "curso-rgb-sync",
    type: "course",
    title: "RGB e Iluminação: Sincronização Total",
    description: "Domine a arte da iluminação RGB com sincronização perfeita entre todos os componentes.",
    longDescription: "Transforme seu setup com iluminação profissional. Aprenda a sincronizar RGB de diferentes fabricantes, criar efeitos customizados e integrar com seu ambiente.",
    price: 89.9,
    rating: 4,
    students: 156,
    icon: PlayCircle,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    chapters: [
      "Introdução ao RGB",
      "Software de Controle",
      "Sincronização Multi-marca",
      "Efeitos Personalizados",
      "Integração com Jogos",
      "Iluminação Ambiental",
      "Tiras LED e Acessórios",
      "Automação com Smart Home"
    ],
    benefits: [
      "20 videoaulas",
      "Profiles RGB prontos",
      "Guia de compatibilidade",
      "Suporte técnico"
    ]
  }
];
