const numAtxt = prompt('type a number: ');
const numA = Number(numAtxt);
const numBtxt = prompt('type a number: ');
const numB = Number(numBtxt);
const numCtxt = prompt('type a number: ');
const numC = Number(numCtxt);

    if(numA > numB && numA > numC){
        document.write(`O maior número é: ${numA}`);
    }else if(numB > numA && numB > numC){
        document.write(`O maior número é: ${numB}`);
    }else if(numC > numA && numC > numB){
        document.write(`O maior número é: ${numC}`);
    }