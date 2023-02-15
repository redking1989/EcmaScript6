const cityField = 'city'
const job = 'Frontend'
const person = {
    age: 26,
    name: 'Irina',
    job, // теперь можно job вместо job: job
    [cityField + Date.now()]: 'Saint-Petersburg',
    'country-live': 'Russia',
    print: () => 'Person',
    toString: function() { // 'function' можно не писать, нововведение
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}
// console.log(person.toString())
// console.log(person.print())
// console.log(person)

// Methods
const first = {a: 1}
const second = {b: 2}
// // console.log(Object.is(20, 10)) // сравнивает и выдает верно или ложь.
// console.log(Object.assign({}, first, {
//     c: 2,
//     d: 3
// }))
const obj = Object.assign({}, first, {
    c: 2,
    d: 3
})
// console.log(obj)
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
