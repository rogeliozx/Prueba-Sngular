const checkArray = (arrayNumbers) => {
//creo un hashtable
    const hash = {};
//utilizo un forEach que es O(N)    
  arrayNumbers.forEach((number) => {
      //verifico si el objecto tiene esa propiedad numero
    if (typeof hash[number] === "undefined") {
        //si no existe se agrega con un valor default a 1
      hash[number] = 1;
    } else {
        //si existe se suma mas uno a su valor
      hash[number]++;
    }
  });
  console.log(hash);
  let repeatedNumber = 0;
  //vefifico cuantos numeros son mayor a uno y lo agrego al acumulador
  for (let [key, value] of Object.entries(hash)) {
    if (value > 1) {
      repeatedNumber++;
    }
  }
  console.log(repeatedNumber);
  return repeatedNumber;
};

const array = [1,2,3,4,4,5,6,6,7];
checkArray(array);
