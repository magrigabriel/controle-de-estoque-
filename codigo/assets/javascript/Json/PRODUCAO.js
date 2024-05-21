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

    }

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
}

// função que salva valores do botão iniciar produção


function produtosalvar() {
  // Obtém os valores dos campos do formulário
  var cod01 = document.getElementById('cod1').value;
  var descprod01 = document.getElementById('descprod1').value;
  var loteprod01 = document.getElementById('loteprod1').value;
  var qtdprod01 = document.getElementById('qtdprod1').value;
  var validprod01 = document.getElementById('validprod1').value;

  // Cria um objeto para representar a nova produção
  const salvaproducao = {
      "codigo": cod01,
      "descricao": descprod01,
      "lote": loteprod01,
      "qtd_lote": qtdprod01,
      "valid_lote": validprod01
  };

  // Recupera a tabela "producaoinfo" do Local Storage
  let producaoInfo = localStorage.getItem('producaoinfo');
  
  if (producaoInfo) {
      // Converte a tabela de JSON para um array de objetos
      producaoInfo = JSON.parse(producaoInfo);
  } else {
      // Se a tabela não existe, inicializa um novo array vazio
      producaoInfo = [];
  }
  
  // Adiciona o novo item ao array
  producaoInfo.push(salvaproducao);
  
  // Converte o array atualizado de volta para JSON
  const producaoInfoAtualizado = JSON.stringify(producaoInfo);
  
  // Armazena a tabela atualizada no Local Storage
  localStorage.setItem('producaoinfo', producaoInfoAtualizado);
  
  // Exibe uma mensagem de sucesso
  alert('Produção salva com sucesso');
}



// localStorage.setItem('producaoinfo', JSON.stringify(salvaproducao));
// alert('produção salva');


