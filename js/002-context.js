const subject =
  "Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply";
//https://www.youtube.com/watch?v=UGapN-hrekw&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=UGapN-hrekw";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

function hello() {
  console.log("Hello", this);
}
hello(); // если так вызвать то this === window

const person = {
  name: "John",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  // sayHelloWindow: hello.bind(this), тут this === window
  logInfo: function (job, phone) {
    console.group(`${this.name} info`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};
person.sayHello(); // если так вызвать то this === person
person.sayHelloWindow(); // если так вызвать то this === window
person.logInfo("Back end", "777-55-55");

const lena = {
  name: "Elen",
  age: 20,
};

// .bind() - вернёт функцию!
const fnLenaInfoLog = person.logInfo.bind(lena);
fnLenaInfoLog("Frontend", "555-55-55");

person.logInfo.bind(lena, "Frontend", "555-55-55")();

// .call() - сразу вызовет
person.logInfo.call(lena, "Frontend", "555-55-55");

// .apply() - в apply первым параметром передать контекст вторым массив параметрром
person.logInfo.apply(lena, ["Frontend", "555-55-55"]);

//=======================================================
const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map((element) => element * n);
// }
// console.log(multBy(array, 5));

Array.prototype.multBy = function (n) {
  return this.map((element) => element * n);
};
console.log(array.multBy(5));
