const firstNumber = prompt(`Введіть перше число!`)
const secondNumber = prompt(`Введіть друге число!`)
const operation = prompt(`Введіть операцію`)


switch (operation){
    case `+`:
        const sum = Number(firstNumber) + Number(secondNumber);
        alert(`Ваш рузультат ` + sum + `!`);
        break;
    
    case `-`:
         const subtraction = Number(firstNumber) - Number(secondNumber);
         alert(`Ваш рузультат ` + subtraction + `!`);
        break;  

    case `*`:
        const multiplication = Number(firstNumber) * Number(secondNumber);
        alert(`Ваш рузультат ` + multiplication + `!`);
         break;

    case `/`:
        const division = Number(firstNumber) / Number(secondNumber);
        alert(`Ваш рузультат ` + division + `!`);
        break;
}