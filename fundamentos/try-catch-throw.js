function tratarErrorELancar(error){
    // throw new Error('Ocorreu um erro: Verifique as propriedades do objeto')
    // throw 10
    // throw 'Ocorreu um erro: Verifique as propriedades do objeto'
    // throw {
    //     nome: error.name,
    //     msg: error.mesage,
    //     data: new Date()
    // }
    console.log('Ocorreu um erro de processamento: ',
    {
        nome: error.name,
        msg: error.mesage,
        data: new Date()
    })
}

function imprimirMaiusculo(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error){
        tratarErrorELancar(error)
    } finally{
        console.log('Processamento encerrado !!!')
    }
}

const cliente = {nome: 'Carlos'}
imprimirMaiusculo(cliente)