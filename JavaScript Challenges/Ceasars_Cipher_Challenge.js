function rot13(string) {
      
    
  return (
      // divide String em array p/ cada letra         
      string
      .split("")
      // Mapeia cada letra na array
      .map.call(string, function(letra) {

      // Converte a letra em ASCII
      let x = letra.charCodeAt(0);
      // Checa se a letra esta entre A e Z (sendo 65 = A e Z = 90)
      if (x < 65 || x > 90) {
        // Volta sem modificar nada (pois não é letra do alfabeto)
        return String.fromCharCode(x); 
        }


        //N = ASCII 78, Se a letra é menor do que 78, avança 13 casas
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Se for maior, volta 13 casas
        return String.fromCharCode(x - 13);
      })
      // Transforma em String novamente
      .join("")
  ); 
}