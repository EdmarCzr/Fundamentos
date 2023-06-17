// == (comparação implícita)

//const numero = 5;
//const texto = "5";

//console.log(numero === texto)

//typeof
//console.log(typeof numero)
//console.log(typeof texto)

// == só compara o valor
// === compara o valor e o tipo de dado

// conversão explícita 

//Number()
//String()

//function normal
//const edmarLogin = () => {
    //let array = []
    //for( i = 0; i < 90000; i++){
        //array.push(i);
    //}

    //return "Edmar logado com sucesso!"
//}

//console.log(edmarLogin())

// conceito DRY>Don't repeat yourself 
//Para resolver essa questão, vamos substituir o código anterior por apenas uma função que vai lidar com o login. Ao executá-la, passamos por parâmetro o nome de quem está logando:

//const usuarioLogin = (pessoa) => {
    //let array = []
    //for ( i = 0; i < 90000; i++){
    //array.push(i)
   // }
    //return `${pessoa} Logou com sucesso no Sistema!`
//}

//console.log(usuarioLogin("Edmar"))

//Ao refatorar o primeiro código, ainda misturamos duas responsabilidades diferentes no mesmo código, pois criamos a função envolvendo a lógica de fazer o login através do nome do usuário e escrevemos a forma de exibição do resultado no console.
//Por meio do conceito de higher order function, podemos compor funções para separar tarefas diferentes. Para exemplificar, podemos criar uma função de acesso que vai cuidar da visualização do resultado e outra que vai ficar responsável pela lógica:

// const acesso = (nome) => {
//     return `${nome} Logou com sucesso no Sistema!`     // função para exibir o resultado
// }

// const usuarioLogin = (nome) =>{    //função responsavel pela logica
//     let array = []
//     for( i = 0; i < 90000; i++){
//         array.push(i)
//     }
//     return acesso(nome)
// }

// console.log(usuarioLogin("Pepeu"))   

//Recebendo uma função e retornando uma função
//Digamos que devido ao seu cargo, uma diretora teria um tempo maior de login, o que seria possível incluindo verificações no sistema para aumentar este período. Nesse caso teríamos que duplicar nosso código, certo?

//Então vamos criar uma função para a diretora:

// const acesso = (nome) => {                   // função para exibir o resultado
//  return `${nome} logou com sucesso ao Sistema!`
// }

// const usuarioLogin = (nome) =>{              //função responsavel pela logica
//         let array = []
//         for( i = 0; i < 90000; i++){
//             array.push(i)
//         }
//         return acesso(nome)
//     }

// const diretoraLogin = (nome) => {            // função respnsavel pela logica da diretora
//     let array = []
//     for(i = 0; i < 900000; i++){
//         array.push(i)
//     }
//     return acesso(nome)
//     }

// console.log(diretoraLogin("Jenefer"))

//Mas imagine se tivermos que criar vários cargos, teríamos que repetir o código diversas vezes? Não exatamente. Uma boa resolução nessa situação seria criar uma função genérica de autenticação:

// const autenticarCargo = (cargo) => {    //função generica para autenticar cargo
//     let array = []
//     for(i = cargo; i < cargo; i++ ){
//         array.push(i)
//     }
//     return  true;
//}


// Com essa função criada, podemos estender ainda mais a composição das funções, pois uma higher order function pode tanto receber uma função por parâmetro quanto retornar outra função.

// Podemos então refatorar a função login() para receber e retornar funções:

// const login = (pessoa) => {
//     if(pessoa.cargo === 'funcionario') {
//         autenticarCargo(90000)
//     } else if(pessoa.cargo === 'diretoria') {
//         autenticarCargo(900000)
//     }
//     return AuthenticatorResponse(pessoa.nome)
// }


//codigo completo com autenticação

const acesso = (nome) => {                   // função para exibir o resultado
 return `${nome} logou com sucesso ao Sistema!`
}

const autentica = (cargo) => {
    let array = []
    for(i = 0; i < cargo; i++){
        array.push(i)
    }
    return true
}

const login = (pessoa, autentica) => {
   
    if(pessoa.cargo === `funcionario`){
        autentica(90000)
    }else if(pessoa.cargo === `diretoria`){
        autentica(900000)
    }
    return acesso(pessoa.nome)
}

console.log(login({cargo : 'diretoria', nome: 'Jenefer'}, autentica))