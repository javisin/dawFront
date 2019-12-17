$(document).ready(loadJSON());

function loadJSON() {
  getProducts();
}

function getProducts() {
  $.ajax({
    url: url + '/api/v1/products',
    type: 'GET',
    datatype: 'json',
    success: function (response) {
        setProducts(response.data);
    },
    error: function () {
        alert("No se ha podido cargar el carrusel");
    }
  })
}

function setProducts(data) {
  data.filter(f => (f.attributes.gender == "male") && (f.attributes.trending == 1)).slice(0,8).forEach ( item => {
    $('#trendProduct').append('\
          <div class="col-lg-4 col-md-6 mb-4">\
            <div class="card h-100">\
              <a href="../product.html?id=' + item.id + '"><img class="card-img-top" src="' + url + item.attributes["get-image"] + '" alt=""></a>\
              <div class="card-body">\
              <p class="card-title"><a href="../product.html?id=' + item.id + '" class="text-secondary h5">' + item.attributes.name + '</a></p>\
              <p class="h4">' + item.attributes.price + '</p>\
            </div>')
  });
}