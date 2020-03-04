$(document).ready(function () {

    console.log("ready");

    $('.j_number').click(function () { 
        $('.tela2').val($('.tela2').val() + (this).value);
    });

    $('.j_clear').click(function () {
        $('.j_tela').val('');
    });
})