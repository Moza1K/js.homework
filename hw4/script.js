// Завдання 1

function comparisons( a, b ){
    if( a == b ){
        console.log(`true`)
    } else {
        console.log(`folse`)
    }
}

comparisons(11,11)

function comparisons2(a,b){
    return a == b ? console.log(`true`) : console.log(`folse`)
}

comparisons2(1,2)

//Завдання 2

function getSum(a,b){
    return a + b
}

const res1 = getSum(2,3)
console.log(res1)

const sum = (a,b) => a + b;

const res2 = sum (3,4)
console.log(res2)

//Завдання 3

function namberPower(a,b=2){
    return a ** b
}

const res3 = namberPower(3);
console.log(`res`, res3)

const res4 = namberPower(3,3);
console.log(`res`, res4)

const res5 = namberPower(2,4);
console.log(`res`, res5)

//Завдання 4

function dayWeek(a){
    if(a==1){
        console.log(`Понеділок`)
    }else if(a==2){
        console.log(`Вівторок`)
    }else if(a==3){
        console.log(`Середа`)
    }else if(a==4){
        console.log(`Четвер`)
    }else if(a==5){
        console.log(`Пятниця`)
    }else if(a==6){
        console.log(`Субота`)
    }else if(a==7){
        console.log(`Неділя`)
    }else{
        console.log(`Такого дня немає`)
    }
}

dayWeek(3)
dayWeek(6)
dayWeek(9)

//Завдання 5

function greeting(a,b){
    if(b>30){
        alert(`Здраствуйте, `+ a)
    }else {
        alert(`Привіт, `+ a)
    }
}

greeting (`Peter`, 35)
greeting (`Tomi`, 15)