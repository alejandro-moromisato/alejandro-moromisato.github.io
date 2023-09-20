

$("#btnInicio").click(function(){
    $("html,body").animate({scrollTop:$("#Inicio").offset().top},1000);
});

$("#btnAcerca").click(function(){
    $("html,body").animate({scrollTop:$("#Acerca").offset().top},1000);
});

$("#btnPortafolio").click(function(){
    $("html,body").animate({scrollTop:$("#Portafolio").offset().top},1000);
});

$("#btnContacto").click(function(){
    $("html,body").animate({scrollTop:$("#Contacto").offset().top},1000);
});

$("#btnAcerca2").click(function(){
    $("html,body").animate({scrollTop:$("#Acerca").offset().top},500);
});



$("#idLeerMas").click(function(event) {
    event.preventDefault(); // Evita que el enlace redireccione
    $("#idtexto-oculto").removeClass("contenido-oculto");   
    $("#idtexto-oculto").addClass("inline-p"); 
    $("#idLeerMas").removeClass("inline-p");
    $("#idLeerMas").addClass("contenido-oculto");
  });