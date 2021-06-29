const subject =
  "Урок 7. JavaScript. Все о ES6 Классах (+ Практическое Применение)";
//https://youtu.be/uLY9GXGMXaA
const baseUrl = "https://youtu.be/";
const queryString = "uLY9GXGMXaA";
const url = `${baseUrl}${queryString}`;
console.log(`=====-> ${subject} <-=====`);
console.log(`${url}`);

/*
  Статические свойства
  Наследование и super
  Сеттеры и геттеры
*/

class Animal {
  static type = "ANIMAL";
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }
  voice() {
    console.log("I am animal");
  }
}

// Так создаю екземпляр класса
const animal = new Animal({
  name: "Animal",
  age: 5,
  hasTail: true,
});

// Наследуюсь от Animal
class Cat extends Animal {
  static type = "CAT";
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  voice() {
    super.voice();
    console.log("I am Caaat !!!");
  }
  get ageInfo() {
    return this.age * 7; // поле age взято у родителя
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: "Cat",
  age: 4,
  hasTail: true,
});

cat.ageInfo = 10; // отработает set ageInfo(newAge) { ... }
console.log(cat.ageInfo); // отработает get ageInfo() { ... }

//**********************************************************************************/
class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.backgroundColor = options.backgroundColor;
  }
}

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = "50%";
    this.$el.style.color = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  backgroundColor: "red",
});

const box2 = new Box({
  selector: "#box2",
  size: 150,
  backgroundColor: "lime",
});

const circle1 = new Circle({
  selector: "#circle1",
  size: 80,
  backgroundColor: "blue",
  color: "#fff",
});

const circle2 = new Circle({
  selector: "#circle2",
  size: 90,
  backgroundColor: "purple",
  color: "#fff",
});
