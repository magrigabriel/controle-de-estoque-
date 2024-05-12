// URL DA API DE DADOS
URL = 'http://localhost:3000/fornecedores'
//=================================================================================================
// GET - Recupera todos os fornecedores e adiciona na tabela

const fornecedorList = document.getElementById('fornecedor-list');

fetch(URL)
    .then(res => res.json())
    .then(fornecedores => {
        let lista_fornecedores = '';
        for (let i = 0; i < fornecedores.length; i++) {
            lista_fornecedores += `
            <tr>
                <th>${fornecedores[i].id}</th>
                <td>${fornecedores[i].prioridade}</td>
                <td>${fornecedores[i].nome}</td>
                <td>${fornecedores[i].end}</td>
                <td>${fornecedores[i].ctt}</td>
                <td>
                    <a onclick="getFornecedor(${fornecedores[i].id});" 
                    class="btn btn-info btn-xs" 
                    data-toggle="modal" data-target="#fornecedor-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-forn').text(${fornecedores[i].id});" class="btn btn-danger btn-xs" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
            fornecedorList.innerHTML = lista_fornecedores; 
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM fornecedor
const fornecedorDelete = document.getElementById('btn-delete');

fornecedorDelete.addEventListener('click', (e) => {

    let id = $('#id-forn').text();

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload());

})
//=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM fornecedor NA API
function getFornecedor(id){

    if(id == 0){
        $('#edit-forn-id').text("");
        $( "#fornecedor-id" ).prop( "disabled", false );
        $('#fornecedor-id').val("");
        $('#fornecedor-prioridade').val("");
        $('#fornecedor-nome').val("");
        $('#fornecedor-end').val("");
        $('#fornecedor-ctt').val("");
    }else{
        $('#edit-forn-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())    
        .then(data => {
            $( "#fornecedor-id" ).prop( "disabled", true );
            $('#fornecedor-id').val(data.id);
            $('#fornecedor-prioridade').val(data.prioridade);
            $('#fornecedor-nome').val(data.nome);
            $('#fornecedor-end').val(data.end);
            $('#fornecedor-ctt').val(data.ctt);
        });
    }    
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM fornecedor

const fornecedorForm = document.getElementById('fornecedor-form');

fornecedorForm.addEventListener('submit', (e) => {

    // RECUPERA O ID DO fornecedor
    let id = parseInt($('#edit-forn-id').text());    

    // RECUPERA OS DADOS DO fornecedor
    const fornecedor = JSON.stringify({
        id: document.getElementById('fornecedor-id').value,
        prioridade: document.getElementById('fornecedor-prioridade').value,
        nome: document.getElementById('fornecedor-nome').value,
        end: document.getElementById('fornecedor-end').value,
        ctt: document.getElementById('fornecedor-ctt').value
    })

    if (id >= 0) {
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: fornecedor
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
            body: fornecedor
        })
        .then(res => res.json())
        .then(() => location.reload());  
    }      
})
//=================================================================================================
