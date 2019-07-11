//função para adicionar um novo paciente.
botaoAdicionar = document.querySelector("#adicionar-reserva");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); //Previne o comportamento padrão do form de recarregar
    var form = document.querySelector("#form-adiciona"); //Truxe o for do html
//Adicionando os valores coletados do form nas variaveis
    var pessoa = ObtemPessoaDoFormulario(form);
    var pessoaTr = montaTr(pessoa);
//Adicionado minha Tr na tabela
     var tabela = document.querySelector("#tabela-pessoa");
     tabela.appendChild(pessoaTr);

});
//Criando o Objeto Paciente
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
    pessoaTr.classList.add("paciente"); //Adicionando uma classe na minha tr

    var nomeTd = document.createElement("td");//Criando uma td
    nomeTd.classList.add("info-nome");

    var matriculaTd = document.createElement("td");
    matriculaTd.classList.add("info-matricula");

    var salaTd = document.createElement("td");
    salaTd.classList.add("info-sala");

    var horarioTd = document.createElement("td");
    horarioTd.classList.add("info-horario");
    
    //Adicionando os valores das labels nas tdSala
        nomeTd.textContent = pessoa.nome;
        matriculaTd.textContent = pessoa.matricula;
        salaTd.textContent = pessoa.sala;
        horarioTd.textContent = pessoa.horario;
    //Adicionando as minhas Tds dentro da Tr
        pessoaTr.appendChild(nomeTd);
        pessoaTr.appendChild(matriculaTd);
        pessoaTr.appendChild(salaTd);
        pessoaTr.appendChild(horarioTd);

    return pessoaTr;
}
