var pessoas = document.querySelectorAll(".pessoa"); //pegando do meu html todas as pessoas pelo ID

var tabela = document.querySelector("table");//

tabela.addEventListener("dblclick",function(event) { //evente e o dono do evento
    var alvoEvento = event.target; //td clicada
    var paiDoAlvo = alvoEvento.parentNode; //pai da td e uma tr
    paiDoAlvo.classList.add("efeito");// efeito desaparecer devagar

    setTimeout(function() { //Espera um tempo para excutar, para aparecer o meu efeito antes
        paiDoAlvo.remove();//removendo a tr
    }, 500)

});
