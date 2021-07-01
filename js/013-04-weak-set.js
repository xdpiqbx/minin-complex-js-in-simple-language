const subject =
  "Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами";
//https://youtu.be/mbcP3Oc0PjU?t=2203
const baseUrl = "https://youtu.be/";
const queryString = "mbcP3Oc0PjU?t=2203";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`= WEAK SET =`);
console.log(`${url}`);

// Значения только объекты
// Доступен только метод has

const users = [{ name: "Elena" }, { name: "Alex" }, { name: "Irina" }];

const visits = new WeakSet();

visits.add(users[0]).add(users[1]);

users.splice(1, 1); // удалил елемент с индексом 1

// WeakSet может говорить о том есть объект в сете или нет его
console.log(visits.has(users[0])); // true
console.log(visits.has(users[1])); // false был users.splice(1, 1);
