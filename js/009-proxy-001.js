const subject = "Урок 9. JavaScript. Proxy. Объекты, функции, классы. Часть 1";
//https://www.youtube.com/watch?v=np08WdS9OXg
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=np08WdS9OXg";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

// Проксирование объекта
const person = {
  name: "Vladi",
  age: 30,
  job: "Fullstack",
};

// Идея прокси в перехвате объекта и переопредиление его операций
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#validation

const op = new Proxy(person, {
  get(target, prop) {
    // например это ловушка
    console.log(`Getting prop ${prop}`);
    return target[prop];
  },

  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },

  has(target, prop) {
    // для валидации, есть ли поле в объекте?
    return ["age", "name", "job"].includes(prop);
  },

  deleteProperty(target, prop) {
    console.log(`Del ${prop}`);
    delete target[prop];
    return true;
  },
});

// console.log(op);
console.log(op.age);
op.age = 26;
console.log(op.age);

// Проксирование функции
const log = (text) => `Log: ${text}`;

const fp = new Proxy(log, {
  apply(target, thisArg, argArray) {
    //посмотреть когда ф-ция будет вызыватся
    // target - сама ф-ция
    // контекст (возможно передан с пом .call() .bind())
    // argArray - массив всех параметров которые передаю в ф-цию
    console.log(`Call fn...`);
    return target.apply(thisArg, argArray).toUpperCase();
  },
});

// Проксирование Класов
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log("Construct...");
    // return new target(...args);
    // Можно даж возвращаемый екземпляр обернуть в Proxy
    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop ${prop}`);
        return t[prop];
      },
    });
  },
});

const p = new PersonProxy("John", 33);

/// Пример

const exampleObjProxy = new Proxy(person, {
  get(target, prop) {
    if (!(prop in target)) {
      return prop
        .split("_")
        .map((part) => target[part])
        .join(" ");
    }
    return target[prop];
  },
});

console.log(exampleObjProxy.name_age_job); // Vladi 26 Fullstack
