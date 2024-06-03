/* alert("Bem-vindo ao seu menu de produção!!!") */



document.addEventListener("DOMContentLoaded", function () {
  const cardDiv = document.querySelector("#prd1");
  cardDiv.style.display = "none";

  const btn_prod = document.getElementById("btn_prod");
  btn_prod.addEventListener("click", function () {
    if (cardDiv.style.display === "none") {
      cardDiv.style.display = "block";
      cardDiv4.style.display = "none";
      cardDiv2.style.display = "none";
      cardDiv3.style.display = "none";
    } else {
      cardDiv.style.display = "none";
    }
  });

  const cardDiv4 = document.querySelector("#edit1");
  cardDiv4.style.display = "none";

  const btn_edit = document.getElementById("btn_edit");
  btn_edit.addEventListener("click", function () {
    if (cardDiv4.style.display === "none") {
      cardDiv.style.display = "none";
      cardDiv4.style.display = "block";
      cardDiv2.style.display = "none";
      cardDiv3.style.display = "none";
    } else {
      cardDiv4.style.display = "none";
    }
  });

  const cardDiv2 = document.querySelector("#prd2");
  cardDiv2.style.display = "none"; // Esconde o card inicialmente

  const btn_novo = document.getElementById("btn_novo");
  btn_novo.addEventListener("click", function () {
    if (cardDiv2.style.display === "none") {
      cardDiv.style.display = "none";
      cardDiv4.style.display = "none";
      cardDiv2.style.display = "block";
      cardDiv3.style.display = "none"; // Exibe o card ao clicar no botão "btn_novo"
    } else {
      cardDiv2.style.display = "none"; // Esconde o card se já estiver visível
    }
  });


  const cardDiv3 = document.querySelector("#prd3");
  cardDiv3.style.display = "none"; // Esconde o card inicialmente

  const btn_ex = document.getElementById("btn_ex");
  btn_ex.addEventListener("click", function () {
    if (cardDiv3.style.display === "none") {
      cardDiv.style.display = "none";
      cardDiv4.style.display = "none";
      cardDiv2.style.display = "none";
      cardDiv3.style.display = "block"; // Exibe o card ao clicar no botão "btn_prod"
    } else {
      cardDiv3.style.display = "none"; // Esconde o card se já estiver visível
    }
  });
  preencherTabela();
});


//Botões de validação --> Iniciar Produção
var cadForm = document.getElementById("prd1");

// Aguardar o usuário clicar no botão cadastrar do formulário
cadForm.addEventListener("submit", (e) => {

  // Não recarregar a página
  e.preventDefault();

  // Receber os dados do formulário
  var cod1 = document.getElementById('cod1').value;
  var descprod1 = document.getElementById('descprod1').value;
  var loteprod1 = document.getElementById('loteprod1').value;
  var qtdprod1 = document.getElementById('qtdprod1').value;
  var validprod1 = document.getElementById('validprod1').value;
  // O Array() é usado para criar Array de objetos
  let prod1 = new Array();

  // Verifica se a propriedade no localStorage
  if (localStorage.hasOwnProperty("prod1")) {
    // Recuperar os valores da propriedade usuarios do localStorage
    // Converte de String para Object
    prod1 = JSON.parse(localStorage.getItem("prod1"));
  }

  // Adiciona um novo objeto no array criado
  prod1.push({ cod1, descprod1, loteprod1, qtdprod1, validprod1 });

  // Salva no localStorage
  localStorage.setItem("prod1", JSON.stringify(prod1));

  document.getElementById("conteudo").insertAdjacentHTML('beforeend', "Nome: " + nome_usuario + "<br>E-mail: " + email_usuario + "<br><hr>");
});


cadForm.addEventListener("reset", (e) => {

});


//Botões de validação --> Iniciar Produção
var cadForm2 = document.getElementById("prd2");

// Aguardar o usuário clicar no botão cadastrar do formulário
cadForm2.addEventListener("submit", (e) => {

  // Não recarregar a página
  e.preventDefault();

  // Receber os dados do formulário
  var cod2 = document.getElementById('cod2').value;
  var descprod2 = document.getElementById('descprod2').value;
  var loteprod2 = document.getElementById('loteprod2').value;
  var mp2 = document.getElementById('mp2').value;
  var ncm2 = document.getElementById('ncm2').value;
  var un2 = document.getElementById('un2').value;
  console.log(cod2);
  console.log(descprod2);
  console.log(loteprod2);
  console.log(mp2);
  console.log(ncm2);
  console.log(un2);

  // O Array() é usado para criar Array de objetos,
  let prodprd = new Array();

  // Verifica se a propriedade no localStorage
  if (localStorage.hasOwnProperty("prodprd")) {
    // Recuperar os valores da propriedade usuarios do localStorage
    // Converte de String para Object
    prodprd = JSON.parse(localStorage.getItem("prodprd"));
  }

  // Adiciona um novo objeto no array criado
  prodprd.push({ cod2, descprod2, loteprod2, mp2, ncm2, un2 });

  // Salva no localStorage
  localStorage.setItem("prodprd", JSON.stringify(prodprd));

  document.getElementById("conteudo").insertAdjacentHTML('beforeend', "Nome: " + nome_usuario + "<br>E-mail: " + email_usuario + "<br><hr>");
});


cadForm2.addEventListener("reset", (e) => {

});


//Botões de validação --> Iniciar Produção
var cadForm3 = document.getElementById("prd3");

// Aguardar o usuário clicar no botão cadastrar do formulário
cadForm3.addEventListener("submit", (e) => {

  // Não recarregar a página
  e.preventDefault();

  // Receber os dados do formulário
  var cod3 = document.getElementById('cod3').value;
  var loteprod3 = document.getElementById('loteprod3').value;
  console.log(cod3);
  console.log(loteprod3);
  

  /* Parei aqui*/

  // O Array() é usado para criar Array de objetos,
  let prodprd = new Array();

  // Verifica se a propriedade no localStorage
  if (localStorage.hasOwnProperty("prodprd")) {
    // Recuperar os valores da propriedade usuarios do localStorage
    // Converte de String para Object
    prodprd = JSON.parse(localStorage.getItem("prodprd"));
  }

  // Adiciona um novo objeto no array criado
  prodprd.push({ cod2, descprod2, loteprod2, mp2, ncm2, un2 });

  // Salva no localStorage
  localStorage.setItem("prodprd", JSON.stringify(prodprd));

  document.getElementById("conteudo").insertAdjacentHTML('beforeend', "Nome: " + nome_usuario + "<br>E-mail: " + email_usuario + "<br><hr>");
});


cadForm3.addEventListener("reset", (e) => {

});





// filtro tabela prod1
