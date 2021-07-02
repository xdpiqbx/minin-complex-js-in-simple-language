const subject = "Урок 16. JavaScript. Все о Деструктуризации в JS";
//https://www.youtube.com/watch?v=wWYokY0Pt2M
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=wWYokY0Pt2M";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}
{
  const [sum, sub, mult, divis] = calcValues(5, 4);
  console.log(sum, sub, mult, divis);
}
{
  const [sum, , mult, divis] = calcValues(5, 4); // Если надо можно пропустить, но поставить запятую
  console.log(sum, mult, divis);
}
{
  const [sum, sub, ...rest] = calcValues(5, 4); // Можно использовать rest
  console.log(sum, sub, rest);
}
{
  const [sum, sub = "Вычитания нет", mult, divis] = calcValues(5, 4); // Можно задавать значения по умолчанию
  console.log(sum, sub, mult, divis);
}

//Object
{
  const person = {
    name: "Max",
    age: 20,
    address: {
      city: "Moskov",
      country: "Russia",
    },
  };

  const {
    name: firstName = "Defaul Name",
    age,
    car = "Has no car",
    address: { city: homeTown, country },
  } = person;
  console.log(firstName, age, car, homeTown, country); // Max 20 Has no car

  // Rest
  const { name, ...info } = person;
  console.log(name, info); // Max {age: 20, address: {…}}

  function logPerson({ name: firstName = "User", age }) {
    console.log(firstName + " " + age);
  }
  logPerson(person);
}
