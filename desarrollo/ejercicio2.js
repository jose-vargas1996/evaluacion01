notaDeExamen = parseInt(prompt('ingrese nota del examen'))

if (notaDeExamen >=11 && notaDeExamen <=20) {
    alert('el estudiante aprobó');
}else if(notaDeExamen <11 && notaDeExamen >0) {
    alert('el estudiante reprobó')
    } else{
        alert('Nota invalida')
    } 
