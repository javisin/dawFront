$(document).ready(loadPage());

function loadPage() {
    if (localStorage.getItem("login")) {
        getUserInfo();
    } else {
        window.location.href = "index.html"
    }
}

function getUserInfo() {
    $.ajax({
        url: url + "/api/v1/users/" + localStorage.id,
        type: "GET",
        success: function(response){
            setUserInfo(response.data)
        },
        error: function() {
            window.location.href = "index.html";
        }
    });
}

function setUserInfo(data) {
    $('#update-name').val(data.attributes["name"]);
    $('#update-surname').val(data.attributes["surname"]);
    $('#update-email').val(data.attributes["email"]);
    $('#update-username').val(data.attributes["username"]);
    $('#update-password').val(data.attributes["password"]);
    $('#update-phone').val(data.attributes["phone"]);
    $('#update-country').val(data.attributes["country"]);
    $('#update-postalcode').val(data.attributes["postalcode"]);
}

$('#updateForm').submit( e =>  {
    e.preventDefault();
    let check = true;
    var eregex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let email = $('#update-email');
    let password = $('#update-passwd');
    let name = $('#update-name');
    let surname = $('#update-surname');
    let username = $('#update-username');
    let postalcode = $('#update-postalcode');
    let country = $('#update-country');
    let phone = $('#update-phone');
    
    if (email.val().length == 0 || !eregex.test(email.val())){
        $('#emailFail').show();
        check = false;
    }
    if(password.val().length < 5) check = false;
    
    if(check){
        $.ajax({
            url: url +"/api/v1/users/" + localStorage.id,
            type: "POST",
            data: {
                email: email.val(),
                password: password.val(),
                name: name.val(),
                surname: surname.val(),
                username: username.val(),
                postalcode: postalcode.val(),
                country: country.val(),
                phone: phone.val()
            },
            success: function(){
                location.reload();
            },
            error: function() {
                $('#updateMessage' ).empty();
                $('#updateMessage').append('<p class="w-100 p-2 bg-danger text-center">Usuario no actualizado.</p>')
            }
        });
    }else{
        alert("No se pudo enviar el formulario, compruebe que rellena los campos correctamente");
    }
})