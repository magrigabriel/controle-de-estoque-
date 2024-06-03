document.addEventListener("DOMContentLoaded", function() {
   
    fetch('conf.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('tipo-plano').innerText = data.assinatura.tipo;
            document.getElementById('prox-pagamento').innerText = data.assinatura.data_proximo_pagamento;
        })
        .catch(error => console.error('Erro ao carregar JSON:', error));
    
    
    document.getElementById('alterar-plano-btn').addEventListener('click', function() {
        console.log('Botão "Alterar Plano" clicado');
    });

    document.getElementById('gerenciar-pagamento-btn').addEventListener('click', function() {
        
        console.log('Botão "Gerenciar Forma de Pagamento" clicado');
    });

    document.getElementById('atualizar-senha-btn').addEventListener('click', function() {
        console.log('Botão "Atualizar Senha" clicado');
    });

    document.getElementById('editar-config-btn').addEventListener('click', function() {
        
        console.log('Botão "Editar Configurações" clicado');
    });

    document.getElementById('gerenciar-filiais-btn').addEventListener('click', function() {
        
        console.log('Botão "Gerenciar Filiais" clicado');
    });
});




