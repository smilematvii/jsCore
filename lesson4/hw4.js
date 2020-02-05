/* Task1 */
/*
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(){
    let array = [];
    array = Object.keys(mentor);
    console.log(array.length);
}

propsCount(mentor);
*/

/* Task2 */
/*
let player = {
    name: "John",
    surname: "Steevenson",
    age: 23,
    sex: "male",
    ambasador: true
}

function showProps(){
    let properties = [];
    let values = [];
    properties = Object.keys(player);
    console.log(properties);
    values.push(player.name, player.surname, player.age, player.sex, player.ambasador);
    console.log(values);
}

showProps(player);
*/

/* Task3 */

/*
class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary(){
        let salary = this.dayRate * this.workingDays;
        console.log(this.fullName + " salary: " + salary);
    }
    showSalaryWithExperience(){
        let salary = this.dayRate * this.workingDays * this.#experience;
        console.log(this.fullName + " salary: " + salary);
    }
    get showExp() {
        return this.#experience;
    }
    set setExp (value) {
        this.#experience = value;
    }
    getSalaryProperty (){
        return this.dayRate * this.workingDays * this.#experience;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log("------");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log("------");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log("------");

let workers = []
workers.push(worker1, worker2, worker3);

Object.defineProperty(worker1, 'salary', {
    value: worker1.getSalaryProperty(),
    writable: true,
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(worker2, 'salary', {
    value: worker2.getSalaryProperty(),
    writable: true,
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(worker3, 'salary', {
    value: worker3.getSalaryProperty(),
    writable: true,
    enumerable: true,
    configurable: true
  });

workers.sort(function (a, b) {
    if (a.salary > b.salary) {
      return 1;
    }
    if (a.salary < b.salary) {
      return -1;
    }
    return 0;
  });

for (let i = 0; i < workers.length; i++){
    console.log(workers[i].fullName + ": " + workers[i].salary);
}
*/

/* Task4 */

/*
class Person{
    constructor (name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name + " " + this.surname;
    }
} 
class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName){
        return this.name + " " + this.surname + " " + middleName;
    }
    showCourse(){
        let date = new Date();
        let today = date.getFullYear();
        return today - this.year;
    }
}
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
*/

/* Task5 */

class GeometricFigure{
    getArea() {
        return 0;
    }
    toString() {
         return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure{
    constructor(a, h){
        super();
        this.a = a;
        this.h = h;
    }
    getArea(){
        return (this.a * this.h) / 2;
    }
}
class Square extends GeometricFigure{
    constructor(a){
        super();
        this.a = a;
    }
    getArea(){
        return this.a ** 2;
    }
}
class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.r = r;
    }
    getArea(){
        return this.r * 3.14;
    }
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures();

function handleFigures(){
    
for (i = 0; i < figures.length; i++){
    if (figures[i] instanceof GeometricFigure && Triangle.prototype instanceof GeometricFigure === true){
    console.log("GeometricFigure: " + figures[i].toString() + " - area: " + figures[i].getArea());
    }
}
    var initialValue = 0;
    console.log(
figures.reduce(
    (accumulator, currentValue) => accumulator + currentValue.getArea(),
    initialValue
));
}


