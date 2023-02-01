const firstNumber = prompt(`Введіть перше число!`);
const secondNumber = prompt(`Введіть друге число!`);

if (firstNumber === secondNumber){
    alert(`Числа ` + firstNumber + ` і ` + secondNumber + ` рівні`);
} else if (firstNumber > secondNumber){
    alert(`Число ` + firstNumber + ` більше за ` + secondNumber + `!`);
} else {
    alert(`Число ` + secondNumber + ` більше за ` + firstNumber + `!`);
}