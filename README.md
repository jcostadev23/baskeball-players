# 📘 Aplicação com uma Chamada API e faz Display de Nomes

## 📌 Descrição
Esta é uma aplicação simples que realiza uma chamada a uma API e exibe os nomes retornados. O projeto utiliza o **Storybook** para desenvolver e documentar os componentes da interface.

## 🚀 Tecnologias Utilizadas
- **React** para a interface do usuário
- **TypeScript** para tipagem estática 
- **Async Fetch Functions** para chamadas à API
- **Storybook** para documentação dos componentes

## 📂 Estrutura do Projeto
```
📦 projeto
├── 📂 src
│   ├── 📂 components
│       ├── 📂 Button
│            ├── 📜 button.css
│            ├── 📜 index.tsx
│       ├── 📂 PlayCard
│            ├── 📜 index.tsx
│   ├── 📜 App.tsx
├── 📂 .storybook
│   ├── 📜 main.js
│   ├── 📜 preview.js
├── 📜 package.json
├── 📜 README.md
```

## 📡 Instalação e Execução

### 🔧 Requisitos
- **Node.js** instalado
- **Gerenciador de pacotes** (npm ou yarn)

### 📥 Passos para rodar o projeto
```bash
# Clone o repositório
git clone https://github.com/jcostadev23/baskeball-players
cd basketball-players

# Instale as dependências
npm install  # ou yarn install

# Execute a aplicação
npm start  # ou yarn start

# Execute o Storybook
npm run storybook  # ou yarn storybook
```

## 🔗 Endpoints da API
A aplicação consome uma API que retorna uma lista de nomes no seguinte formato:
```json
[
  { "id": 1, "first_name": "João", last_name: "Fernandes", jersey_number:3, team:"HFC" },
  { "id": 2, "first_name": "Ana", last_name: "Pita", jersey_number:6, team:"Redbulls" },
  { "id": 3, "first_name": "Lilia", last_name: "Dionisio", jersey_number:5, team:"Tigers" }
]
```

## 🎨 Componentes
Os componentes são documentados no Storybook e incluem:
- **Button**: Botão
- **PlayCard**: Um cartão para cada jogador da lista

## 🛠️ Desenvolvimento e Contribuição
Caso queira contribuir:
1. Faça um fork do repositório
2. Crie uma nova branch (`git checkout -b minha-feature`)
3. Faça suas alterações e commits (`git commit -m 'Minha nova feature'`)
4. Envie para o repositório remoto (`git push origin minha-feature`)
5. Crie um Pull Request

---
Desenvolvido por **[Jcostadev23]** 🚀


