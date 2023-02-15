// Rest
// function average(arr) {
//     return arr.reduce((acc, i) => acc += i, 0) / arr.length
// }
//
// console.log(average([10, 20, 30, 40])) // - раньше было так

// function average(arr) {
//     return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length
// }
//
// console.log(average(10, 20, 30, 40, 50)) // - раньше было так
function average(a, b, ...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
}

// console.log(average(10, 20, 30, 40, 50)) // - как сейчас можно

// Spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(array)
// console.log(...array) // - разворачивает массив
// console.log(Math.max(...array))
// console.log(Math.min(...array))
// console.log(Math.max.apply(null, array)) // - раньше так делали

// const fib = [1, ...array]
// console.log(fib)

// Destructuring
const array = [1, undefined, 3, 5, 8, 13]
// const a = array [0]
// const b = array [1] - раньше было так
// const [a, b = 42, ...c] = array - сейчас можно так
// console.log(a, b, c)
// const [a,, c] = array
// console.log(a, c)

// Object
const address = {
    country: 'Russia',
    city: 'Moscow',
    street: 'Lenina',
    concat: function () {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}
// const {city, country, street = 'Tverskaya', concat: addressConcat} = address // 'Tverskaya' задано по умолчанию.
// console.log(addressConcat.call(address))
// console.log(street)

const {city, ...rest} = address
console.log(city)
console.log(rest) // - всё, кроме city

const newAddress = {...address, street: 'Tverskaya', code: '123'} // добавляет или меняет часть, остальное изначальное
console.log(newAddress)

// console.log(address.concat())