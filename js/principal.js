
//Peguei do HTML A Minha TR com id '#primeira-pessoa'
var pessoas = document.querySelectorAll("#primeira-pessoa");
//Peguei do HTML cada td da minha TR com seus respectivas classes
for (var i = 0; i < pessoas.length; i++) {
  pessoa = pessoas[i];
var tdNome = pessoa.querySelector(".info-nome");
var tdMatricula = pessoa.querySelector(".info-matricula");
var tdSala = pessoa.querySelector(".info-sala");
var tdHorario = pessoa.querySelector(".info-horario");

var nome = tdNome.textContent;
var matricula = tdMatricula.textContent;
var sala = tdSala.textContent;
var horario = tdHorario.textContent;
validaPessoa(pessoa);

}

function validaPessoa(pessoa) {
  if(matricula != 8){
    console.log("Matricula Invalida");
    pessoa.classList.add("pessoa-invalida");
  }
  if(nome.length == 0){
    console.log("Campo nome Vazio!");

  }
}
