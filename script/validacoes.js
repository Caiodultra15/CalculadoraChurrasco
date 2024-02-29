function validacoes(InformacoesDeEntrada) {
  let valorCerveja = InformacoesDeEntrada.cerveja.value;
  let quantidadePessoasBebemCerveja =
    InformacoesDeEntrada.quantidadePessoasBebemCerveja.value;
  if (
    verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) &&
    verificarValorPessoa(valorCerveja, quantidadePessoasBebemCerveja)
  ) {
    return true;
  }
  return false;
}
function verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) {
  if (quantidadePessoasBebemCerveja !== "" && valorCerveja === "") {
    alert("Necessário informar o valor da cerveja");
    return false;
  }
  return true;
}
function verificarValorPessoa(valorCerveja, quantidadePessoasBebemCerveja) {
  if (valorCerveja !== "" && quantidadePessoasBebemCerveja === "") {
    alert("É necessario informar quantidade de pessoas que beberão cerveja");
    return false;
  }
  return true;
}

function validacoesCampos(informacoesDeEntrada) {
  verificarNumerosPessoasBebem(
    informacoesDeEntrada.quantidadePessoasBebemCerveja,
    informacoesDeEntrada.convidados
  );
  verificarQuantidadeConvidados(informacoesDeEntrada.convidados);
}
function verificarNumerosPessoasBebem(pessoasBebem, convidados) {
  pessoasBebem.addEventListener("input", () => {
    if (parseInt(pessoasBebem.value) > parseInt(convidados.value)) {
      pessoasBebem.setCustomValidity(
        "O número de pessoas que bebem precisa ser menor que a quantidade de convidados"
      );
      return;
    }
    pessoasBebem.setCustomValidity("");
  });
}
function verificarQuantidadeConvidados(convidados) {
  convidados.addEventListener("input", () => {
    if (parseInt(convidados.value) < 2) {
      convidados.setCustomValidity(
        "Você precisa de mais de uma pessoa para fazer o churrasco"
      );
      return;
    }
    convidados.setCustomValidity("");
  });
}
export { validacoes, validacoesCampos };
