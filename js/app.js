const subject =
  "Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters";
//https://youtu.be/cS6nTVNzOPw?list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
const baseUrl = "https://youtu.be/";
const queryString = "cS6nTVNzOPw";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

const person = Object.create(
  {},
  {
    name: {
      value: "Vladi",
    },
    birthYear: {
      value: 1990,
    },
  }
);

console.log(person);
