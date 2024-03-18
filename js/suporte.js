MinhaPrimeiraFuncao("aaaaa");

function  MinhaPrimeiraFuncao(msg){
    alert("A mensagem enviada foi: "+msg);
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}