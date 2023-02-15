const symbol = Symbol('demo')
const other = Symbol('demo')
// console.log(symbol)
// console.log(other)
// console.log(symbol == other)
// console.log(symbol === other)
const obj = {
    name: 'Elena',
    demo: 'DEMO',
    [symbol]: 'meta'
}
// console.log(obj)
// console.log(obj[symbol])
// console.log(obj[other]) // undefined

for (let key in obj) { // цикл бежит не только по собственным полям объекта, но и по прототипам
    console.log(key) // символов не видит
}
console.log(obj.demo)
console.log(obj[symbol])
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol