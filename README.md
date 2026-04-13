# Controle de Gastos CLI

## 📌 Problema

Muitas pessoas têm dificuldade em controlar seus gastos diários, o que pode levar à desorganização financeira e até ao endividamento.

## 💡 Solução

Esta aplicação permite registrar, listar e calcular gastos de forma simples utilizando o terminal, ajudando o usuário a manter controle sobre suas finanças.

## 👥 Público-alvo

Pessoas que desejam organizar suas finanças pessoais de forma prática e rápida.

## ⚙️ Funcionalidades

* Adicionar gasto
* Listar gastos
* Ver total de gastos

## 🚀 Tecnologias

* Node.js
* Jest (testes automatizados)
* ESLint (análise de código)

## 📥 Instalação

```bash
npm install
```

## ▶️ Execução

```bash
node src/app.js add "Almoço" 25
node src/app.js list
node src/app.js total
```

## 🧪 Testes

```bash
npm test
```

## 🧹 Lint

```bash
npm run lint
```

## 🔢 Versão

1.0.0

## 👨‍💻 Autor

Guilherme Krinski

## 🔗 Repositório

https://github.com/Guilhermekrinski/controle-gastos-cli

## 📸 Exemplo de uso

```bash
node src/app.js add "Almoço" 25
node src/app.js list
[ { descricao: 'Almoço', valor: 25 } ]
node src/app.js total
Total: 25
```
