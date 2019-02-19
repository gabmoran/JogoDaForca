let palavras = ['casa', 'panela'];
let palavraEscolhida = Number(prompt('Escolha um número de 1 a 2 para selecionar uma palavra: '));
let inserirTraco = document.querySelector(".espaço");
let vidas = 5;
let palavraSeparada = separar()
console.log(separar())


alert('Vamos começar. Você tem 5 vidas.');

function tracinhos() {
    let tamanho = palavras[palavraEscolhida - 1].length;

    for (let i = 0; i < tamanho; i++) {
        let tracinho = document.createElement('span');
        tracinho.setAttribute("id", i);
        tracinho.innerHTML = '_ ';
        inserirTraco.appendChild(tracinho)
    }
}

function separar() {
    let indice = palavraEscolhida - 1;
    let string = palavras[indice].split("");
    return string;
}


function inserirLetras() {
    for (let i = 0; i < vidas; i++) {
        let letra = prompt('Escolha uma letra: ');
        let tamanho = (palavras[palavraEscolhida - 1]).length;
        
        for (let i = 0; i < tamanho; i++) {
            if (letra === palavraSeparada[i]) {
                
            }
        }
    }
    alert('Suas vidas acababaram');
}

tracinhos()
console.log(inserirLetras());




