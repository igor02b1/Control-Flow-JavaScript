const ageText = prompt('type your age: ');
const age = Number(ageText);

if(age >= 10 && age <= 14){
    document.write('categoria infantil');
} else if(age >= 15 && age <= 17){
    document.write('categoria juvenil')
} else if(age >= 18 &&  age <= 25){
    document.write('categoria adulto')
}
