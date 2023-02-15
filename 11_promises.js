// Удобная конструкция, позволяющая работать с асинхронным кодом
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success')
//     }, 500)
// })

// setTimeout(() => {
//     console.log('After delay')
// }, 500)
const delay = ms => new Promise(((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms) // Эта или следующая строчка работают ниже
    // setTimeout(() => reject(`Done! ${ms}`), ms) // Эта или предыдущая строчка работают ниже
}))
// promise.then(data => console.log(data))
// delay(1000)
//     .then(data => delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.log(err)) // Чтобы работал reject
//     .finally(() => console.log('Finally'))

// async function asyncDelay() {
//     const data = await delay(2000)
//     console.log(data)
// }
// asyncDelay() // Работает так, если resolve выше. Если reject:
// async function asyncDelay() {
//     try {
//         const data = await delay(2000)
//         console.log(data)
//     } catch (e) {
//         console.log('Error', e)
//     }
// }
// asyncDelay()
// Когда resolve выше:
Promise.all([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))

Promise.race([
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))