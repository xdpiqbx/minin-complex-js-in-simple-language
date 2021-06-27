const subject =
  "Урок 3. JavaScript. Что такое замыкания. Как они работают (+ примеры)";
//https://www.youtube.com/watch?v=pahO5XjnfLA&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=3
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=pahO5XjnfLA";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

///////////////////////////////////////////////////////////////
function createCalcFunction(n) {
  // переменная n замкнута в безымянной ф-ции которую возвращаю
  return function () {
    console.log(1000 * n);
  };
}
createCalcFunction(42)();
///////////////////////////////////////////////////////////////

//********************************************************** */
function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(41));
console.log(addTen(41));
//********************************************************** */
function urlGenerator(baseUrl) {
  return function (query) {
    return `https://${baseUrl}${query}`;
  };
}
const youtube = urlGenerator("youtu.be");
console.log(
  youtube("/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT")
);
//********************************************************** */

/*
  Написать ф-цию bind
  Пример работы:
  
  function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
  }

  const person1 = {name: "Niko", age: 22, job: "Frontend"}
  const person2 = {name: "Elen", age: 20, job: "SMM"}

  bind(person1, logPerson)
  bind(person2, logPerson)
*/
function bindMy(context, fn) {
  // return fn.bind(context)();
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Niko", age: 22, job: "Frontend" };
const person2 = { name: "Elen", age: 20, job: "SMM" };

bindMy(person1, logPerson)();
bindMy(person2, logPerson)();

/******************************************************************** */
// Это здесь поскольку тут связка с замыканиями
// https://youtu.be/fJqYa3BuwaU?t=0
// и снова про контекст, реализация bind, apply, call
// bind возвращает функцию
// call сразу вызывает функцию

const person = {
  name: "Vik",
};

function info(phone, email) {
  console.log(`Name : ${this.name}, Phone : ${phone}, Email : ${email}`);
}
info("555-55-55", "v@mail.com"); // Name : , Phone : 555-55-55
//
const bound = info.bind(person);
bound("555-55-55", "v@mail.com"); // Name : Vik, Phone : 555-55-55
// или так
info.bind(person)("555-55-55", "v@mail.com"); // Name : Vik, Phone : 555-55-55

// 1 Просто
// function bind(fn, context, ...args) {
//   return fn.bind(context, ...args);
// }

// 2 Без встроеных методов
// function bind(fn, context, ...args) {
//   return function (...closeArgs) {
//     const unicId = Date.now().toString();
//     context[unicId] = fn;
//     const result = context[unicId](...args.concat(closeArgs));
//     delete context[unicId];
//     return result;
//   };
// }

// 3 ES5
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2);
//   return function () {
//     const args = Array.prototype.slice.call(arguments);
//     fn.apply(context, rest.concat(args));
//   };
// }

// 4 ES6
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     // 001
//     // return fn.apply(context, rest.concat(args));
//     // 002
//     return fn.call(context, ...rest.concat(args));
//   };
// }

// bind(info, person)("555-55-55", "v@mail.com");
// bind(info, person, "555-55-55")("v@mail.com");
// bind(info, person, "555-55-55", "v@mail.com")();

// Call
// function call(fn, context, ...args) {
//   const unicId = Date.now().toString();
//   context[unicId] = fn;
//   const result = context[unicId](...args);
//   delete context[unicId];
//   return result;
// }

// call(info, person, "555-55-55", "call@mail.com");

// Apply
function apply(fn, context, args) {
  const unicId = Date.now().toString();
  context[unicId] = fn;
  const result = context[unicId](...args);
  delete context[unicId];
  return result;
}

apply(info, person, ["555-55-55", "apply@mail.com"]);

/******************************************************************** */
