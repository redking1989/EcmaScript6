// '', "" - старое
// `` - нововведение
// const title = 'Hello'
// const isVisible = () => Math.random() > 0.5
// // const template = `<h1>Title</h1>`
// const template = `
//    ${isVisible() ? `<p>Visible</p>` : ''}
//    <h1 id='demo' style="color: red">${title}</h1>
// `  // <p>Visible</p> генерируется только в случае успешного рандома, пробелы в `` сохраняются
//
// console.log(template)

// Methods
const str = 'Hello'
console.log(str.startsWith('He'))
console.log(str.startsWith('e'))
console.log(str.endsWith('lo'))
console.log(str.endsWith('e'))

console.log(str.includes('llo'))
console.log(str.repeat(3))
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())
console.log(str.padStart(10, '1234')) // Получится 12341Hello
console.log(str.padEnd(8, 'abc')) // Получится Helloabc