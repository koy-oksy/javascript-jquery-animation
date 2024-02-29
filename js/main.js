

jQuery(document).ready(function ($) {

  $("#animated-link").click(function (e) {
    console.log('clicked at link');
        e.preventDefault(); // Зупиняємо перехід за замовчуванням
        $(this).switchClass( "", "ml-10", 1000, "easeInOutQuad", function() {
            // Після анімації, переходимо на нову сторінку
             window.location.href = $(this).attr('href');
        });
    });
   $("#animated-icon").click(function () {
        console.log('clicked at icon');
        $(this).animate({
            marginLeft: '-=100px' // Зміщення іконки вліво на 100px
        }, 1000); // тривалість анімації - 1 секунда
    });

});