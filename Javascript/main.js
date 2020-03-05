$(document).ready(function () {

    let Verifier = 0;

    let num1, num2, result = 0;

    console.log("ready");

    $('.j_number').click(function () { 
        $('.tela2').val($('.tela2').val() + (this).value);
    });

    $('.j_clear').click(function () {
        $('.tela1').val('');
        $('.tela2').val('');
        num1 = 0;
        num2 = 0;
        result = 0;
    });


    $('.j_sum').click(function () {

        Verifier = 1;
        num1 = $('.tela2').val();
        $('.tela1').val('+' + num1);
        $('.tela2').val('');
    })

    $('.j_sub').click(function () {

        Verifier = 2;
        num1 = $('.tela2').val();
        $('.tela1').val('-' + num1);
        $('.tela2').val('');
    })

    $('.j_prod').click(function () {

        Verifier = 3;
        num1 = $('.tela2').val();
        $('.tela1').val('×' + num1);
        $('.tela2').val('');
    })

    $('.j_div').click(function () {

        Verifier = 4;
        num1 = $('.tela2').val();
        $('.tela1').val('÷' + num1);
        $('.tela2').val('');
    })

    $('.equal').click( function () {

        switch (Verifier) {
            case 1:
                console.log('sum = true');
                num2 = $('.tela2').val();
                result = parseInt(num1) + parseInt(num2);
                $('.tela1').val(num1 + '+' + num2);
                $('.tela2').val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
        
            case 2:
                console.log('subtract = true');
                num2 = $('.tela2').val();
                result = num1 - num2;
                $('.tela1').val(num1 + '-' + num2);
                $('.tela2').val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
            case 3:
                console.log('multiplication = true')
                num2 = $('.tela2').val();
                result = parseInt(num1) * parseInt(num2);
                $('.tela1').val(num2 + '×' + num1);
                $('.tela2').val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
            case 4:
                console.log('division = true')
                num2 = $('.tela2').val();
                result = parseInt(num1) / parseInt(num2);
                $('.tela1').val(num2 + '÷' + num1);
                $('.tela2').val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
        }
        
    })
})
