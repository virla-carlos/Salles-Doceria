# 🍰 Salles Doceria

Projeto de uma página web para divulgação de uma doceria fictícia, desenvolvido com o objetivo de praticar **HTML**, **CSS**, **Tailwind CSS** e futuramente **JavaScript**.

A ideia do projeto é criar uma interface moderna, responsiva e agradável para apresentar a Salles Doceria, seus produtos, informações sobre a loja e formas de contato.

---

## 📌 Sobre o projeto

A **Salles Doceria** é um projeto de estudo voltado para o desenvolvimento Front-end.

A página está sendo construída de forma progressiva, com foco em boas práticas de estruturação HTML, estilização com Tailwind CSS, organização de arquivos e responsividade para diferentes dispositivos.

O site conta com as seguintes seções:

- 🏠 **Início** — Hero section com carrossel de imagens e chamada para ação
- 🍫 **Doces** — Vitrine de produtos da doceria
- 📖 **Sobre** — História e diferenciais da loja
- 📞 **Contato** — Formas de entrar em contato

---

## 🚀 Tecnologias e ferramentas utilizadas

[![My Skills](https://skillicons.dev/icons?i=figma,html,css,tailwind,nodejs,npm,git,github,vscode)](https://skillicons.dev)

---

## 📁 Estrutura do projeto

```text
Salles-Doceria/
│
├── frontend/
│   └── index.html
│
├── img/
│   └── imagens utilizadas no projeto
│
├── src/
│   ├── input.css
│   └── output.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Como executar o projeto

Para rodar o projeto na sua máquina, siga os passos abaixo:

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

No **PowerShell**, caso o comando `npx` apresente erro de política de execução, use:

```bash
npx.cmd @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

No **CMD**, **Git Bash** ou outros terminais:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

> O `--watch` faz o Tailwind observar os arquivos HTML automaticamente e atualizar o `output.css` a cada alteração.

### 5. Abra o projeto no navegador

```text
frontend/index.html
```

Abra manualmente no navegador ou use a extensão **Live Server** no VS Code.

---

## ✅ Funcionalidades implementadas

- [x] Navbar fixa com efeito de transparência ao rolar
- [x] Menu hamburguer para dispositivos móveis
- [x] Hero section com carrossel de imagens automático
- [x] Layout responsivo para mobile e desktop
- [x] Botão com efeito hover personalizado
- [x] Transições e animações com Tailwind CSS

## 🎯 Funcionalidades planejadas

- [ ] Seção de produtos com cards
- [ ] Seção Sobre com história da loja
- [ ] Seção de Contato com links para WhatsApp e Instagram
- [ ] Melhorias de acessibilidade
- [ ] Novas interações com JavaScript

---

## 📚 Aprendizados com o projeto

Durante o desenvolvimento deste projeto, estou praticando:

- Estruturação semântica de páginas com HTML
- Estilização com classes utilitárias do Tailwind CSS v4
- Criação de layouts responsivos com Flexbox e Grid
- Organização de pastas e boas práticas de projeto
- Controle de versão com Git e GitHub
- Interatividade básica com JavaScript puro

---

## 🛠️ Status do projeto

🚧 **Em desenvolvimento** — Novas seções e funcionalidades serão adicionadas progressivamente.

---

## 👨‍💻 Autor

Desenvolvido por **Carlos Alberto**.

Este projeto faz parte dos meus estudos em desenvolvimento web, com o objetivo de evoluir como desenvolvedor Front-end.
