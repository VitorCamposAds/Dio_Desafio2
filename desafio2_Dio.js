const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

(async () => {
  const vitorias = await prompt("Digite a quantidade de vitórias: ");
  const derrotas = await prompt("Digite a quantidade de derrotas: ");

  const saldo = parseInt(vitorias) - parseInt(derrotas);

  if (saldo < 10) {
    console.log("O Herói está no nível de Ferro!");
  } else if (saldo <= 20) {
    console.log("O Herói está no nível de Bronze!");
  } else if (saldo <= 50) {
    console.log("O Herói está no nível de Prata!");
  } else if (saldo <= 80) {
    console.log("O Herói está no nível de Ouro!");
  } else if (saldo <= 90) {
    console.log("O Herói está no nível de Diamante!");
  } else if (saldo <= 100) {
    console.log("O Herói está no nível de Lendário!");
  } else {
    console.log("O Herói está no nível de Imortal!");
  }

  rl.close();
})();
