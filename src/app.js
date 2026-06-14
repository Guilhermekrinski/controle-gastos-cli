const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL || 'http://localhost',
    process.env.SUPABASE_KEY || 'placeholder'
  );
}

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Controle de Gastos API 🚀' });
});

app.get('/gastos', async (req, res) => {
  const { data, error } = await getSupabase()
    .from('gastos')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/gastos', async (req, res) => {
  const { descricao, valor } = req.body;
  if (!descricao || valor === undefined) {
    return res.status(400).json({ error: 'descricao e valor são obrigatórios' });
  }
  const { data, error } = await getSupabase()
    .from('gastos')
    .insert([{ descricao, valor: Number(valor) }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data[0]);
});

app.get('/gastos/total', async (req, res) => {
  const { data, error } = await getSupabase().from('gastos').select('valor');
  if (error) return res.status(500).json({ error: error.message });
  const total = data.reduce((acc, g) => acc + Number(g.valor), 0);
  res.json({ total });
});

app.delete('/gastos/:id', async (req, res) => {
  const { error } = await getSupabase().from('gastos').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Gasto removido com sucesso' });
});

module.exports = app;
