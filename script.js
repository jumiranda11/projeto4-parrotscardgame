let contadorDeComparacao = 0;
let cartaAComparar = [];
let cartasFeitas = [];
let cartasAbertas = [];
let contadorDeVezes = 0;
let contadorTempo = 0;
let quantidadeCartas = "";

function comparador() { 
	return Math.random() - 0.5; 
}

let quantidade = prompt("Com quantas cartas você gostaria de jogar? (4, 6, 8, 10, 12 ou 14)");

let explodiu1 = `<li class="card" id="explodiu" onclick="virarCarta(this); verificarMesmaCarta(this)">
                    <div class="front-face face">
                        <img src="gifs/front.png" alt=""/>
                    </div>
                    <div class="back-face face">
                        <img src="gifs/explodyparrot.gif" alt=""/>
                    </div>
                </li>`;
let explodiu2 = `<li class="card" id="explodiu" onclick="virarCarta(this); verificarMesmaCarta(this)">
                    <div class="front-face face">
                        <img src="gifs/front.png" alt=""/>
                    </div>
                    <div class="back-face face">
                        <img src="gifs/explodyparrot.gif" alt=""/>
                    </div>
                </li>`;
let tres1 =  `<li class="card" id="tres" onclick="virarCarta(this); verificarMesmaCarta(this)">
                <div class="front-face face">
                    <img src="gifs/front.png" alt=""/>
                </div>
                <div class="back-face face">
                    <img src="gifs/tripletsparrot.gif" alt=""/>
                </div>
            </li>`;
let tres2 =  `<li class="card" id="tres" onclick="virarCarta(this); verificarMesmaCarta(this)">
            <div class="front-face face">
                <img src="gifs/front.png" alt=""/>
            </div>
            <div class="back-face face">
                <img src="gifs/tripletsparrot.gif" alt=""/>
            </div>
        </li>`;
let unicorn1 = `<li class="card" id="unicorn" onclick="virarCarta(this); verificarMesmaCarta(this)">
                    <div class="front-face face">
                    <img src="gifs/front.png" alt=""/>
                        </div>
                    <div class="back-face face">
                        <img src="gifs/unicornparrot.gif" alt=""/>
                    </div>
                </li>`;
let unicorn2 = `<li class="card" id="unicorn" onclick="virarCarta(this); verificarMesmaCarta(this)">
                <div class="front-face face">
                <img src="gifs/front.png" alt=""/>
                    </div>
                <div class="back-face face">
                    <img src="gifs/unicornparrot.gif" alt=""/>
                </div>
            </li>`;
let revertit1 = `<li class="card" id="revertit" onclick="virarCarta(this); verificarMesmaCarta(this)">
                    <div class="front-face face">
                        <img src="gifs/front.png" alt=""/>
                    </div>
                    <div class="back-face face">
                        <img src="gifs/revertitparrot.gif" alt=""/>
                    </div>
                </li>`;
let revertit2 = `<li class="card" id="revertit" onclick="virarCarta(this); verificarMesmaCarta(this)">
                    <div class="front-face face">
                        <img src="gifs/front.png" alt=""/>
                    </div>
                    <div class="back-face face">
                        <img src="gifs/revertitparrot.gif" alt=""/>
                    </div>
                </li>`;
let metal1 = `<li class="card" id="metal" onclick="virarCarta(this); verificarMesmaCarta(this)">
                <div class="front-face face">
                    <img src="gifs/front.png" alt=""/>
                </div>
                <div class="back-face face">
                    <img src="gifs/metalparrot.gif" alt=""/>
                </div>
            </li>`;
let metal2 = `<li class="card" id="metal" onclick="virarCarta(this); verificarMesmaCarta(this)">
            <div class="front-face face">
                <img src="gifs/front.png" alt=""/>
            </div>
            <div class="back-face face">
                <img src="gifs/metalparrot.gif" alt=""/>
            </div>
        </li>`;
let fiesta1 =  `<li class="card" id="fiesta" onclick="virarCarta(this); verificarMesmaCarta(this)">
        <div class="front-face face">
            <img src="gifs/front.png" alt=""/>
        </div>
        <div class="back-face face">
            <img src="gifs/fiestaparrot.gif" alt=""/>
        </div>
    </li>`;
let fiesta2 =  `<li class="card" id="fiesta" onclick="virarCarta(this); verificarMesmaCarta(this)">
                    <div class="front-face face">
                        <img src="gifs/front.png" alt=""/>
                    </div>
                    <div class="back-face face">
                        <img src="gifs/fiestaparrot.gif" alt=""/>
                    </div>
                </li>`;
let bobross1 = `<li class="card" id="bobross" onclick="virarCarta(this); verificarMesmaCarta(this)">
                <div class="front-face face">
                    <img src="gifs/front.png" alt=""/>
                </div>
                <div class="back-face face">
                    <img src="gifs/bobrossparrot.gif" alt=""/>
                </div>
            </li>`;
let bobross2 = `<li class="card" id="bobross" onclick="virarCarta(this); verificarMesmaCarta(this)">
                <div class="front-face face">
                    <img src="gifs/front.png" alt=""/>
                </div>
                <div class="back-face face">
                    <img src="gifs/bobrossparrot.gif" alt=""/>
                </div>
            </li>`;
let cartasAparentes = [];

function perguntarQuantidade() {
    while(quantidade != 4 && quantidade != 6 && quantidade != 8 && quantidade != 10 && quantidade != 12 && quantidade != 14) {
        console.log(quantidade);
        quantidade = prompt("Com quantas cartas você gostaria de jogar? (4, 6, 8, 10, 12 ou 14)" );
    }
    cartasAparentes.push(explodiu1);
    cartasAparentes.push(explodiu2);
    cartasAparentes.push(tres1);
    cartasAparentes.push(tres2);
    console.log(cartasAparentes);

    if (quantidade > 4) {
        cartasAparentes.push(unicorn1);
        cartasAparentes.push(unicorn2);
    } 
    if (quantidade > 6) {
        cartasAparentes.push(revertit1);
        cartasAparentes.push(revertit2);
    }
    if (quantidade > 8) {
        cartasAparentes.push(metal1);
        cartasAparentes.push(metal2);
    }
    if (quantidade > 10) {
        cartasAparentes.push(fiesta1);
        cartasAparentes.push(fiesta2);
    }
    if (quantidade > 12) {
        cartasAparentes.push(bobross1);
        cartasAparentes.push(bobross2);
    }
    cartasAparentes.sort(comparador);
    cartas = document.querySelector('.lista-cartas');
    console.log(cartas);
    for(i = 0; i < quantidade; i++){
        cartas.innerHTML = cartas.innerHTML + cartasAparentes[i]; 
    }
}

function virarCarta(carta){
    let frente = carta.querySelector('.front-face');
    frente.classList.add('clicado');
    let verso = carta.querySelector('.back-face');
    verso.classList.add('clicado');
    carta.classList.add('aberta');
    cartasAbertas = document.querySelectorAll('.aberta');
}
function incrementarTempo(){
    contadorTempo++;
}

function verificarMesmaCarta(carta){
    cartaAComparar = document.querySelectorAll(".aberta:not(.feita)");
    console.log(cartaAComparar);
    contadorDeComparacao = 0;
    if (cartasAbertas.length === 1) {
        setInterval(incrementarTempo, 1000);
    }
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
    if(cartasFeitas.length == quantidade) {
        alert(`Você ganhou em ${contadorDeVezes} jogadas e em ${contadorTempo} segundos!`);
    }
}

function desvirarCarta(carta) {
    let frente = carta.querySelector('.front-face');
    frente.classList.remove('clicado');
    let verso = carta.querySelector('.back-face');
    verso.classList.remove('clicado');
    carta.classList.remove('aberta');
    cartasAbertas = document.querySelectorAll('.aberta');
}

perguntarQuantidade();
 
