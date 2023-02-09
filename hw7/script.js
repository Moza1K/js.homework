//Завдання 1

const schedule = () =>{
    let end = false
    const timeTable = {};

    do{
        let addTime = prompt(`Веведіть час`);
        let addTask = prompt(`Веведіть завдання`);

        if(addTask == null || addTime == null){
            end = true
        }else{
            timeTable[addTime] = addTask
            alert(`Task added`)
        }
    }while(!end)
    return timeTable
}

let resschedule = schedule()
console.log(resschedule)

//Завдання 2

const salaries = {
    Jhon: 4300.00,
    Ann: 5700.40,
    Pete: 4900.95,
}

const getSalariesTotal = (salaries) =>{
    let total = 0;
    for( let employee in salaries){
        total += salaries[employee];
    }

    let result = total.toFixed(2)
    return result;
}

const resTotal = getSalariesTotal(salaries)
// console.log(resTotal)