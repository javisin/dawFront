const url = "http://localhost:3000";

$(document).ready(loadPage());

function loadPage() {
  if (typeof(Storage) !== "undefined") {
    head();
    navbar(localStorage.login != undefined);
    footer();
  } else {
    alert("Su navegador no soporta el almacenamiento de cookies, cambie de navegador para poder hacer un uso correcto de la página");
  }
}

function head() {
  $('#head-page').append('\
  <!DOCTYPE html>\
  <html lang="es">\
    <head>\
    <meta charset="utf-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\
    <meta name="description" content="">\
    <meta name="author" content="">\
    <title>CanaryShop</title>\
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">\
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\
    <link href="css/shop-homepage.css" rel="stylesheet">\
  </head>')
}
function navbar(isLogged) {
    let loginForm = '';
    let nav = '<nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">\
    <a class="navbar-brand" href="index.html">\
      <img src="img/logo copia.png" alt="Logo" width="150px">\
    </a>\
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\
      <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="collapsibleNavbar">\
      <ul class="navbar-nav">\
        <li class="nav-item dropdown">\
          <a class="nav-link" href="genericoMujer.html"\
            aria-haspopup="true" aria-expanded="false">Mujer </a>\
        </li>\
        <li class="nav-item dropdown">\
          <a class="nav-link" href="genericoHombre.html" r\
            aria-haspopup="true" aria-expanded="false">Hombre </a>\
        </li>\
        <li class="nav-item">\
          <a class="nav-link" href="contacto.html">Contacto</a>\
        </li>\
        <li class="nav-item ">\
          <a class="nav-link" href="about.html">Sobre nosotros</a>\
        </li>\
      <ul class="navbar-nav navbar-custom">\
        <li class="nav-item">\
          <a class="nav-link material-icons" href="mycart.html">shopping_cart</a>\
        </li>';

    if (isLogged) {
      nav += '<li class="nav-item dropdown">\
                <a class="nav-link dropdown-toggle material-icons mr-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"\
                  aria-haspopup="true" aria-expanded="false">account_circle</a>\
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                  <a class="dropdown-item" href="myprofile.html">Mi cuenta</a>\
                <div class="dropdown-divider"></div>\
                  <a class="dropdown-item" href="" id="logout">Cerrar sesión</a>\
                </div>\
              </li>';
    } else {
      nav += '<li class="nav-item">\
          <a class="nav-link material-icons mr-2" data-toggle="modal" data-target="#modalLoginForm"\
            href="">account_circle</a>\
        </li>';
      loginForm += '\
        <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
        <div class="modal-dialog" role="document">\
          <div class="modal-content">\
            <div class="modal-header text-center">\
              <h1 class="modal-title w-100 font-weight-bold">Iniciar Sesión</h1>\
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                <span aria-hidden="true">&times;</span>\
              </button>\
            </div>\
            <form action="#" method="post" id="loginForm">\
              <div class="modal-body mx-3">\
                <div class="md-form mb-2">\
                  <i class="material-icons text-danger">email</i>\
                  <input type="text" id="login-email" class="form-control validate"\
                    placeholder="Introduce tu email" required>\
                </div>\
                <div class="md-form mb-2">\
                  <i class="material-icons text-danger">lock</i>\
                  <input type="password" id="login-password" maxlength="12"\
                    class="form-control validate" placeholder="Introduce tu contraseña" required>\
                </div>\
                <div>\
                  <a href="signUp.html">¿Nuevo usuario? Regístrate aquí</a>\
                </div>\
                <div id="loginMessage">\
                </div>\
              </div>\
              <div class="modal-footer d-flex justify-content-center">\
                <button type="submit" class="btn btn-danger">Entrar</button>\
              </div>\
            </form>\
          </div>\
        </div>\
      </div>';
    }

    nav += '<form class="form-inline" id="search-form" action="index.html" method="GET">\
              <input class="form-control mr-sm-2" name="search" id="searcher" type="text" placeholder="Buscar">\
              <button class="btn btn-success" type="submit">Buscar</button>\
            </form>\
          </ul>\
        </ul>\
      </div>\
    </nav>';

  $('#navbar').append(nav);
  $('#navbar').append(loginForm);
}

function footer() {
    $('#footer').append('\
    <footer class="py-5 bg-dark">\
    <div class="row m-0 justify-content-end align-items-center">\
      <div class="col-6 col-md-8">\
        <p class="m-0 text-center text-white">Copyright &copy; CanaryShop 2019</p>\
      </div>\
      <div class="col-5 col-md-2">\
        <a href="https://www.twitter.com" target="_blank"\
          class="a-no-style fa fa-twitter color-twitter size-custom mr-2 pr-1"></a>\
        <a href="https://www.instagram.com" target="_blank"\
          class="a-no-style fa fa-instagram color-instagram size-custom mr-2 pr-1"></a>\
        <a href="https://www.facebook.com" target="_blank"\
          class="a-no-style fa fa-facebook color-facebook size-custom mr-2 pr-1"></a>\
      </div>\
    </div>\
  </footer>')
}