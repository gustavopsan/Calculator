$(document).ready(function () {

    let Verifier = 0;
    let num1, num2, result = 0;
    var history = $('#tela1');
    var visor = $('#tela2');

    console.log("ready");

    $('.j_number').click(function () { 
        visor.val(visor.val() + (this).value);
    });

    $('#j_clear').click(function () {
        history.val('');
        visor.val('');
        num1 = 0;
        num2 = 0;
        result = 0;
    });

    $('#j_sum').click(function () {

        Verifier = 1;
        num1 = visor.val();
        history.val(num1 + '+');
        visor.val('');
    })

    $('#j_sub').click(function () {
        if ($('#tela2').val() == '') {
            $('#tela2').val('-');
        } else {
            Verifier = 2;
            num1 = visor.val();
            history.val(num1 + '-');
            visor.val(''); 
        }
         
    })

    $('#j_prod').click(function () {

        Verifier = 3;
        num1 = visor.val();
        history.val(num1 + '×');
        visor.val('');
    })

    $('#j_div').click(function () {

        Verifier = 4;
        num1 = visor.val();
        history.val(num1 + '÷');
        visor.val('');
    })

    $('#j_equal').click( function () {

        switch (Verifier) {
            case 1:
                console.log('sum = true');
                num2 = visor.val();
                result = parseFloat(num1) + parseFloat(num2);
                history.val(num1 + '+' + num2);
                visor.val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
        
            case 2:
                console.log('subtract = true');
                num2 = visor.val();
                result = num1 - num2;
                history.val(num1 + '-' + num2);
                visor.val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
            case 3:
                console.log('multiplication = true')
                num2 = visor.val();
                result = parseFloat(num1) * parseFloat(num2);
                history.val(num1 + '×' + num2);
                visor.val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
            case 4:
                console.log('division = true')
                num2 = visor.val();
                result = parseFloat(num1) / parseFloat(num2);
                history.val(num1 + '÷' + num2);
                visor.val(parseFloat(result.toFixed(2)));
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
        }
        
    })
})
