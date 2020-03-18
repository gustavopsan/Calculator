$(document).ready(function () {

    let Verifier = 0;
    let dotVerifier = false;
    let num1, num2, result = 0;
    var history = $('#tela1');
    var visor = $('#tela2');
    var operator = $('#op');

    console.log("ready");

    $('.j_number').click(function () { 
        if (visor.val() == '0') {
            visor.val('');
            visor.val(visor.val() + (this).value);
        } else {
            visor.val(visor.val() + (this).value);
        }
        
    });

    $('#j_dot').click(function () {
        switch (dotVerifier) {
            case false:
                dotVerifier = true;
                visor.val(visor.val() + (this).value);
                break;
            case true:
                break
            default:
                break;
        }
    })

    $('#j_del').click(function () {
        if (visor.val() == '0' ) {
        } else {
            visor.val(visor.val().replace(/.$/, ''));
            if (visor.val() == ''){
                visor.val('0');
            }
        }
    })

    $('#j_clear').click(function () {
        history.val('');
        visor.css("left", 40);
        visor.val('0');
        operator.text('');
        num1 = 0;
        num2 = 0;
        result = 0;
        dotVerifier = false;
    });

    $('#j_sum').click(function () {
        visor.css("left", 0); //movendo o visor inferior para coincidir com a existência/não-existência do operador na tela
        Verifier = 1;
        dotVerifier = false;
        num1 = visor.val();
        operator.text('+');
        visor.val('');
    })

    $('#j_sub').click(function () {

        if (visor.val() == '0') {
            visor.val('-');
        } else if (visor.val() == '') {
            visor.val('-');
        } else {
            visor.css("left", 0);
            Verifier = 2;
            dotVerifier = false;
            num1 = visor.val();
            operator.text('-');
            visor.val(''); 
        }
         
    })

    $('#j_prod').click(function () {
        visor.css("left", 0);
        Verifier = 3;
        dotVerifier = false;
        num1 = visor.val();
        operator.text('×');
        visor.val('');
    })

    $('#j_div').click(function () {
        visor.css("left", 0);
        Verifier = 4;
        dotVerifier = false;
        num1 = visor.val();
        operator.text('÷');
        visor.val('');
    })

    $('#j_equal').click( function () {
        
        //colocando uma 'automação' na posição do visor inferior para coincidir com a existência/não-existência do operador na tela
        visor.css("left", 40);
        switch (Verifier) {
            case 1:
                num2 = visor.val();
                result = parseFloat(num1) + parseFloat(num2);

                //Tratando o histórico com uma estrutura condicional
                
                if (history.val() == '') {
                    history.val(num1 + '+' + num2);
                } else {
                    history.val(history.val() + '+' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));
                break;
        
            case 2:
                num2 = visor.val();
                result = parseFloat(num1) - parseFloat(num2);
                if (history.val() == '') {
                    history.val(num1 + '-' + num2);
                } else {
                    history.val(history.val() + '-' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));;
                break;
            case 3:
                num2 = visor.val();
                result = parseFloat(num1) * parseFloat(num2);
                if (history.val() == '') {
                    history.val(num1 + '×' + num2);
                } else {
                    history.val(history.val() + '×' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));
                break;
            case 4:
                num2 = visor.val();
                result = parseFloat(num1) / parseFloat(num2);
                if (history.val() == '') {
                    history.val(num1 + '÷' + num2);
                } else {
                    history.val(history.val() + '÷' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));
                break;
        }

        operator.text('');
        num1 = 0;
        num2 = 0;
        result = 0;
        Verifier = 0;
        console.log(num1, num2, result, Verifier);

        if (visor.val().indexOf('.')>=0) {
            dotVerifier = true;
        }
        
    })
})
