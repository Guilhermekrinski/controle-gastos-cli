const fs = require('fs');
const path = './data/gastos.json';

function carregarGastos() {
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path));
}

function salvarGastos(gastos) {
  fs.writeFileSync(path, JSON.stringify(gastos, null, 2));
}

function adicionarGasto(descricao, valor) {
  if (valor <= 0) throw new Error('Valor inválido');

  const gastos = carregarGastos();
  gastos.push({ descricao, valor });
  salvarGastos(gastos);
}

function listarGastos() {
  return carregarGastos();
}

function totalGastos() {
  return carregarGastos().reduce((acc, g) => acc + g.valor, 0);
}

module.exports = {
  adicionarGasto,
  listarGastos,
  totalGastos
};

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args[0] === 'add') {
    adicionarGasto(args[1], Number(args[2]));
    console.log('Gasto adicionado!');
  }

  if (args[0] === 'list') {
    console.log(listarGastos());
  }

  if (args[0] === 'total') {
    console.log('Total:', totalGastos());
  }
}