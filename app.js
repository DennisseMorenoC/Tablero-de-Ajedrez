let size = parseInt(prompt("Ingrese tamaño cuadrícula"));
let result = "";

for (let f = 1; f <= size; f++){
    for(let c = 1; c <= size; c++){
        if((c + f) % 2 === 0){
            result += " ";
        }else{
            result += "#";
        }
    }
    result += "\n";
}
console.log(result);