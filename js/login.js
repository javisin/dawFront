$('#loginForm').submit( e =>  {

    e.preventDefault();

    let email = $('#login-email');
    let password = $('#login-password');
    let check = true;

    if(check){
        $.ajax({
            url: url + "/api/v1/login",
            type: "POST",
            data: {
                email: email.val(),
                password: password.val()
            },
            success: function(response){

                addToStorage(response.data);
                alert("Bienvenido " + response.data["username"]);
                location.reload();
            },
            error: function(xhr) {
                $('#loginMessage' ).empty();
                $('#loginMessage').append('<p class="w-100 p-2 bg-danger text-center">Usario no creado.</p>')
            }
        });
    }
})

$('#signUpForm').submit( e =>  {
    e.preventDefault();
    let email = $('#signUp-email');
    let password = $('#signUp-passwd');
    let name = $('#signUp-name');
    let surname = $('#signUp-surname');
    let username = $('#signUp-username');
    let check = true;
    if(check){
        $.ajax({
            url: url +"/api/v1/users",
            type: "POST",
            data: {
                email: email.val(),
                password: password.val(),
                name: name.val(),
                surname: surname.val(),
                username: username.val()
            },
            success: function(response){

                addToStorage(response.data);
                location.reload();
            },
            error: function(xhr) {
                $( '#signUpMessage' ).empty();
                $('#signUpMessage').append('<p class="w-100 p-2 bg-danger text-center">Uusario no creado.</p>')
            }
        });
    }
})

$('#logout').click(function() {
    deleteFromStorage();
    localStorage.clear();
    location.reload();
})

function addToStorage(data) {
    localStorage.setItem("login", true);
    localStorage.setItem("id", data["id"]);
    localStorage.setItem("email", data["email"]);
    localStorage.setItem("password", data["password"]);
    localStorage.setItem("name", data["name"]);
    localStorage.setItem("surname", data["surname"]);
    localStorage.setItem("username", data["username"]);
    localStorage.setItem("postalcode", data["postalcode"]);
    localStorage.setItem("country", data["country"]);
    localStorage.setItem("phone", data["phone"]);
}

function deleteFromStorage() {
    localStorage.removeItem("login");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("username");
    localStorage.removeItem("postalcode");
    localStorage.removeItem("country");
    localStorage.removeItem("phone");
}