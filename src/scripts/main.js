//constantes e variaveis
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src = "src/images/aprovado.png"  alt= "Emoji: celebrando"/>'; //para uso no caso de aprovação do aluno
const imgReprovado = '<img src = "src/images/reprovado.png" alt= "Emoji: triste"/>';
const atividades = []; //para salvar as atividades inseridas pelo usuário
const notas = [];   //para salvar as notas das atividades inseridas pelo usuário
const spanAprovado = '<span class = " resultado aprovado "> Aprovado </span>'
const spanReprovado = '<span class = " resultado reprovado "> Reprovado </span>'
const notaMinina = parseFloat(prompt("Digite a nota miníma para aprovação7:"))

let linhas  = '';

//Função disparada "automaticamente ao enviar o form"
form.addEventListener('submit', function(e){
    e.preventDefault(); //cancela as ações "automáticas do navegador"

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade') //evento - disparo automatico ao enviar o form
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`)
    }else{
        atividades.push(inputNomeAtividade.value); //adicionando as atividades ao vetor atividades = []
        notas.push(parseFloat(inputNotaAtividade.value)); //adicionando as notas das atividades ao vetor atividades = []

        let linha = '<tr>';   //a cada inserção de atividade e nota, inserir uma linha

        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinina? imgAprovado  : imgReprovado} </td>`; //operador ternário

        linhas +=  linha;
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); //atribuindo o corpo da tabela a uma variável
    corpoTabela.innerHTML = linhas; //atribuindo dados a variável linha 
};

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2); //toFixed adiciona uma limitação as casas decimais
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinina ? spanAprovado : spanReprovado; 
}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    const media = somaDasNotas/notas.length;7

    for (let i= 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}
