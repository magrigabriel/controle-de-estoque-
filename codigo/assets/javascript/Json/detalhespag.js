
var recuprapag = localStorage.getItem('pagamentoinfo');

var recuperapagjs = JSON.parse(recuprapag);

function salvarpagamentocred() {
    const nocart = document.getElementById('nome-cartao').value;
    const valid = document.getElementById('validade').value;
    const cvvv = document.getElementById('cvvvv').value;
    const nomecomple = document.getElementById('nome-completo').value;
    const numcard = document.getElementById('numero-cartao').value;

    if (nocart.length >= 5 && valid.length == 4 && cvvv.length == 3 || cvvv == 4 && nomecomple > 10 && numcard.length == 1) {

        recuperapagjs.nocart = nocart;
        recuperapagjs.valid = valid;
        recuperapagjs.cvvv = cvvv;
        recuperapagjs.nomecomple = nomecomple;
        recuperapagjs.numcard = numcard;
        recuperapagjs.formadepagamento = "Crédito"

        alert("Alteração feita com sucesso!");
    } else {
        alert("Não foi possível prosseguir com a alteração, verifique as informações e tente novamente!")
    }
    var atualizado = JSON.stringify(recuperapagjs);

    localStorage.setItem('pagamentoinfo', atualizado);
    location.reload();


}

function salvarpagamentodeb() {
    const nocart = document.getElementById('nome-cartao1').value;
    const valid = document.getElementById('validade1').value;
    const cvvv = document.getElementById('cvvvv1').value;
    const nomecomple = document.getElementById('nome-completo1').value;
    const numcard = document.getElementById('numero-cartao1').value;

    if (nocart.length >= 5 && valid.length == 4 && cvvv.length == 3 || cvvv == 4 && nomecomple > 10 && numcard.length == 1) {

        recuperapagjs.nocart = nocart;
        recuperapagjs.valid = valid;
        recuperapagjs.cvvv = cvvv;
        recuperapagjs.nomecomple = nomecomple;
        recuperapagjs.numcard = numcard;
        recuperapagjs.formadepagamento = "Débito"

        alert("Alteração feita com sucesso!");
    } else {
        alert("Não foi possível prosseguir com a alteração, verifique as informações e tente novamente!")
    }
    var atualizado = JSON.stringify(recuperapagjs);

    localStorage.setItem('pagamentoinfo', atualizado);
    location.reload();


}

function excluir(){
    delete recuperapagjs.nocart
    delete recuperapagjs.valid
    delete recuperapagjs.cvvv 
    delete recuperapagjs.numcard
    delete recuperapagjs.formadepagamento
    var atualizado = JSON.stringify(recuperapagjs);

    localStorage.setItem('pagamentoinfo', atualizado);
    location.reload();

}

