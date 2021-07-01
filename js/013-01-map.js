const subject =
  "Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами";
//https://www.youtube.com/watch?v=mbcP3Oc0PjU
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=mbcP3Oc0PjU";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`= MAP =`);
console.log(`${url}`);

const objPerson = {
  name: "John",
  age: 26,
  job: "Fullstack",
};
const entriesPerson = Object.entries(objPerson);
// const entriesPerson = [
//   ["name", "John"],
//   ["age", 26],
//   ["job", "Fullstack"],
// ];

console.log(Object.entries(objPerson)); // вернёт entries
console.log(Object.fromEntries(entriesPerson)); // вернёт объект из entries

const map = new Map(entriesPerson);

console.log(map); // вывод похож на асоциативный массив из php
console.log(map.get("job")); // Fullstack

map // ключами могут быть любые значения
  .set("newField", 42)
  .set(objPerson, "Value of object")
  .set(NaN, "Nan ???")
  .set(undefined, "undefined val")
  .set(null, "null here");

console.log(map.get(null));
map.delete(null);
console.log(map);
console.log(map.has("job")); // true
console.log(map.has(null)); // false
console.log(map.size);
// map.clear(); // удалит все вхождения
console.log(map.entries()); // MapIterator

console.log(`============-----> for (let entry of map.entries()) {`);
for (let entry of map.entries()) {
  // каждый entry - массив из двух елементов
  console.log(entry);
}

// Можно через деструктуризацию
console.log(`============-----> for (let [key, value] of map.entries()) {`);
for (let [key, value] of map.entries()) {
  // map.entries() вызывается по умолчанию, там в прототипе Symbol(Symbol.iterator): ƒ entries()
  if (typeof key === "object") {
    key = JSON.stringify(key);
  }
  console.log(`${key} =-> ${value}`);
}

console.log(`============-----> for (let value of map.values()) {`);
for (let value of map.values()) {
  // map.values() Получаю только значения
  console.log(`VALUE =-> ${value}`);
}

console.log(`============-----> for (let key of map.keys()) {`);
for (let key of map.keys()) {
  // map.values() Получаю только значения
  if (typeof key === "object") {
    key = JSON.stringify(key);
  }
  console.log(`KEY =-> ${key}`);
}

console.log(`============-----> map.forEach((val, key, map) => {`);
map.forEach((val, key, map) => {
  // именно в таком порядке!
  if (typeof key === "object") {
    key = JSON.stringify(key);
  }
  console.log(`${val} ${key}`);
});

// Из карты можно делать массивы несколькими способами
console.log(
  "============-----> Из карты можно делать массивы несколькими способами"
);
const arrFromMap1 = [...map];
const arrFromMap2 = Array.from(map);
console.log(arrFromMap2);
const objFromMap = Object.fromEntries(map.entries());
console.log(objFromMap);

// Example
//записать для каждого пользователя время когда он посещал сайт
const users = [{ name: "Elen" }, { name: "Alex" }, { name: "Iren" }];

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user) {
  return visits.get(user); // на вход получает целый объект
}

console.log(lastVisit(users[1]));

/*
  Коротко
  Есть объект, преобразовываю его в entries из полученых entries создаю новую карту
  const map = new Map(entries); - создать объект карты
  map.get(key) - вернёт значение по ключу, ключом может быть даж объект
  map.set(obj, "Value") - ключом может быть любой тип данных, (null, undefined, NaN, объект)
  map.get(null) - получить значение по ключу null
  map.delete(null); - удалил entrie с ключом null
  map.has("job"); // true или false
  map.size - размер карты, сколько entries
  map.clear() - очистит карту
  map.entries() - вернёт MapIterator // каждый entry - массив из двух елементов
  map.values() - вернёт MapIterator // каждый entry - значение
  map.keys() - вернёт MapIterator // каждый entry - ключ
  map.forEach((val, key, map) => { ... } - в отличии от обычного forEach тут не index а key
  // Из карты можно делать массивы несколькими способами
    const arrFromMap1 = [...map];
    const arrFromMap2 = Array.from(map);
  // Так можно сделать объект
    const objFromMap = Object.fromEntries(map.entries());
*/
