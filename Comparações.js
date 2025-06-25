let marca = "apple"
console.log (marca !== "Xiaomi")

// operador de comparação 
// = é atribuição 
// == é para comparar o valor 
// === é a forma mais correta de se usar para comparar o valor e o formato do conteúdo
// !== é diferente ? é usado para se perguntar se o conteúdo é diferente ou não 

// ou posso criar uma maneira mais simples o script, guardando em uma outra variável o 'resultado'
let marca1 = "apple"
let resultado = marca1 === "xiaomi"
console.log (resultado)
// maneira mais comum de se usar, assim qualquer ajuste mudo apenas a variável resultado. 

//comparações de diferente ou igual 
let cpfBarrado = "148.321.654-98"
let cpfUsuario = "148.321.654-98"
let cpfBloqueado = cpfUsuario === cpfBarrado 
console.log ("O usuario está bloqueado ? : " + cpfBloqueado)



