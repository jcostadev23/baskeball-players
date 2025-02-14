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
│       ├── 📂 PlayerCard
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
git clone https://github.com/
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
  { "id": 1, "nome": "João" },
  { "id": 2, "nome": "Maria" },
  { "id": 3, "nome": "Carlos" }
]
```
A chamada da API está implementada no arquivo `api.js` utilizando `axios`.

## 🎨 Componentes
Os componentes são documentados no Storybook e incluem:
- **NomeList**: Lista de nomes
- **NomeItem**: Item individual da lista

## 🛠️ Desenvolvimento e Contribuição
Caso queira contribuir:
1. Faça um fork do repositório
2. Crie uma nova branch (`git checkout -b minha-feature`)
3. Faça suas alterações e commits (`git commit -m 'Minha nova feature'`)
4. Envie para o repositório remoto (`git push origin minha-feature`)
5. Crie um Pull Request

## 📄 Licença
Este projeto está licenciado sob a **MIT License**.

---
Desenvolvido por **[Jcostadev23]** 🚀


