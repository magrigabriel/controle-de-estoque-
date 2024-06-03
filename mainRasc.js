// URL DA API DE DADOS
URL = 'http://localhost:3000/rascunhos'
//=================================================================================================
// GET - Recupera todos os rascunhos e adiciona na tabela

const rascunhoList = document.getElementById('rascunho-list');

fetch(URL)
    .then(res => res.json())
    .then(rascunhos => {
        let lista_rascunhos = '';
        for (let i = 0; i < rascunhos.length; i++) {
            lista_rascunhos += `
            <tr>
                <th>${rascunhos[i].id}</th>
                <td>${rascunhos[i].prioridade}</td>
                <td>${rascunhos[i].tipo}</td>
                <td>${rascunhos[i].nome}</td>
                <td>${rascunhos[i].end}</td>
                <td>${rascunhos[i].ctt}</td>
                <td>
                    <a onclick="getRascunho(${rascunhos[i].id});" 
                    class="btn btn-info btn-xs" 
                    data-toggle="modal" data-target="#rascunho-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-rasc').text(${rascunhos[i].id});" class="btn btn-danger btn-xs" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
            rascunhoList.innerHTML = lista_rascunhos; 
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM rascunho
const rascunhoDelete = document.getElementById('btn-delete');

rascunhoDelete.addEventListener('click', (e) => {

    let id = $('#id-rasc').text();

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload());

})
//=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM rascunho NA API
function getRascunho(id){

    if(id == 0){
        $('#edit-rasc-id').text("");
        $( "#rascunho-id" ).prop( "disabled", false );
        $('#rascunho-id').val("");
        $('#rascunho-prioridade').val("");
        $('#rascunho-tipo').val("");
        $('#rascunho-nome').val("");
        $('#rascunho-end').val("");
        $('#rascunho-ctt').val("");
    }else{
        $('#edit-rasc-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())    
        .then(data => {
            $( "#rascunho-id" ).prop( "disabled", true );
            $('#rascunho-id').val(data.id);
            $('#rascunho-prioridade').val(data.prioridade);
            $('#rascunho-tipo').val(data.tipo);
            $('#rascunho-nome').val(data.nome);
            $('#rascunho-end').val(data.end);
            $('#rascunho-ctt').val(data.ctt);
        });
    }    
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM rascunho

const rascunhoForm = document.getElementById('rascunho-form');

rascunhoForm.addEventListener('submit', (e) => {

    // RECUPERA O ID DO rascunho
    let id = parseInt($('#edit-rasc-id').text());    

    // RECUPERA OS DADOS DO rascunho
    const rascunho = JSON.stringify({
        id: document.getElementById('rascunho-id').value,
        prioridade: document.getElementById('rascunho-prioridade').value,
        tipo: document.getElementById('rascunho-tipo').value,
        nome: document.getElementById('rascunho-nome').value,
        end: document.getElementById('rascunho-end').value,
        ctt: document.getElementById('rascunho-ctt').value
    })

    if (id >= 0) {
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: rascunho
        })
        .then(res => res.json())
        .then(() => location.reload());  
    }
    else{ 
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: rascunho
        })
        .then(res => res.json())
        .then(() => location.reload());  
    }      
})
//=================================================================================================
