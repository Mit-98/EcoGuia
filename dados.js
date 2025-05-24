// Array de objetos que armazenam informações sobre a coleta seletiva em diferentes cidades.
let dados = [
 // dados.js

  {
    // Informações sobre a cidade de Vargem Grande Paulista (Objeto principal da cidade)
    titulo: "Vargem Grande Paulista",
    descricao: "",
    link: "https://www.vargemgrandepaulista.sp.gov.br",
    localidade: "Vargem Grande Paulista - SP", // Adicionei para facilitar a busca

    // Array para os pontos de descarte e coleta específicos da cidade
    pontosDeColeta: [
      {
        tipoDeResiduo: "Entulho e Móveis",
        nomeServico: "SP Kata Tudo – Cata Bagulho",
        contato: "WhatsApp: (11) 95132-9182",
        observacoes: "Coleta de entulho, móveis e eletrodomésticos. Atendimento em domicílio.",

      },
      {
        tipoDeResiduo: "Entulho e Móveis",
        nomeServico: "Rafa Entulhos",
        contato: "https://www.rafaentulhos.com.br", // URL completo
        observacoes: "Coleta de entulho com caçambas. Licenciamento ambiental e destinação correta.",
        
      },
      {
        tipoDeResiduo: "Lixo Eletrônico",
        nomeServico: "Cintitec Ambiental",
        contato: "https://www.cintitec.com", // URL completo
        observacoes: "Coleta e reciclagem de eletrônicos.",
        
      },
      {
        tipoDeResiduo: "Lixo Eletrônico",
        nomeServico: "Ecoassist",
        contato: "https://www.ecoassist.com.br", // URL completo
        observacoes: "Coleta de eletrônicos para pessoas físicas e empresas.",
    
      },
      {
        tipoDeResiduo: "Óleo Usado",
        nomeServico: "Universo Ambiental",
        contato: "https://universoambiental.eco.br", // URL completo
        observacoes: "Coleta de óleos e lubrificantes usados.",
      
      },
      {
        tipoDeResiduo: "Óleo Usado",
        nomeServico: "Preserva Recicla",
        contato: "https://preservarecicla.com.br", // URL completo
        observacoes: "Coleta e reciclagem de óleos e gorduras residuais.",
      
      },
      {
        tipoDeResiduo: "Recicláveis",
        nomeServico: "Programa de Coleta Seletiva – Prefeitura",
        contato: "Contato: (11) 4158-8800",
        observacoes: "Coleta seletiva em fase de teste nos bairros Jardim Floresta, Marcopolo e condomínios.",
        
      },      
      {
        tipoDeResiduo: "Coleta Domiciliar",
        nomeServico: "Prefeitura de Vargem Grande Paulista",
        contato: "Contato: (11) 4158-8800",
        observacoes: "Sistema de coleta de lixo domiciliar que abrange todo o município.",
        
      }
            
    ]
  },
  // outras cidades:
  // {
  //   titulo: "Outra Cidade",
  //   descricao: "...",
  //   link: "...",
  //   pontosDeColeta: []
  // }
];
