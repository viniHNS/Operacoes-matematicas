function Soma(){

    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;

    let text;
    let soma;

    if (isNaN(x)||isNaN(y)||x === ''||y === ''){
        text = "Valor Invalido";
        document.getElementById("certoSoma").innerHTML = text;


    } else {
        soma = parseInt(x) + parseInt(y);
        document.getElementById("certoSoma").innerHTML = soma;
    }
}

function Subtracao(){

    let x = document.getElementById("num3").value;
    let y = document.getElementById("num4").value;
    let text;
    let soma;

    if (isNaN(x)||isNaN(y)||x === ''||y === ''){
        text = "Valor Invalido";
        document.getElementById("certoSub").innerHTML = text;
    } else {
        soma = parseInt(x) - parseInt(y);
        document.getElementById("certoSub").innerHTML = soma;

    }
}

function Multiplicacao(){

    let x = document.getElementById("num5").value;
    let y = document.getElementById("num6").value;
    let text;
    let soma;

    if (isNaN(x)||isNaN(y)||x === ''||y === ''){
        text = "Valor Invalido";
        document.getElementById("certoMult").innerHTML = text;
    } else {
        soma = parseInt(x) * parseInt(y);
        document.getElementById("certoMult").innerHTML = soma;

    }  
}




