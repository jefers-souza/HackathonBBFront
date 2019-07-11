var campoPesquisa = document.querySelector("#filtrar-tabela");

campoPesquisa.addEventListener("input", function() {
    console.log(this.value);//mesma coisa que campoPesquisa.value
    var pessoas = document.querySelectorAll(".pessoa");

    if( this.value.length > 0){
      for (var i = 0; i < pessoas.length; i++) {
        var pessoa = pessoas[i];
        var tdNome = pessoa.querySelector(".info-nome");
        var nome = tdNome.textContent;
        if (nome != this.value) {
            pessoa.classList.add("esconde");
        }else {
            pessoa.classList.remove("esconde")
        }
      }
      }else {
        for (var i = 0; i < pessoas.length; i++) {
            var pessoa = pessoas[i];
            paciente.classList.remove("esconde");
        }
      }








});
