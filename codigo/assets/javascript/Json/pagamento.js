
var planoEscolhido = localStorage.getItem('planoEscolhido');

function salvarpagamentocred() {
    if (planoEscolhido == 'avancadomensal' || planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
        const nocart = document.getElementById('nome-cartao').value;
        const valid = document.getElementById('validade').value;
        const cvvv = document.getElementById('cvvvv').value;
        const nomecomple = document.getElementById('nome-completo').value;
        // const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao').value;

        const pagamentoinfo = {
            "nocart": nocart,
            "valid": valid,
            "cvvv": cvvv,
            "nomecomple": nomecomple,
            // "parcelame": parcelame,
            "numcard": numcard,
            "formadepagamento": "Crédito"
        }

        localStorage.setItem('pagamentoinfo', JSON.stringify(pagamentoinfo));
        if (planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
            localStorage.setItem('confirmacao', 'false');
        }
        else {
            localStorage.setItem('confirmacao', 'true');
        }
        alert("Pagamento Realizado com Sucesso!");
        alert("Você comprou um plano mensal, lembre-se que a renovação automatica está ativada!");
        window.location.href = 'telaempres.html';

    } else {
        const nocart = document.getElementById('nome-cartao').value;
        const valid = document.getElementById('validade').value;
        const cvvv = document.getElementById('cvvvv').value;
        const nomecomple = document.getElementById('nome-completo').value;
        const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao').value;

        const pagamentoinfo = {
            "nocart": nocart,
            "valid": valid,
            "cvvv": cvvv,
            "nomecomple": nomecomple,
            "parcelame": parcelame,
            "numcard": numcard,
            "formadepagamento": "Crédito"
        }

        localStorage.setItem('pagamentoinfo', JSON.stringify(pagamentoinfo));
        alert("Pagamento Realizado com Sucesso!");
        alert("Você comprou um plano Anual, lembre-se que a renovação automatica está ativada!");
        if (planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
            localStorage.setItem('confirmacao', 'false');
        }
        else {
            localStorage.setItem('confirmacao', 'true');
        }
        window.location.href = 'telaempres.html';
    }


}

function salvarpagamentodeb() {
    if (planoEscolhido == 'avancadomensal' || planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
        const nocart = document.getElementById('nome-cartao').value;
        const valid = document.getElementById('validade').value;
        const cvvv = document.getElementById('cvvvv').value;
        const nomecomple = document.getElementById('nome-completo').value;
        // const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao').value;

        const pagamentoinfo = {
            "nocart": nocart,
            "valid": valid,
            "cvvv": cvvv,
            "nomecomple": nomecomple,
            // "parcelame": parcelame,
            "numcard": numcard,
            "formadepagamento": "Débito"
        }

        localStorage.setItem('pagamentoinfo', JSON.stringify(pagamentoinfo));
        alert("Pagamento Realizado com Sucesso!");
        alert("Você comprou um plano mensal, lembre-se que a renovação automatica está ativada!");
        if (planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
            localStorage.setItem('confirmacao', 'false');
        }
        else {
            localStorage.setItem('confirmacao', 'true');
        }
        window.location.href = 'telaempres.html';

    } else {
        const nocart = document.getElementById('nome-cartao').value;
        const valid = document.getElementById('validade').value;
        const cvvv = document.getElementById('cvvvv').value;
        const nomecomple = document.getElementById('nome-completo').value;
        // const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao').value;

        const pagamentoinfo = {
            "nocart": nocart,
            "valid": valid,
            "cvvv": cvvv,
            "nomecomple": nomecomple,
            // "parcelame": parcelame,
            "numcard": numcard,
            "formadepagamento": "Débito"
        }

        localStorage.setItem('pagamentoinfo', JSON.stringify(pagamentoinfo));
        alert("Pagamento Realizado com Sucesso! Debito");
        alert("Você comprou um plano Anual, lembre-se que a renovação automatica está ativada!");
        if (planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
            localStorage.setItem('confirmacao', 'false');
        }
        else {
            localStorage.setItem('confirmacao', 'true');
        }
        window.location.href = 'telaempres.html';
    }


}
