// Capturar evento submit

const form = document.querySelector('#form');


form.addEventListener('submit', function (e){
    
    //Previne submit automatico
    e.preventDefault();

    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura');

    //Transforma valores em Numbers
    let pesoInt = Number(peso.value);
    let alturaInt = Number(altura.value);

    let imc = calculaImc(alturaInt, pesoInt);
    let nivel = nivelImc(imc);

    let msg = `seu IMC é ${imc} e seu nivel de IMC é ${nivel}`;  

    //Condicional de erro em peso/altura
    if(!pesoInt || pesoInt > 595 || pesoInt < 0){
        msg = "Peso invalido"
    }
    if(!alturaInt || alturaInt > 2.7 || alturaInt < 0){
        msg = "Altura Inválida"
    }  
    
    //Chamada da função de resultado
    setResultado(msg);
});


//Função para calculo do nível IMC
const nivelImc = (imc) => {


    //Array com os niveis de IMC
    let nivelArray = ['Magro','Normal','Sobrepeso','Obesidade I','Obesidade 2','Obesidade grave','Altura ou peso inválidos'];


    if(imc <= 0){return nivelArray[6]}
    if(imc < 18.5){return nivelArray[0]}
    if(imc >= 18.5 && imc <= 24.9){return nivelArray[1]}
    if(imc >= 25 && imc <= 29.9){return nivelArray[2]}
    if(imc >= 30 && imc <= 34.9){return nivelArray[3]}
    if(imc >= 35 && imc <= 39.9){return nivelArray[4]}
    if(imc >= 40){return nivelArray[5]}
    

};

//Função para alteração da página com o resultado
const setResultado = (msg) => {

    //Seleciona resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    //Cria paragrafo e adiciona mensagem (resultado)
    const p = document.createElement('p');
    p.innerHTML = msg;
    resultado.appendChild(p);

};


//Função de calculo IMC (peso/altura*altura)
const calculaImc = (altura,peso) => {

   let resultado = (peso/(altura**2))
    return resultado.toFixed(2);
};

