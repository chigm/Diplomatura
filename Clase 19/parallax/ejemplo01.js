//https://developer.mozilla.org/en-US/docs/Web/CSS/background
//https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
//https://jquery.com/
//https://developers.google.com/speed/libraries?hl=es-419

//https://cdnjs.com/ FUENTE DE TODAS LAS LIBRERIAS 

$(document).ready(function () {
    $window = $(window);
    $('#intro').height($window.height());
    $window.scroll(function () {
        $('div.background').each(function (index, item) {
            const $scroll = $(item);
            const yPos = -($window.scrollTop() / $scroll.data('speed'));
            const coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });
});

// $(document) > $() el modo que tiene jquery de llamar a los elementos
// $('#intro') > llama al id
// $('div.background') > llama a lso elementos con la clase background
// each > recorrer
