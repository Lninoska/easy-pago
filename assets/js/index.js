$(document).ready(function() {
    $('#calcular').click(function(){
        
    let monto = $('#monto')[0].valueAsNumber;
    let cuotas = $('#cuotas')[0].valueAsNumber;
    let interes = $('#interes')[0].valueAsNumber/ 100;

    if(isNaN(monto)|| isNaN(cuotas) || isNaN(interes) || cuotas <= 0) {
        $('#resultado').html('<span style ="color: #5543ca;">Por favor, ingresa valores validos </span>')
        return;
    }
    let interestotal = monto * interes * cuotas;

    let montofinal = monto + interestotal;

    let valorcuota = montofinal/cuotas;

    let nuevovalorcuota = valorcuota.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
    let nuevomontofinal = montofinal.toLocaleString('es-CL', { style: 'currency', currency: 'CLP'});
    $('#result').html(`<p>¡No te preocupes puedes pagarlo en coutas ${cuotas} de ${nuevovalorcuota} </p>`)
    })
})






