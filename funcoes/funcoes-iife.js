//IIFE - Immediately Invoked Function Expression
//São funções executadas assim que são definidas
//Possui duas partes principais:
//1. A função anônima propriamente dita. Seu contexto léxico é encapsulado entre os parêntesis.
//2. A segunda parte corresponde a expressão ().
(function(){
    console.log("Será executado na hora!")
    console.log("Utilizando IIFE é possível fugir do escopo global!")
    console.log("Tudo que for criado, fica dentro do escopo desta função!");
})();
