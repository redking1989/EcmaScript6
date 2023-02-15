const privateVariable = 42
export const COLOR = '#bababa'
export function compute(a, b) {
    return a + b
}
// export class ...// потом разберём
export default { // не привязаны к определённому имени
    log() {
        console.log(privateVariable)
    }
}
// export default class {} // Можно и класс.