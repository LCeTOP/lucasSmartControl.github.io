let usuario = prompt ("Digite seu nome e sobrenome:");
const agora = new Date();
const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];
let ano = agora.getFullYear();
let mes = String(agora.getMonth() + 1).padStart(2, "0");
let diaSemana = dias[agora.getDay()];
let dia = String(agora.getDate()).padStart(2, "0");
let hora = String(agora.getHours()).padStart(2, "0");
let minuto = String(agora.getMinutes()).padStart(2, "0");
let fuso = -agora.getTimezoneOffset();
let sinal = fuso >= 0 ? "+" : "-";
let horasFuso = String(Math.floor(Math.abs(fuso) / 60)).padStart(2, "0");
let minutosFuso = String(Math.abs(fuso) % 60).padStart(2, "0");
let dataAtual  = `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} (${sinal}${horasFuso}:${minutosFuso})`;
const mensagem = document.querySelector("#mensagem-boas-vindas");
if (mensagem) {
    mensagem.textContent = `Vs ${usuario}! Hoje é ${dataAtual}`;
}
console.log(usuario);
console.log(dataAtual)