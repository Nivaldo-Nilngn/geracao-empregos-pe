
# Formulário de Cadastro - Geração de Empregos PE

Este projeto é um formulário de cadastro que coleta informações de usuários, incluindo nome, telefone, idade, área de interesse e cidade, e envia esses dados para uma planilha do Google Sheets. O projeto também captura a data e a hora do envio dos dados para fins de controle.

## Funcionalidades

- Formulário responsivo para captura de dados dos usuários.
- Validação dos campos antes de enviar os dados.
- Envio dos dados para uma API do Google Sheets.
- Exibição de mensagens de alerta personalizadas para o usuário.
- Indicador de carregamento enquanto os dados são enviados.
- Captura automática da data e hora do envio dos dados.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Google Sheets API

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/NomeUsuario/nomedorepositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd nomedorepositorio
   ```

3. Abra o arquivo `index.html` em um navegador web.

## Como Configurar a API

Para que o formulário envie os dados corretamente para o Google Sheets, é necessário configurar uma API do Google Apps Script seguindo os seguintes passos:

1. Crie uma nova planilha no Google Sheets.
2. No menu "Extensões", selecione "Apps Script" e crie um novo script.
3. Adicione o script necessário para receber os dados e atualizar a planilha.
4. Implemente o URL gerado da API no código JavaScript no lugar da constante `api`.

## Estrutura de Arquivos

```bash
/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── html/
│   │   ├── sucesso.html
│   │   └── found404.html
│   └── js/
│       └── script.js
├── index.html
└── README.md
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

