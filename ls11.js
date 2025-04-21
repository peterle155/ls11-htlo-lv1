console.log("Hello World")


// push, filter, map, find, findIndex, splice

const studentArr = ['T', 'T', 'M']

// 1. push
studentArr.push('B')

let testArr = studentArr.push('B')

console.log(studentArr) // ['T','T','M','B','B']
console.log(testArr) // studentArr.length -> 5

console.log('-------------------')
// 2. splice
studentArr.splice(3, 1)

testArr = studentArr.splice(3, 1)

console.log(studentArr) // ['T','T','M']
console.log(testArr) // ['B']



console.log('-------------------')
console.log('-------------------')
const courseArr = [
    {
        name: 'JS',
        price: 10,
        isCheap: 1,
        //enrollAmount :10
    },
    {
        name: 'Java',
        price: 20,
        isCheap: 0
    },
    {
        name: 'TS',
        price: 30,
        isCheap: 0
    },
]

// 1. map 
const a = courseArr.map(value => {
    if (value.price <= 10) {
        value.enrollAmount = 20
        value.isCheap = 1
    } else {
        value.enrollAmount = 10
        value.isCheap = 0
    }
    return value
})


// 2. filter

// const result = arr.filter(value => {
//     if(value <= 2){return 0}
//     else{return 1}
// })

// console.log(result)
// console.log(arr) // = result ; = arr origin


// mutate -> bien dong
// push, splice

// immutate -> bat bien
// filter, map

const arr = [1, 2, 3, 4, 5] // sum arr

// 3. reduce
const result = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, 0)
console.log(result)


const cart = [
    {
        name: 'item1',
        pricePerOne: 10,
        quantity: 5
    },
    {
        name: 'item2',
        pricePerOne: 5,
        quantity: 2
    },
    {
        name: 'item3',
        pricePerOne: 7,
        quantity: 4
    },
]

const total = cart.reduce((previousValue, currentValue) => {
    //
    const totalCurrentValue = currentValue.pricePerOne * currentValue.quantity
    // const tong = previousValue + totalCurrentValue
    previousValue = totalCurrentValue + previousValue
    return previousValue
}, 0)
console.log(total)
// Lan chau dau 
//currentValue : 
// {
//     name: 'item1',
//     pricePerOne: 10,
//     quantity: 5
// }
//previousValue : 0
// return 50

// Lan chay 2
//currentValue : 
// {
//     name: 'item2',
//     pricePerOne: 5,
//     quantity: 2
// },
//previous value:50
// return 60

// Lan chay 3
// current value
// {
//     name: 'item3',
//     pricePerOne: 7,
//     quantity: 4
// },

// previous value: 60
// return 88




// 


const digits = [1, 2, 3, 4, 5, 6]

const sum = digits.reduce((prevV, curV) => {
    if (curV % 2 === 0) {
        return prevV + curV
    }else{
        return prevV
    }
}, 0)

console.log(sum)