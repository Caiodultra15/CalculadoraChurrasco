import {
  obterFormulario,
  mostrarBebida,
  mostrarComida,
  zerarCampos,
  aprensetarRespota,
} from "./dom.js";
import { calcularBebidas } from "./bebidas.js";
import { calcularComida } from "./comida.js";
import { formatarMoeda } from "./mascara.js";
import { validacoes, validacoesCampos } from "./validacoes.js";
const informacoesDeEntrada = obterFormulario();
formatarMoeda(informacoesDeEntrada);
validacoesCampos(informacoesDeEntrada);
function bebida() {
  let valores = {
    quantidadeConvidados: informacoesDeEntrada.convidados.value,
    quantidadePessoasBebemCerveja:
      informacoesDeEntrada.quantidadePessoasBebemCerveja.value,
    valorRefri: informacoesDeEntrada.refri.value,
    valorCerveja: informacoesDeEntrada.cerveja.value,
  };
  let valoresBebidaCalculado = calcularBebidas(valores);
  mostrarBebida(valoresBebidaCalculado);
}
function comida() {
  let valores = {
    quantidadeConvidados: informacoesDeEntrada.convidados.value,
    valorBovina: informacoesDeEntrada.bovina.value,
    valorFrango: informacoesDeEntrada.frango.value,
    valorSuina: informacoesDeEntrada.suina.value,
  };
  let valoresComidaCalculado = calcularComida(valores);
  mostrarComida(valoresComidaCalculado);
}

informacoesDeEntrada.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validacoes(informacoesDeEntrada)) {
    bebida();
    comida();
    zerarCampos(informacoesDeEntrada);
    aprensetarRespota();
  }
});
