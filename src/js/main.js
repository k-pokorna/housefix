/*
JAK VYPADAL ZÁPIS V ČISTÉM JAVASCRIPTU PRO TVORBU MODÁLNÍHO OKNA - lekce 34:
var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});
*/

// Napojení knihovy wow.js z lekce PRAXE - Napojení animací na web
new WOW().init();
// Tvorba modálního okna v jQuery - lekce 39:
$(document).ready(function(){
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });

    // Validace formulářů z https://github.com/jquery-validation/jquery-validation/releases/tag/1.19.5
    $('#brief-form').validate({
      rules: {
        username: 'required',
        email: {  // pro validaci e-mailu, ale v grafické předloze pole pro e-mail není
          required: true,
          email: true
        },
        phone: {
          required: true,
          number: true,
          rangelength: [9, 9]
        }
      },
      messages: {
        username: 'Uveďte Vaše jméno a příjmení',
        email: 'Uveďte Vaši e-mailovou adresu', // pro validaci e-mailu, ale v grafické předloze pole pro e-mail není
        phone: 'Uveďte celé Vaše telefonní číslo bez mezer a předvolby'
      }
    });


   




    // Vložení slideru z https://kenwheeler.github.io/slick/
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            /*
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            */
        ]
    });

});
