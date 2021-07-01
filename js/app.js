const subject =
  "Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex). Js Массивы.";
//https://www.youtube.com/watch?v=nEabP9CYCAQ
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=nEabP9CYCAQ";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

const people = [
  { name: "Владилен", age: 25, budget: 40000 },
  { name: "Елена", age: 17, budget: 3400 },
  { name: "Игорь", age: 49, budget: 50000 },
  { name: "Михаил", age: 15, budget: 1800 },
  { name: "Василиса", age: 24, budget: 25000 },
  { name: "Виктория", age: 38, budget: 2300 },
];

// for - old school
console.log("=============> for loop - old school");
for (let i = 0; i < people.length; i += 1) {
  console.log(people[i]);
}

// while - Dino old school
console.log("=============> while loop - Dino old school");
let i = 0;
while (i < people.length) {
  console.log(people[i]);
  i += 1;
}

// do while - Dino old school
console.log("=============> do while loop - Dino old school");
let j = 0;
do {
  console.log(people[j]);
  j += 1;
} while (j < people.length);

// for in
console.log("=============> for in loop");
for (let k in people) {
  console.log(people[k]);
}

// for of - ES6
console.log("=============> for of - ES6");
for (let person of people) {
  console.log(person);
}

// forEach - ничего не возвращает
console.log("=============> forEach - ничего не возвращает");
people.forEach((person, currentIndex, arrayPeople) => {
  // array === arrayPeople одно и то же!
  console.log(`№${currentIndex + 1} - ${person.name}, ${person.age} лет`);
});

// Map - всегда возвращает массив (копию)
// Для преобразования текущего массива в новый массив
console.log("=============> Map - всегда возвращает массив (копию)");
const copyOfArrPeople = people.map((person, currentIndex, arrayPeople) => {
  // array === arrayPeople
  console.log(`№${currentIndex + 1} - ${person.name}, ${person.age} лет`);
  return person;
});
console.log(copyOfArrPeople === people); //false - ссылки разные, создана копия

const testPepople = people; // для примера
console.log(testPepople === people); //true - ссылка одна и та же! при изменении testPepople будет изменён и people

// Filter
// Вернёт новый массив
console.log("=============> Filter - фильтрует по условию текущий массив");
{
  const adults = people.filter((person) => {
    // person.age += 20; - так делать если реально надо. Так мутируем исходный массив people
    let newAge = person.age;
    newAge += 20;
    return newAge > 18;
  });
  console.log(adults);
}

{
  // коротко
  console.log(people);
  const adults = people.filter((person) => person.age > 18);
  console.log(adults);
}

// Reduce
console.log("=============> Reduce");

const budgetSum = people.reduce((total, person) => {
  total += person.budget;
  return total;
}, 0);
console.log(budgetSum);

const arrNames = people.reduce(
  (names, person) => {
    names.push(person.name);
    return names;
  },
  ["Bill"]
);
console.log(arrNames);

// https://youtu.be/nEabP9CYCAQ?t=1032
// Find

// FindIndex
