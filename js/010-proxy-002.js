const subject = "Урок 10. JavaScript. Proxy. Примеры. Часть 2";
//https://www.youtube.com/watch?v=mSbyhHfxs04
const baseUrl = "https://youtu.be/";
const queryString = "watch?v=mSbyhHfxs04";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

// Wrapper-------------------------------------------------------------------------------------------------
// Функция будет добавлять значение по умолчанию тем ключам у которых нет значений
const widthDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  });
};

const position = widthDefaultValue(
  {
    x: 24,
    y: 42,
  },
  555
);

// Hidden properties (private imitation)-------------------------------------------------------------------
const widthHiddenProps = (target, prefix = "_") => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    owhKeys: (obj) =>
      Reflect.ownKeys(obj).filter((prop) => !prop.startsWith(prefix)), // Reflect - для работы с объектами
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
    //receiver - это и есть тот прокси который возвращаю
  });
};

const data = widthHiddenProps({
  name: "John",
  age: 30,
  _uid: "iufhvdkjfvn",
});

console.log(`"_uid" in data -> "${"_uid" in data}"`); // false

for (let key in data) {
  // console.log(data); // само свойство _uid в объекте вижу
  console.log(`${key} : ${data[key]}`); // обращение к _uid - undefined
}

console.log(Object.keys(data)); // и так само свойство _uid вижу

// Optimization
console.log(" =====--> Optimization <--=====");
const userData = [
  { id: 11, name: "Vlad", job: "Fullstack", age: 25 },
  { id: 22, name: "John", job: "Student", age: 26 },
  { id: 33, name: "Elen", job: "Backend", age: 28 },
  { id: 44, name: "Bill", job: "Teacher", age: 30 },
];

{
  const index = {};
  userData.forEach((i) => (index[i.id] = i));
  console.log(index);
  console.log(index[22]); // { id: 22, name: "John", job: "Student", age: 26 },
}

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};
    args.forEach((item) => (index[item.id] = item));
    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case "push":
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case "findById":
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndexedArray(userData);

//https://youtu.be/mSbyhHfxs04?t=1106
