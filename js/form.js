//função para adicionar um novo pessoa.
botaoAdicionar = document.querySelector("#adicionar-reserva");
botaoAdicionar.addEventListener("click", function(event) {//adicionei no evento de click uma função
    event.preventDefault(); //Previne o comportamento padrão do form de recarregar
    var form = document.querySelector("#form-adiciona"); //Truxe o for do html
//Adicionando os valores coletados do form nas variaveis
    var pessoa = ObtemPessoaDoFormulario(form);
    var pessoaTr = montaTr(pessoa);
    var erros = validaPessoa(pessoa);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    var tabela = document.querySelector("#tabela-pessoa"); //Adicionado minha Tr na tabela
    tabela.appendChild(pessoaTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
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
    var erros = [];

    if (!validaNome(pessoa.nome)) {
        erros.push("O nome não pode ser em branco");
    }

    if (pessoa.matricula.length == 0) {
        erros.push("Matricula não pode ser em branco");
    }

    if(validaMatricula(pessoa.matricula)){
        erros.push("Matricula Inválida!");
    }

    if (pessoa.horario.length == 0) {
        erros.push("O horário não pode ser em branco");
    }

    if (pessoa.sala.length == 0) {
        erros.push("A sala não pode ser em branco");
    }

    return erros;
}
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
