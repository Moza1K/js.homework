//Завдання 1

const countTrue = (value) => {
    const res = [];

    for(let item of value){
        if(item){
            res.push(item)
        }
    }
    return res.length
}

// const finalRes = countTrue([true, true, false, true, false])
// console.log(finalRes)

//Завдання 2

const getOccurrences = (item) =>{
    const occurrences = []

    for(let elem of item){
        if(!occurrences[elem]){
            occurrences[elem] = 1
        }else{
            occurrences[elem] +=1 
        }

    }
    return occurrences
}

// const itemRes = getOccurrences([`a` ,`f`, `a` ,`v` ,`f` ,`a`])
// console.log(itemRes)

//Завдання 3

const findExcess = (integers) =>{

    let evenArray = []
    let oddArray = []

    for(let num of integers){
        num % 2 == 0 ? evenArray.push(num) : oddArray.push(num)
    }

    if(evenArray.length > oddArray.length){
        return oddArray[0]
    }else{
        return evenArray[0]
    }
}

const integer = findExcess([2, 3, 2, 4, 6, 4])
const intege2 = findExcess([5, 3, 2, 5, 3, 1])
// console.log(integer)
// console.log(intege2)