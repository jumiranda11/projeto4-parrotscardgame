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


