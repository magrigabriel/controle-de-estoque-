var form = document.getElementById("myForm"),
    imgInput = document.getElementById("imgInput"),
    searchInput = document.getElementById("searchInput"),
    editProductForm = document.getElementById("editProductForm"),
    editImgInput = document.getElementById("editImgInput"),
    editIndex = -1;

var employeetp1 = [];
var employeetp2 = [];
var employeetp3 = [];
var employeetp4 = [];
var employeetp5 = [];
var employeetp6 = [];
var employeetp7 = [];
var img = [];
var id = 0;

window.onload = function () {
    var storedUserProfile = localStorage.getItem("userProfile");
    if (storedUserProfile) {
        var userProfile = JSON.parse(storedUserProfile);
        employeetp1 = userProfile.tp1 || [];
        employeetp2 = userProfile.tp2 || [];
        employeetp3 = userProfile.tp3 || [];
        employeetp4 = userProfile.tp4 || [];
        employeetp5 = userProfile.tp5 || [];
        employeetp6 = userProfile.tp6 || [];
        employeetp7 = userProfile.tp7 || [];
        img = userProfile.img || [];
    }

    showInfo();
}

function compressImage(base64Str, maxWidth = 400, maxHeight = 300) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = base64Str;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxWidth) {
                    height = Math.round((height *= maxWidth / width));
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = Math.round((width *= maxHeight / height));
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', 0.7));  // compress to JPEG with 70% quality
        };
    });
}

async function handleImageInput(file, callback) {
    if (file.size > 1024 * 1024) {  // 1MB
        alert("Imagem muito grande. Por favor, selecione uma imagem menor que 1MB.");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (e) {
        const compressedImage = await compressImage(e.target.result);
        callback(compressedImage);
    };
    reader.readAsDataURL(file);
}

// Event listener to handle image input for the main form
imgInput.addEventListener("change", function() {
    if (imgInput.files.length > 0) {
        handleImageInput(imgInput.files[0], function (imgSrc) {
            document.querySelector('.img').src = imgSrc;
        });
    }
});

// Event listener to handle image input for the edit form
editImgInput.addEventListener("change", function() {
    if (editImgInput.files.length > 0) {
        handleImageInput(editImgInput.files[0], function (imgSrc) {
            document.querySelector('.editImg').src = imgSrc;
        });
    }
});


form.addEventListener("submit", function (event) {
    event.preventDefault();

    var tp1 = document.getElementById("tp1").value,
        tp2 = document.getElementById("tp2").value,
        tp3 = document.getElementById("tp3").value,
        tp4 = document.getElementById("tp4").value,
        tp5 = document.getElementById("tp5").value,
        tp6 = document.getElementById("tp6").value,
        tp7 = document.getElementById("tp7").value;

    if (imgInput.files.length > 0) {
        handleImageInput(imgInput.files[0], function (imgSrc) {
            addData(tp1, tp2, tp3, tp4, tp5, tp6, tp7, imgSrc);
            var addFormModal = bootstrap.Modal.getInstance(document.getElementById("addForm"));
            addFormModal.hide();
        });
    } else {
        var imgSrc = "../assets/img/logo.png Icon.webp";  // Caminho da imagem padrão
        addData(tp1, tp2, tp3, tp4, tp5, tp6, tp7, imgSrc);
        var addFormModal = bootstrap.Modal.getInstance(document.getElementById("addForm"));
        addFormModal.hide();
    }
});

editProductForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var tp1 = document.getElementById("editTp1").value,
        tp2 = document.getElementById("editTp2").value,
        tp3 = document.getElementById("editTp3").value,
        tp4 = document.getElementById("editTp4").value,
        tp5 = document.getElementById("editTp5").value,
        tp6 = document.getElementById("editTp6").value,
        tp7 = document.getElementById("editTp7").value;

    if (editImgInput.files.length > 0) {
        handleImageInput(editImgInput.files[0], function (imgSrc) {
            saveEditData(tp1, tp2, tp3, tp4, tp5, tp6, tp7, imgSrc);
            var editFormModal = bootstrap.Modal.getInstance(document.getElementById("editForm"));
            editFormModal.hide();
        });
    } else {
        var imgSrc = img[editIndex];  // Manter a imagem atual se nenhuma nova imagem for selecionada
        saveEditData(tp1, tp2, tp3, tp4, tp5, tp6, tp7, imgSrc);
        var editFormModal = bootstrap.Modal.getInstance(document.getElementById("editForm"));
        editFormModal.hide();
    }
});

function addData(tp1, tp2, tp3, tp4, tp5, tp6, tp7, imgSrc) {
    employeetp1.push(tp1);
    employeetp2.push(tp2);
    employeetp3.push(tp3);
    employeetp4.push(tp4);
    employeetp5.push(tp5);
    employeetp6.push(tp6);
    employeetp7.push(tp7);
    img.push(imgSrc);

    saveUserProfile();
    showInfo();
}

function saveEditData(tp1, tp2, tp3, tp4, tp5, tp6, tp7, imgSrc) {
    employeetp1[editIndex] = tp1;
    employeetp2[editIndex] = tp2;
    employeetp3[editIndex] = tp3;
    employeetp4[editIndex] = tp4;
    employeetp5[editIndex] = tp5;
    employeetp6[editIndex] = tp6;
    employeetp7[editIndex] = tp7;
    img[editIndex] = imgSrc;

    saveUserProfile();
    showInfo();
}

function saveUserProfile() {
    var userProfile = {
        tp1: employeetp1,
        tp2: employeetp2,
        tp3: employeetp3,
        tp4: employeetp4,
        tp5: employeetp5,
        tp6: employeetp6,
        tp7: employeetp7,
        img: img
    };

    localStorage.setItem("userProfile", JSON.stringify(userProfile));
}

function showInfo() {
    var data = document.getElementById("data");
    data.innerHTML = "";

    for (var i = 0; i < employeetp1.length; i++) {
        var row = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${img[i]}" alt="Product Image" width="50" height="50"></td>
                    <td>${employeetp1[i]}</td>
                    <td>${employeetp2[i]}</td>
                    <td>${employeetp3[i]}</td>
                    <td>${employeetp4[i]}</td>
                    <td>${employeetp5[i]}</td>
                    <td>${employeetp6[i]}</td>
                    <td>${employeetp7[i]}</td>
                    <td>
                        <button class="btn btn-success" onclick="readData(${i})" data-bs-toggle="modal"><i class="bi bi-eye"></i></button>
                        <button class="btn btn-primary" onclick="editData(${i})" data-bs-toggle="modal"><i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-danger" onclick="deleteData(${i})"><i class="bi bi-trash"></i></button>
                    </td>
                   </tr>`;
        data.innerHTML += row;
    }
}

function editData(index) {
    editIndex = index;

    document.getElementById("editTp1").value = employeetp1[index];
    document.getElementById("editTp2").value = employeetp2[index];
    document.getElementById("editTp3").value = employeetp3[index];
    document.getElementById("editTp4").value = employeetp4[index];
    document.getElementById("editTp5").value = employeetp5[index];
    document.getElementById("editTp6").value = employeetp6[index];
    document.getElementById("editTp7").value = employeetp7[index];
    document.querySelector(".editImg").src = img[index];

    var editFormModal = new bootstrap.Modal(document.getElementById("editForm"));
    editFormModal.show();
}

function readData(index) {
    document.getElementById("th1").value = employeetp1[index];
    document.getElementById("th2").value = employeetp2[index];
    document.getElementById("th3").value = employeetp3[index];
    document.getElementById("th4").value = employeetp4[index];
    document.getElementById("th5").value = employeetp5[index];
    document.getElementById("th6").value = employeetp6[index];
    document.getElementById("th7").value = employeetp7[index];
    document.querySelector(".showImg").src = img[index];

    var readFormModal = new bootstrap.Modal(document.getElementById("readData"));
    readFormModal.show();
}

function searchData(event) {
    event.preventDefault();
    var filter = searchInput.value.toUpperCase();
    var table = document.querySelector(".table");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");
        if (td.length > 0) {
            var match = false;
            for (var j = 0; j < td.length; j++) {
                if (td[j].textContent.toUpperCase().indexOf(filter) > -1) {
                    match = true;
                    break;
                }
            }
            tr[i].style.display = match ? "" : "none";
        }
    }
}

document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var modal = bootstrap.Modal.getInstance(document.querySelector('#userForm'));
    modal.hide();
});

function deleteData(index) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
        employeetp1.splice(index, 1);
        employeetp2.splice(index, 1);
        employeetp3.splice(index, 1);
        employeetp4.splice(index, 1);
        employeetp5.splice(index, 1);
        employeetp6.splice(index, 1);
        employeetp7.splice(index, 1);
        img.splice(index, 1);

        saveUserProfile();
        showInfo();
    }
}
