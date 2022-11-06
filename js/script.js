/*
Desafio - Grupo de Estudos - ES6(Javascript Moderno)
Um sistema de pedidos online trata um pedido da seguinte forma: um 
pedido possui uma descrição, um preço e um status(Pendente, Em 
Transporte, Entregue), além disso um pedido tem os seguintes métodos: finalizar pedido, finalizar pagamento e finalizar entrega.
Dessa forma, a cada etapa o status do pedido é atualizado.
Pedido Finalizado, status = “Pendente”
Pagamento Efetuado, status = “Em Transporte”
Entrega Finalizada, status = “Entregue”
OBS.: por problemas de conexão, o sistema leva 3 segundos para atualizar o status do
pedido para “entregue” e para mostrar a mensagem de pedido entregue com sucesso.
Desafio: Implemente a situação em que José fez um pedido cuja descrição é Notebook e o
valor é 5000 reais. Lembre-se de analisar onde usar arrow functions e onde usar funções
normais. Além disso, ao finalizar o pedido, mostre a seguinte mensagem : “Aguardando
pagamento do pedido de descrição x e valor y”.
DICAS:
A função window.setTimeout é usada para criar funções que são executadas depois de um
certo tempo.
Ex.:
window.setTimeout(function(){
console.log(“Essa esperou 1 segundo antes de ser executada”);
}, 1000);
*/
// var pend = "Pendente",
//   transp = "Em Transporte",
//   entreg = "Entregue";
// var pedido = {
//   descricao: String,
//   preco: String,
//   status: String,
// };
// var pedido = {
//   descricao: "des",
//   preco: "12",
//   status: pend,
// };

class Pedido {
  constructor(descricao, preco, status) {
    this.descricao = descricao;
    this.preco = preco;
    this.status = status;
  }
  getDescricao() {
    return this.descricao;
  }
  getPreco() {
    return this.preco;
  }
  getStatus() {
    return this.status;
  }
  setDescricao(descricao) {
    this.descricao = descricao;
  }
  setPreco(preco) {
    this.preco = preco;
  }
  finalizarPedido() {
    this.status = "Pendente";
  }
  finalizarPagamento() {
    this.status = "Em Transporte";
  }
  finalizarEntrega() {
    this.status = "Entregue";
  }
  exibirStatus() {
    return this.status;
  }
}
const pedido = new Pedido("vazio", "vazio", "vazio");
pedido.finalizarPedido();

setTimeout(() => {
  if (pedido.exibirStatus() == "Entregue") {
    console.log("O pedido foi ", pedido.status);
  }
}, 3000);

window.setTimeout(function () {
  console.log(pedido);
}, 1000);

var preco = document.querySelector("#preco"),
  descricao = document.querySelector("#descricao"),
  statusPedido = document.querySelector("#status"),
  pedidoTeste = document.querySelector("#pedido"),
  buttonDefinirValores = document.querySelector("#buttonDefinirValores"),
  buttonFinalizarPedido = document.querySelector("#buttonFinalizarPedido"),
  buttonFinalizarPagamento = document.querySelector(
    "#buttonFinalizarPagamento"
  ),
  buttonFinalizarEntrega = document.querySelector("#buttonFinalizarEntrega");

preco.textContent = "123";

buttonDefinirValores.addEventListener("click", () => {
  pedido.setPreco("5000");
  pedido.setDescricao("Notebook");
  atualizar();
});

function atualizar() {
  preco.textContent = pedido.getPreco();
  descricao.textContent = pedido.getDescricao();
  if (pedido.getStatus() == "Entregue") {
    window.setTimeout(function () {
      statusPedido.textContent = pedido.getStatus();
      alert("Pedido entregue");
    }, 3000);
  } else {
    statusPedido.textContent = pedido.getStatus();
  }
}

buttonFinalizarPedido.addEventListener("click", () => {
  pedido.finalizarPedido();
  alert(
    `Aguardando o pagamento do pedido de descrição ${pedido.getDescricao()} e valor ${pedido.getPreco()}`
  );
  atualizar();
});
buttonFinalizarPagamento.addEventListener("click", () => {
  pedido.finalizarPagamento();
  atualizar();
});
buttonFinalizarEntrega.addEventListener("click", () => {
  pedido.finalizarEntrega();
  atualizar();
});

pedidoTeste.innerHTML = `value`;
