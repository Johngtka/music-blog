//skrypt przyklejania paska menu do góry strony
$(document).ready(function () {
    var NavY = $('.nav').offset().top;

    var stickyNav = function () {
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});
//Przewinięcie w nadany adres na jednej stronie
jQuery(function ($) {
    $.scrollTo(0);
    $('.link').click(function () { $.scrollTo($('#gora'), 1000); });
}
);
//przekierowywanie użytkownika po kliknięciu na nadany adres
jQuery(function ($) {
    $.scrollTo(0);
    $("#link1").click(function () {
        $.scrollTo($("#kontakty"), 500);
    });
    $("#link2").click(function () {
        $.scrollTo($("#kontakty1"), 500);
    });
    $("#link3").click(function () {
        $.scrollTo($("#kontakty2"), 500);
    });
});
jQuery(function ($) {
    $.scrollTo(0);
    $("#1").click(function () {
        $.scrollTo($("#art1"), 500);
    });
    $("#2").click(function () {
        $.scrollTo($("#art2"), 500);
    });
    $("#3").click(function () {
        $.scrollTo($("#art3"), 500);
    });
    $("#4").click(function () {
        $.scrollTo($("#art4"), 500);
    });
    $("#5").click(function () {
        $.scrollTo($("#art5"), 500);
    });
    $("#6").click(function () {
        $.scrollTo($("#art6"), 500);
    });
});
