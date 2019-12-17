const urlParams = new URLSearchParams(window.location.search);
$(document).ready(loadJSON());

function loadJSON() {
  getProduct();
}

function getProduct() {
  $.ajax({
    url: url + '/api/v1/products/' + urlParams.get('id'),
    type: 'GET',
    datatype: 'json',
    success: function (response) {
        setProduct(response.data);
    },
    error: function (){
        alert("No se ha podido cargar el carrusel");
    }
  })
}

function setProduct(data) {
  let allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  $('#productName').append('<h1 class="text-center">' + data.attributes["name"] + '</h1>')
  $('#productImg').append('<img src=' + url + data.attributes["get-image"] + ' alt="foto_producto" class="d-block mx-auto custom-photo">')
  $('#productDescrip').append('<p class="mb-5 text-justify p-2 bg-light rounded border pb-0 border-dark"">' + data.attributes["description"] + '</p>')
  $('#productCart').append('\
    <div class="d-flex justify-content-center my-3 flex-wrap">\
      <div class="col-6 my-auto">\
        <h3 class="text-secondary">Unidades:</h3>\
      </div>\
      <div class="col-6 my-auto">\
        <h3 class="text-secondary">Precio/Unidad:</h3>\
      </div>\
      <div class="col-6">\
        <input class="text-center" type="number" data-quantity-input="" value="1" min="1" max="99" aria-label="Unidades">\
      </div>\
      <div class="col-6 my-auto">\
        <h4 class="text-dark">' + data.attributes["price"] + '</h4>\
      </div>')
      for (let i = 0; i < 6; i++) {
        if (data.attributes["get-sizes"].includes(allSizes[i])) {
          $('#productSize').append('\
              <button class="boton btn col-4 col-lg-3" type="button" >' + allSizes[i] + '</button>')
        } else {
          $('#productSize').append('\
              <button class="boton-disable btn col-4 col-lg-3 noButton" type="button" disabled>' + allSizes[i] + '</button>')
        }
      }/*
      data.attributes["opinion"].forEach(item => {
        $('#productValoration').append('\
        <p class="text-justify h3">' + item.attributes["title"] + '</p>\
        <p class="text-justify">' + item.attributes["comment"] + '</p>\
        <p class="text-justify text-secondary">Escrito por: ' + item.attributes["user"] + '</p>\
        <hr>')
      })*/
}