const numAtxt = prompt('type a number: ');
const numA = Number(numAtxt);
const numBtxt = prompt('type a number: ');
const numB = Number(numBtxt);
const numCtxt = prompt('type a number: ');
const numC = Number(numCtxt);

if (numC > numB && numB > numA){
    document.write(`A sequência é: ${numA}, ${numB} e ${numC}`)
}else if(numB > numC && numC > numA){
    document.write(`A sequência é: ${numA}, ${numC} e ${numB}`)
}else if(numC > numA && numA > numB){
    document.write(`A sequência é: ${numB}, ${numA} e ${numC}`)
}else if(numA > numC && numC > numB){
    document.write(`A sequência é: ${numB}, ${numC} e ${numA}`)
}else if(numB > numA && numA > numC){
    document.write(`A sequência é: ${numC}, ${numA} e ${numB}`)
}else if(numA > numB && numB > numC){
    document.write(`A sequência é: ${numC}, ${numB} e ${numA}`)
}
