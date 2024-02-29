import { stringParaFloat } from "./helpers.js";

function calcularBebidas({
  quantidadeConvidados,
  quantidadePessoasBebemCerveja,
  valorRefri,
  valorCerveja,
}) {
  let quantidadeBebida = quantidade(
    quantidadeConvidados,
    quantidadePessoasBebemCerveja
  );
  let valorBebida = valor(quantidadeBebida, valorRefri, valorCerveja);
  return {
    quantidades: {
      ...quantidadeBebida,
    },
    valores: {
      ...valorBebida,
    },
    total: total(valorBebida),
  };
}
function quantidade(quantidadeConvidados, quantidadePessoasBebemCerveja) {
  let refri;
  let cerveja;
  refri = (quantidadeConvidados - quantidadePessoasBebemCerveja) * 1;
  cerveja = (quantidadePessoasBebemCerveja * 1.75) / 0.35;
  return { refri, cerveja };
}
function total(valores) {
  let valor = valores.refri + valores.cerveja;
  return { valor };
}
function valor(quantidades, valorRefri, valorCerveja) {
  let refri = quantidades.refri * stringParaFloat(valorRefri);
  let cerveja = quantidades.cerveja * stringParaFloat(valorCerveja);
  return { refri, cerveja };
}

export { calcularBebidas };
