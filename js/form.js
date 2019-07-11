//função para adicionar um novo pessoa.
botaoAdicionar = document.querySelector("#adicionar-reserva");
botaoAdicionar.addEventListener("click", function(event) {//adicionei no evento de click uma função
    event.preventDefault(); //Previne o comportamento padrão do form de recarregar
    var form = document.querySelector("#form-adiciona"); //Truxe o for do html
//Adicionando os valores coletados do form nas variaveis
    var pessoa = ObtemPessoaDoFormulario(form);
    var pessoaTr = montaTr(pessoa);

    var erros = validaPessoa(pessoa);
    if (erros.length > 0) {  //se o array for maior que zero teve erro
        exibeMensagensDeErro(erros); //chamo a função exibe erro
        return;
    }

    var tabela = document.querySelector("#tabela-pessoa"); //Adicionado minha Tr na tabela
    tabela.appendChild(pessoaTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; //Quando adiciono um usuario com sucesso eu limpo a minha Ul
});
//Criando o Objeto pessoa
function ObtemPessoaDoFormulario(form) {
  var pessoa = {
      nome : form.nome.value,
      matricula : form.matricula.value,
      sala : form.sala.value,
      horario : form.horario.value
  }
  return pessoa;
}
function montaTr(pessoa) {
    var pessoaTr = document.createElement("tr");//Criando uma TR
    pessoaTr.classList.add("pessoa"); //Adicionando uma classe na minha tr

    var nomeTd = montaTd(pessoa.nome, "info-nome");
    var matriculaTd = montaTd(pessoa.matricula, "info-matricula");
    var salaTd = montaTd(pessoa.sala, "info-sala");
    var horarioTd = montaTd(pessoa.horario, "info-horario");
    //Adicionando as minhas Tds dentro da Tr
    pessoaTr.appendChild(nomeTd);
    pessoaTr.appendChild(matriculaTd);
    pessoaTr.appendChild(salaTd);
    pessoaTr.appendChild(horarioTd);

  return pessoaTr;
}
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
function validaPessoa(pessoa) {
    var erros = []; //retorei um array de erros
   // console.log(" >>>>>>>> " + pessoa.horario[3][4]);

    if (!validaNome(pessoa.nome)) {
        erros.push("O nome não pode ser em branco"); //adiciono dentro do array a string
    }

    if (pessoa.matricula.length == 0) {
        erros.push("Matricula não pode ser em branco");
    }

    if(validaMatricula(pessoa.matricula)){
        erros.push("Matricula Inválida!");
    }

    if (pessoa.horario[3] != "3" && pessoa.horario[3] != "0") {
        console.log(" >>>>>>>> " + pessoa.horario[3]);
        erros.push("deu ruim pai");
    }

    if (pessoa.horario[4] != "0") {
        console.log(" >>>>>>>> " + pessoa.horario[4]);
        erros.push("deu ruim mae");
    }

    if (pessoa.sala.length == 0) {
        erros.push("A sala não pode ser em branco");
    }


    return erros; // retorno meu array com todos os erros
}
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro"); //Ul do meu HTML
    ul.innerHTML = ""; //Controla a minha Ul apagando a mensagem sempre que chamada de novo, Para a mensagem não ficar fixa depois que eu preencho
    erros.forEach(function(erro) { // for para criar uma li, alterar o valor dela, e colocar ela na tabela
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
