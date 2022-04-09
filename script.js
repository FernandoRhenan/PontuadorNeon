/* LISTA DE IDEIAS

> CRIAR UMA FORMA DE GERAR NOVOS JOGADORES ATRAVES DE UM NUMERO QUE O PROPRIO JOGADOR ESCOLHE,
(SE O JOGADOR SETAR QUE HAVERA 3 JOGADORES, ENTAO O SCRIPT CRIARA APENAS 3 TELAS).

> DEIXAR O CODIGO O MAIS SIMPLES POSSIVEL

> CRIAR UMA OPÇÃO PARA CADA JOGADOR ESCOLHER O SEU NOME E ESCOLHER SUA COR

> MANTER OS DADOS DO HISTÓRICO DE PARTIDAS SALVOS

> CRIAR UM BOTÃO PARA LIMPAR TUDO, (COMO SE TIVESSE RECARREGADO A PÁGINA)

*/

// ===================================== //

let tela = document.getElementById("tela");
let jogador = document.getElementById("jogador");
let buttonAdd = document.getElementById("buttonAdd");
let buttonAdd3 = document.getElementById("buttonAdd3");
let buttonSub = document.getElementById("buttonSub");
let buttonSub3 = document.getElementById("buttonSub3");

// ===================================== //

let tela2 = document.getElementById("tela2");
let jogador2 = document.getElementById("jogador2"); 2
let buttonAdd_2 = document.getElementById("SbuttonAdd");
let buttonAdd3_2 = document.getElementById("SbuttonAdd3");
let buttonSub_2 = document.getElementById("SbuttonSub");
let buttonSub3_2 = document.getElementById("SbuttonSub3");

// ===================================== //

let tela3 = document.getElementById("tela3")
let jogador3 = document.getElementById("jogador3"); 2
let buttonAdd_3 = document.getElementById("TbuttonAdd");
let buttonAdd3_3 = document.getElementById("TbuttonAdd3");
let buttonSub_3 = document.getElementById("TbuttonSub");
let buttonSub3_3 = document.getElementById("TbuttonSub3");

// ==================================== //

let tela4 = document.getElementById("tela4");
let jogador4 = document.getElementById("jogador4"); 2
let buttonAdd_4 = document.getElementById("QbuttonAdd");
let buttonAdd3_4 = document.getElementById("QbuttonAdd3");
let buttonSub_4 = document.getElementById("QbuttonSub");
let buttonSub3_4 = document.getElementById("QbuttonSub3");

//  ======================================== /

var numero = 0;
var numeroB = 0;
tela.value.innerText += numero;
var valorTela = tela.value;

buttonAdd.addEventListener("click", add);
buttonAdd3.addEventListener("click", add3);
buttonSub.addEventListener("click", sub);
buttonSub3.addEventListener("click", sub3);

function add() {
    tela.value = numero += 1;
    valorTela = numeroB += 1;

}

function add3() {
    tela.value = numero += 3;
    valorTela = numeroB += 3;

}

function sub() {
    tela.value = numero -= 1;
    valorTela = numeroB -= 1;

}

function sub3() {
    tela.value = numero -= 3;
    valorTela = numeroB -= 3;

}


// ====================================== //

var numero2 = 0;
var numeroB2 = 0;
tela2.value.innerText += numero2;
var valorTela2 = tela2.value;

buttonAdd_2.addEventListener("click", add_2);
buttonAdd3_2.addEventListener("click", add3_2);
buttonSub_2.addEventListener("click", sub_2);
buttonSub3_2.addEventListener("click", sub3_2);


function add_2() {
    tela2.value = numero2 += 1;
    valorTela2 = numeroB2 += 1;

}

function add3_2() {
    tela2.value = numero2 += 3;
    valorTela2 = numeroB2 += 3;

}

function sub_2() {
    tela2.value = numero2 -= 1;
    valorTela2 = numeroB2 -= 1;

}

function sub3_2() {
    tela2.value = numero2 -= 3;
    valorTela2 = numeroB2 -= 3;

}

// ==================================== //

var numero3 = 0;
var numeroB3 = 0;
tela3.value.innerText += numero3;
var valorTela3 = tela3.value;

buttonAdd_3.addEventListener("click", add_3);
buttonAdd3_3.addEventListener("click", add3_3);
buttonSub_3.addEventListener("click", sub_3);
buttonSub3_3.addEventListener("click", sub3_3);


function add_3() {
    tela3.value = numero3 += 1;
    valorTela3 = numeroB3 += 1;

}

function add3_3() {
    tela3.value = numero3 += 3;
    valorTela3 = numeroB3 += 3;

}

function sub_3() {
    tela3.value = numero3 -= 1;
    valorTela3 = numeroB3 -= 1;

}

function sub3_3() {
    tela3.value = numero3 -= 3;
    valorTela3 = numeroB3 -= 3;

}


// ========================================= //

var numero4 = 0;
var numeroB4 = 0;
tela4.value.innerText += numero4;
var valorTela4 = tela4.value;

buttonAdd_4.addEventListener("click", add_4);
buttonAdd3_4.addEventListener("click", add3_4);
buttonSub_4.addEventListener("click", sub_4);
buttonSub3_4.addEventListener("click", sub3_4);


function add_4() {
    tela4.value = numero4 += 1;
    valorTela4 = numeroB4 += 1;

}

function add3_4() {
    tela4.value = numero4 += 3;
    valorTela4 = numeroB4 += 3;

}

function sub_4() {
    tela4.value = numero4 -= 1; 4
    valorTela4 = numeroB4 -= 1;

}

function sub3_4() {
    tela4.value = numero4 -= 3;
    valorTela4 = numeroB4 -= 3;

}

// ==================================== // 



let reset = document.getElementById("reset");
reset.addEventListener("click", Freset);

function Freset() {
    tela.value = numero = 0;
    tela2.value = numero2 = 0;
    tela3.value = numero3 = 0;
    tela4.value = numero4 = 0;
}



let inpJogador = document.getElementById("inpJogador");
let inpJogador2 = document.getElementById("inpJogador2");
let inpJogador3 = document.getElementById("inpJogador3");
let inpJogador4 = document.getElementById("inpJogador4");

if (inpJogador.length != "") {
    inpJogador.onchange = function () {
        tela.classList.toggle("active");

    }
}

if (inpJogador2.length != "") {
    inpJogador2.onchange = function () {
        tela2.classList.toggle("active");

    }
}

if (inpJogador3.length != "") {
    inpJogador3.onchange = function () {
        tela3.classList.toggle("active");

    }
}
if (inpJogador4.length != "") {
    inpJogador4.onchange = function () {
        tela4.classList.toggle("active");


    }
}




let ul = document.getElementById("ul");

var rodada = 0;
if (inpJogador.value != "" && inpJogador2.value != "" &&
    inpJogador3.value != "" && inpJogador4.value != "") {
    function criarRodada() {
        let li = document.createElement("li");
        rodada = rodada + 1;
        li.appendChild(document.createTextNode("Rodada " + rodada));
        ul.appendChild(li);
    }
}



function criarElemento() {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(inpJogador.value + " fez " + valorTela + " Pontos."));

    if (inpJogador.value !== "") {
        li.style.color = "rgb(255, 194, 194)";
        li.style.textShadow = "0 0 27px rgb(255, 144, 144)";
    } else {
        li.style.display = "none";
    }

    ul.appendChild(li);

    valorTela = numeroB = 0;
}




function criarElemento2() {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(inpJogador2.value + " fez " + valorTela2 + " Pontos."));


    if (inpJogador2.value !== "") {
        li.style.color = "rgb(146, 248, 255)";
        li.style.textShadow = "0 0 27px rgb(2, 255, 242)";
    } else {
        li.style.display = "none";
    }

    ul.appendChild(li);

    valorTela2 = numeroB2 = 0;
}




function criarElemento3() {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(inpJogador3.value + " fez " + valorTela3 + " Pontos."));

    if (inpJogador3.value !== "") {
        li.style.color = "rgb(193, 255, 152)";
        li.style.textShadow = "0 0 27px rgb(43, 255, 0)";
    } else {
        li.style.display = "none";
    }

    ul.appendChild(li);

    valorTela3 = numeroB3 = 0;
}




function criarElemento4() {
    let li = document.createElement("li");

    const save4 = li.appendChild(document.createTextNode(inpJogador4.value + " fez " + valorTela4 + " Pontos."));


    if (inpJogador4.value !== "") {
        li.style.color = "rgb(245, 255, 132)";
        li.style.textShadow = "0 0 27px rgb(229, 255, 0)";
    } else {
        li.style.display = "none";
    }

    ul.appendChild(li);

    valorTela4 = numeroB4 = 0;
}


reset.addEventListener("click", criarRodada);

reset.addEventListener("click", criarElemento);
reset.addEventListener("click", criarElemento2);
reset.addEventListener("click", criarElemento3);
reset.addEventListener("click", criarElemento4);









// ===============================

