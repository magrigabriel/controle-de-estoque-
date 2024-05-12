// URL DA API DE DADOS
URL = 'http://localhost:3000/clientes'
//=================================================================================================
// GET - Recupera todos os clientes e adiciona na tabela

const clienteList = document.getElementById('cliente-list');

fetch(URL)
    .then(res => res.json())
    .then(clientes => {
        let lista_clientes = '';
        for (let i = 0; i < clientes.length; i++) {
            lista_clientes += `
            <tr>
                <th>${clientes[i].id}</th>
                <td>${clientes[i].prioridade}</td>
                <td>${clientes[i].nome}</td>
                <td>${clientes[i].end}</td>
                <td>${clientes[i].ctt}</td>
                <td>
                    <a onclick="getCliente(${clientes[i].id});" 
                    class="btn btn-info btn-xs" 
                    data-toggle="modal" data-target="#">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-cli').text(${clientes[i].id});" class="btn btn-danger btn-xs" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
            clienteList.innerHTML = lista_clientes; 
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM cliente
const clienteDelete = document.getElementById('btn-delete');

clienteDelete.addEventListener('click', (e) => {

    let id = $('#id-cli').text();

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload());

})
//================================================================================================= 

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM cliente NA API
function getCliente(id){

    if(id == 0){
        $('#edit-cli-id').text("");
        $( "#cliente-id" ).prop( "disabled", false );
        $('#cliente-id').val("");
        $('#cliente-prioridade').val("");
        $('#cliente-nome').val("");
        $('#cliente-end').val("");
        $('#cliente-ctt').val("");
    }else{
        $('#edit-cli-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())    
        .then(data => {
            $( "#cliente-id" ).prop( "disabled", true );
            $('#cliente-id').val(data.id);
            $('#cliente-prioridade').val(data.prioridade);
            $('#cliente-nome').val(data.nome);
            $('#cliente-end').val(data.end);
            $('#cliente-ctt').val(data.ctt);
        });
    }    
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM cliente

const clienteForm = document.getElementById('cliente-form');

clienteForm.addEventListener('submit', (e) => {

    // RECUPERA O ID DO cliente
    let id = parseInt($('#edit-cli-id').text());    

    // RECUPERA OS DADOS DO cliente
    const cliente = JSON.stringify({
        id: document.getElementById('cliente-id').value,
        prioridade: document.getElementById('cliente-prioridade').value,
        nome: document.getElementById('cliente-nome').value,
        end: document.getElementById('cliente-end').value,
        ctt: document.getElementById('cliente-ctt').value
    })

    if (id >= 0) {
        fetch(`${URL}/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: cliente
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
            body: cliente
        })
        .then(res => res.json())
        .then(() => location.reload());  
    }      
})
//=================================================================================================
