const subject =
  "Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters";
//https://youtu.be/cS6nTVNzOPw?list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
const baseUrl = "https://youtu.be/";
const queryString = "cS6nTVNzOPw";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

{
  const person = Object.create(
    {}, // тут прототип для создаваемого объекта
    {
      name: {
        value: "Vladi",
      },
      birthYear: {
        value: 1990,
      },
    }
  );
  console.log(person); // {name: "Vladi", birthYear: 1990}
  for (let key in person) {
    console.log(`Key: ${key}`); // ПУСТО! в консоли ничего не будет
  }
}

{
  const person = {
    name: "Vladi",
    birthYear: 1990,
  };
  console.log(person); // {name: "Vladi", birthYear: 1990}
  for (let key in person) {
    console.log(`Key: ${key}`); // Так всё Ок, ключи отображаются
  }
}

{
  // Чтоб в этом случае было нормальное поведение, нужно настроить поля
  // Нужно добавить property descriptors
  console.log(`============= ----- >>> Для нужного поведения, настраиваю поля`);
  const person = Object.create(
    {
      calculateAge() {
        console.log("calculateAge", new Date().getFullYear() - this.birthYear);
      },
    }, // тут прототип для создаваемого объекта
    {
      name: {
        value: "Vladi",
        enumerable: true, // по умолчанию false
        writable: true, // по умолчанию false
        configurable: true, // по умолчанию false
        // если enumerable: true то в for in отобразится
        // если writable: true то то свойство можно изменить
        // если configurable: true то то свойство можно удалить
      },
      birthYear: {
        value: 1990,
      },
      age: {
        // в геттерах и сеттерах можно выполнять любую логику
        // работает в Object.create(...)
        get() {
          document.body.style.backgroundColor = "orange";
          return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
          document.body.style.backgroundColor = "lime";
          console.log(`Set age ${value}`);
        },
      },
    }
  );

  // person.name = "Max"; // будет изменено поскольку writable: true
  // delete person.birthYear; // не удалит! configurable: false (по умолчанию)

  console.log(person); // {name: "Vladi", birthYear: 1990}

  for (let key in person) {
    // Может залезть в прототип
    if (person.hasOwnProperty(key)) {
      console.log(`Key: ${key} Value: ${person[key]}`);
    }
  }

  person.age = 100;
  console.log(person.age);
  person.calculateAge();
}
