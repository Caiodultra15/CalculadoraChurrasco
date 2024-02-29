import { stringParaFloat } from "./helpers.js";

let multiplicadorBovino = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

function calcularComida({
  quantidadeConvidados,
  valorBovina,
  valorFrango,
  valorSuina,
}) {
  let quantidadeComida = quantidade(
    quantidadeConvidados,
    valorFrango,
    valorSuina
  );
  let valoresComida = valor(
    quantidadeComida,
    valorBovina,
    valorFrango,
    valorSuina
  );
  return {
    quantidades: {
      ...quantidadeComida,
    },
    valores: {
      ...valoresComida,
    },
    totais: {
      ...total(quantidadeComida, valoresComida),
    },
  };
}
function calcularMultiplicador(valorFrango, valorSuina) {
  if (valorFrango == "" && valorSuina == "") {
    multiplicadorBovino = 0.4;
    multiplicadorSuina = 0;
    multiplicadorFrango = 0;
    return;
  }
  if (valorFrango == "") {
    multiplicadorBovino = 0.4;
    multiplicadorSuina = 0.15;
    multiplicadorFrango = 0;
    return;
  }
  if (valorSuina == "") {
    multiplicadorBovino = 0.4;
    multiplicadorSuina = 0;
    multiplicadorFrango = 0.15;
    return;
  }
}
function quantidade(convidados, valorFrango, valorSuina) {
  calcularMultiplicador(valorFrango, valorSuina);
  let bovina = convidados * multiplicadorBovino;
  let frango = convidados * multiplicadorFrango;
  let suina = convidados * multiplicadorSuina;
  return { bovina, frango, suina };
}
function valor(quantidadeComida, valorBovina, valorFrango, valorSuina) {
  let bovina = quantidadeComida.bovina * stringParaFloat(valorBovina);
  let frango = quantidadeComida.frango * stringParaFloat(valorFrango);
  let suina = quantidadeComida.suina * stringParaFloat(valorSuina);
  return { bovina, frango, suina };
}
function total(quantidadeComida, valoresComida) {
  let valor = valoresComida.bovina + valoresComida.frango + valoresComida.suina;
  let quantidadeTotal =
    quantidadeComida.bovina + quantidadeComida.frango + quantidadeComida.suina;

  return { valor, quantidadeTotal };
}

export { calcularComida };
