$(document).ready(function () {
    const langOptions = $('.lang-option');
    const textsToChange = $('[data-section]');

    const changeLanguage = async (lang) => {
        try {
            const response = await fetch('./js/languages.json');
            const texts = await response.json();

            textsToChange.each(function () {
                const value = $(this).data('value');
                
                // if (texts[lang] && texts[lang][value]) {
                //     $(this).html(texts[lang][value]);
                // }

                // if (texts[lang] && texts[lang][value]) {
                //     const target = $(this).find('.text-content').length ? $(this).find('.text-content') : $(this);
                //     target.text(texts[lang][value]); 
                // }

                if (texts[lang] && texts[lang][value]) {
        // Si el elemento es el botón, buscamos el span con la clase text-content
        if ($(this).hasClass('btn-vermas')) {
            $(this).find('.text-content').text(texts[lang][value]);
        } else {
            $(this).text(texts[lang][value]);
        }
    }


            });

            localStorage.setItem('pref-lang', lang);
            $('html').attr('lang', lang); 
            
        } catch (error) {
            console.error("Error loading languages:", error);
        }
    };

    // Evento Click
    langOptions.on('click', function (e) {
        e.preventDefault();
        changeLanguage($(this).data('lang'));
    });

    // LÓGICA DE CARGA INICIAL
    // 1. Buscamos si ya eligió un idioma antes.
    // 2. Si no (null), usamos 'en' por defecto.
    const savedLang = localStorage.getItem('pref-lang') || 'en';

    // Solo ejecutamos el cambio si es distinto al inglés 
    // (porque el HTML ya está escrito en inglés por defecto).
    if (savedLang !== 'en') {
        changeLanguage(savedLang);
    }
});




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