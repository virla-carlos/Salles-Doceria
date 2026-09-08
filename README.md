# 🍰 Salles Doceria

Projeto de uma página web desenvolvida para a **Salles Doceria**, com o objetivo de apresentar seus produtos, facilitar o contato com os clientes e permitir a realização de pedidos através do WhatsApp.

O projeto foi desenvolvido utilizando **HTML**, **CSS**, **Tailwind CSS** e **JavaScript**, com foco em uma interface moderna, responsiva e de fácil utilização.

---

## 📌 Sobre o projeto

A **Salles Doceria** é um projeto web desenvolvido para apresentar os produtos da doceria e facilitar o processo de realização de pedidos.

O site está sendo construído de forma progressiva, seguindo boas práticas de organização, responsividade e experiência do usuário.

Atualmente, o cliente pode visualizar os produtos disponíveis, adicionar itens ao carrinho, alterar suas quantidades, remover produtos e finalizar o pedido através do WhatsApp.

O site conta com as seguintes seções:

- 🏠 **Início** — Hero section com carrossel de imagens e chamada para ação
- 🍫 **Doces** — Vitrine com os produtos disponíveis na doceria
- 📖 **Sobre** — História e diferenciais da Salles Doceria
- 📞 **Contato** — Informações e formas de entrar em contato com a doceria

---

## 🚀 Tecnologias e ferramentas utilizadas

[![My Skills](https://skillicons.dev/icons?i=figma,html,css,tailwind,js,nodejs,npm,git,github,vscode)](https://skillicons.dev)

---

## 📁 Estrutura do projeto

```text
Salles-Doceria/
│
├── frontend/
│   ├── css/
│   │   └── output.css
│   │
│   ├── img/
│   │   └── imagens utilizadas no projeto
│   │
│   ├── js/
│   │   └── arquivos JavaScript
│   │
│   └── index.html
│
├── src/
│   └── input.css
│
├── docs/
│   ├── 00-README.md
│   ├── 01-glossario.md
│   ├── 02-escopo.md
│   ├── 03-requisitos.md
│   └── funcionalidades/
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Como executar o projeto

Para executar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/virla-carlos/Salles-Doceria.git
```

### 2. Acesse a pasta do projeto

```bash
cd Salles-Doceria
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Rode o Tailwind CSS

No **PowerShell**, caso o comando `npx` apresente erro relacionado à política de execução, utilize:

```bash
npx.cmd @tailwindcss/cli -i ./src/input.css -o ./frontend/css/output.css --watch
```

No **CMD**, **Git Bash** ou outros terminais:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./frontend/css/output.css --watch
```

> O `--watch` mantém o Tailwind observando as alterações realizadas durante o desenvolvimento e atualiza automaticamente o arquivo CSS gerado.

### 5. Abra o projeto no navegador

Abra o arquivo:

```text
frontend/index.html
```

O projeto também pode ser executado utilizando a extensão **Live Server** no VS Code.

---

## ✅ Funcionalidades implementadas

- [x] Navbar fixa com efeito de transparência ao rolar a página
- [x] Menu responsivo para dispositivos móveis
- [x] Hero section com carrossel automático de imagens
- [x] Layout responsivo para dispositivos móveis e desktop
- [x] Botões com efeitos de interação
- [x] Transições e animações utilizando Tailwind CSS
- [x] Seção de produtos com cards
- [x] Exibição de nome, descrição, preço e tamanho dos produtos
- [x] Seção Sobre com informações da doceria
- [x] Seção de Contato
- [x] Links para contato e redes sociais
- [x] Carrinho de compras
- [x] Adição de produtos ao carrinho
- [x] Alteração da quantidade dos produtos no carrinho
- [x] Remoção de produtos do carrinho
- [x] Atualização automática do valor total do pedido
- [x] Validação de carrinho vazio
- [x] Finalização do pedido através do WhatsApp
- [x] Geração automática da mensagem do pedido
- [x] Favicon personalizado
- [x] Deploy da aplicação

---

## 🎯 Funcionalidades planejadas

- [ ] Organização dos doces por categorias
- [ ] Carrossel de produtos por categoria
- [ ] Navegação entre produtos utilizando controles do carrossel
- [ ] Melhorias de acessibilidade
- [ ] Melhorias contínuas de responsividade
- [ ] Aprimoramento da experiência do carrinho
- [ ] Novas interações com JavaScript

---

## 📚 Aprendizados com o projeto

Durante o desenvolvimento deste projeto, estou praticando e aprimorando conhecimentos em:

- Estruturação semântica de páginas com HTML
- Estilização com Tailwind CSS
- Desenvolvimento de layouts responsivos
- Utilização de Flexbox e Grid
- Manipulação do DOM com JavaScript
- Eventos e interações utilizando JavaScript
- Desenvolvimento da lógica de um carrinho de compras
- Manipulação de produtos e quantidades no carrinho
- Integração do site com WhatsApp
- Organização de arquivos e estrutura de projetos
- Controle de versão com Git e GitHub
- Utilização de branches para desenvolvimento de funcionalidades
- Organização de commits
- Deploy e atualização de aplicações web
- Levantamento e documentação de requisitos

---

## 🛠️ Status do projeto

🚧 **Em desenvolvimento**

O projeto está disponível para utilização, porém continua recebendo novas funcionalidades, melhorias de interface e ajustes na experiência do usuário.

---

## 👨‍💻 Autor

Desenvolvido por **Carlos Alberto**.

Projeto desenvolvido como parte da evolução dos meus conhecimentos em desenvolvimento de software, aplicando conceitos de Front-end, JavaScript, Git/GitHub e desenvolvimento de uma solução voltada para uma necessidade real.