
//ya habia hecho este hace mucho tiempo
function reverseString(string) {
    //split vuelve un array conteniendo cada caracter
    //reverse invirte posiciones del array
    //join junto el array a un string
    return string.split("").reverse().join("");
}
const result= reverseString("hola");
console.log(result);
