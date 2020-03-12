$(document).ready(function () {

    let Verifier = 0;
    let num1, num2, result = 0;
    var history = $('#tela1');
    var visor = $('#tela2');
    var operator = $('#op');

    console.log("ready");

    $('.j_number').click(function () { 
        visor.val(visor.val() + (this).value);
    });

    $('#j_clear').click(function () {
        history.val('');
        visor.val('');
        operator.text('');
        num1 = 0;
        num2 = 0;
        result = 0;
    });

    $('#j_sum').click(function () {
        visor.css("left", 0); //movendo o visor inferior para coincidir com a existência/não-existência do operador na tela
        Verifier = 1;
        num1 = visor.val();
        operator.text('+');
        visor.val('');
    })

    $('#j_sub').click(function () {

        if (visor.val() == '') {
            visor.val('-');
        } else {
            visor.css("left", 0);
            Verifier = 2;
            num1 = visor.val();
            operator.text('-');
            visor.val(''); 
        }
         
    })

    $('#j_prod').click(function () {
        visor.css("left", 0);
        Verifier = 3;
        num1 = visor.val();
        operator.text('×');
        visor.val('');
    })

    $('#j_div').click(function () {
        visor.css("left", 0);
        Verifier = 4;
        num1 = visor.val();
        operator.text('÷');
        visor.val('');
    })

    $('#j_equal').click( function () {
        
        //colocando uma 'automação' na posição do visor inferior para coincidir com a existência/não-existência do operador na tela
        visor.css("left", 40);
        switch (Verifier) {
            case 1:
                console.log('sum = true');
                num2 = visor.val();
                result = parseFloat(num1) + parseFloat(num2);

                //Tratando o histórico com uma estrutura condicional
                
                if (history.val() == '') {
                    history.val(num1 + '+' + num2);
                } else {
                    history.val(history.val() + '+' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));
                operator.text('');
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
        
            case 2:
                console.log('subtract = true');
                num2 = visor.val();
                result = num1 - num2;
                if (history.val() == '') {
                    history.val(num1 + '-' + num2);
                } else {
                    history.val(history.val() + '-' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));
                operator.text('');
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
            case 3:
                console.log('multiplication = true')
                num2 = visor.val();
                result = parseFloat(num1) * parseFloat(num2);
                if (history.val() == '') {
                    history.val(num1 + '×' + num2);
                } else {
                    history.val(history.val() + '×' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));
                operator.text('');
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
            case 4:
                console.log('division = true')
                num2 = visor.val();
                result = parseFloat(num1) / parseFloat(num2);
                if (history.val() == '') {
                    history.val(num1 + '÷' + num2);
                } else {
                    history.val(history.val() + '÷' + num2);
                }
                visor.val(parseFloat(result.toFixed(2)));
                operator.text('');
                num1 = 0;
                num2 = 0;
                result = 0;
                Verifier = 0;
                break;
        }
        
    })
})
