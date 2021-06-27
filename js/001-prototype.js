const subject = "Урок 1. JavaScript. Что такое prototype. JavaScript Prototype";
const baseUrl = "https://youtu.be/";
const queryString = "aQkgUUmUJy4?list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&t=64";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

const personOne = {
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greet!");
  },
};
console.dir(personOne);
// __proto__: Object - специальное свойство со ссылкой на прототип объекта

const personTwo = new Object({
  name: "Maximus",
  age: 28,
  greet: function () {
    console.log("Greet from Object!");
  },
});
console.dir(personTwo);

// добавление свойств и методов в prototype
//********************************************************* */
Object.prototype.sayHello = function () {
  console.log("Hello from prototype");
};
//********************************************************* */

personOne.sayHello();
personTwo.sayHello();

// Создать объект на основе существующего объекта
const lena = Object.create(personTwo);
console.dir(lena); // объект пустой но в его прототипе все свойства и значения personTwo
console.dir(lena.name); // Maximus
lena.name = "Elena"; // так появилось собственное поле + то что в прототипе

// В JS всё объкты
const str = "I am JS string";
console.log(str); //I am JS string
const objStr = new String("I am JS string");
console.log(objStr); //String {"I am JS string"}

lena.sayHello(); // Hello from prototype
str.sayHello(); // Hello from prototype
objStr.sayHello(); // Hello from prototype
