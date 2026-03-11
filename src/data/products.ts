export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  warranty: string;
  inStock: boolean;
  category: string;
  subcategory?: string;
  badge?: string;
}

const PRODUCT_IMAGE = "/OIG4.jpg";

export const products: Product[] = [
  {
    id: "kit-completo",
    name: "Kit Completo - Motor com Sensor Corporal",
    shortDescription: "Sistema completo de automação com sensor anti-esmagamento para máxima segurança",
    description: "O Kit Completo é a solução mais avançada para automatização de portas de van. Inclui motor de alta potência, cremalheira de aço, kit de instalação profissional, botão no painel, controle remoto e o exclusivo sensor anti-esmagamento corporal que garante a segurança total dos passageiros.",
    price: 2499.00,
    originalPrice: 2899.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE, PRODUCT_IMAGE, PRODUCT_IMAGE],
    features: [
      "Motor de alta potência e baixo ruído",
      "Cremalheira de aço reforçada",
      "Kit de instalação completo",
      "Botão integrado ao painel",
      "Controle remoto incluso",
      "Sensor anti-esmagamento corporal",
      "Instalação profissional opcional"
    ],
    specs: [
      { label: "Voltagem", value: "12V" },
      { label: "Potência", value: "80W" },
      { label: "Tempo de abertura", value: "3-4 segundos" },
      { label: "Peso do kit", value: "4.5 kg" },
      { label: "Material", value: "Aço e alumínio" },
    ],
    warranty: "12 meses de garantia",
    inStock: true,
    category: "completo",
    badge: "Mais Vendido"
  },
  {
    id: "kit-simples",
    name: "Kit Simples - Motor sem Sensor de Presença",
    shortDescription: "Sistema de automação essencial com ótimo custo-benefício",
    description: "O Kit Simples oferece toda a praticidade da automação de porta de van com excelente custo-benefício. Ideal para quem busca conforto e modernização do veículo. Inclui motor, cremalheira, kit de instalação, botão no painel e controle remoto.",
    price: 1899.00,
    originalPrice: 2199.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE, PRODUCT_IMAGE],
    features: [
      "Motor de alta potência",
      "Cremalheira de aço",
      "Kit de instalação completo",
      "Botão integrado ao painel",
      "Controle remoto incluso"
    ],
    specs: [
      { label: "Voltagem", value: "12V" },
      { label: "Potência", value: "80W" },
      { label: "Tempo de abertura", value: "3-4 segundos" },
      { label: "Peso do kit", value: "3.8 kg" },
      { label: "Material", value: "Aço e alumínio" },
    ],
    warranty: "12 meses de garantia",
    inStock: true,
    category: "simples"
  },
  {
    id: "motor-reposicao",
    name: "Motor de Reposição",
    shortDescription: "Motor de reposição original para kits já instalados",
    description: "Motor de reposição original compatível com todos os kits Automatiza. Ideal para substituição em casos de manutenção ou upgrade do sistema existente.",
    price: 899.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: [
      "Motor original Automatiza",
      "Alta durabilidade",
      "Baixo consumo de energia",
      "Funcionamento silencioso"
    ],
    specs: [
      { label: "Voltagem", value: "12V" },
      { label: "Potência", value: "80W" },
      { label: "RPM", value: "60 rpm" },
      { label: "Peso", value: "1.2 kg" },
    ],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "acessorio"
  },
  {
    id: "controle-extra",
    name: "Controle Remoto Extra",
    shortDescription: "Controle remoto adicional para seu kit de automação",
    description: "Controle remoto adicional compatível com todos os kits Automatiza. Perfeito para ter um controle reserva ou para dar a outros motoristas/passageiros.",
    price: 149.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: [
      "Compatível com todos os kits",
      "Alcance de até 30 metros",
      "Bateria de longa duração",
      "Design ergonômico"
    ],
    specs: [
      { label: "Frequência", value: "433MHz" },
      { label: "Alcance", value: "30 metros" },
      { label: "Bateria", value: "CR2032" },
    ],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "acessorio"
  },
  {
    id: "sensor-anti-esmagamento",
    name: "Sensor Anti-Esmagamento",
    shortDescription: "Sensor de segurança para adicionar ao seu kit simples",
    description: "Transforme seu Kit Simples em Kit Completo adicionando o sensor anti-esmagamento. Garante segurança total detectando obstáculos e revertendo automaticamente o movimento da porta.",
    price: 349.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: [
      "Detecção de obstáculos",
      "Reversão automática",
      "Fácil instalação",
      "Compatível com kit simples"
    ],
    specs: [
      { label: "Tipo", value: "Sensor de pressão" },
      { label: "Resposta", value: "< 0.3 segundos" },
      { label: "Compatibilidade", value: "Kit Simples" },
    ],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "acessorio"
  },
  // Consumíveis e Peças
  {
    id: "consumivel-acionador",
    name: "Acionador",
    shortDescription: "Acionador para sistema de automação",
    description: "Componente de qualidade premium para garantir funcionamento perfeito do sistema.",
    price: 89.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Alta durabilidade", "Compatível com todos os kits", "Fácil instalação"],
    specs: [{ label: "Tipo", value: "Acionador" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-botao",
    name: "Botão",
    shortDescription: "Botão de comando para sistema de automação",
    description: "Botão de qualidade com acabamento profissional.",
    price: 49.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Design moderno", "Resistente", "Fácil instalação"],
    specs: [{ label: "Tipo", value: "Botão" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-buchas",
    name: "Buchas",
    shortDescription: "Conjunto de buchas para fixação",
    description: "Buchas de alta qualidade para garantir fixação segura.",
    price: 39.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Material reforçado", "Múltiplas aplicações", "Longa durabilidade"],
    specs: [{ label: "Tipo", value: "Buchas" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-capa",
    name: "Capa Protetora",
    shortDescription: "Capa protetora para componentes do sistema",
    description: "Proteção contra poeira e intempéries.",
    price: 59.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Impermeável", "Material resistente", "Fácil instalação"],
    specs: [{ label: "Tipo", value: "Capa Protetora" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-central",
    name: "Central de Controle",
    shortDescription: "Central de controle para sistema de automação",
    description: "Componente essencial para controlar todo o sistema.",
    price: 199.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Programável", "Confiável", "Compacta"],
    specs: [{ label: "Voltagem", value: "12V" }],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-chicote",
    name: "Chicote Elétrico",
    shortDescription: "Chicote elétrico para instalação do sistema",
    description: "Fiação de qualidade com isolamento adequado.",
    price: 79.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Fácil instalação", "Isolamento reforçado", "Completo"],
    specs: [{ label: "Comprimento", value: "Variável" }],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-acabamento",
    name: "Conjunto Acabamento",
    shortDescription: "Conjunto com peças de acabamento",
    description: "Completo com todos os acabamentos necessários.",
    price: 69.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Design moderno", "Qualidade premium", "Múltiplas peças"],
    specs: [{ label: "Tipo", value: "Acabamento" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-fixacao",
    name: "Conjunto Fixação",
    shortDescription: "Kit completo de fixação",
    description: "Todos os componentes necessários para fixação segura.",
    price: 59.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Completo", "Parafusos inclusos", "Garantido"],
    specs: [{ label: "Tipo", value: "Fixação" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-guia-nylon",
    name: "Guia Nylon",
    shortDescription: "Guia em nylon para cremalheira",
    description: "Reduz atrito e melhora o funcionamento.",
    price: 49.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Reduz atrito", "Silencioso", "Durável"],
    specs: [{ label: "Material", value: "Nylon" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-controle",
    name: "Controle Remoto Adicional",
    shortDescription: "Controle remoto extra para seu sistema",
    description: "Compatível com todos os sistemas Automatiza.",
    price: 149.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Compatível", "Alcance 30m", "Bateria incluída"],
    specs: [{ label: "Frequência", value: "433MHz" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-cremalheira",
    name: "Cremalheira de Aço",
    shortDescription: "Cremalheira de aço reforçado",
    description: "Componente essencial com alta durabilidade.",
    price: 299.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Aço reforçado", "Durável", "Confiável"],
    specs: [{ label: "Material", value: "Aço" }],
    warranty: "12 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-ima",
    name: "Ímã",
    shortDescription: "Ímã para sensor de posição",
    description: "Componente de qualidade para detecção precisa.",
    price: 29.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Potente", "Confiável", "Compacto"],
    specs: [{ label: "Tipo", value: "Ímã" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-lubrificante",
    name: "Lubrificante",
    shortDescription: "Lubrificante especial para sistema",
    description: "Mantém o sistema funcionando suavemente.",
    price: 39.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Reduz ruído", "Proteção contra corrosão", "Longa durabilidade"],
    specs: [{ label: "Volume", value: "250ml" }],
    warranty: "N/A",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-pinhao",
    name: "Pinhão",
    shortDescription: "Pinhão para transmissão",
    description: "Componente de qualidade premium.",
    price: 89.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Precisão", "Durável", "Silencioso"],
    specs: [{ label: "Tipo", value: "Pinhão" }],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-porca",
    name: "Porca",
    shortDescription: "Porca para fixação",
    description: "Porca de qualidade para fixação segura.",
    price: 19.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Segura", "Confiável", "Múltiplas aplicações"],
    specs: [{ label: "Tipo", value: "Porca" }],
    warranty: "N/A",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-protecao-cremalheira",
    name: "Proteção de Cremalheira",
    shortDescription: "Proteção contra poeira e detritos",
    description: "Protege a cremalheira de danos.",
    price: 69.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Proteção total", "Fácil instalação", "Durável"],
    specs: [{ label: "Tipo", value: "Proteção" }],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-rotula",
    name: "Rótula",
    shortDescription: "Rótula para articulação",
    description: "Componente que permite movimento suave.",
    price: 59.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Movimento suave", "Durável", "Confiável"],
    specs: [{ label: "Tipo", value: "Rótula" }],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-sensor",
    name: "Sensor",
    shortDescription: "Sensor para detecção",
    description: "Sensor de qualidade para garantir precisão.",
    price: 129.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Preciso", "Confiável", "Rápido"],
    specs: [{ label: "Tipo", value: "Sensor" }],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-sinal-luminoso",
    name: "Sinal Luminoso",
    shortDescription: "LED para indicação visual",
    description: "Indicador de status do sistema.",
    price: 39.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Visível", "Confiável", "Econômico"],
    specs: [{ label: "Tipo", value: "LED" }],
    warranty: "3 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-suporte-coluna",
    name: "Suporte Coluna",
    shortDescription: "Suporte para coluna de fixação",
    description: "Suporte resistente e confiável.",
    price: 79.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Resistente", "Seguro", "Durável"],
    specs: [{ label: "Material", value: "Aço" }],
    warranty: "6 meses de garantia",
    inStock: true,
    category: "consumivel"
  },
  {
    id: "consumivel-parafuso",
    name: "Parafuso",
    shortDescription: "Parafusos para fixação geral",
    description: "Parafusos de qualidade para múltiplas aplicações.",
    price: 24.00,
    image: PRODUCT_IMAGE,
    images: [PRODUCT_IMAGE],
    features: ["Seguro", "Confiável", "Versátil"],
    specs: [{ label: "Tipo", value: "Parafuso" }],
    warranty: "N/A",
    inStock: true,
    category: "consumivel"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
