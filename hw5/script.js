// Завдання 1

//for(let i = 1; i <= 10; i++){
//   console.log(i)
//}

//for(let i = 20; i >= 10; i--){
//    console.log(i)
//}

// let i=1;
// while(i<=10){
//     console.log(i)
//     i++
// }

// let i=20
// while(i>=10){
//     console.log(i)
//     i--
// }

// let i=1;
// do{
//     console.log(i)
//     i++
// }while(i<=10)

// let i=20;
// do{
//     console.log(i)
//     i--
// }while(i>=10)


// Завдання 2

// let firstNamber = prompt(`first namber`);
// let secondNamber = prompt(`second namber`);

// nextPrime:
// for (let i = firstNamber; i <= secondNamber; i++) { 

//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }

//     console.log( i );
// }

//Завдання 3

let pasword = `1q2w3e`;
let authorization;
for( let i = 3; i>=1 ; i--){
    authorization = prompt(`Введіть пароль!`)
    if(authorization !== pasword){
        alert(`В вас залишилось `+i+ ` спроби`)
    }else{
        alert(`Авторизація успішна)`)
    }
    
}