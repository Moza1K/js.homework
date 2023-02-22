// 1.1
const bolian = (arr) => {
    return arr.map((num) => {

        if(num>0){
            return true
        }else{
            return false
        }
    })
}

const res = bolian([7,2,-2,5,-1])
// console.log(res)

// 1.2

const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
  ]
  
const filterAdmin = (dataArr) => {
    return dataArr
        .filter((user) => user.age >= 18 && user.role === `admin`)
        .map((user) => user.name)
}

const result = filterAdmin(users)
// console.log(result)

// 1.3

const countAverage = (arr) => {
    return arr.reduce((total, amount, index, array) =>{
        total += amount;
        if(index === array.length-1){
            return total/array.length;
        }else{
            return total;
        }
    })
}

const resAverage = countAverage([1,42,52,15,-10])
// console.log(resAverage)

// 2

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownMap = (arr, increment) => {
    let arrClone = []

    for(let num of arr){
        arrClone.push(increment(num))
    }

    return arrClone
}

let resOwnMap = ownMap([1,2,3], increment) 
// console.log(resOwnMap)

const ownFilter = (arr, isNegative) => {

    let arrClone = []

    for(let num of arr){
        if(isNegative(num)){
            arrClone.push(num)
        }
    }
    return arrClone
}

let resOwnFilter = ownFilter([-2, 4, -1], isNegative)
// console.log(resOwnFilter)

const ownForEach = (arr, logger) =>{
    for(let num of arr){
        logger(num, arr.indexOf(num), arr)
    }
}

// ownForEach([1, 2, 3,], logger)

// 3
const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

  
  const filterData = (dataArray, objectToFilter) => {
    let result = dataArray.filter(item => {
        // console.log(`keys:`, Object.keys(objectToFilter))

        return Object.keys(objectToFilter).every(key => {
            return item[key] === objectToFilter[key]
        })
    })

    return result;
  }

  let resFiltered = filterData(data, {age: 24})
//   console.log(resFiltered)