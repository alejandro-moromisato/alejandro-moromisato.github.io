$(document).ready(function(){
    var myCarousel = document.querySelector('#carouselExampleDark')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      wrap: false
    })  
  });


  $("#btnEnviar").click(function(){

    var _nombre = $("#nombre").val(),
        _apellido = $("#nombre").val(),
        _email = $("#email").val(),
        _mensaje = $("#mensaje").val();


        if(_nombre.trim == "" | _apellido.trim == "" | _email.trim == "" | _mensaje == "")
        {
            alert("Debe completar todos los campos correctamente");
            return false;
        }
        else
        {
            alert("Datos enviados correctamente");
        }


  });