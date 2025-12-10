let eventosGlobal = [];
let feriados = [];
let mesAtual;
let anoAtual;
let modoAtual = "mes";
let semestreAtual = 1;

const mesesNomes = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
];
document.addEventListener("DOMContentLoaded", inicializarCalendario);
