import MyLog, {COLOR, compute} from './module'
import * as Module from './module' // экспортирует всё
// compute(1, 2)
// console.log(COLOR)
// MyLog.log() // здесь и выше можно назвать любым словом MyLog, потому что export default с log в другом файле.
Module.COLOR
Module.compute(1, 2)
Module.default.log()