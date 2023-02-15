// Мета-программирование в JS.
class Student {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

class ProtoStudent {
    university = 'Oxford'
}
// const student = new Student // можно так, а можно так:
// const student = Reflect.construct(Student, ['Igor'], ProtoStudent)
const student = Reflect.construct(Student, ['Igor'])
// console.log(student)
// console.log(student.__proto__ === ProtoStudent.prototype)
Reflect.apply(student.greet, {name: 'Tester'}, [])
console.log(Reflect.ownKeys(student))

Reflect.preventExtensions(student) // Блокирует поля ниже со student
student.age = 25
console.log(Reflect.isExtensible(student)) // Проверка блокировки
console.log(student)