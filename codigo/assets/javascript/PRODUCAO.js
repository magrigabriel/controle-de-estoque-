/*
// Função para preencher a tabela com os dados
function preencherTabela() {
    const tabelaCorpo = document.getElementById("tabela-corpo");
    tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de preencher

    // Ordena os dados pelo código
    dados.sort((a, b) => a.codigo.localeCompare(b.codigo));

    // Preenche a tabela
    dados.slice(mais, mais + 10).forEach((item) => {
        const newRow = tabelaCorpo.insertRow();
        newRow.dataset.codigo = item.codigo;
        const proximoVencimento = new Date(item.validade) - new Date() < 1000 * 60 * 60 * 24 * 15;
        if (proximoVencimento) {
            newRow.classList.add("prox-vencimento");
        }
        newRow.innerHTML = `     
        <td>${item.codigo}</td>
        <td>${item.descricao}</td>
        <td>${item.lote}</td>
        <td>${item.qtd_lote}</td>
        <td>${item.valid_lote}</td>
        `;
    });

    mais += 10;
}

window.onload = preencherTabela;

const btnGerarLinhas = document.getElementById("btnGerarLinhas");
btnGerarLinhas.addEventListener("click", preencherTabela);

*/
/*
document.addEventListener("DOMContentLoaded", function () {
  const cardDiv = document.querySelector(".card");
  cardDiv.style.display = "none";

  const btnProd = document.getElementById("btn_prod");
  btnProd.addEventListener("click", function () {
    if (cardDiv.style.display === "none") {
      cardDiv.style.display = "block";
    } else {
      cardDiv.style.display = "none"; 
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const cardDiv = document.querySelector(".card2");
    cardDiv.style.display = "none"; // Esconde o card inicialmente
  
    const btnProd = document.getElementById("btn_novo");
    btnProd.addEventListener("click", function () {
      if (cardDiv.style.display === "none") {
        cardDiv.style.display = "block"; // Exibe o card ao clicar no botão "btn_prod"
      } else {
        cardDiv.style.display = "none"; // Esconde o card se já estiver visível
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const cardDiv = document.querySelector(".card3");
    cardDiv.style.display = "none"; // Esconde o card inicialmente
  
    const btnProd = document.getElementById("btn_ex");
    btnProd.addEventListener("click", function () {
      if (cardDiv.style.display === "none") {
        cardDiv.style.display = "block"; // Exibe o card ao clicar no botão "btn_prod"
      } else {
        cardDiv.style.display = "none"; // Esconde o card se já estiver visível
      }
    });
  });

class btn_prod {

    constructor() {
        this.id = 1; /* Será alterado para o código do produto que será produzido */

  /*  }

    salvar() {
        let in_prod = this.lerDados();

        if(this.validacampos(in_prod) == true){
            alert("salvar")
        } 
    }

    adicionar(in_prod){
        this.arrayDados.push(in_prod);
    }

    lerDados() {
        let in_prod = {}
        produto.codigoprod = document.getElementById("cod1").value;
        produto.descprod = document.getElementById("descprod1").value;
        produto.loteprod = document.getElementById("loteprod1").value;
        produto.qtdprod = document.getElementById("qtdprod1").value;
        produto.validprod = document.getElementById("validprod1").value;

        return in_prod;
    }

    validacampos(in_prod) {
        let msg = '';
        if (produto.codigoprod == '') {
            msg += "Informe o código do produto \n";
        }
        if (produto.qtdprod == '') {
            msg += "Informe a quantidade a ser produzida \n";
        }
        if (produto.validprod == '') {  
            msg += "Informe a validade para este lote \n";
        }
        if(msg != ""){
            alert(msg);
            return false;
        }

        return true;
    }
}*/