// Você tem um array com os nomes dos dias da semana ["Segunda", "Terça",
//     "Quarta", "Quinta", "Sexta"]. Adicione "Sábado" ao final do array e "Domingo"
//     ao início. Em seguida, remova o último dia da semana. Passos:
//     1. Adicione "Sábado" ao final do array.
//     2. Adicione "Domingo" ao início do array.
//     3. Remova o último elemento do array.

let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
diasDaSemana.push('Sábado');
diasDaSemana.unshift('Domingo');
diasDaSemana.pop();
console.log(diasDaSemana);

// Você tem um array com os nomes de quatro frutas ["Maçã", "Banana",
//     "Laranja", "Uva"]. Use um método para encontrar em qual posição está a
//     "Laranja".

let frutas = ['Maça', 'Banana', 'Laranja', 'Uva'];
let indice = frutas.indexOf('Laranja');
console.log('índice do elemento Laranja:', indice);

// Você tem um array com as cores ["Vermelho", "Verde", "Azul"]. Verifique se a
// cor "Amarelo" está presente no array e imprima o resultado.



// Você tem uma lista de tarefas [ "Lavar a louça", "Estudar", "Fazer compras"].
// Adicione uma nova tarefa ao final da lista e depois remova a primeira tarefa,
// já que foi completada. Por fim, verifique se "Estudar" ainda está na lista.

