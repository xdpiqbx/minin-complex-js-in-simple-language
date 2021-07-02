const subject = "Урок 15. JavaScript. Все о Spread и Rest";
//https://www.youtube.com/watch?v=SGeQ-U0G7dE
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=SGeQ-U0G7dE";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

const citiesRussia = ["Москва", "Питер", "Казань", "Новосиб"];
const citiesEurope = ["Берлин", "Прага", "Париж", "Андора"];

const citiesRussiaPopulation = {
  Moscov: 20,
  Piter: 8,
  Kazan: 5,
  Novosib: 3,
};

const citiesEuropePopulation = {
  Moscov: 10,
  Berlin: 20,
  Praha: 8,
  Paris: 5,
  Andora: 3,
};
{
  // Spread ... - разворачивает массив
  console.log(...citiesRussia); // Москва Питер Казань Новосиб
  console.log(...citiesEurope); // Берлин Прага Париж Андора

  // const allCities = citiesRussia.concat(citiesEurope);
  const allCities = [...citiesRussia, "Вашингтон", ...citiesEurope];
  console.log(...allCities); // Москва Питер Казань Новосиб Вашингтон Берлин Прага Париж Андора

  const allCitiesPopulation = {
    ...citiesRussiaPopulation,
    ...citiesEuropePopulation, // если в объекте выше есть одноимённые свойства то объект ниже переопределит их значения
  };
  console.log(allCitiesPopulation);

  // Example
  const numbers = [5, 37, 42, 17];
  console.log(Math.max(...numbers));
  // console.log(Math.max.apply(null, numbers)); - так раньше делали

  // Конвертация NodeList в Array
  const divs = document.querySelectorAll("div");
  const nodes = [...divs];
  console.log(divs); // NodeList
  console.log(nodes); // Array
}

//Rest - соберает оставшиеся аргументы в новый массив
function sum(a, b, ...args) {
  console.log(args);
  return a + b + args.reduce((sum, el) => sum + el, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log(sum(...numbers));

// Деструктуризация массива и объекта
const [a, b, c, ...other] = numbers;
console.log(a, b, c, other); // 1, 2, 3 [4, 5, 6]

const person = {
  name: "Max",
  age: 20,
  city: "Moskov",
  country: "Russia",
};

const { name, age, ...address } = person;
console.log(name, age, address); //Max 20 {city: "Moskov", country: "Russia"}
