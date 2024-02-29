import {
  inserirValores,
  inserirQuantidade,
  obterElementoId,
} from "./helpers.js";

function obterFormulario() {
  return document.forms.camposFormulario;
}
function mostrarBebida(bebida) {
  inserirValores("valor-refri", bebida.valores.refri);
  inserirValores("valor-cerveja", bebida.valores.cerveja);
  inserirValores("valor-total-bebida", bebida.total.valor);

  inserirQuantidade("qtd-refri", bebida.quantidades.refri.toFixed(0), "Litros");
  inserirQuantidade(
    "qtd-cerveja",
    bebida.quantidades.cerveja.toFixed(0),
    "Latas(350ML)"
  );
}
function mostrarComida(comida) {
  inserirValores("valor-bovina", comida.valores.bovina);
  inserirValores("valor-frango", comida.valores.frango);
  inserirValores("valor-suina", comida.valores.suina);
  inserirValores("valor-total-comida", comida.totais.valor);

  inserirQuantidade("qtd-bovina", comida.quantidades.bovina.toFixed(3), "g");
  inserirQuantidade("qtd-frango", comida.quantidades.frango.toFixed(3), "g");
  inserirQuantidade("qtd-suina", comida.quantidades.suina.toFixed(3), "g");
  inserirQuantidade(
    "qtd-total-comida",
    comida.totais.quantidadeTotal.toFixed(3),
    "g"
  );
}
function zerarCampos(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
function aprensetarRespota() {
  const resposta = obterElementoId("resultado");
  resposta.style.height = "auto";
}
export {
  obterFormulario,
  mostrarBebida,
  mostrarComida,
  zerarCampos,
  aprensetarRespota,
};
