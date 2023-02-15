// Раньше было так:
// var num = 42
// num = 'str'
// console.log(num)
// if (true) {
//     var a = 42
// }
// Сейчас:
// let a = 24 - выше, чем аналогичная внутри if
// if (true) {
//     let a = 42
//     console.log('a', a)
// }
// console.log(a)

// Hoisting
// b = 20
// console.log(b)
// var b = 10
// let b =10

// Такое возможно:
// function hoisted() {
//     age = 26
// }
// let age
// hoisted()
// console.log(age)

// Const
const COLOR = '#ffeebb'
// COLOR = '#000' - так нельзя.
// console.log(COLOR)
// const array = [1, 2, 3, 5, 8]
// array = '' или [] - не можем.
// array = 23 - ошибка
// console.log(array)
// array.push(13)
// console.log(array)

const obj = {a: 42}
// obj = 24, 'few' - нельзя
obj.name = 'Igor' //- внутреннее состояние объекта можно изменять
console.log(obj)