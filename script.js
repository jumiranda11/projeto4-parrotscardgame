let quantidadeCartas = "";

function perguntarQuantidade() {
    const quantasCartas = [];
    let quantidade = prompt("Com quantas cartas você gostaria de jogar?");
    quantasCartas.push(quantidade);


    for (let i = 0; i < quantasCartas.length; i++) {
        if (quantasCartas[i] == 4 || quantasCartas[i] == 6 || quantasCartas[i] == 8 || quantasCartas[i] == 10 || quantasCartas[i] == 12 || quantasCartas[i] == 14) {
            quantidadeCartas = quantasCartas[i];


            if (quantasCartas[i] > 5) {
                document.querySelector('.container-cartas ul').innerHTML = document.querySelector('.container-cartas ul').innerHTML + `<li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>
                <li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>`;
            } if (quantasCartas[i] > 7) {
                document.querySelector('.container-cartas ul').innerHTML = document.querySelector('.container-cartas ul').innerHTML + `<li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>
                <li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>`;
             } if (quantasCartas[i] > 9) {
                document.querySelector('.container-cartas ul').innerHTML = document.querySelector('.container-cartas ul').innerHTML + `<li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>
                <li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>`;
            } if (quantasCartas[i] > 11) {
                document.querySelector('.container-cartas ul').innerHTML = document.querySelector('.container-cartas ul').innerHTML + `<li>
                   <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>
                <li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>`;
            } if (quantasCartas[i] > 13) {
                document.querySelector('.container-cartas ul').innerHTML = document.querySelector('.container-cartas ul').innerHTML + `<li>
                   <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>
                <li>
                    <div>
                        <object data="front 6.svg"></object>
                    </div>
                </li>`;
            }
          break;
        } else {
            quantidade = prompt("Com quantas cartas você gostaria de jogar?");
            quantasCartas.push(quantidade);
        }
    }

}
perguntarQuantidade();

function virarCarta(carta){
    let frente = carta.querySelector('.front-face');
    frente.classList.add('clicado');
    let verso = carta.querySelector('.back-face');
    verso.classList.add('clicado');
    carta.classList.add('aberta');
    cartasAbertas = document.querySelectorAll('.aberta');
}

function verificarMesmaCarta(carta){
    cartaAComparar = document.querySelectorAll(".aberta:not(.feita)");
    console.log(cartaAComparar);
    contadorDeComparacao = 0;
    if (cartasAbertas.length !== 1 && cartasAbertas.length%2 == 0) {
        for(i = 0; i < cartaAComparar.length; i++) {
        let id1 = carta.id;
        let id2 = cartaAComparar[i].id;
            if(id1 === id2) {
                contadorDeComparacao ++;
            }
        }
        if (contadorDeComparacao > 1) {            
            cartaAComparar[0].classList.add('feita');
            cartaAComparar[1].classList.add('feita');
            cartaAComparar = document.querySelectorAll(".aberta:not(.feita)");
            cartasFeitas = document.querySelectorAll(".feita");
            contadorDeVezes ++; 
        } else {
            setTimeout(desvirarCarta, 1000, cartaAComparar[1]);
            setTimeout(desvirarCarta, 1000, cartaAComparar[0]);  
            contadorDeVezes ++;     
        }
    }
    verificarSeGanhou();
}


function verificarSeGanhou() {
    if(cartasFeitas.length == quantidadeCartas) {
        alert(`Você ganhou em ${contadorDeVezes} jogadas!`);
        prompt('Gostaria de jogar de novo?');
    }
}

let contadorDeComparacao = 0;
let cartaAComparar = [];
let cartasFeitas = [];
let cartasAbertas = [];
let contadorDeVezes = 0;


function desvirarCarta(carta) {
    let frente = carta.querySelector('.front-face');
    frente.classList.remove('clicado');
    let verso = carta.querySelector('.back-face');
    verso.classList.remove('clicado');
    carta.classList.remove('aberta');
    cartasAbertas = document.querySelectorAll('.aberta');
}

// transformar cada li em um elemento de array
//fazer push com a quantidade de cartas de tantos elementos da array
//aleatorizar o array
// quando todas abertas, aparecer um alert falando que você ganhou em X jogadas
// perguntar por prompt se quer jogar de novo

