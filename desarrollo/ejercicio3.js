let celsius = 15

function convertirCelsiusAFahrenheit (celsius){
    let resultado = (celsius * 9/5) + 32
    return resultado
}

let resultado = convertirCelsiusAFahrenheit(celsius);
console.log(resultado);