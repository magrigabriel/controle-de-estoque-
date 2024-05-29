
var planoEscolhido = localStorage.getItem('planoEscolhido');
var planoss2 = {
    "plano1": {
        "titulo": "Básico",
        "valor": "R$ XX,XX",
        "GB": "X GB de Armazenamento",
        "grafico": "Não oferece gráfico e relatorio de vendas automatico",
        "distribição": "Não estabelece conexões com centros de distribuições",
    },
    "plano2": {
        "titulo": "Médio",
        "valor": "R$ YY,YY",
        "GB": "Y GB de Armazenamento",
        "grafico": "Não oferece gráfico e relatorio de vendas automatico",
        "distribição": "Não estabelece conexões com centros de distribuições",
    },
    "plano3": {
        "titulo": "Avançado",
        "valor": "R$ zz,zz",
        "GB": "X GB de Armazenamento",
        "grafico": "Gráfico e relatorio de vendas automatico",
        "distribição": "Estabelece conexões com centros de distribuições",
    },
    "plano11": {
        "titulo": "Básico",
        "valor": "R$XX,XX",
    },
    "plano22": {
        "titulo": "Médio",
        "valor": "R$ YY,YY",
        
    },
    "plano33": {
        "titulo": "Avançado",
        "valor": "R$ zz,zz",
    }
}

function salvarpagamentocred() {
    if (planoEscolhido == 'avancadomensal' || planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {

        const nocart = document.getElementById('nome-cartao').value;
        const valid = document.getElementById('validade').value;
        const cvvv = document.getElementById('cvvvv').value;
        const nomecomple = document.getElementById('nome-completo').value;
        //const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao').value;

        if (nocart.length >= 10 && valid.length == 4 && cvvv.length == 3 || cvvv == 4 && nomecomple > 10 && numcard.length == 16) {

            const dataproxpag = soma30dias()
            const hojee = hoje()
            const pagamentoinfo = {
                "nocart": nocart,
                "valid": valid,
                "cvvv": cvvv,
                "nomecomple": nomecomple,
                // "parcelame": parcelame,
                "numcard": numcard,
                "formadepagamento": "Crédito",
                "tipoplano": "Mensal",
                "datapagamento": hojee,
                "dataproxpagamento": dataproxpag

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
            alert("Não foi possível prosseguir com o pagamento, verifique as informações e tente novamente!")
        }

        //Armazenar informação do plano: 
        if (planoEscolhido == 'avancadomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano3));
        }
        else if (planoEscolhido == 'mediomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano2));
        }
        else if (planoEscolhido == 'basicomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano1));
        }
        //Armazenar informação do plano anual: 
        if (planoEscolhido == 'avancadoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano33));
        }
        else if (planoEscolhido == 'medioanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano22));
        }
        else if (planoEscolhido == 'basicoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano11));
        }



    } else {
        const nocart = document.getElementById('nome-cartao').value;
        const valid = document.getElementById('validade').value;
        const cvvv = document.getElementById('cvvvv').value;
        const nomecomple = document.getElementById('nome-completo').value;
        const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao').value;
        if (nocart.length >= 5 && valid.length == 4 && cvvv.length == 3 || cvvv == 4 && nomecomple > 10 && numcard.length == 16) {
            const dataproxpag = soma365dias()
            const hojee = hoje()
            const pagamentoinfo = {
                "nocart": nocart,
                "valid": valid,
                "cvvv": cvvv,
                "nomecomple": nomecomple,
                "parcelame": parcelame,
                "numcard": numcard,
                "formadepagamento": "Crédito",
                "tipoplano": "Anual",
                "datapagamento": hojee,
                "dataproxpagamento": dataproxpag
            }

            localStorage.setItem('pagamentoinfo', JSON.stringify(pagamentoinfo));
            if (planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
                localStorage.setItem('confirmacao', 'false');
            }
            else {
                localStorage.setItem('confirmacao', 'true');
            }
            alert("Pagamento Realizado com Sucesso!");
            alert("Você comprou um plano Anual");
            window.location.href = 'telaempres.html';
        } else {
            alert("Não foi possível prosseguir com o pagamento, verifique as informações e tente novamente!")
        }
        //Armazenar informação do plano: 
        if (planoEscolhido == 'avancadomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano3));
        }
        else if (planoEscolhido == 'mediomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano2));
        }
        else if (planoEscolhido == 'basicomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano1));
        }
        //Armazenar informação do plano anual: 
        if (planoEscolhido == 'avancadoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano33));
        }
        else if (planoEscolhido == 'medioanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano22));
        }
        else if (planoEscolhido == 'basicoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano11));
        }

    }
}

function salvarpagamentodeb() {

    if (planoEscolhido == 'avancadomensal' || planoEscolhido == 'mediomensal' || planoEscolhido == 'basicomensal') {
        const nocart = document.getElementById('nome-cartao1').value;
        const valid = document.getElementById('validade1').value;
        const cvvv = document.getElementById('cvvvv1').value;
        const nomecomple = document.getElementById('nome-completo1').value;
        //const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao1').value;
        if (nocart.length >= 5 && valid.length == 4 && cvvv.length == 3 || cvvv == 4 && nomecomple > 10 && numcard.length == 16) {
            const dataproxpag = soma30dias()
            const hojee = hoje()
            
            const pagamentoinfo = {
                "nocart": nocart,
                "valid": valid,
                "cvvv": cvvv,
                "nomecomple": nomecomple,
                // "parcelame": parcelame,
                "numcard": numcard,
                "formadepagamento": "Débito",
                "tipoplano": "Mensal",
                "datapagamento": hojee,
                "dataproxpagamento": dataproxpag
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
            alert("Não foi possível prosseguir com o pagamento, verifique as informações e tente novamente!")
        }
        //Armazenar informação do plano: 
        if (planoEscolhido == 'avancadomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano3));
        }
        else if (planoEscolhido == 'mediomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano2));
        }
        else if (planoEscolhido == 'basicomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano1));
        }
        //Armazenar informação do plano anual: 
        if (planoEscolhido == 'avancadoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano33));
        }
        else if (planoEscolhido == 'medioanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano22));
        }
        else if (planoEscolhido == 'basicoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano11));
        }

    } else {
        const nocart = document.getElementById('nome-cartao1').value;
        const valid = document.getElementById('validade1').value;
        const cvvv = document.getElementById('cvvvv1').value;
        const nomecomple = document.getElementById('nome-completo1').value;
        //const parcelame = document.getElementById('validationCustom04').value;
        const numcard = document.getElementById('numero-cartao1').value;
        if (nocart.length >= 5 && valid.length == 4 && cvvv.length == 3 || cvvv == 4 && nomecomple > 10 && numcard.length == 16) {
            const dataproxpag = soma365dias()
            const hojee = hoje()
            const pagamentoinfo = {
                "nocart": nocart,
                "valid": valid,
                "cvvv": cvvv,
                "nomecomple": nomecomple,
                //"parcelame": parcelame,
                "numcard": numcard,
                "formadepagamento": "Débito",
                "tipoplano": "Anual",
                "datapagamento": hojee,
                "dataproxpagamento": dataproxpag
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
            alert("Não foi possível prosseguir com o pagamento, verifique as informações e tente novamente!")
        }
        //Armazenar informação do plano: 
        if (planoEscolhido == 'avancadomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano3));
        }
        else if (planoEscolhido == 'mediomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano2));
        }
        else if (planoEscolhido == 'basicomensal') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano1));
        }
        //Armazenar informação do plano anual: 
        if (planoEscolhido == 'avancadoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano33));
        }
        else if (planoEscolhido == 'medioanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano22));
        }
        else if (planoEscolhido == 'basicoanual') {
            localStorage.setItem('planocompradoo', JSON.stringify(planoss2.plano11));
        }


    }
}

function hoje(){
    const hoje = new Date();

    const hojeee = new Date(hoje);
    const hojee = hojeee.toLocaleDateString();
    
    return hojee;
}

function soma30dias(){
     const hoje = new Date();

    const daquidias = new Date(hoje);
    daquidias.setDate(daquidias.getDate() + 30);

    const daquidiass = daquidias.toLocaleDateString();
    
    return daquidiass;
}


function soma365dias(){
    const hoje = new Date();

    const daquidias = new Date(hoje);
    daquidias.setDate(daquidias.getDate() + 365);

    const daquidiass = daquidias.toLocaleDateString();
    
    return daquidiass;
}