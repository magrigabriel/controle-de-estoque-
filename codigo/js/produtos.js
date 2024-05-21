var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    usertp1 = document.getElementById("tp1"),
    tp2 = document.getElementById("tp2"),
    tp3 = document.getElementById("tp3"),
    tp4 = document.getElementById("tp4"),
    tp5 = document.getElementById("tp5"),
    tp6 = document.getElementById("tp6"),
    tp7 = document.getElementById("tp7"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Cadastrar',
    modalTitle.innerText = "Cadastrar Produto"
    isEdit = false
    imgInput.src = "./image/Profile Icon.webp"
    form.reset()
})


file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("Arquivo Muito Grande!")
    }
}


function showInfo(){
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index+1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.employeetp1}</td>
            <td>${element.employeetp2}</td>
            <td>${element.employeetp3}</td>
            <td>${element.employeetp4}</td>
            <td>${element.employeetp5}</td>
            <td>${element.employeetp6}</td>
            <td>${element.startDate}</td>


            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeetp1}', '${element.employeetp2}', '${element.employeetp3}', '${element.employeetp4}', '${element.employeetp5}', '${element.employeetp6}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeetp1}', '${element.employeetp2}', '${element.employeetp3}', '${element.employeetp4}', '${element.employeetp5}', '${element.employeetp6}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()


function readInfo(pic, tp1, tp2, tp3, tp4, tp5, tp6, tp7){
    document.querySelector('.showImg').src = pic,
    document.querySelector('#th1').value = tp1,
    document.querySelector("#th2").value = tp2,
    document.querySelector("#th3").value = tp3,
    document.querySelector("#th4").value = tp4,
    document.querySelector("#th5").value = tp5,
    document.querySelector("#th6").value = tp6,
    document.querySelector("#th7").value = tp7
}


function editInfo(index, pic, tp1, tp2, tp3, tp4, tp5, tp6, tp7){
    isEdit = true
    editId = index
    imgInput.src = pic
    usertp1.value = tp1
    tp2.value = tp2
    tp3.value = tp3
    tp4.value = tp4,
    tp5.value = tp5,
    tp6.value = tp6,
    tp7.value = tp7

    submitBtn.innerText = "Editar"
    modalTitle.innerText = "Editar Produto"
}


function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
        employeetp1: usertp1.value,
        employeetp2: tp2.value,
        employeetp3: tp3.value,
        employeetp4: tp4.value,
        employeetp5: tp5.value,
        employeetp6: tp6.value,
        startDate: tp7.value
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Cadastrar"
    modalTitle.innerHTML = "Cadastrar Produto"

    showInfo()

    form.reset()

    imgInput.src = "./image/Profile Icon.webp"  

    // modal.style.display = "none"
    // document.querySelector(".modal-backdrop").remove()
})