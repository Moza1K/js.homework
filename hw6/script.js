let userName;
let userSurname;
let userPasword;

const correctLine = (userString) =>{
    const firstSymbolString = (userString[0]).toUpperCase();
    const symbolString = (userString.slice(1)).toLowerCase();

    return firstSymbolString+symbolString;
}

const userRegistrationName = () => {

    do{

        userName = prompt(`Введіть своє імя:`)

        if(!userName){
            alert(`Ви не ввели імя`)
        }else{
            break
        }

    }while(true)

    const upperCaseName = correctLine(userName)

    return upperCaseName;
}

const userRegistrationSurname = () => {

    do{
        userSurname = prompt(`Введіть свою фамілію:`)

        if(!userSurname){
            alert(`Ви не ввели фамілію`)
        }else{
            break
        }

    }while(true)

    const upperCaseName = correctLine(userSurname)

    return upperCaseName;
}

const userRegistrationPasword = () => {

    userPasword = prompt(`Введіть пароль (не менше 6 символів)`);

    do{
        

        if(!userPasword || userPasword.length < 6){
            alert(`Ви ввели менше 6 символів`)
        }else if(!isNaN(userPasword) || userPasword.toLowerCase() === userPasword || userPasword.toUpperCase() === userPasword){
            alert(`Не коректний пароль!`)
        }else{
            alert(`Регістрація пройшла успішно!`)
            break
        }
    }while(true)

    return userPasword;
}

// const resName = userRegistrationName();
// const resSurname = userRegistrationSurname();
// const resPasword =  userRegistrationPasword();

const getRandomNamber = (min, max) => {

    const random = Math.random() * (max-min) + min;
    return Math.floor(random);
}

const resRandom = getRandomNamber(5, 20);
console.log(resRandom)