const numtxt = prompt('type a number: ');
const num = Number(numtxt);
let root 
let square

if(num % 2 == 0){
    document.write('O número digitado é par');
    document.write('<br>');
    root = Math.sqrt(num);
    document.write(`A raiz quadrada do número digitado é: ${root}`);
}else if(num % 2 == 1){
    document.write('O número digitado é impar');
    document.write('<br>');
    square = num*num
    document.write(`O quadrado do número digitado é: ${square}`)
}