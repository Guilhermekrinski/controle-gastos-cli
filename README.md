# 💸 GastoZero — API REST

API REST para controle de gastos pessoais com persistência em banco de dados na nuvem (Supabase/PostgreSQL), deploy contínuo e testes automatizados.

## 👥 Integrantes do Grupo

| Nome | Matrícula |
|------|-----------|
| Guilherme Krinski | 22504358 |
| Gabriel Ortiga | 22503789 |
| Ruan Costa | 22501713 |
| Pedro Saldanha | 22509813 |

## 🔗 Links

- **Repositório:** https://github.com/Guilhermekrinski/controle-gastos-cli
- **Deploy:** https://controle-gastos-cli-fwnf.onrender.com

## 📌 Sobre o Projeto

Aplicação que permite registrar, listar e calcular gastos pessoais via API REST. Os dados são persistidos em PostgreSQL hospedado no Supabase.

## 🚀 Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| Runtime | Node.js 20 |
| Framework | Express |
| Banco de Dados | Supabase (PostgreSQL) |
| Testes | Jest + Supertest |
| Lint | ESLint |
| CI/CD | GitHub Actions |
| Deploy | Render |

## ⚙️ Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/` | Health check |
| GET | `/gastos` | Lista todos os gastos |
| POST | `/gastos` | Adiciona um gasto |
| GET | `/gastos/total` | Soma total dos gastos |
| DELETE | `/gastos/:id` | Remove um gasto |

## 📥 Como rodar localmente

```bash
git clone https://github.com/Guilhermekrinski/controle-gastos-cli.git
cd controle-gastos-cli
npm install
cp .env.example .env
# Edite o .env com suas credenciais do Supabase
npm start
```

## 🗄️ Banco de Dados

```sql
CREATE TABLE gastos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  descricao TEXT NOT NULL,
  valor NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🧪 Testes

```bash
npm test
```
