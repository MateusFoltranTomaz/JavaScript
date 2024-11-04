/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude
o segundo produto para "bermuda". Imprima o estoque atualizado no final.
*/

let estoqueProdutos = ["camiseta", "calça", "sapato"];

estoqueProdutos.push("meia");

estoqueProdutos.shift();

estoqueProdutos[1] = "bermuda";

console.log("Estoque atualizado:");
estoqueProdutos.forEach(produto => console.log(produto));


/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = [];

function adicionarItem(item) {
    listaCompras.push(item);
}

for (let i = 0; i < 3; i++) {
    let item = prompt(`Adicione o item ${i + 1} à lista de compras:`);
    adicionarItem(item);
}

if (listaCompras[listaCompras.length - 1].toLowerCase() !== 'leite') {
    listaCompras.push('leite');
}

console.log("Lista de compras final:");
listaCompras.forEach(item => console.log(item));


/*
 Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. 
 Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela apenas utilizando o comando "pop".
*/

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

while (lista.length > 5) {
    lista.pop();
}

console.log(lista);


/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = [];

tarefas.push('tarefa1', 'tarefa2', 'tarefa3');

tarefas.splice(1, 1);

tarefas.push('ligar para o médico');

console.log(tarefas);


/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

// Array com três filmes
let filmesFavoritos = ['Filme1', 'Filme2', 'Filme3'];

filmesFavoritos[0] = 'Novo Filme';

if (filmesFavoritos[filmesFavoritos.length - 1] !== 'Harry Potter') {
    filmesFavoritos.push('Harry Potter');
}

console.log(filmesFavoritos);


/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/

let carrinho = [];

carrinho.push('camiseta', 'calça', 'sapato');

carrinho.shift();

carrinho[1] = 'tênis';

console.log(carrinho);


/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/

let exerciciosSemana = ['corrida', 'flexões', 'abdominais'];

if (exerciciosSemana[exerciciosSemana.length - 1] !== 'alongamento') {
    exerciciosSemana.push('alongamento');
}

console.log(exerciciosSemana);


/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = [];

tarefasLimpeza.push('tarefa1', 'tarefa2', 'tarefa3', 'tarefa4');

tarefasLimpeza.splice(2, 1);

tarefasLimpeza[1] = 'limpar banheiro';

console.log(tarefasLimpeza);


/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = [];

metasSemana.push('meta1', 'meta2', 'meta3');

if (metasSemana[1] !== 'exercício físico') {
    metasSemana[1] = 'praticar esportes';
}

console.log(metasSemana);


/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let vetor = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let numero = prompt('Digite um número para verificar:');

let indices = [];
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] == numero) {
        indices.push(i);
    }
}

if (indices.length > 0) {
    console.log(`O número ${numero} está presente nos índices: ${indices.join(', ')}`);
} else {
    console.log(`O número ${numero} não está presente no vetor.`);
}