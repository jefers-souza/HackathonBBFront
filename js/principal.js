
//Peguei do HTML A Minha TR com id '#primeira-pessoa'
var pessoas = document.querySelectorAll("#pessoa");
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

    var MatriculaEhValida = validaMatricula(matricula);
    var NomeEhValido = validaNome(nome);

    if (!MatriculaEhValida) {
     console.log("Matricula inválida!");
     MatriculaEhValida = false;
     tdMatricula.textContent = "Matricula inválida";
     pessoa.classList.add("pessoa-invalida");
 }

 if (!NomeEhValido) {
     console.log("Nome inválido!");
     NomeEhValido = false;
     tdNome.textContent = "Nome inválido";
     pessoa.classList.add("pessoa-invalida");
 }

}
function validaMatricula(matricula) {
    if (matricula.length != 8) {
        return true;
    } else {
        return false;
    }
}
function validaNome(nome) {
    if (nome.length > 0) {
        return true;
    } else {
        return false;
    }
}
