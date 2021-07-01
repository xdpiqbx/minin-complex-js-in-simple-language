const subject = "Урок 11. JavaScript. Генераторы. Symbol iterator, for of";
//https://www.youtube.com/watch?v=7wtbNNiOh30
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=7wtbNNiOh30";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

{
  function* strGenerator() {
    yield "H";
    yield "e";
    yield "l";
    yield "l";
    yield "o";
  }

  const str = strGenerator();
  console.log(str.next()); // {value: "H", done: false}
  console.log(str.next()); // {value: "e", done: false}
  console.log(str.next()); // {value: "l", done: false}
  console.log(str.next()); // {value: "l", done: false}
  console.log(str.next()); // {value: "o", done: false}
  console.log(str.next()); // {value: undefined, done: true}
}

console.log("function* numGenerator(n = 10) { ... }");
function* numGenerator(n = 10) {
  for (let i = 0; i < n; i += 1) {
    yield i;
  }
}
const num = numGenerator(5);
console.log(num.next()); // {value: 0, done: false}
console.log(num.next()); // {value: 1, done: false}
console.log(num.next()); // {value: 2, done: false}
console.log(num.next()); // {value: 3, done: false}
console.log(num.next()); // {value: 4, done: false}
console.log(num.next()); // {value: undefined, done: true}

console.log("Custom generator const iterator = ...");

const iterator = {
  gen(n = 5) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return {
            value: (i += 1),
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

const itr = iterator.gen(5);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// for (let k of iterator) { // Uncaught TypeError: iterator is not iterable
//   console.log(k);
// }

//**************************************************************/

/*
  for ... of работает со спациальным типом данных - Symbol
  Если у объекта в прототипе определён тип Symbol то for ... of может с ним работать
  // Symbol(Symbol.iterator): ƒ values()
*/

// for (let k of "Hello") {
//   console.log(k);
// }

// for (let k of [1, 1, 2, 3, 5, 8, 13, 21]) {
//   console.log(k);
// }

{
  // Имитация Генератора
  console.log("Имитация Генератора");
  const iterableIterator = {
    [Symbol.iterator](n = 5) {
      let i = 0;
      return {
        next() {
          if (i < n) {
            return {
              value: (i += 1),
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };

  for (let k of iterableIterator) {
    console.log(k);
  }
}

{
  console.log("Функция генератор - итератор");
  function* iter(n = 10) {
    for (let i = 0; i < n; i += 1) {
      yield i;
    }
  }

  for (let k of iter(6)) {
    console.log(k);
  }
}

// В некоторых случаях удобно будет использовать Генераторы вместио async await
