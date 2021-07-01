const subject =
  "Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами";
//https://youtu.be/mbcP3Oc0PjU?t=1234
const baseUrl = "https://youtu.be/";
const queryString = "mbcP3Oc0PjU?t=1234";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`= SET =`);
console.log(`${url}`);

// принимает массив чего угодно и вернёт только уникальные значения
// SET структура проще чем MAP и хранит только значения
const set = new Set([1, 2, 4, 13, 4, 12, 1, 4, 2, 4, 3]);
console.log(set);
set.add(10).add(2).add(19).add(10).add(0); // добавить значение в set
set.has(1); // true || false
set.size; // количество елементов
set.delete(1); // удалил елемент по значению
// set.clear(); // очистил set

// SET структура проще чем MAP и хранит только значения
// У SET есть только values
// НО для обратной совместимости с MAP есть и keys() и entries()
console.log(set.values()); // SetIterator
console.log(set.keys()); // SetIterator
console.log(set.entries()); // SetIterator ключ и значения дублируют друг друга

// for (let key of set.entries()) { // так тож работает // [2, 2]
// for (let key of set.keys()) { // так тож работает // 2
// for (let key of set.values()) { // так тож работает // 2
for (let key of set) {
  console.log(key);
}

// EXAMPLE ===========================================================
const fooArr = [
  1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 7, 7,
];
function unicValues(arr) {
  // return [...new Set(arr)];
  return Array.from(new Set(arr));
}
console.log(unicValues(fooArr));
