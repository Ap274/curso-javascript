const stringPont = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function avaliaPont(pont) {
    listaPontos = pont.split(", ")
    let qtdQuebraRecordes = 0
    let piorJogo = 1;
    // console.log(listaPontos)
    let maiorPont = listaPontos[0]
    let menorPont = listaPontos[0]

    for (let i = 1; i <= listaPontos.lenght; i++) {
        if (listaPontos[i] > maiorPont){
            maiorPont = listaPontos[i]
            qtdQuebraRecordes++
        }else if (listaPontos[i] < menorPont){
            menorPont = listaPontos[i]
            piorJogo = i + 1
        }        
    }
    return [qtdQuebraRecordes, piorJogo]
}

console.log(avaliaPont(stringPont))



********REVER ESSA QUESTÃO**********