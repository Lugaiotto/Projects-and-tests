var convertToRoman = function(num) {
  
  //Definição de numeros decimais para romanos inverso por conta do 
  //loop
  let decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let numRomano = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I" ];
  
  //String do resultado
  var romanizado = "";
  
  //Enquanto o numero for menor que o numero da var "decimal" é
  //adicionado o valor do numRomano e removido o valor total
  //do numero "num" até ser zerado


  for (let index = 0; index < decimal.length; index++) {
    while (decimal[index] <= num) {
      romanizado += numRomano[index];
      num -= decimal[index];
    }
  }

  return romanizado;
};