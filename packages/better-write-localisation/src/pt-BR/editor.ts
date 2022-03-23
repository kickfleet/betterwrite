import { setPDFI18n } from 'better-write-plugin-pdf'

export default {
  auth: {
    login: {
      show: 'Entrar',
      title: 'Entrar no Better Write',
      error: 'Ocorreu um erro inesperado na autenticação da conta :(',
      placeholder: 'Digite seu email aqui.',
      success: 'Logado com sucesso!',
      google: 'Entrar com Conta Google',
      github: 'Entrar com Conta Github',
    },
  },
  project: {
    configuration: {
      title: 'Configurações do Projeto',
      creator: 'Autor',
      name: 'Nome',
      subject: 'Descrição',
      producer: 'Produtor',
      keywords: 'Palavras-Chave',
      tooltip: {
        base: 'Estes campos são utilizados pela aplicação para a exportação de documentos e geração de conteúdo quando for necessário. Em suma, preencha os campos corretamente.',
        creator:
          'Nome / Organização Responsável pela Criação / Escrita do Documento',
        name: 'Nome do Documento',
        subject: 'Assunto do Documento',
        producer: 'Produtor / Publicador do Documento',
        keywords: 'Palavras-Chave do Documento',
      },
    },
  },
  preferences: {
    shortcuts: {
      title: 'Teclas de Atalho',
      editor: {
        title: 'Editor de Texto',
        italic: 'Adicionar Itálico',
        bold: 'Adicionar Negrito',
        delete: 'Deletar',
        swap: 'Trocar de Posição',
        to: 'Ir Para Posição Seguinte',
        dragtitle: 'Arrastar a Posição',
        dragshort: 'Alt + Mouse Esq.',
      },
      global: {
        title: 'Geral',
        project: {
          title: 'Projeto',
          save: 'Salvar',
          load: 'Carregar',
          new: 'Novo',
          chapter: {
            title: 'Capítulo',
            new: 'Novo',
            delete: 'Deletar',
          },
          helpers: {
            title: 'Auxiliares',
            switcher: 'Trocar Texto',
            finder: 'Encontrar Texto',
            logger: 'Ações',
          },
          pdf: {
            title: 'PDF',
            generate: 'Criar',
            configuration: 'Configuração',
            preview: 'Visualização',
          },
        },
      },
    },
  },
  entity: {
    paragraph: 'Parágrafo',
    'heading-one': 'Título 1',
    'heading-two': 'Título 2',
    'heading-three': 'Título 3',
    'page-break': 'Quebra de Página',
    'line-break': 'Quebra de Linha',
    image: 'Imagem',
    generator: {
      template: 'Padrão',
    },
  },
  bar: {
    supabase: {
      load: 'Carregar da Nuvem',
      save: 'Salvar na Nuvem',
    },
    pdf: {
      preview: 'Simular',
      generate: 'Gerar',
      configuration: 'Configurar',
    },
    docx: {
      generate: 'Gerar',
    },
    project: {
      new: 'Novo',
      blank: 'Anotação Rápida',
      configuration: 'Configurar',
      statistics: 'Estatísticas',
      preferences: 'Preferências',
      corrector: 'Corretor',
      load: 'Carregar',
      save: 'Salvar',
      import: 'Importar',
      export: 'Exportar',
      exportAs: 'Exportar como...',
    },
    chapter: {
      drafts: 'Rascunhos',
      new: 'Novo',
      delete: 'Deletar',
      up: 'Cima',
      down: 'Baixo',
    },
    dropbox: {
      connect: 'Conectar',
      save: 'Salvar',
      load: 'Carregar',
    },
    drive: {
      save: 'Salvar Google Drive',
      load: 'Carregar Google Drive',
    },
    assistants: {
      actions: 'Ações',
      finder: 'Encontrar Texto',
      swapper: 'Substituir Texto',
    },
  },
  window: {
    confirmConfiguration: 'Você quer sair salvando as configurações?',
    confirmClearLogger: 'Você quer excluir todos os dados?',
    saveDropbox: 'Você tem certeza em salvar este arquivo no Dropbox?',
    saveLocal: 'Você tem certeza em salvar este arquivo?',
    deleteChapterPage: 'Você tem certeza em excluir o capítulo atual?',
  },
  text: {
    placeholder: {
      base: `Insira '{prefix}' para exibir a lista de comandos.`,
      paragraph: 'Parágrafo',
      headingone: 'H1',
      headingtwo: 'H2',
      headingthree: 'H3',
      shortcuts: {
        switcherEntry: 'Entrada',
        switcherOutput: 'Saída',
        finderEntry: 'Entrada',
      },
    },
  },
  pdf: setPDFI18n().br(),
  aside: {
    dropbox: {
      connect: 'Conectar',
      save: 'Salvar',
      load: 'Carregar',
    },
    drive: {
      save: 'Salvar Google Drive',
      load: 'Carregar Google Drive',
    },
    graph: {
      actuallyPage: 'Página Atual',
      projectPages: 'Projeto',
    },
    configuration: {
      title: 'Configuração',
      dark: 'Modo Escuro',
      lang: 'Linguagem',
      draggable: 'Arrastável',
      bars: 'Barras Laterias',
      autosave: 'Salvamento Automático (em minutos)',
      dropbox: {
        title: 'Dropbox',
        hourInSaveFileName: 'Horário No Nome Do Arquivo',
      },
      entity: {
        title: 'Editor',
        updateTime: 'Tempo Atualizado',
      },
    },
    entity: {
      delete: 'Deletar',
      up: 'Cima',
      down: 'Baixo',
      switch: 'Trocar',
      add: 'Adicionar',
      image: 'Imagem',
      comments: 'Comentários',
      paragraph: 'Parágrafo',
      optionsOn: 'Habilitar',
    },
    project: {
      title: 'Projeto',
      addons: {
        logger: {
          title: 'Ações',
        },
        textSwitcher: {
          title: 'Substituir Texto',
        },
        textFinder: {
          title: 'Encontrar Texto',
        },
      },
      save: {
        title: 'Salvar Simples',
      },
      load: {
        title: 'Carregar Simples',
      },
      blocked: 'Crie ou carregue um projeto!!!',
      page: {
        new: {
          title: 'Novo Capítulo',
        },
        delete: {
          title: 'Deletar Capítulo',
        },
      },
      new: {
        title: 'Novo Projeto',
        name: 'Nome',
        creator: 'Criador',
        subject: 'Sobre',
        version: 'Versão',
        confirm: 'Criar',
        type: 'Estilo',
        create: 'Crie',
        types: {
          blank: {
            title: 'Em Branco',
            description:
              'Crie um projeto sem nenhum recurso adicional. Recomendado para anotações e projetos simples.',
          },
          creative: {
            title: 'Criativo',
            description:
              'Crie um projeto com toda a estrutura necessária para a criação de livros.',
          },
        },
        content: {
          name: 'Novo Projeto',
          nameNew: 'Sem Título',
          creator: 'Lorem Ipsum',
          subject:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum molestie metus. Etiam in metus arcu. Ut at augue neque. Donec ac felis vel arcu gravida volutpat.',
          version: '0.1.0',
        },
      },
    },
    pdf: {
      title: 'Gerar',
      preview: 'Simular',
      configuration: 'Configurar',
    },
    commands: {
      title: 'Comandos',
      prefix: 'Prefixo',
      contents: [
        {
          tag: 'P',
          title: 'Parágrafo',
          prefix: '',
          description: '{prefix} texto aqui',
          content: '',
        },
        {
          tag: 'B',
          title: 'Negrito',
          prefix: '',
          description: '&texto aqui&',
          content: '',
        },
        {
          tag: 'I',
          title: 'Itálico',
          prefix: '',
          description: '*texto aqui*',
          content: '',
        },
        {
          tag: 'H1',
          title: 'Cabeçalho 1',
          prefix: '',
          description: '{prefix} texto aqui',
          content: '',
        },
        {
          tag: 'H2',
          title: 'Cabeçalho 2',
          prefix: '',
          description: '{prefix} texto aqui',
          content: '',
        },
        {
          tag: 'H3',
          title: 'Cabeçalho 3',
          prefix: '',
          description: '{prefix} texto aqui',
          content: '',
        },
        {
          tag: 'BP',
          title: 'Quebra de Página',
          prefix: '',
          description: '{prefix}',
          content: '',
        },
        {
          tag: 'LB',
          title: 'Quebra de Linha',
          prefix: '',
          description: '{prefix}',
          content: '',
        },
        {
          tag: 'IM',
          title: 'Imagem',
          prefix: '',
          description: '{prefix}',
          content: '',
        },
        {
          tag: 'D',
          title: 'Diálogo',
          prefix: 'Diálogo - Prefixo',
          description: '{prefix}   {value}',
          content: 'Diálogo - Valor',
        },
      ],
    },
  },
  pwa: {
    prompt: {
      offlineReady: 'Aplicativo pronto para funcionar offline!',
      newContent: `Novo conteúdo disponível, clique no botão 'Atualizar' para carregar a nova versão.`,
      reload: 'Atualizar',
      close: 'Fechar',
    },
  },
  drafts: {
    active: 'Ativo',
    others: 'Outros',
    chapters: 'Capítulos',
    statistics: {
      characters: 'Caracteres',
      letters: 'Letras',
      paragraph: 'Parágrafos',
      heading: 'Cabeçalhos',
      fixed: 'Itens Fixados',
      longest: 'Maior Conteúdo',
    },
  },
  addons: {
    corrector: {
      convert: 'Converter',
      removeStartWhitespace: {
        title: 'Remover Espaços do Início',
        description:
          'Todos os espaços em branco no começo do parágrafo serão removidos.',
      },
      removeEndWhitespace: {
        title: 'Remover Espaços do Final',
        description:
          'Todos os espaços em branco no fim do parágrafo serão removidos.',
      },
      insertParagraphEndStop: {
        title: 'Inserir Ponto Final',
        description:
          'Todos os parágrafos terão um ponto final acrescentado se houver necessidade.',
      },
      removeExtraWhitespace: {
        title: 'Remover Múltiplos Espaços em Branco',
        description:
          'Todos os espaços em brancos desnecessários serão removidos.',
      },
      insertDialogEndStop: {
        title: 'Inserir Ponto Final no Diálogo',
        description:
          'Todos os parágrafos terão um ponto final acrescentado no final da segunda ocorrência de diálogo.',
      },
    },
    statistics: {
      global: 'Global',
      characters: 'Caracteres',
      impact: 'Impacto por Capítulo',
      letters: 'Letras',
      words: 'Palavras',
      repeated: 'Palavras Repetidas',
      min: 'Mínimo de Caracteres',
      paragraph: 'Parágrafos',
      heading: 'Cabeçalhos',
      fixed: 'Itens Fixados',
      longest: 'Maior Conteúdo',
    },
  },
}