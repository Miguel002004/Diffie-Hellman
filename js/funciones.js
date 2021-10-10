var a = 0; 
var b = 0; 
var i = 0; 
var I = 0; 
var j = 0; 
var J = 0; 
var K1 = 0; 
var K2 = 0; 

function enviarDatos() {
    let varA = parseInt(document.getElementById("variable-a").value); 
    let varB = parseInt(document.getElementById("variable-b").value); 

    if(1 < varA && varA < varB) {
        a = varA; 
        b = varB;
        obtenerI(); 
        obtenerJ(); 
        calcularK();
    } else 
    alert("Error: Respeta la regla 1<a<b"); 
}

function obtenerI(){
    i = numAleatorio();    
    I = (Math.pow(a, i)) % b; 
}

function obtenerJ(){
    j = numAleatorio();    
    J = (Math.pow(a, j)) % b; 
}

function numAleatorio(){
    return Math.floor(Math.random() * (10 - 1)) + 2;
}

function calcularK() {
    K1 = (Math.pow(J, i)) % b; 
    document.getElementById("personauno-k-uno").value = K1; 
    K2 = (Math.pow(I, j)) % b; 
    document.getElementById("personados-k-dos").value = K2; 
}

