
function perguntarQuantidade() {
    const quantasCartas = [];
    let quantidade = prompt("Com quantas cartas você gostaria de jogar?");
    quantasCartas.push(quantidade);

    for (let i = 0; i < quantasCartas.length; i++) {
        if (quantasCartas[i] == 4 || quantasCartas[i] == 6 || quantasCartas[i] == 8 || quantasCartas[i] == 10 || quantasCartas[i] == 12 || quantasCartas[i] == 14) {
            quantidadeCartas = quantasCartas[i];
            break;
        } else {
            quantidade = prompt("Com quantas cartas você gostaria de jogar?");
            quantasCartas.push(quantidade);
        }
    }

}
perguntarQuantidade();
console.log("quantidade de cartas:" + quantidadeCartas);
