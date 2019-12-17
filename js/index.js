$(document).ready(loadJSON());

function loadJSON() {
  getCarousel();
  getSearch();
}

function getCarousel() {
  $.ajax({
    url: url + '/api/v1/carousel',
    type: 'GET',
    datatype: 'json',
    success: function (response) {
        setCarousel(response.data);
    },
    error: function (){
        alert("No se ha podido cargar el carrusel");
    }
  })
}

function setCarousel(data) {
  $('#carousel').append('\
        <div class="carousel-item active">\
          <img class="d-block img-fluid" src="' + url + data[0].attributes["get-image"] + '">\
        </div>')
  data.slice(1,3).forEach ( item => {
    $('#carousel').append('\
    <div class="carousel-item">\
      <img class="d-block img-fluid" src="' + url + item.attributes["get-image"] + '">\
    </div>')
  })
}

function getTrending() {
  $.ajax({
    url: url + '/api/v1/products',
    type: 'GET',
    datatype: 'json',
    success: function (response) {
        setTrending(response.data);
    },
    error: function (error){
        alert("No se han podido cargar las novedades");
    }
  })
}

function getSearch(){
  let urlParams = new URLSearchParams(window.location.search)
  let search = $('#searcher');
  if(urlParams.has("search")){
    $.ajax({
      url: url + '/api/v1/search/' + urlParams.get("search"),
      type: 'GET',
      datatype: 'json',
      success: function (response) {
          setTitle(1);
          setSearch(response.data);
      }
    })
  }else{
    setTitle(2);
    getTrending();
  }
}

function setTitle(type){
  let title = $('#pageTitle');
  if(type ==1){
    title.text("Búsqueda");
  }else{
    title.text("Novedades");
  }
}


function setSearch(data) {
  data.slice(0,8).forEach ( item => {
    $('#showProducts').append('\
    <div class="col-lg-3 col-md-6 mb-4">\
        <div class="card h-100">\
          <a href="product.html?id=' + item.id + '"><img class="card-img-top" src="' + url + item.attributes["get-image"] + '" alt=""></a>\
          <div class="card-body">\
            <p class="card-title"><a href="../product.html?id=' + item.id + '" class="text-secondary h5">' + item.attributes.name + '</a></p>\
            <p class="h4">' + item.attributes.price + '</p>\
          </div>\
        </div>\
      </div>\
    ')
  })
}

function setTrending(data) {
  data.filter(f => f.attributes.new == 1).slice(0,8).forEach ( item => {
    $('#showProducts').append('\
    <div class="col-lg-3 col-md-6 mb-4">\
        <div class="card h-100">\
          <a href="product.html?id=' + item.id + '"><img class="card-img-top" src="' + url + item.attributes["get-image"] + '" alt=""></a>\
          <div class="card-body">\
            <p class="card-title"><a href="../product.html?id=' + item.id + '" class="text-secondary h5">' + item.attributes.name + '</a></p>\
            <p class="h4">' + item.attributes.price + '</p>\
          </div>\
        </div>\
      </div>\
    ')
  })
}

