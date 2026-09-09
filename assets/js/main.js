const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
document.body.classList.add("dark-theme");
}

function atualizarBotaoTema() {
const temaBtn = document.getElementById("temaBtn");

if (!temaBtn) {
return;
}

if (document.body.classList.contains("dark-theme")) {
temaBtn.textContent = "☀️ Light Mode";
} else {
temaBtn.textContent = "🌙 Dark Mode";
}
}

function exibirSaudacao() {
const mensagem = document.querySelector("#mensagem-boas-vindas");

if (!mensagem) {
return;
}

const nome = prompt("Digite seu nome:");

const usuario = `${nome}`.trim();

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

const diaSemana = dias[agora.getDay()];
const dia = String(agora.getDate()).padStart(2, "0");
const mes = String(agora.getMonth() + 1).padStart(2, "0");
const ano = agora.getFullYear();

const hora = String(agora.getHours()).padStart(2, "0");
const minuto = String(agora.getMinutes()).padStart(2, "0");

const fuso = -agora.getTimezoneOffset();
const sinal = fuso >= 0 ? "+" : "-";
const horasFuso = String(Math.floor(Math.abs(fuso) / 60)).padStart(2, "0");
const minutosFuso = String(Math.abs(fuso) % 60).padStart(2, "0");

const fusoHorario = `${sinal}${horasFuso}:${minutosFuso}`;

const dataAtual = `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} (${fusoHorario})`;

mensagem.textContent = `Olá, ${usuario}! Hoje é ${dataAtual}`;

console.log("Nome:", nome);
console.log("Usuário:", usuario);
console.log("Data atual:", dataAtual);
console.log("Elemento da mensagem:", mensagem);
}

exibirSaudacao();

const campoBusca = document.getElementById("campoBusca");

if (campoBusca) {
const linhas = document.querySelectorAll("tbody tr");

campoBusca.addEventListener("input", function () {
const termo = campoBusca.value.toLowerCase().trim();

linhas.forEach(function (linha) {
const texto = linha.textContent.toLowerCase();

if (texto.includes(termo)) {
linha.style.display = "";
} else {
linha.style.display = "none";
}
});
});
}

const temaBtn = document.getElementById("temaBtn");

if (temaBtn) {
temaBtn.addEventListener("click", function () {
document.body.classList.toggle("dark-theme");

const modoEscuro = document.body.classList.contains("dark-theme");

localStorage.setItem("tema", modoEscuro ? "dark" : "light");

atualizarBotaoTema();
});
}

atualizarBotaoTema();

const menu = document.querySelector("nav");
const menuToggle = document.getElementById("menuToggle");

if (menuToggle && menu) {
menuToggle.addEventListener("click", function () {
menu.classList.toggle("menu-aberto");
});
}