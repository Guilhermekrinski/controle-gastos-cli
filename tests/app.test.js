const {
  adicionarGasto,
  listarGastos,
  totalGastos
} = require('../src/app');

const fs = require('fs');

beforeEach(() => {
  fs.writeFileSync('./data/gastos.json', '[]');
});

test('deve adicionar gasto corretamente', () => {
  adicionarGasto('Lanche', 10);
  const gastos = listarGastos();
  expect(gastos.length).toBe(1);
});

test('não deve aceitar valor negativo', () => {
  expect(() => adicionarGasto('Erro', -5)).toThrow();
});

test('deve calcular total corretamente', () => {
  adicionarGasto('A', 10);
  adicionarGasto('B', 20);
  expect(totalGastos()).toBe(30);
});