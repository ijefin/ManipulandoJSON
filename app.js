//importação implementada no ecs6
import jogos from './database.js';
import _readlineSync from './node_modules/readline-sync/lib/readline-sync.js';

//Foi utilizado a biblioteca readline para realizar interações com o usuário.
const entradaInicial = _readlineSync.question('Deseja buscar um jogo?\n S/N: ');

//Condicionando a resposta do usuário.
if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis:");
    console.log("aventura", "acao", "fps", "sous like");

//Foi utilizado o método filter (utilizado especialmente para manipulação de json) para filtra a nossa categoria, condicionando a ela nossas categorias existentes.
    const entradaCategoria = _readlineSync.question("Qual categoria voce deseja acessar? ");
    const retorno = jogos.filter(jogos => jogos.categoria === entradaCategoria);
    console.table(retorno);

//Condicionamento para a resposta "N" do usuário
} else {
//Utilizado o método .sort para organizar por ordem crescente os anos dos jogos.
    const jogosOrdenadosPorData = jogos.sort((a, b) => a.ano - b.ano)
    console.log("Aqui estão nosso jogos disponíveis em catálago:");
    console.table(jogos);
}



