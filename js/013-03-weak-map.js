const subject =
  "Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами";
//https://youtu.be/mbcP3Oc0PjU?t=1679
const baseUrl = "https://youtu.be/";
const queryString = "mbcP3Oc0PjU?t=1679";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`= WEAK MAP =`);
console.log(`${url}`);

// Можно избегать утечек данных в JS
let obj = { name: "weakMap" };
const bill = { name: "bill" };
const arr = [obj];
// obj = null; // он не удалился, остался в массиве
console.log(obj); // null
console.log(arr[0]); // {name: "weakMap"}

// В WeakMap ключами могут быть только объекты
const map = new WeakMap([[obj, "obj data"]]);

// obj = null; // он не удалился, остался в массиве

// Доступны только методы get set delete has
console.log(map.get(obj)); // при obj = null, тут будет undefined тоесть он будет удалён и в map
map.set(bill, "Hello Bill"); // добавить свойство
map.delete(bill); // удалить свойство
map.has(obj); // true || false
console.log(map.has(obj));
console.log(map);

// EXAMPLE
const cache = new WeakMap();
function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let lena = { name: "Elena" };
let alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

lena = null; // удалил объект и он автоматом удалился из WeakMap

console.log(cache.has(lena)); // false
console.log(cache.has(alex)); // true
